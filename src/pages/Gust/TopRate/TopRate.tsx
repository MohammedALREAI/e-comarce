import React from 'react'
import { InnerSection, Column, Typography, Divider } from '../../../Component/widget/styles'
import { CardItem } from '../FeaturedProducts/CardItem'
import { RowWithRadius } from './style'
import { IProduct } from '../../../redux/Guest/GuestState.interface'
interface Props {
     data: IProduct[];
}

export const TopRate = ({ data }: Props) => {
     return (
         <Column bg="#FFFFFF" height={948}>
             <InnerSection>
                 <Column item="start" mt={62}>
                     <Typography fontSize={32} color="#242424" weight="bold">
                         TOP RATE PRODUCTS
                     </Typography>

                     <Divider width={200} height={7} color="#FCDD06" mt={22} />
                     <Divider width="100%" height={1} />
                 </Column>

                 <RowWithRadius>
                     {data.map((item, i) => (
                         <CardItem
                             widthBorder={true}
                             _id={item._id}
                             key={item._id}
                             image={'https://proshop-ms.herokuapp.com' + item.image}
                             name={item.name}
                             price={item.price}
                             product={item}
                             rating={item.rating}
                         />
                     ))}
                 </RowWithRadius>
             </InnerSection>
         </Column>
     )
}
