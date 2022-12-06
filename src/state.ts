const state = {
    data: {
        list: [],
    },
    listeners: [], // los callbacks
    getState() {
        return this.data;
    },
    setState(newState) {
        this.data = newState;
        for (const cb of this.listeners) {
            cb()
        }
    },
    subscribe(callback: (any) => any) {
        this.listeners.push(callback)
    },
    addItem(item) {
        const cs = this.getState();
        cs.list.push(item);
        this.setState(cs);
    },
};

export {state};