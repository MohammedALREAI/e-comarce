import { IProduct } from 'redux/Guest/GuestState.interface'
export interface IItemCart extends IProduct {

     quantity: number
}


export interface ICartState {
     cart: IItemCart[] | Object,
     shippingAddress: Object
}




export interface IADD_ITEM {
     _id: string
     image: string,
     name: string,
     discount: string,
     price: number,
     rating: number,
     brand: string
     category: string,
     createdAt: string,
     updatedAt: string,
     description: string

}
