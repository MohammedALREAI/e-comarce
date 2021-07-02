import { Action } from 'redux'


export enum EnumOrderAction {
     PLACE_START = 'PLACE_START',
     PLACE_SUCCESS = 'PLACE_SUCCESS',
     PLACE_FILL = 'PLACE_FILL'
}




export interface orderPlaceStart extends Action<string> {
     type: EnumOrderAction.PLACE_START

}

export interface orderPlaceSuccess extends Action<string> {
     type: EnumOrderAction.PLACE_SUCCESS
     payload: Object

}

export interface orderPlaceFill extends Action<string> {
     type: EnumOrderAction.PLACE_FILL,
     payload: string;

}

export type ActionOrderPlace = orderPlaceStart | orderPlaceSuccess | orderPlaceFill
