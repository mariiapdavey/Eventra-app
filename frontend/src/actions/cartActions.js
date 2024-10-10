import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/events/${id}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            event: data._id,
            name: data.eventName,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })
}