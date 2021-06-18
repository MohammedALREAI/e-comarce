import React from 'react'
import { InnerSection, Column, Typography, Image, Row, Button } from '../../../Component/widget/styles'
import Rating from '@material-ui/lab/Rating'
import IconButton from '@material-ui/core/IconButton'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import image from '../../../Assets/Images/play.png'
import { ContainerCard, ImageCard, TitleCard, DiscountCard, PriceCard, RowPrice, AddToCartButton, BockBarkButton } from './styles'


interface Props {
    imag:string,
    title:string
    rate:number
    discount?:number
    rounded?:number
}

export const CardItem = ({
 imag,
    title,
    rate,
    discount,
    rounded,
}: Props) => {
    return (
        <ContainerCard>

        <ImageCard src={image} alt={title}/>
        <TitleCard>{title}</TitleCard>


        <Row my={16} JC="center" item="center">
    <Rating name="rante_items" value={rate} size="large" />
    </Row>
    <RowPrice>
    {discount
? (<>
    <DiscountCard>{discount}</DiscountCard>
    <PriceCard decoration="line-through">
                    {discount}
                    </PriceCard>

    </>)
     : <PriceCard decoration="line-through">{discount}</PriceCard>
    }
            </RowPrice>
                <Row width="100%">
                            <Row width={54} height={62} JC="center" mb={34}>
                            <BockBarkButton aria-label="BookmarkIconS">
                                <BookmarkIcon aria-label="BookmarkIcon" style={{
width: 'auto', height: '50px', color: '#242424',
                                }}/>
                                     </BockBarkButton>
                                     <AddToCartButton>Add to cart</AddToCartButton>
      </Row>
                </Row>

       </ContainerCard>
    )
}
