/* eslint-disable no-param-reassign */
import { AuthForm } from './components/AuthForm/AuthForm';
import { Button } from './components/Button/Button';
import { ChatHistory } from './components/ChatHistory/ChatHistory';
import { ChatList } from './components/ChatList/ChatList';
import { ProfileForm } from './components/ProfileForm/ProfileForm';
import { EventBus } from './event-bus';

type BlockProps = {
    tagName: string
    wrapperClassList: string[]
    button?: Button
    chatList?: ChatList
    chatHistory?: ChatHistory
    authForm?: AuthForm
    profileForm?: ProfileForm
}

export interface IBlock {
    props: BlockProps
    eventBus: EventBus
}

export abstract class Block implements IBlock {
    static EVENTS = {
      INIT: 'init',
      FLOW_CDM: 'flow:component-did-mount',
      FLOW_CDU: 'flow:component-did-update',
      FLOW_RENDER: 'flow:render',
    };

    element = null;

    private meta = null;

    constructor(tagName = 'div', props = {}, wrapperClassList: string[] = []) {
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

    props: BlockProps;

    eventBus: EventBus;

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
        wrapperClassList.forEach((className) => {
          this.element.classList.add(className);
        });
      }
    }

    init() {
      this.createResources();
      this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount() {
      if (this.componentDidMount) {
        this.componentDidMount();
      }
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidMount() {}

    _componentDidUpdate(oldProps, newProps) {
      const response = this.componentDidUpdate(oldProps, newProps);
      if (response) {
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
      }
    }

    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps, newProps) {
      return true;
    }

    setProps = (nextProps) => {
      if (!nextProps) {
        return;
      }

      Object.assign(this.props, nextProps);
    };

    _render() {
      // Я не нашел способ вернуть из handlebars ноду. В общем чате отвечают, что оставили innerHTML
      this.element.innerHTML = this.render();
    }

    // Может переопределять пользователь, необязательно трогать
    abstract render()

    getContent() {
      return this.element;
    }

    private makePropsProxy(props) {
      const handler = {
        set: (target, prop, value) => {
          const { eventBus } = this;
          target[prop] = value;
          eventBus.emit(Block.EVENTS.FLOW_CDU);
          return true;
        },
        deleteProperty: () => {
          throw new Error('Нет доступа');
        },
      };

      return new Proxy(props, handler);
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
