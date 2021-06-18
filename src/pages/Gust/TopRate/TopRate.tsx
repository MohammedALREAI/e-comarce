import React from 'react'
import { InnerSection, Column, Typography, Row, Divider } from '../../../Component/widget/styles'
import { CardItem } from '../FeaturedProducts/CardItem'
import imges from '../../../Assets/Images/play.png'
import { RowWithRadius } from './style'
interface Props {
    me?:string

}

export const TopRate = (props: Props) => {
    return (
        <Column bg="#FFFFFF" height={948}>
        <InnerSection>
        <Column item="start" mt={62}>
            <Typography fontSize={32} color="#242424" weight="bold">TOP RATE PRODUCTS</Typography>

            <Divider width={200} height={7} color="#FCDD06" mt={22}/>
            <Divider width="100%" height={1}/>
            </Column>



            <RowWithRadius>
                {Array(3).fill(0).map((x, i) => (

                <CardItem
                key={i}
                imag={imges}
                title="some text for you"
                rate={5}
                discount={10}
                rounded={10}
                />
                ))}



            </RowWithRadius>


            </InnerSection>
            </Column>
    )
}
