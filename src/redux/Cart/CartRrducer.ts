import { ICartState } from './CartState.interface'
import { ActionCartType, EnumCartAction } from './Cartype'

/*eslint no-case-declarations: "error"*/

const initialState: ICartState = {
     cart: [],
     shippingAddress: {},

}




export const CartReducer = (state = initialState, action: ActionCartType): ICartState => {
     switch (action.type) {
          case EnumCartAction.ADD_ITEM:
               return {
                    ...state,
                    cart: [...state.cart, action.payload.itemCartProduct],
               }
          case EnumCartAction.INCREASE_COUNT:
               return { ...state, cart: action.payload }
          /*eslint no-case-declarations: "error"*/

          case EnumCartAction.DECREASE_COUNT:
               return { ...state, cart: action.payload.itemCarts }
          /*eslint no-case-declarations: "error"*/

          case EnumCartAction.ADD_SHIPPING_ADDRESS:
               return {
                    ...state, shippingAddress: action.payload.inputValues,
               }
          /*eslint no-case-declarations: "error"*/

          case EnumCartAction.DELETE_ITEM:
               return {
                    ...state,
                    cart: state.cart.filter((item) => item._id !== action.payload._id),
               }

          default:
               return state
     }
}
