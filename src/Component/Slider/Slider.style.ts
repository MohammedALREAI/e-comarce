import styled from 'styled-components'
import { Button, FlexBox } from '../widget/styles'
import { Link } from 'react-router-dom'
export const SectionSlider = styled(FlexBox)`
background: #F2F2F2 ;
height: 678px;
`
export const ShopeButton = styled(Button)`
background: #FCDD06 0% 0% no-repeat padding-box;
border-radius: 20px;
color: #242424;
height: 56px;
letter-spacing: 0.88px;
opacity: 1;
outline:none;
text-transform: uppercase;
width: 220px;

`
export const PriceText = styled('p')`
color:#242424;
font-size:32px;
margin-bottom: 10px;
`


export const DescriptionText = styled(PriceText)`
color:#242424;
font-size:32px;
margin-bottom:42px;
`

export const NameText = styled(PriceText)`
color:#242424;
font-size:60px;
font-weight:bold;
margin-bottom: 10px;

`

export const ImageSlider = styled('img')`
width:100%,
height:90%,
object-fit:cover
margin-top:30px;

`




export const ButtonHero = styled(Link)`
color:#242424;
background:#FCDD06,
font-size:22px;
height:56px
outline:none;
margin-top:42px;
border-radius: 20px;
opacity: 1;
letter-spacing: 0.88px;
text-transform: uppercase;
width: 220px;
`
