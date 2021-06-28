

export interface ISliderImages{
    _id: string,
      name: string
      description: string
      image: string,
      price:number
      rating:number
}


export interface IFeatherProduct{
  _id:string
  image:string,
  name:string,
  discount:string,
  price:number,
  rating:number,
  brand:string
  category:string,
  createdAt: string,
  updatedAt: string,
  description:string

  }


  export interface IGuestState {

    sliderImages:ISliderImages[],
    products: IFeatherProduct[],
    isLoading?: boolean,
    error:string,
    product: {
      product?:Object,
      isLoading?: boolean,
      error?:string,

    }
  }
