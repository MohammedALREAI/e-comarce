import { IGuestState } from './GuestState.interface'
import { ActionGuest, EnumGuestAction } from './GuestType'




const initialState: IGuestState = {
     sliderImages: [],
     isLoading: false,
     error: '',
     product: {
          product: {},
          isLoading: false,
          error: '',
     },
}





export const GuestReducer = (state = initialState, action: ActionGuest): IGuestState => {
     switch (action.type) {
          case EnumGuestAction.GET_SLIDER_IMAGES_START:

               return {
                    ...state,
                    isLoading: true,
               }
          case EnumGuestAction.GET_SLIDER_IMAGES_SUCCESS:
               return {
                    ...state,
                    isLoading: false,
                    sliderImages: action.payload.sliders,
               }
          case EnumGuestAction.GET_SLIDER_IMAGES_FILL:
               return {
                    ...state,
                    error: action.payload.error,
                    isLoading: false,

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
                         error: action.payload.error,
                    },
               }

          default:
               return state
     }
}
