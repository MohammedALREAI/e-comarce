import { IProduct } from './../Guest/GuestState.interface'
export interface SearchIState {
     products: IProduct[],
     page: number,
     pages: number,
     isLoading: boolean,
     error?: string,
}
