import React from 'react'
import { Typography, InnerSection, Column, Row, Divider } from '../../../Component/widget/styles'
import { InnerCard, LeftSection, RightSection, KeepShoppingButton } from './style'
import { RowWithRadius } from '../../Gust/TopRate/style'
import { CardItem } from '../../Gust/FeaturedProducts/CardItem'
import imges from '../../../Assets/Images/play.png'

interface Props {
s?:string
}

export const PaymentSuccess = (props: Props) => {
    return (
        <Column bg="#FFFFFF">
                 <InnerSection >
                     <InnerCard>
                     <Column radius={16} mt={40} pl={50}>
                     <Typography color="#242424" fontSize={32} weight="bold">Payment Success !</Typography>
                     <Row mt={32}>
                         <LeftSection>
                         <Typography color="#242424" fontSize={24} weight="bold">Order number</Typography></LeftSection>
                         <RightSection>65AS1D56ASD156DS</RightSection>
                     </Row>
                     <Row mt={32}>
                         <LeftSection>
                         <Typography color="#242424" fontSize={24} weight="bold">Shipping Address</Typography></LeftSection>
                         <RightSection>65AS1D56ASD156DS</RightSection>
                     </Row>
                     <Row mt={32}>
                         <LeftSection>
                         <Typography color="#242424" fontSize={24} weight="bold">Shipping Address</Typography></LeftSection>
                         <RightSection>65AS1D56ASD156DS</RightSection>
                     </Row>
                     <Row mt={32}>
                         <LeftSection>
                         <Typography color="#242424" fontSize={16} >An email will be sent to your email address contains order confirmation and tacking code.</Typography></LeftSection>
                     </Row>
                     </Column>

                     </InnerCard>
                     <Row JC="flex-end" mt={16}><KeepShoppingButton>Keep Shopping</KeepShoppingButton></Row>



                     <Column item="start" mt={62}>
            <Typography fontSize={32} color="#242424" weight="bold">Recently viewed</Typography>

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
