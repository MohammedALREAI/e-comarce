import React, { useEffect, useState } from 'react'
import {
  InnerSection,
  Column,
  Typography,
  Row,
  Divider,
  SpinnerContainer,
} from '../../../Component/widget/styles'
import { CardItem } from '../FeaturedProducts/CardItem'
import { useDispatch, useSelector } from 'react-redux'
import { LoadMore } from './LoadMoree'
import { useLocation } from 'react-router-dom'
import { SearchAction } from '../../../redux/Search/SearchAction'
import { TState } from '../../../redux/Store'
import { SpanError } from '../../../Component/Form/Form.style'
import { WrapperSearch } from './Search.style'
export const SearchScreen = () => {
     const { isLoading, error, products, pages } = useSelector((state:TState) => state.Search)

  const [page, setPage] = useState(1)

     const dispatch = useDispatch()
  const search = useLocation().search
     const keyword = (new URLSearchParams(search).get('keyword') ? new URLSearchParams(search).get('keyword') : '') as string

     console.log('try to show me  the keyword', keyword)

     useEffect(() => {
               console.log('try to show me  the keyword', keyword)
          dispatch(SearchAction(keyword || '', page))
     }, [dispatch, keyword, page])


     return isLoading && page === 1
? (
       <SpinnerContainer />
     )
: error
? (
       <SpanError>{error}</SpanError>
     )
: (
       <Column bg="#FFFFFF">
         <Column bg="#F7F8FC " height={948} mt={23}>
           <InnerSection mt={23} bg="red">
             <Column item="center">
               <Typography fontSize={32} color="#242424" weight="bold">
                 Search Results...
               </Typography>
               <Divider width={200} height={7} color="#FCDD06" mt={22} />
               <Divider width="100%" height={1} />
             </Column>
             <Row mt={43}>
               <WrapperSearch>
                 {products.length > 0
? (
                   products.map((item: any) => (
                     <CardItem
                       _id={item._id}
                       key={item._id}
                       image={'https://proshop-ms.herokuapp.com/' + item.image}
                       name={item.name}
                       rating={item.rating}
                       price={item.price}
                       product={item}
                     />
                   ))
                 )
: (
                   <Typography fontSize={32} color="#242424" weight="bold">
                     No Search Results...
                   </Typography>
                 )}
               </WrapperSearch>
             </Row>
             {page > 1 && page < pages && (
               <LoadMore isLoading={isLoading} onClick={() => setPage((prevPage) => prevPage + 1)}>
                 Load More...
               </LoadMore>
             )}
           </InnerSection>
         </Column>
       </Column>
     )
                              }
