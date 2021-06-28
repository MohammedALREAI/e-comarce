import { ISliderImages, IFeatherProduct } from './GuestState.interface'
import { Action } from 'redux'



export enum EnumGuestAction{

    GET_SLIDER_IMAGES_START = 'GET_SLIDER_IMAGES_START',
    GET_SLIDER_IMAGES_SUCCESS = 'GET_SLIDER_IMAGES_SUCCESS',
    GET_SLIDER_IMAGES_FILL = 'GET_SLIDER_IMAGES_FILL',
    GET_FEATURED_PRODUCTS_START = 'GET_FEATURED_PRODUCTS_START',
    GET_FEATURED_PRODUCTS_SUCCESS = 'GET_FEATURED_PRODUCTS_SUCCESS',
    GET_FEATURED_PRODUCTS_FILL = 'GET_FEATURED_PRODUCTS_FILL',

    GET_PRODUCT_BY_ID_FILL = 'GET_PRODUCT_BY_ID_FILL',
    GET_PRODUCT_BY_ID_START = 'GET_PRODUCT_BY_ID_START',
    GET_PRODUCT_BY_ID_SUCCESS = 'GET_PRODUCT_BY_ID_SUCCESS',





}















 /**
  *  the all status of all the  th FetchImageSlider
  */

export interface FetchImageSliderSuccess extends Action<string> {
    type: EnumGuestAction.GET_SLIDER_IMAGES_SUCCESS;
    payload:ISliderImages[]

}
export interface FetchImageSliderStart extends Action<string> {
    type: EnumGuestAction.GET_SLIDER_IMAGES_START;

}
export interface FetchImageSliderFill extends Action<string> {
    type: EnumGuestAction.GET_SLIDER_IMAGES_FILL;
    payload:string

}


/**
 * GET pRODUCT BY ID
 */


//  GET_PRODUCT_BY_ID_FILL
//  GET_PRODUCT_BY_ID_START
//  GET_PRODUCT_BY_ID_SUCCESS


export interface FetchIProductByIDSuccess extends Action<string> {
    type: EnumGuestAction.GET_PRODUCT_BY_ID_SUCCESS;
    payload:ISliderImages[]

}
export interface FetchIProductByIDStart extends Action<string> {
    type: EnumGuestAction.GET_PRODUCT_BY_ID_START;

}
export interface FetchIProductByIDFill extends Action<string> {
    type: EnumGuestAction.GET_PRODUCT_BY_ID_FILL;
    payload:string

}



 /**
  *  the all status of all the  th GET_FEATURED_PRODUCTS
  */




  export interface FetchFeathersSuccess extends Action<string> {
    type: EnumGuestAction.GET_FEATURED_PRODUCTS_SUCCESS;
    payload:Array<IFeatherProduct> | []

}
export interface FetchFeathersStart extends Action<string> {
    type: EnumGuestAction.GET_FEATURED_PRODUCTS_START;

}
export interface FetchFeathersFill extends Action<string> {
    type: EnumGuestAction.GET_FEATURED_PRODUCTS_FILL;
    payload:string

}











 export type FetchFeather = FetchFeathersFill | FetchFeathersStart | FetchFeathersSuccess;
 export type GetProductById = FetchIProductByIDSuccess | FetchIProductByIDStart | FetchIProductByIDFill;


 export type FetchImageSlider = FetchImageSliderSuccess | FetchImageSliderStart | FetchImageSliderFill;






export type ActionGuest = FetchImageSlider | FetchFeather | GetProductById
