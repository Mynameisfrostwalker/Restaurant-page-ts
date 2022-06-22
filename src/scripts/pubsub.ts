type Anyfunctions = (...args: any[]) => void;

interface Events {
    [index: string]: Anyfunctions[],  
}

interface Unsubscribe {
    unsubscribe: () => void;
}

interface PubSub {
    events: Events,
    subscribe: (eventName : string, func: (...args: any[]) => void) => Unsubscribe,
    publish: (eventName : string, ...args: any[]) => void,
}

const pubSub: PubSub = {
    events: {
        // key: eventname, value: [funcs]
    },

    subscribe(eventName, func) {
        if(this.events[eventName]) {
            this.events[eventName].push(func);
        } else {
            this.events[eventName] = [func];
        }
        return {
            unsubscribe: () => {
                const funcs = this.events[eventName];
                const idx = funcs.indexOf(func);
                if(idx > -1) {
                    funcs.splice(idx, 1)
                }
            }
        }
    },

    publish(eventName, ...args) {
        const funcs = this.events[eventName];
        if(Array.isArray(funcs)) {
            funcs.forEach((func) => {
                func.apply(null, args);
            })
        }
    },
}

export {pubSub}