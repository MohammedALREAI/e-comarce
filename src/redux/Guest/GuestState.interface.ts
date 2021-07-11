
export interface IProduct {
     _id: string,
     brand: string,
     category: string,
     countInStock: number,
     createdAt: string,
     description: string,
     image: string,
     name: string,
     numReviews: number,
     price: number,
     rating: number,
     reviews?: Array<Review>,
     updatedAt: string,
     user: string,
}



interface Review {

     _id: string,
     name: string
     rating: number,
     comment: string,
     user: string
     createdAt: string,
     updatedAt: string


}


export interface IGuestState {

     sliderImages: IProduct[],
     isLoading?: boolean,
     error?: string,
     product: {
          product?: IProduct | any,
          isLoading?: boolean,
          error?: string,

     }
}



// {
//      products: any[],
//           page: number,
//                pages: number,
//                     isLoading: boolean
//      error: string
// }
