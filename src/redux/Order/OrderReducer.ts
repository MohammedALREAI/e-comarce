import { ActionOrderPlace, EnumOrderAction } from './OrderType'
import IOrderState from './shapeState.interface'




const initialState: IOrderState = {
     placeOrder: {
          success: '',
          isLoading: false,
          error: '',
     },
     userOrders: {
          success: false,
          isLoading: false,
          error: '',
          orders: [],
     },
     myOrder: {
          success: false,
          isLoading: true,
          error: '',
          order: {},
     },

}





export const OrderReducer = (state = initialState, action: ActionOrderPlace): IOrderState => {
     switch (action.type) {
          /***order by id  */


          case EnumOrderAction.GET_ORDER_BY_ID_START:
               return {
                    ...state,
                    myOrder: {
                         success: false,
                         isLoading: true,
                         error: '',
                         order: {},
                    },
               }


          /****
           *
           *
           * finsh ordr by id
           */
          case EnumOrderAction.PLACE_START:
               return {
                    ...state,
                    placeOrder: { isLoading: true, success: 'no', error: '' },
               }
          case EnumOrderAction.PLACE_SUCCESS:
               return {
                    ...state,
                    placeOrder: {
                         isLoading: false,
                         success: action.payload._id,
                         error: '',
                    },

               }
          case EnumOrderAction.PLACE_FILL:
               return {
                    ...state,
                    placeOrder: {
                         isLoading: false,
                         error: action.payload.error,
                         success: 'no',
                    },
               }
          case EnumOrderAction.GET_ORDERS_START:
               return {
                    ...state,
                    userOrders: {
                         success: false,
                         isLoading: true,
                         error: '',
                         orders: [],
                    },
               }
          case EnumOrderAction.GET_ORDERS_SUCCESS:
               return {
                    ...state,
                    userOrders: {
                         success: true,
                         isLoading: false,
                         error: '',
                         orders: action.payload.orderItems,
                    },

               }
          case EnumOrderAction.GET_ORDERS_FILL:
               return {
                    ...state,
                    userOrders: {
                         success: true,
                         isLoading: false,
                         error: action.payload.error,
                         orders: [],
                    },
               }



          default:
               return state
     }
}
