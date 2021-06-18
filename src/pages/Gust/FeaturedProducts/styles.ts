import { Column, Image, Typography, Row, Button } from '../../../Component/widget/styles'

import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'

export const ContainerCard = styled(Column)`
align-items: center;
background: white;
border-radius: 16px;
  box-shadow:  4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  grid-row: span 1 / span 1;
  height: 655px;
  justify-content: center;
  margin: 0 20px;
  margin-bottom: 119px;
  opacity: 1;
width: 520px;
&:first-child and :last-child{
    margin: 0 0;
}

`


export const ImageCard = styled(Image)`
Width:100%;
height: 342px;
margin:35px 0px;
object-fit: fill;
`



export const TitleCard = styled(Typography)`
color: #242424;
font-size:24px ;
font-weight:bold;
letter-spacing: 0.48px;
margin:35px 0px;
opacity: 1;

`



export const DiscountCard = styled(Typography)`
color: #FC4059;
font-size:30px;
letter-spacing: 0.6px;
margin-right:8px;
opacity: 1;

`
export const PriceCard = styled(Typography)`
color: #242424;
font-size:30px;
letter-spacing: 0.6px;
margin-right:8px;
opacity: 1;
text-decoration:${props => props.decoration ? 'line-through' : 'none'}

`

export const RowPrice = styled(Row)`
align-items:center;
  font-weight:bold;
  grid-row: span 1 / span 1;
justify-content: center;
margin:16px 0px;

`


export const AddToCartButton = styled(Button)`

background: #F2F2F2;
border-radius: 10px;
color: #242424;
cursor: pointer;
font-size: 24px;
height: 62px;
letter-spacing: 0.48px;
margin-left:7px;
opacity: 1;
text-transform: capitalize;
width: 324px;
`
export const BockBarkButton = styled(Button)`
margin-right:28px;
background: #F2F2F2;
border-radius: 10px;
width: 54px;
opacity: 1;
cursor: pointer
height: 62px;
opacity: 1;
width: 54px;
`
