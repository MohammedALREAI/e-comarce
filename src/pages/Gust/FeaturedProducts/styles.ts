import { Typography, Row, Button, Column } from '../../../Component/widget/styles'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const ContainerCard = styled(Link)`
align-items:center;
text-decoration: none
align-items: center;
  background: #FFFFFF;
  color:#242424;
  border-radius: 16px;
  box-shadow:  4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color:#242424;
  display: flex;
  flex-direction: column;
  height: 655px;
  justify-content: center;
  opacity: 1;
width: 520px;
&:first-child and :last-child{
    margin: 0 0;
}

`


export const ImageCard = styled('img')`
height: 100%;
height: 342px;
margin-bottom: 34px;
max-height: 342px;
max-width: 513px;
object-fit: fill;
width: 100%;
`



export const TitleCard = styled(Typography)`
color: #242424;
font-size:24px ;
letter-spacing: 0.48px;
margin:35px 0px;
opacity: 1;
text-align: center;
text-decoration: none;
`



export const DiscountCard = styled('p')`
color: #FC4059;
font-size:30px;
letter-spacing: 0.6px;
margin-right:8px;
opacity: 1;

`
export const PriceCard = styled('p') <{ isDiscount?: boolean }>`
color: #242424;
font-size:30px;
letter-spacing: 0.6px;
margin-right:8px;
opacity: 1;
text-decoration:${props => props.isDiscount ? 'line-through' : 'none'};

`

export const RowPrice = styled(Row)`
align-items:center;
font-weight:bold;
grid-row: span 1 / span 1;
justify-content: center;
margin:16px 0px;

`


export const AddToCartButton = styled(Link) <{ disabled?: boolean }>`
align-content: center;
align-items: center;
background: #F2F2F2 !important;
border-radius: 10px;
color: #242424 !important;
cursor: pointer;
display: flex;
flex-direction: row;
font-size: 24px;
height: 62px;
justify-content: center;
letter-spacing: 0.48px;
margin-left:7px;
opacity: 1;
text-decoration:none;
text-transform: capitalize;
width: 324px;
  ${(props) =>
          props.disabled
               ? `
        background:gray;
        color:white;
        cursor: none;
  `
               : ''}
`
export const BockBarkButton = styled(Button)`
margin-right:28px;
background: #F2F2F2;
border-radius: 10px;
width: 54px;
opacity: 1;
cursor: pointer
height:62px;
opacity:1;
`

export const FeaturedProducts = styled('p')`

color:#242424;
font-size:32px;
font-wight:bold;



`


export const WrapperRow = styled(Row)`
align-items: center;
    display: flex;
    justify-content: center;
margin: 0px 20px;
`


export const CardContainerWithoutLink = styled(Column) <{ widthBorder: boolean }>`
  height: 100%;
  opacity: 1;
  ${(props) => (props.widthBorder
          ? `
  box-shadow: 0px 2px 20px #08091E1A;
      border-left: 1px solid #F2F2F2;
  `
          : '')}
text-decoration: none
align-items: center;
  background: #FFFFFF;
  border-radius: 16px;
  color:#242424;
  display: flex;
  color:#242424;
  flex-direction: column;
  height: 100%;
  justify-content: center;
width: 100%;
&:first-child and :last-child{
    margin: 0 0;
}

`



export const FeaturedProductsContainer = styled(Column)`

background: #F7F8FC;
height: 948px;
opacity: 1;
width: 100%;

`


export const WrapperDots = styled(Row)`
align-items:center;
height:40px
justify-content: flex-end;
margin:10px 0px;
width:auto;
margin: 0px;
`


export const RowInnerSlider = styled(Row)`
justify-content: space-between;
margin-top:43px
border-radius: 16px;
`
