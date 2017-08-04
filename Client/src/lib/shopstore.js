import ShopDispatcher from './shopdispatcher.js';
import { EventEmitter } from 'events';

let _cart = [];
let _items = [];

class ShopStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = ShopDispatcher.register(this.dispatcherCallback.bind(this))

        fetch('api/items')
        .then(res => res.json())
        .then(data => this.loadCallback(data));
    }

    loadCallback(data) 
    {
        _items = data;
        this.emitChange('STORE_ITEMS_LOADED');
    }

    emitChange(eventName) {
        this.emit(eventName);
    }

    getAll() {
        return _items;
    }

    getCart() {
        return _cart;
    }

    addtoCart(journal) {
        _cart.push(journal);
    }

    removetoCart(key) {
        _cart.splice(key, 1);
    }

    itemLoaded(key) {
        
    }

    addChangeListener(eventName, callback) {
        this.on(eventName, callback);
    }

    dispatcherCallback(action) {
        switch (action.actionType) {
            case 'ADD_TO_CART':
                this.addtoCart(action.value);
                break;
            case 'VIEW_CART':
                this.getCart(action.value);
                break;
            case 'REMOVE_TO_CART':
                this.removetoCart(action.value);
                break;
            case 'ITEMS_LOADED':
                this.itemLoaded(action.value);
                break;
            default:
                this.getCart(action.value);
                break;
        }

        this.emitChange('STORE_' + action.actionType);

        return true;
    }
}

export default new ShopStore();