type ListenerType = (args?: any) => void;

export interface IEventBus {
    listeners: {
        [key: string]: ListenerType[]
    }
    on(event: any, callback: any): void
    off(event: any, callback: any): void
    emit(event: any): void
}

export class EventBus implements IEventBus {
    listeners: {
        [key: string]: ListenerType[]
    };
    
    constructor() {
        this.listeners = {};
    }

    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event, callback) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event, ...args) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function (listener) {
            listener(...args);
        });
    }
}