// import { Dispatch } from 'redux'
import axios from 'axios'
import { EnumFeatherProductAction } from './FeatuerPorductType'

const URL_PRODUCT = '/products'



export const fetchProduct = () => {
     return async (dispatch: any) => {
          dispatch({
               type: EnumFeatherProductAction.GET_FEATURED_PRODUCTS_START,
          })

          try {
               const response = await axios.get('/products')
               console.log('GET_FEATURED_PRODUCTS_SUCCESS', response.data.products)
               dispatch({
                    type: EnumFeatherProductAction.GET_FEATURED_PRODUCTS_SUCCESS,
                    payload: {
                         product: response.data.products,
                    },
               })
          } catch (e: any) {
               dispatch({
                    type: EnumFeatherProductAction.GET_FEATURED_PRODUCTS_FILL,
                    payload: {
                         error: e?.response?.data?.message || '',
                    },
               })
          }
     }
}












export const fetchFeathersAction = {
     fetchProduct,

}
