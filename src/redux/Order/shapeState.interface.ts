

export interface Order {
     _id: string,
     name: string
     email: string
     token: string,
}


export default interface IOrderState {
     success: string
     isLoading: boolean,
     error:string,
}
