/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux'
import axios, { AxiosError } from 'axios'
import { TState } from '../Store'
import { EnumSearchAction, TSearchResult } from './SearchType'


export const SearchAction = (keyword = 'me', page = 1) => {
     return async (dispatch: Dispatch<TSearchResult>, getState: () => TState) => {
          dispatch({
               type: EnumSearchAction.GET_SEARCH_RESULTS_START,
          })

          try {
               const response = await axios.get(`/products?pageNumber=${page}${keyword ? `&keyword=${keyword}` : ''
                    }`,
               )
               console.log('ther srspone from the sarch', response.data)
               const res: {
                                   [Key:string]:any
                              } = {}
               /***we  need the old data   */
               if (page > 1) {
                    const oldState = getState().Search.products
                    console.log('page>1', response.data)

                    response.data.products = [...oldState, ...response.data]
                    res.products = [...oldState, ...response.data]
                         res.page = response.data.page
                    res.pages = response.data.pages
                    console.log('page>1', res)
               } else {
                    res.products = [...response.data.products]
                    res.page = response.data.page
                    res.pages = response.data.pages

                    console.log('ther 2222222 from the sarch', res)
               }

               console.log('there userresult', res)
               const data = {
                    products: res.products,
                    page: res.page,
                    pages: res.pages,
               }
               console.log('there userresult sata is ', data)

               dispatch({
                    type: EnumSearchAction.GET_SEARCH_RESULTS_SUCCESS,
                    payload: data,
               })
               console.log('there userresult sata is 2222', data)
          } catch (e: any) {
               dispatch({
                    type: EnumSearchAction.GET_SEARCH_RESULTS_FAILED,
                    payload: {
                         error: e?.response?.message,
                    },
               })
          }
     }
}
