import Rating from '@material-ui/lab/Rating'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import { ContainerCard, ImageCard, TitleCard, DiscountCard, PriceCard, RowPrice, AddToCartButton, BockBarkButton } from './styles'
import { CSSProperties } from 'react'
import { Row } from '../../../Component/widget/styles'

interface Props {
    imag: string,
    title: string
    discount?: number
    price: number,
    _id:string,
    rate:number
}


const style:CSSProperties = {


      width: 'auto', height: '50px', color: '#242424',

}
export const CardItem = ({
    _id,
    imag,
    title,
    discount,
    price,
    rate,
}: Props) => {
    return (
        <ContainerCard to={`/product/${_id}/${name}`}>

            <ImageCard src={imag} alt={title} />
            <TitleCard>{title}</TitleCard>


            <Row my={16} JC="center" item="center">
                <Rating name="rate" value={rate} size="large" />
            </Row>
            <RowPrice>
                {discount && discount > 0
                    ? (<>
                        <DiscountCard>{discount}</DiscountCard>
                        <PriceCard isDiscount={true}>
                            {price}
                        </PriceCard>

                    </>)
                    : <PriceCard >{price}</PriceCard>
                }
            </RowPrice>
            <Row width="100%">
                <Row width={54} height={62} JC="center" mb={34}>
                    <BockBarkButton aria-label="BookmarkIconS">
                        <BookmarkIcon aria-label="BookmarkIcon" style={style} />
                    </BockBarkButton>
                    <AddToCartButton>Add to cart</AddToCartButton>
                </Row>
            </Row>

        </ContainerCard>
    )
}
