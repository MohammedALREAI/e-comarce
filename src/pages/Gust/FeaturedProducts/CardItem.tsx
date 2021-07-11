import Rating from '@material-ui/lab/Rating'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import {
    ContainerCard,
    WrapperRow,
    ImageCard,
    TitleCard,
    PriceCard,
    RowPrice,
    AddToCartButton,
    BockBarkButton,
    CardContainerWithoutLink,
} from './styles'
import { CSSProperties } from 'react'
import { Row } from '../../../Component/widget/styles'
import { CartActions } from '../../../redux/Cart/index'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { IProduct } from '../../../redux/Guest/GuestState.interface'
type MyProps = Pick<IProduct, 'image' | '_id' | 'price' | 'name' | 'rating'>;

export type PropsCardItem = MyProps & {
    product: IProduct;
    widthBorder?:boolean
};
const style: CSSProperties = {
    width: 'auto',
    height: '50px',
    fontSize: 40,
    color: '#242424',
    fill: '#242424',
    opacity: 0.3,
}
export const CardItem = ({ _id, image, name, price, rating, product, widthBorder = false }: PropsCardItem) => {
    const dispatch = useDispatch()
    const { addItem } = bindActionCreators(CartActions, dispatch)
    return (
        <CardContainerWithoutLink widthBorder={true}>
            <ContainerCard to={`/product/${_id}`}>
                <ImageCard src={image} alt={name} />
                <TitleCard>{name}</TitleCard>

                <Row my={16} JC="center" item="center">
                    <Rating name="rate" disabled value={rating} size="large" />
                </Row>
                <RowPrice>
                    {/* {discount && discount > 0 ? ( */}
                    {/* <> */}
                    {/* <DiscountCard>{discount}</DiscountCard>
                        <PriceCard isDiscount={true}>{price}</PriceCard>
                    </>
                ) : ( */}
                    <PriceCard>${price}</PriceCard>
                    {/* )} */}
                </RowPrice>
            <WrapperRow>
                <Row width={54} height={62} JC="center" my={20}>
                    <BockBarkButton aria-label="BookmarkIconS">
                        <BookmarkIcon aria-label="BookmarkIcon" style={style} />
                    </BockBarkButton>
                    <AddToCartButton
                        disabled={product.countInStock > 1}
                        onClick={() => {
                            if (product.countInStock > 1) {
                                addItem(product, 1)
                            }
                        }}
                        to={'/cart'}
                    >
                        Add to cart
                    </AddToCartButton>
                </Row>
            </WrapperRow>
            </ContainerCard>

        </CardContainerWithoutLink>
    )
}
