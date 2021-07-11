/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable arrow-spacing */
import { IProduct } from '../../redux/Guest/GuestState.interface'
import { Dispatch } from 'redux'
import { TState } from '../Store'
import { IItemCart } from './CartState.interface'
import { ActionCartType, EnumCartAction } from './Cartype'
import { TypeShippingSchema } from '../../utils/validation'




/**
 * addItem
 * @param product
 * @param quantity
 * @returns
 */




const addItem = (product: IProduct, quantity: number) => {
     return async (dispatch: any, getState: () => TState) => {
          const cart = getState().cart.cart


          const isFound = cart.find((item: any) => item._id === product._id)

          if (isFound) {
               const newProductWithQuantity: IItemCart = {
                    ...product,
                    quantity,
                    qty: quantity,
               }

               const indexProduct = cart.findIndex((item: any) => item._id === newProductWithQuantity._id)

               cart[indexProduct] = newProductWithQuantity

               dispatch({
                    type: EnumCartAction.INCREASE_COUNT,
                    payload: getState().cart.cart,
               })
          } else {
               const newProductWithquantity: IItemCart = {
                    ...product,
                    quantity,
                    qty: quantity,
                    product: product._id,
               }
               dispatch({
                    type: EnumCartAction.ADD_ITEM,
                    payload: {
                         itemCartProduct: newProductWithquantity,
                    },
               })
          }

          localStorage.setItem('cart', JSON.stringify(getState().cart.cart))
     }
}




/**
 * decreesItem =>it should item contains quantity
 * @param product
 * @param quantity
 * @returns
 */


const decreesItem = (product: IItemCart, quantity = 1) => {
     return async (dispatch: Dispatch<ActionCartType>, getState: () => TState) => {
          const cart = getState().cart.cart


          const isFound = cart.find((item: any) => item._id === product._id)

          if (isFound) {
               isFound.quantity -= quantity
               isFound.qty -= quantity
               const index = cart.findIndex((item: any) => item._id === isFound._id)


               cart[index] = isFound
               dispatch({
                    type: EnumCartAction.DECREASE_COUNT,
                    payload: {
                         itemCarts: getState().cart.cart,
                    },
               })
          }

          localStorage.setItem('cart', JSON.stringify(getState().cart.cart))
     }
}




export const deleteItem = (id: string) => (dispatch: Dispatch<ActionCartType>, getState: () => TState) => {
     dispatch({
          type: EnumCartAction.DELETE_ITEM,
          payload: {
               _id: id,
          },
     })
     localStorage.setItem('cart', JSON.stringify(getState().cart.cart))
}


export const addShippingAddress = (values: TypeShippingSchema) => {
     localStorage.setItem('shipping', JSON.stringify(values))

     return {
          type: EnumCartAction.ADD_SHIPPING_ADDRESS,
          payload: {
               inputValues: values,
          },
     }
}


export const CartActions = {
     addItem,
     decreesItem,
     deleteItem,
     addShippingAddress,
}
