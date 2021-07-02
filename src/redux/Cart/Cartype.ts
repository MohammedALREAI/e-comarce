/*eslint no-case-declarations: "error"*/

import { IItemCart } from './CartState.interface'
import { Action } from 'redux'


export enum EnumCartAction {

     ADD_ITEM = 'ADD_ITEM',
     DELETE_ITEM = 'DELETE_ITEM',
     RESET = 'RESET',
     INCREASE_COUNT = 'INCREASE_COUNT',
     DECREASE_COUNT = 'DECREASE_COUNT ',
     ADD_SHIPPING_ADDRESS = 'ADD_SHIPPING_ADDRESS'

}


/**
 *  the all status of all the  th FetchImageSlider
 */

export interface AddItem extends Action<string> {
     type: EnumCartAction.ADD_ITEM;
     payload: {
          itemCartProduct: IItemCart

     }

}

/**
 * addingShoppingAddress
 */
export interface addingShoppingAddress extends Action<string> {
     type: EnumCartAction.ADD_SHIPPING_ADDRESS;
     payload: {
          inputValues: {}

     }

}

/**
 *DeleteItem
 */
export interface DeleteItem extends Action<string> {
     type: EnumCartAction.DELETE_ITEM;
     payload: {
          _id: string
     }

}
export interface Rest extends Action<string> {
     type: EnumCartAction.RESET;

}
export interface Increase extends Action<string> {
     type: EnumCartAction.INCREASE_COUNT;
     payload: IItemCart[]
}
export interface Decrease extends Action<string> {
     type: EnumCartAction.DECREASE_COUNT;
     payload: {
          itemCarts: IItemCart[] | [] | IItemCart

     }


}















export type ActionCartType = Decrease | Increase | Rest | DeleteItem | AddItem
