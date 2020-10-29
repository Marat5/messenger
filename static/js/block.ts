import { EventBus } from './event-bus.js';


export interface Block {
    props: any
    eventBus: any
}

// Я совершенно не уверен, что понимаю как правильно использовать блок, поэтому использую его только в профиле и чате. После замечаний на ревью добавлю везде
export class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    _element = null;
    _meta = null;

    constructor(tagName = "div", props = {}, wrapperClass = null) {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props,
            wrapperClass,
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        const { tagName, wrapperClass } = this._meta;
        this._element = this._createDocumentElement(tagName);
        if (wrapperClass) {
            this._element.classList.add(wrapperClass)
        }
    }

    init() {
        const eventBus = this.eventBus();
        this._createResources();
        eventBus.emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount() {
        const eventBus = this.eventBus();
        this.componentDidMount();
        eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidMount() { }

    _componentDidUpdate(oldProps, newProps) {
        const eventBus = this.eventBus();
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            eventBus.emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps, newProps) {
        return true;
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }


        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    _render() {
        const block = this.render();
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы возвращать из compile DOM-ноду
        this._element.innerHTML = block;
    }

    // Может переопределять пользователь, необязательно трогать
    render() { }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props) {
        const handler = {
            set: (target, prop, value) => {
                let eventBus = this.eventBus();
                target[prop] = value;
                eventBus.emit(Block.EVENTS.FLOW_CDU);
                return true;
            },
            deleteProperty: () => {
                throw new Error('Нет доступа')
            }
        }
        const propsProxy = new Proxy(props, handler);

        return propsProxy;
    }

    _createDocumentElement(tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    show() {
        this._element.style.display = 'block';
    }

    hide() {
        this._element.style.display = 'none';
    }
}
