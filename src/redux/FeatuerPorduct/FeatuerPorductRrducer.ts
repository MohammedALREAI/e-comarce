import { FetchFeathersState } from './FeatuerPorductState.interface'
import { ActionFetchFeather, EnumFeatherProductAction } from './FeatuerPorductType'


/***case GET_FEATURED_PRODUCTS_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_FEATURED_PRODUCTS_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        products: action.payload,
      };
    case GET_FEATURED_PRODUCTS_FAILED:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      }; */

const initialState: FetchFeathersState = {
     products: [],
     isLoading: false,
     error: '',

}





export const FetchFeathersReducer = (state = initialState, action: ActionFetchFeather): FetchFeathersState => {
     switch (action.type) {
          case EnumFeatherProductAction.GET_FEATURED_PRODUCTS_START:
               return {
        ...state,
                    isLoading: true,

               }

          case EnumFeatherProductAction.GET_FEATURED_PRODUCTS_SUCCESS:
               return {
                    ...state,
                    isLoading: false,
                    products: action.payload.product,

               }

          case EnumFeatherProductAction.GET_FEATURED_PRODUCTS_FILL:
               return {
                    ...state,
                    error: action.payload.error,
                    isLoading: false,
               }
          default:
               return state
     }
}
