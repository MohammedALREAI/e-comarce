export interface IProduct {

     _id: string
     brand: string,
     category: string
     countInStock: number
     createdAt: string
     description: string
     image: string
     name: string
     numReviews: number
     price: number
     rating: number
     reviews: Array<any>
     updatedAt: string
}




export interface IItemCart extends IProduct {

     quantity: number

}





export interface ICartState {
     cart: Array<IItemCart>,
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
