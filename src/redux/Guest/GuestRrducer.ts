import { IGuestState } from './GuestState.interface'
import { ActionGuest, EnumGuestAction } from './GuestType'




const initialState:IGuestState = {
    sliderImages: [],
    products: [],
    isLoading: false,
    error: '',
    product: {
        product: {},
        isLoading: false,
        error: '',
      },
 }





export const GuestReducer = (state = initialState, action:ActionGuest):IGuestState => {
    switch (action.type) {
                                // START ALL STATUS OF THE  DIGNUP

        case EnumGuestAction.GET_SLIDER_IMAGES_START:
            return { ...state, isLoading: true }
        case EnumGuestAction.GET_SLIDER_IMAGES_SUCCESS:
            return {
                ...state,
                sliderImages: action.payload,
                isLoading: false,

            }
        case EnumGuestAction.GET_SLIDER_IMAGES_FILL:
            return {
                ...state,
                error: action.payload,
                isLoading: false,

                        }

        case EnumGuestAction.GET_FEATURED_PRODUCTS_START:
            return {
                ...state,
                isLoading: true,

            }

/**get product by id  */

case EnumGuestAction.GET_PRODUCT_BY_ID_START:
    return {
      ...state,
      product: {
        isLoading: true,
      },
    }
  case EnumGuestAction.GET_PRODUCT_BY_ID_SUCCESS:
    return {
      ...state,
      product: {
        product: action.payload,
        isLoading: false,
      },
    }
  case EnumGuestAction.GET_PRODUCT_BY_ID_FILL:
    return {
      ...state,
      product: {
        isLoading: false,
        error: action.payload,
      },
    }

/** end the get user by id  */

            case EnumGuestAction.GET_FEATURED_PRODUCTS_SUCCESS:
            return {
                    ...state,
                isLoading: false,
                products: action.payload,

            }

            case EnumGuestAction.GET_FEATURED_PRODUCTS_FILL:
            return {
                        ...state,
                        error: action.payload,
                        isLoading: false,
            }
            default:
                return state
    }
}
