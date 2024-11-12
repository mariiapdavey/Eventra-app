import axios from 'axios'
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, PAYPAL_KEY, ORDER_RESET } from '../constants/orderConstants'
import { clearFromCart } from '../actions/cartActions'

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST
        })

        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post('/api/orders', order, config)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message
        })
    }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type: ORDER_DETAILS_REQUEST
        })
        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                'Authorization': `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/orders/${id}`, config)
        console.log("Fetched order details:", data) //added for debugging
        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
                })
    }
}

export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
    try{
        dispatch({
            type: ORDER_PAY_REQUEST
        })

        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config) //fixed backticks

        dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data
        })
        
        dispatch(clearFromCart()) //added to clear cart after payment success
        localStorage.removeItem('cartItems')

        dispatch({
            type: ORDER_RESET //added to clear Order Screen after payment success
        })

    }catch (error) { //changed from curly braces to parentheses around error
        dispatch({
            type: ORDER_PAY_FAIL,
            payload:
             error.response && error.response.data.message
             ? error.response.data.message
             : error.message,
        })
    }
}

export const getPaypalKey = () => async (dispatch) => {
   const {data: clientId} = await axios.get('/api/config/paypal')

   dispatch({
    type: PAYPAL_KEY,
    payload: clientId
   })
}
