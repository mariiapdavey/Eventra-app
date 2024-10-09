

export const cartReducer = (state = {cartItems:[]},
    action) => {
        switch (action.type){
            case CART_ADD_ITEM:
                const item = action.payload
                const existItem = state.cartItems.find(x => x.
                    event === item.event)
                    if (existItem){
                        item.qty = existItem.qty + item.qty
                        return {
                            ...state,
                            cartItems: state.cartItems.map(x => x.event
                                === existItem.event ? item : x)
                            
                        }
                    } else {
                        return {
                            ...state,
                            cartItems: [...state.cartItems, item]
                        }
                    }

            case CART_REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: state.cartItems.filter(x => x.event 
                        !== action.payload)
                }

            default:
                return state
        }
    }