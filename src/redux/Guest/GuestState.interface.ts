

export interface ISliderImages {
     _id: string,
     name: string
     description: string
     image: string,
     price: number
     rating: number
}


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
     reviews: Array<Review>
     updatedAt: string,
     brand: string
     category: string
     countInStock: number
     user: string
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
     products: IProduct[],
     isLoading?: boolean,
     error: string,
     product: {
          product?: Object,
          isLoading?: boolean,
          error?: string,

     }
}
