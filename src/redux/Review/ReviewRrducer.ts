import { EnumReviewAction, TReviewAction } from './ReviewType'
import IReviewState from './shapeState.interface'

const initialState: IReviewState = {
     success: false,
     isLoading: false,
     error: '',
}


export const ReviewReducer = (state = initialState, action: TReviewAction): IReviewState => {
     switch (action.type) {
          case EnumReviewAction.ADD_REVIEW_START:
               return { ...initialState, isLoading: true }
          case EnumReviewAction.ADD_REVIEW_SUCCESS:
               return {
                    error: '',
                    success: action.payload.success,
                    isLoading: false,
               }
          case EnumReviewAction.ADD_REVIEW_FILL:
               return {
                    ...initialState,
                    error: action.payload.error,
                    isLoading: false,

               }

          default:
               return initialState
     }
}
