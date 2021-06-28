import React from 'react'
import { InnerSection, Column, Typography, Divider } from '../../../Component/widget/styles'
import { CardItem } from '../FeaturedProducts/CardItem'
import { RowWithRadius } from './style'
import { ISliderImages } from '../../../redux/Guest/GuestState.interface'
interface Props {
    data:ISliderImages[]

}

export const TopRate = ({ data }: Props) => {
    return (
        <Column bg="#FFFFFF" height={948}>
        <InnerSection>
        <Column item="start" mt={62}>
            <Typography fontSize={32} color="#242424" weight="bold">TOP RATE PRODUCTS</Typography>

            <Divider width={200} height={7} color="#FCDD06" mt={22}/>
            <Divider width="100%" height={1}/>
            </Column>

            <RowWithRadius>
                {data.map((item, i) => (
                <CardItem
                _id={item._id}
                key={item._id}
                imag={'https://proshop-ms.herokuapp.com/' + item.image}
                title={item.name}
                discount={0}
                price={item.price}
                rate={item.rating}
                />
                ))}



            </RowWithRadius>


            </InnerSection>
            </Column>
    )
}
