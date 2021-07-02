import { Dispatch } from 'redux'
import { TState } from '../Store'
import { IItemCart } from './CartState.interface'
import { ActionCartType, EnumCartAction } from './Cartype'




/**
 * addItem
 * @param product
 * @param quantity
 * @returns
 */




const addItem = (product: IProduct, quantity: number) => {
     return async (dispatch: Dispatch<ActionCartType>, getState: () => TState) => {
          const cart = getState().cart.cart


          const isFound = cart.find(item => item._id === product._id)

          if (isFound) {
               const newProductWithQuantity: IItemCart = {
                    ...product,
                    quantity,
               }

               const indexProduct = cart.findIndex(item => item._id === newProductWithQuantity._id)

               cart[indexProduct] = newProductWithQuantity

               dispatch({
                    type: EnumCartAction.INCREASE_COUNT,
                    payload: getState().cart.cart,
               })
          } else {
               const newProductWithquantity: IItemCart = {
                    ...product,
                    quantity,
               }
               dispatch({
                    type: EnumCartAction.ADD_ITEM,
                    payload: {
                         itemCartProduct: newProductWithquantity,
                    },
               })
          }

          localStorage.setItem('cart', JSON.stringify(cart))
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


          const isFound = cart.find(item => item._id === product._id)

          if (isFound) {
               isFound.quantity -= quantity
               const index = cart.findIndex((item) => item._id === isFound._id)


               cart[index] = isFound
               dispatch({
                    type: EnumCartAction.DECREASE_COUNT,
                    payload: {
                         itemCarts: cart,
                    },
               })
          }

          localStorage.setItem('cart', JSON.stringify(getState().cart.cart))
     }
}




export const deleteItem = (id: string) => (dispatch: Dispatch<ActionCartType>, getState: () => TState) => {
     dispatch({
          type: DELETE_CART_ITEM,
          payload: id,
     })
     localStorage.setItem('cart', JSON.stringify(getState().cart.cart))
}


export const addShippingAddress = (values) => {
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
