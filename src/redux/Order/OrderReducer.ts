import { EnumOrderAction } from './OrderType'
import IOrderState from './shapeState.interface'




const initialState: IOrderState = {
     placeOrder: {
          success: '',
          isLoading: false,
          error: '',
     },
}





export const OrderReducer = (state = initialState, action: ActionUser): IOrderState => {
     switch (action.type) {
          case EnumOrderAction.PLACE_START:
               return {
                    ...state,
                    placeOrder: { isLoading: true },
               }
          case EnumOrderAction.PLACE_SUCCESS:
               return {
                    ...state,
                    placeOrder: {
                         isLoading: false,
                         success: action.payload,
                    },

               }
          case EnumOrderAction.PLACE_FILL:
               return {
                    ...state,
                    placeOrder: {
                         isLoading: false,
                         error: action.payload,
                    },
               }

          default:
               return initialState
     }
}
