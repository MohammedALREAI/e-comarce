import { IProduct } from './../Guest/GuestState.interface'



export interface FetchFeathersState {
     products: IProduct[],
     isLoading: boolean,
     error: string,
}
