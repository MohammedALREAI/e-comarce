import { useToken } from '../../utils/useToken'
import axios from '../../utils/Axios'
import { URL_IMAGES } from './../../Const/env'
import { EnumGuestAction, GetProductById, FetchImageSlider, FetchFeather } from './GuestType'
import { Dispatch } from 'redux'


export const fetchSliderImage = () => async (dispatch: Dispatch<FetchImageSlider>) => {
     dispatch({
          type: EnumGuestAction.GET_SLIDER_IMAGES_START,
     })
     const token = useToken()
     console.log('token', token)
     try {
          console.log('me fetchSliderImage')
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
     return async (dispatch: Dispatch<FetchFeather>) => {
          console.log('the itemis start ')

          dispatch({
               type: EnumGuestAction.GET_FEATURED_PRODUCTS_START,
          })

          try {
               const response = await axios.get('/products')
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


export const getProductById = (id: string) => {
     return async (dispatch: Dispatch<GetProductById>) => {
          console.log('enter the action here getProductById ')
          dispatch({
               type: EnumGuestAction.GET_PRODUCT_BY_ID_START,
          })
          console.log('enter the action here getProductById try  ')

          try {
               console.log('enter the action here getProductById try axios  ')

               const response = await axios.get(`/products/${id}`)
               console.log('enter the action here getProductById xxxxxxxxx', response)

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
