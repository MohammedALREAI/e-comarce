import { EnumGuestAction, FetchFeather, FetchImageSlider, GetProductById } from './GuestType'
import { Dispatch } from 'redux'
import axios from 'axios'
import { ISliderImages } from './GuestState.interface'

 const _URL_SLIDER = '/products/top'
const URL_PRODUCT = '/products'



  const fetchSliderImage = () => {
   return async(dispatch:Dispatch<FetchImageSlider>) => {
    dispatch({
      type: EnumGuestAction.GET_SLIDER_IMAGES_START,
    })

  try {
    const response = await axios.get<ISliderImages[]>(_URL_SLIDER)

    dispatch({
      type: EnumGuestAction.GET_SLIDER_IMAGES_SUCCESS,
       payload: response.data,
    })
  } catch (e:any) {
        dispatch({
type: EnumGuestAction.GET_SLIDER_IMAGES_FILL,
payload: '' + e.response.data.message,
})
}
}
}


 const fetchProduct = () => {
  return async(dispatch:Dispatch<FetchFeather>) => {
    dispatch({
      type: EnumGuestAction.GET_FEATURED_PRODUCTS_START,
    })

  try {
    const response = await axios.get(URL_PRODUCT)
    const products = response!.data!.products || []
    dispatch({
      type: EnumGuestAction.GET_FEATURED_PRODUCTS_SUCCESS,
      payload: products,
    })
  } catch (e:any) {
    dispatch({
        type: EnumGuestAction.GET_FEATURED_PRODUCTS_FILL,
        payload: '' + e.response.data.message,
      })
  }
}
 }









 /**
  *get Product by id
  */


  export const getProductById = (id:string) => {
    return async (dispatch:Dispatch<GetProductById>) => {
    dispatch({
      type: EnumGuestAction.GET_PRODUCT_BY_ID_START,
    })

    try {
      const response = await axios.get(URL_PRODUCT + id)

      dispatch({
        type: EnumGuestAction.GET_PRODUCT_BY_ID_SUCCESS,
        payload: response.data,
      })
    } catch (e:any) {
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
