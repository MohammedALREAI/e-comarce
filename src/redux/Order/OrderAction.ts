import { TGetOrders, TGetOrderByID, ActionOrderPlace, EnumOrderAction, TPlaceOrder } from './OrderType'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TState } from './../Store'

import { Dispatch } from 'redux'
import axios from '../../utils/Axios'

import * as H from 'history'

const URL_GET_ORDER = '/orders'
const URL_GET_ORDERS = '/myorders'

export const placeOrder = (history: H.History<any>) => {
     return async (dispatch: Dispatch<TPlaceOrder>, getState: () => TState) => {
          dispatch({
               type: EnumOrderAction.PLACE_START,
          })

          const cart = getState().cart

          try {
               const requestData = {
                    orderItems: cart.cart,
                    shippingAddress: cart.shippingAddress,
                    paymentMethod: 'PayPal',
                    totalPrice: cart.cart
                         .reduce((acc: any, item: any) => acc + item.price * item.quantity, 0)
                         .toFixed(2),
               }
               const response = await axios.post('/orders', requestData)

               dispatch({
                    payload: { _id: response.data._id },
                    type: EnumOrderAction.PLACE_SUCCESS,
               })
               /**w en need to reset  the cart and remove it from cart */
               dispatch({
                    type: EnumOrderAction.REST_CART,
               })
               localStorage.removeItem('cart')

               /**redicract */
               history.push('/order/' + response.data._id)
          } catch (e: any) {
               dispatch({
                    payload: e?.response?.data?.message,
                    type: EnumOrderAction.PLACE_FILL,
               })
          }
     }
}




export const getOrders = () => {
     return async (dispatch: Dispatch<TGetOrders>) => {
          try {
               dispatch({
                    type: EnumOrderAction.GET_ORDERS_START,
               })


               const response = await axios.get('/orders/myorders')

               dispatch({
                    type: EnumOrderAction.GET_ORDERS_SUCCESS,
                    payload: {
                         orderItems: response.data,
                    },
               })
          } catch (e) {
               dispatch({
                    type: EnumOrderAction.GET_ORDERS_FILL,
                    payload: { error: e?.response?.data?.message },
               })
          }
     }
}



export const getOrderById = (id: string) => async (dispatch: Dispatch<TGetOrderByID>) => {
     try {
          dispatch({
               type: EnumOrderAction.GET_ORDER_BY_ID_START,
          })



          const response = await axios.get(`/orders/${id}`)

          dispatch({
               type: EnumOrderAction.GET_ORDER_BY_ID_SUCCESS,
               payload: { order: response.data },
          })
     } catch (e) {
          dispatch({
               payload: {
                    error: e?.response?.data?.message,
               },
               type: EnumOrderAction.GET_ORDER_BY_ID_FILL,
          })
     }
}





export const OrderActions = {
     placeOrder,
     getOrders,
     getOrderById,

}
