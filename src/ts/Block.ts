import { EventBus } from './event-bus';

type BlockProps = {
    tagName: string
    props: {}
    wrapperClassList: string[]
    [key: string]: any
}

export interface Block {
    props: BlockProps
    eventBus: EventBus
}


export abstract class Block implements Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    element = null;
    private meta = null;

    constructor(tagName = "div", props = {}, wrapperClassList: string[] = []) {
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

    private registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private createResources() {
        const { tagName, wrapperClassList } = this.meta;
        this.element = this.createDocumentElement(tagName);
        if (wrapperClassList.length) {
            wrapperClassList.forEach(className => {
                this.element.classList.add(className)
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

    // Может переопределять пользователь, необязательно трогать
    abstract componentDidMount()

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

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }


        Object.assign(this.props, nextProps);
    };

    _render() {
        const block = this.render();
        // Я не нашел способ вернуть из handlebars ноду. В общем чате отвечают, что оставили innerHTML
        this.element.innerHTML = block;
    }

    // Может переопределять пользователь, необязательно трогать
    abstract render()

    getContent() {
        return this.element;
    }

    private makePropsProxy(props) {
        const handler = {
            set: (target, prop, value) => {
                let eventBus = this.eventBus;
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

    private createDocumentElement(tagName) {
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
