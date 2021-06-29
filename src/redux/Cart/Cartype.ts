import { IADD_ITEM, IItemCart } from './CartState.interface'
import { Action } from 'redux'


export enum EnumCartAction {

     ADD_ITEM = 'ADD_ITEM',
     DELETE_ITEM = 'DELETE_ITEM',
     RESET = 'RESET',
     INCREASE_COUNT = 'INCREASE_COUNT',
     DECREASE_COUNT = 'DECREASE_COUNT ',




}















/**
 *  the all status of all the  th FetchImageSlider
 */

export interface AddItem extends Action<string> {
     type: EnumCartAction.ADD_ITEM;
     payload: IItemCart[]

}
export interface DeleteItem extends Action<string> {
     type: EnumCartAction.DELETE_ITEM;
     payload: string

}
export interface Rest extends Action<string> {
     type: EnumCartAction.RESET;

}
export interface Increse extends Action<string> {
     type: EnumCartAction.INCREASE_COUNT;
     payload: IItemCart


}
export interface Decrease extends Action<string> {
     type: EnumCartAction.DECREASE_COUNT;
     payload: IItemCart


}















export type ActionCartType = Decrease | Increse | Rest | DeleteItem | AddItem
