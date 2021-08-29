/* eslint-disable no-param-reassign */
import { EventBus } from './event-bus';

type BlockProps = {
elemId?: string;
}

export interface IBlock<T> {
props: BlockProps & T
eventBus: EventBus
}

export abstract class Block<T={}> implements IBlock<T> {
  constructor(props: BlockProps & T, tagName = 'div', wrapperClassList: string[] = ['wrapper']) {
    const eventBus = new EventBus();
    this.meta = {
      tagName,
      props,
      wrapperClassList,
      elemId: props?.elemId,
    };

    if (props) {
      this.props = this.makePropsProxy(props);
    }

    this.eventBus = eventBus;

    this.registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  element = null;

  private meta = null;

  eventBus: EventBus;

  props: T & BlockProps;

  private registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private createResources() {
    const { tagName, wrapperClassList, elemId } = this.meta;
    this.element = document.createElement(tagName);
    if (elemId) {
      this.element.id = elemId;
    }
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

  _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  abstract render()

  componentDidMount() {}

  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  _render() {
    const compiledHBTemplate = this.render();

    // Если это первый рендер, то меняем только содержимое элемента
    // В DOM он попадет когда роутер отрендерит корневой компонент
    this.element.innerHTML = compiledHBTemplate;

    // Если у элемента есть айди и он уже есть в DOM, то рендерим элемент в DOM
    if (this.element.id) {
      const domElement = document.getElementById(this.element.id);
      if (domElement) {
        domElement.innerHTML = compiledHBTemplate;
      }
    }
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

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
