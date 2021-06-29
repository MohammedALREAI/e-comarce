import { ICartState } from './CartState.interface'
import { ActionCart, EnumCartAction } from './Cartype'




const initialState: ICartState = {
     cart: [],

}





export const CartReducer = (state = initialState, action: ActionCart): ICartState => {
     switch (action.type) {
          // START ALL STATUS OF THE  DIGNUP

          case EnumCartAction.ADD_ITEM:
               return {
                    ...state,
                    cart: [...state.cart, action.payload],
               }


          case EnumCartAction.DELETE_ITEM:
     const filterItem = state.cart.filter()

               return {
                    ...state, cart: filterItem,
               }

          case EnumCartAction.INCREASE_COUNT:
               return [...state, action.payload] as ICartState

          case EnumCartAction.DECREASE_COUNT:
               return [...state, action.payload] as ICartState





          default:
               return state
     }
}
