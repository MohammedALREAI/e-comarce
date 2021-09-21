import { TState } from './../Store'
import { EnumReviewAction, TReviewAction } from './ReviewType'
import { Dispatch } from 'redux'
import axios from '../../utils/Axios'

import * as H from 'history'



interface AddReviewInput {
     comment: string,
     rating: number,
     createdAt: string,
     name: string,

}




export const addReview = (userData: AddReviewInput, id: string) => {
     return async (dispatch: Dispatch<TReviewAction>, getState: () => TState) => {
          console.log('addReview dispatch', dispatch)
          dispatch({
               type: EnumReviewAction.ADD_REVIEW_START,
          })

          try {
               const response = await axios.post(`/products/${id}/reviews`, userData)
               console.log('ther response is login ADD_REVIEW_Response', response)

               dispatch({
                    type: EnumReviewAction.ADD_REVIEW_SUCCESS,
                    payload: {
                         success: response.data.message,
                    },
               })
          } catch (e: any) {
               dispatch({
                    type: EnumReviewAction.ADD_REVIEW_FILL,
                    payload: {
                         error: e?.response?.data?.message,
                    },
               })
          }
     }
}



export const ReviewActions = {
     addReview,
}
