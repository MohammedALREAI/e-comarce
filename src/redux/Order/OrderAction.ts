/* eslint-disable @typescript-eslint/no-explicit-any */
import { TState } from './../Store'
import { ActionOrderPlace, EnumOrderAction } from './OrderType'
import { Dispatch } from 'redux'
import axios from 'axios'

import * as H from 'history'

const URL_GET_ORDER = '/orders'
const URL_GET_ORDERS = '/myorders'

export const placeOrder = (history: H.History<any>) => {
     return async (dispatch: any, getState: () => TState) => {
          dispatch({
               type: EnumOrderAction.PLACE_START,
          })

          const token = getState().user.user.token as string
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
               const response = await axios.post(URL_GET_ORDER, requestData, {
                    headers: {
                         'Content-Type': 'application/json',
                         Authorization: `Bearer ${token}`,
                    },
               })

               dispatch({
                    payload: response.data._id,
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
     return async (dispatch: any, getState: () => TState) => {
          try {
               dispatch({
                    type: EnumOrderAction.GET_ORDERS_START,
               })
               const { user } = getState()
               const token = user.user.token as string
               const config = {
                    headers: {
                         'Content-Type': 'application/json',
                         Authorization: `Bearer ${token}`,
                    },
               }

               const response = await axios.get(URL_GET_ORDERS, config)

               dispatch({
                    type: EnumOrderAction.GET_ORDERS_SUCCESS,
                    payload: {
                         orderItems: response.data,
                    },
               })
          } catch (e) {
               dispatch({
                    type: EnumOrderAction.GET_ORDERS_FILL,
                    payload: e?.response?.data?.message,
               })
          }
     }
}



export const getOrderById = (id: string) => async (dispatch: any, getState: () => TState) => {
     try {
          dispatch({
               type: EnumOrderAction.GET_ORDER_BY_ID_START,
          })
          const state = getState()
          const token = state.user.user.token

          const config = {
               headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
               },
          }

          const response = await axios.get(`/orders/${id}`, config)

          dispatch({
               type: EnumOrderAction.GET_ORDER_BY_ID_SUCCESS,
               payload: response.data,
          })
     } catch (e) {
          dispatch({
               payload: e?.response?.data?.message,
               type: EnumOrderAction.GET_ORDER_BY_ID_FILL,
          })
     }
}





export const OrderActions = {
     placeOrder,
     getOrders,
     getOrderById,

}
