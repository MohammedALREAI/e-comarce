import { OrderItem as IOrder } from './shapeState.interface'


export interface Order {
     _id: string,
     name: string
     email: string
     token: string,
}


export default interface IOrderState {
     placeOrder: {
          success: string
          isLoading: boolean,
          error: string,

     },
     userOrders: {
          success: boolean,
          isLoading: boolean,
          error: string,
          orders: OrderItem[],
     },


     myOrder: {
          success: boolean,
          isLoading: boolean,
          error: string,
          order: OrderItem | {},
     }
}

interface IShippingAddress {

     address: string,
     city: string,
     postalCode: string,
     country: string,
}


interface IOrderItems {
     _id: string,
     product: string,
     name: string,
     image: string,
     price: number,
     qty: number
}


export interface OrderItem {
     taxPrice: number,
     shippingPrice: number,
     totalPrice: number,
     isPaid: boolean,
     isDelivered: boolean,
     _id: string,
     user: string,
     orderItems: IOrderItems[],
     shippingAddress: IShippingAddress,
     paymentMethod: string,
     createdAt: string
     updatedAt: string
     __v: number
}
