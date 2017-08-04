import ShopDispatcher from './shopaction';

class ShopActions {

    addtoCart(data) {
        ShopDispatcher.dispatch({
            actionType: 'ADD_TO_CART',
            value: data
        });
    }

    viewCart(data) {
        ShopDispatcher.dispatch({
            actionType: 'VIEW_CART',
            value: data
        });
    }

    removetoCart(key)
    {
         ShopDispatcher.dispatch({
            actionType: 'REMOVE_TO_CART',
            value: key
        });
    }

    itemLoaded(key)
    {
         ShopDispatcher.dispatch({
            actionType: 'ITEMS_LOADED',
            value: key
        });
    }
}



export default new ShopActions()