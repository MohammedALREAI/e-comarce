import { Column, Row } from 'Component/widget/styles'
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

interface Product {
    name: string;
    description: string;
    price: number;
    count: number;
}
export const RightSide = ({ name, price }: Product) => {
     const [counter, setCounter] = useState(count)
     const incres = () => counter > 0 ? setCounter(counter + 1) : 1
     const decres = () => counter > 1 ? setCounter(counter - 1) : 1
   return (
       <Column>
           <Row JC="space-between">
               <TextTitle>{name}</TextTitle>
               <TextTitle>${price}</TextTitle>
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
                           <AddToCart>Add to cart</AddToCart>
                       </Row>
                   </Row>
                   <WrapperTextDescription>
                       <TextDescription>{description}</TextDescription>
                   </WrapperTextDescription>
               </Column>
           </Row>
       </Column>
   )
}
