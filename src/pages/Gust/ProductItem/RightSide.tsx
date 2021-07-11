import { Column, Row } from '../../../Component/widget/styles'
import { useState } from 'react'
import {
    TextTitle,
    CounterButton,
    Input,
    TextColor,
    WrapperTextDescription,
    SpanColor,
    TextDescription,
    RoundColor,
    WrapperRoundRow,
    AddToCart,
    SelectedButton,
    AddToBookmark,
} from './productItem.styles'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import { IProduct } from '../../../redux/Guest/GuestState.interface'
import { CartActions } from '../../../redux/Cart/CartAction'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
interface Product {
    product:IProduct,
    count:number
}
export const RightSide = ({ product, count }: Product) => {
    const [counter, setCounter] = useState<number>(count)
    const decres = () => (counter > 1 ? setCounter(counter - 1) : 1)
    const incres = () => (counter > 1 && counter < product.countInStock ? setCounter(counter + 1) : 1)
    const dispatch = useDispatch()

    const { addItem } = bindActionCreators(CartActions, dispatch)

    return (
        <Column>
            <Row JC="space-between">
                <TextTitle>{product.name}</TextTitle>
                <TextTitle>${product.price}</TextTitle>
            </Row>
            <Row mt={30} mb={41}>
                <CounterButton onClick={decres}>-</CounterButton>
                <Input>{counter}</Input>
                <CounterButton onClick={incres}>+</CounterButton>
            </Row>
            <Row mt={30} mb={41}>
                <Column mt={10}>
                    <TextColor>
                        Color : <SpanColor> Silver</SpanColor>
                    </TextColor>
                    <WrapperRoundRow>
                        <RoundColor bg="#FED6BC" isActive={true} />
                        <RoundColor bg="#EDEAE3" />
                        <RoundColor bg="#6B7B73" />
                    </WrapperRoundRow>
                    <TextColor>
                        Size : <SpanColor> 256GB</SpanColor>
                    </TextColor>
                    <Row mt={20}>
                        <Row>
                            <SelectedButton isActive={true}>64GB</SelectedButton>
                            <SelectedButton>225GB</SelectedButton>
                            <SelectedButton>512GB</SelectedButton>
                        </Row>

                        <Row>
                            <AddToBookmark aria-label="BookmarkIconS">
                                <BookmarkIcon aria-label="BookmarkIcon" />
                            </AddToBookmark>
                            <AddToCart
                                onClick={() => {
                                    if (product.countInStock) addItem(product, counter)
                                }}
                            >
                                Add to cart
                            </AddToCart>
                        </Row>
                    </Row>
                    <WrapperTextDescription>
                        <TextDescription>{product.description}</TextDescription>
                    </WrapperTextDescription>
                </Column>
            </Row>
        </Column>
    )
}
