import { IProduct } from './../Guest/GuestState.interface'
import { Action } from 'redux'


export enum EnumSearchAction {


     GET_SEARCH_RESULTS_START = 'GET_SEARCH_RESULTS_START',
     GET_SEARCH_RESULTS_SUCCESS = 'GET_SEARCH_RESULTS_SUCCESS',
     GET_SEARCH_RESULTS_FAILED = 'GET_SEARCH_RESULTS_FAILED',

}



type dataSuccess = {
     page: number,
     pages: number,
     products:IProduct[] | []
}





export interface searchResultStart extends Action<string> {
     type: EnumSearchAction.GET_SEARCH_RESULTS_START
}
export interface searchResultSuccess extends Action<string> {
     type: EnumSearchAction.GET_SEARCH_RESULTS_SUCCESS,
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     payload: any
}

export interface searchResultFill extends Action<string> {
     type: EnumSearchAction.GET_SEARCH_RESULTS_FAILED,
     payload: {
          error: string
     }


}
export type TSearchResult = searchResultFill | searchResultSuccess | searchResultStart
