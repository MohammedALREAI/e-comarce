import { IProduct } from './../Guest/GuestState.interface'
import { Action } from 'redux'



export enum EnumFeatherProductAction {

     GET_FEATURED_PRODUCTS_START = 'GET_FEATURED_PRODUCTS_START',
     GET_FEATURED_PRODUCTS_SUCCESS = 'GET_FEATURED_PRODUCTS_SUCCESS',
     GET_FEATURED_PRODUCTS_FILL = 'GET_FEATURED_PRODUCTS_FILL',
}



export interface FetchFeathersSuccess extends Action<string> {
     type: EnumFeatherProductAction.GET_FEATURED_PRODUCTS_SUCCESS;
     payload: {
          product: Array<IProduct>
     }
}
export interface FetchFeathersStart extends Action<string> {
     type: EnumFeatherProductAction.GET_FEATURED_PRODUCTS_START;

}
export interface FetchFeathersFill extends Action<string> {
     type: EnumFeatherProductAction.GET_FEATURED_PRODUCTS_FILL;
     payload: {
          error: string
     }

}


export type ActionFetchFeather = FetchFeathersSuccess | FetchFeathersStart | FetchFeathersFill
