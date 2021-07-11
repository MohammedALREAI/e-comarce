import { OrderItem } from './shapeState.interface'
import { Action } from 'redux'


export enum EnumOrderAction {
     GET_ORDER_BY_ID_START = 'GET_ORDER_BY_ID_START',
     GET_ORDER_BY_ID_SUCCESS = 'GET_ORDER_BY_ID_SUCCESS',
     GET_ORDER_BY_ID_FILL = 'GET_ORDER_BY_ID_FILL',
     PLACE_START = 'PLACE_START',
     PLACE_SUCCESS = 'PLACE_SUCCESS',
     PLACE_FILL = 'PLACE_FILL',
     REST_CART = 'REST_CART',
     GET_ORDERS_START = 'GET_ORDERS_START',
     GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS',
     GET_ORDERS_FILL = 'GET_ORDERS_FILL',
}




export interface orderPlaceStart extends Action<string> {
     type: EnumOrderAction.PLACE_START

}

export interface orderPlaceSuccess extends Action<string> {
     type: EnumOrderAction.PLACE_SUCCESS
     payload: {
          _id: string
     }

}

export interface orderPlaceFill extends Action<string> {
     type: EnumOrderAction.PLACE_FILL,
     payload: {
          error: string
     }

}



/**
 * REST Cart
 *
 */
// REST_CART

export interface getOrderStart extends Action<string> {
     type: EnumOrderAction.GET_ORDERS_START,

}
export interface getOrderSuccess extends Action<string> {
     type: EnumOrderAction.GET_ORDERS_SUCCESS,
     payload: {
          orderItems: OrderItem[]
     }

}

export interface getOrderFill extends Action<string> {
     type: EnumOrderAction.GET_ORDERS_FILL,
     payload: {
          error: string
     }

}
export interface restCart extends Action<string> {
     type: EnumOrderAction.REST_CART,

}


/**
 * get order by id action and apaylod shape
 *
 */

export interface getOrderByIDStart extends Action<string> {
     type: EnumOrderAction.GET_ORDER_BY_ID_START,

}
export interface getOrderByIDSuccess extends Action<string> {
     type: EnumOrderAction.GET_ORDER_BY_ID_START,
     payload: {
          order: OrderItem
     }

}
export interface getOrderByIDFill extends Action<string> {
     type: EnumOrderAction.GET_ORDER_BY_ID_START,
     payload: {
          error: string
     }

}










export type ActionOrderPlace = orderPlaceStart |
     orderPlaceSuccess |
     orderPlaceFill |
     restCart |
     getOrderStart |
     getOrderSuccess |
     getOrderFill |
     getOrderByIDStart |
     getOrderByIDSuccess |
     getOrderByIDFill
