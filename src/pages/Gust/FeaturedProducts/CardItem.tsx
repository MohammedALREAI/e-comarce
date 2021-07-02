import Rating from '@material-ui/lab/Rating'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import { ContainerCard, ImageCard, TitleCard, DiscountCard, PriceCard, RowPrice, AddToCartButton, BockBarkButton } from './styles'
import { CSSProperties } from 'react'
import { Row } from 'Component/widget/styles'
import { IProduct } from 'redux/Guest/GuestState.interface'
// interface Props {
//     price: number;
//     _id: string;
//     rating: number;
//     image: string;
//     description: string;
//      name: string;
// }

type MyProps = Pick<IProduct, 'image' | '_id' | 'description' | 'price' | 'name' | 'rating'>

const style:CSSProperties = {


      width: 'auto', height: '50px', color: '#242424',

}
export const CardItem = ({ _id, image, name, price, rating, description }: MyProps) => {
    return (
        <ContainerCard to={`/product/${_id}`}>
            <ImageCard src={image} alt={name} />
            <TitleCard>{name}</TitleCard>

            <Row my={16} JC="center" item="center">
                <Rating name="rate" value={rating} size="large" />
            </Row>
            <RowPrice>
                {/* {discount && discount > 0 ? ( */}
                {/* <> */}
                {/* <DiscountCard>{discount}</DiscountCard>
                        <PriceCard isDiscount={true}>{price}</PriceCard>
                    </>
                ) : ( */}
                <PriceCard>{price}</PriceCard>
                {/* )} */}
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
