import { TState } from '../Store'
import { EnumGuestAction } from './GuestType'
import { Dispatch } from 'redux'
import axios from 'axios'

const _URL_SLIDER = '/products/top'
const URL_PRODUCT = '/products'



// const fetchSliderImage = () => {
//      return async (dispatch:any) => {
//           dispatch({
//                type: EnumGuestAction.GET_SLIDER_IMAGES_START,
//           })

//           try {
//                const response = await axios.get(_URL_SLIDER)

//                dispatch({
//                     type: EnumGuestAction.GET_SLIDER_IMAGES_SUCCESS,
//                     payload: {
//                          sliders: response.data,
//                     },
//                })
//           } catch (e: any) {
//                dispatch({
//                     type: EnumGuestAction.GET_SLIDER_IMAGES_FILL,
//                     payload: e?.response?.data?.message,
//                })
//           }
//      }
// }


export const fetchSliderImage = () => async (dispatch: any) => {
     dispatch({
          type: EnumGuestAction.GET_SLIDER_IMAGES_START,
     })

     try {
          const response = await axios.get('/products/top')
          dispatch({
               type: EnumGuestAction.GET_SLIDER_IMAGES_SUCCESS,
               payload: {
                    sliders: response.data,
               },
          })
     } catch (e) {
          dispatch({
               type: EnumGuestAction.GET_SLIDER_IMAGES_FILL,
               payload: { error: e?.response?.message },
          })
     }
}


export const fetchProduct = () => {
     return async (dispatch: any) => {
          dispatch({
               type: EnumGuestAction.GET_FEATURED_PRODUCTS_START,
          })

          try {
               const response = await axios.get('/products')
               console.log('the itemis ', response.data.products)
               dispatch({
                    type: EnumGuestAction.GET_FEATURED_PRODUCTS_SUCCESS,
                    payload: {
                         product: response.data.products,
                    },
               })
          } catch (e: any) {
               dispatch({
                    type: EnumGuestAction.GET_FEATURED_PRODUCTS_FILL,
                    payload: e?.response?.message,
               })
          }
     }
}


export const getProductById = (id: number) => {
     return async (dispatch: any) => {
          console.log('enter the action here getProductById ')
          dispatch({
               type: EnumGuestAction.GET_PRODUCT_BY_ID_START,
          })

          try {
               const response = await axios.get('/products/' + id)
               console.log('response Data is', response.data)
               dispatch({
                    type: EnumGuestAction.GET_PRODUCT_BY_ID_SUCCESS,
                    payload: { product: response.data },
               })
          } catch (e: any) {
               dispatch({
                    type: EnumGuestAction.GET_PRODUCT_BY_ID_FILL,
                    payload: e?.response?.message,
               })
          }
     }
}











export const GuestActions = {
     fetchProduct,
     fetchSliderImage,
     getProductById,
}
