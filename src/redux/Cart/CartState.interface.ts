import { IProduct } from '../Guest/GuestState.interface'
export interface IItemCart extends IProduct {
     quantity: number,
     qty: number
     product?: string
}


export interface ICartState {
     cart: IItemCart[],
     shippingAddress: any
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
