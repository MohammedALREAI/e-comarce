import { Dispatch } from 'redux'
import { TState } from '../Store'
import { IItemCart, IProduct } from './CartState.interface'
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

          /**
                     * CHECK IF THE ITEM FOUND OR NOT IF FOUND WILL BE iNCRISE ELS WILL BA ADD first time
                     */


          if (isFound) {
               const newProductWithQuantity: IItemCart = {
                    ...product,
                    quantity,
               }

               const indexProduct = cart.findIndex(item => item._id === newProductWithQuantity._id)

               cart[indexProduct] = newProductWithQuantity

               dispatch({
                    type: EnumCartAction.ADD_ITEM,
                    payload: cart,
               })
          } else {
               const newProductWithquantity: IItemCart = {
                    ...product,
                    quantity,
               }
               dispatch({
                    type: EnumCartAction.INCREASE_COUNT,
                    payload: newProductWithquantity,
               })
          }

          localStorage.setItem('cart', JSON.stringify(cart))
     }
}






export const CartActions = {
     addItem,
}
