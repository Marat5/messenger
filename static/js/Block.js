import { EventBus } from './event-bus.js';
export class Block {
    constructor(tagName = "div", props = {}, wrapperClassList = []) {
        this.element = null;
        this.meta = null;
        this.setProps = nextProps => {
            if (!nextProps) {
                return;
            }
            Object.assign(this.props, nextProps);
        };
        const eventBus = new EventBus();
        this.meta = {
            tagName,
            props,
            wrapperClassList,
        };
        this.props = this.makePropsProxy(props);
        this.eventBus = eventBus;
        this.registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    createResources() {
        const { tagName, wrapperClassList } = this.meta;
        this.element = this.createDocumentElement(tagName);
        if (wrapperClassList.length) {
            wrapperClassList.forEach(className => {
                this.element.classList.add(className);
            });
        }
    }
    init() {
        const eventBus = this.eventBus;
        this.createResources();
        eventBus.emit(Block.EVENTS.FLOW_CDM);
    }
    _componentDidMount() {
        const eventBus = this.eventBus;
        if (this.componentDidMount) {
            this.componentDidMount();
        }
        eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
    _componentDidUpdate(oldProps, newProps) {
        const eventBus = this.eventBus;
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            eventBus.emit(Block.EVENTS.FLOW_RENDER);
        }
    }
    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps, newProps) {
        return true;
    }
    _render() {
        const block = this.render();
        // Я не нашел способ вернуть из handlebars ноду. В общем чате отвечают, что оставили innerHTML
        this.element.innerHTML = block;
    }
    getContent() {
        return this.element;
    }
    makePropsProxy(props) {
        const handler = {
            set: (target, prop, value) => {
                let eventBus = this.eventBus;
                target[prop] = value;
                eventBus.emit(Block.EVENTS.FLOW_CDU);
                return true;
            },
            deleteProperty: () => {
                throw new Error('Нет доступа');
            }
        };
        const propsProxy = new Proxy(props, handler);
        return propsProxy;
    }
    createDocumentElement(tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }
    show() {
        this.element.style.display = 'block';
    }
    hide() {
        this.element.style.display = 'none';
    }
    remove() {
        this.element.remove();
    }
}
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
};
