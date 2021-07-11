import { EnumSearchAction, TSearchResult } from './SearchType'
import { SearchIState } from './SearchState.interface'




const initialState: SearchIState = {
          products: [],
          page: 0,
          pages: 0,
          isLoading: false,
          error: '',
}





export const SearchReducer = (state = initialState, action: TSearchResult): SearchIState => {
     switch (action.type) {
  case EnumSearchAction.GET_SEARCH_RESULTS_START:
               return {
                    ...state,
                    isLoading: true,
               }
          case EnumSearchAction.GET_SEARCH_RESULTS_SUCCESS:
               return {
                    ...state,
                    isLoading: false,
                    products: action.payload.products,
                    page: action.payload.page,
                    pages: action.payload.pages,
                    error: '',
               }


          case EnumSearchAction.GET_SEARCH_RESULTS_FAILED:
               return {
                    ...state,
                    error: action.payload.error,
                    isLoading: true,

               }



          default:
               return initialState
     }
}
