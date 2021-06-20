import Styled from 'styled-components'


export const ReviewText = Styled('p')`
font-size: 32px;
letter-spacing: 1.28px;
color: #242424;
opacity: 1;
font-weight:bold;
`
export const TextFooter = Styled('p')`
font-size: 16px;
letter-spacing: 0.32px;
color: #707070;
opacity: 1;
`
export const ChangeText = Styled('p')`
font-size: 22PX;
letter-spacing: 0.44px;
color: #707070;
opacity: 1;
`

export const BoxNumber = Styled.div<{isActive:boolean}>`

display:flex;
justify-content:center;
align-items:center;
min-width: 40px;
width: 40px;
font-size:22px;
font-weight:bold;
margin-right:9px;
height: 40px;
background:${(props) => props.isActive ? '#FCDD06' : '#707070'};
color:${(props) => props.isActive ? '#242424' : '#FFFFFF'};
margin-left:9px;
`


export const TextActive = Styled('p')<{isActive:boolean}>`
font-size:22px;
font-weight:bold;
letter-spacing: 0.88px;
color:${(props) => props.isActive ? '#242424' : '#707070'};
opacity: 1;
`



export const WrapperReviewRow = Styled('div')`
display:flex;
margin-top:36px;
align-items:center;
width:100%


`
export const InnerSection = Styled('div')`
  align-items: start;
  justify-content:start;
  margin: 0 auto;
  max-width: 1640px;
  width:100%;
  margin-top:44px
`


export const Divider = Styled('hr')`
  width: 100px;
  height:2px;
  color:#F2F2F270;
  margin:0 40px;
`

export const DividerFull = Styled('hr')`
width: 100%;
    height: 6px;
    fill: #393030;
    color: #393030;
    margin-top: 40px;
    background: #393030;
    margin-bottom: 10px;  ;
`



export const WrapperCard = Styled('div')`
display:flex;
width:100%;
background:none;
justify-content:space-between;
margin-top:36px;
margin-right: 50px;

`

export const LeftSection = Styled('div')`
background: #F2F2F2;
border-radius: 16px;
flex:5;
opacity: 1;
padding:45px 88px;
max-width:950px;
width:100%


`
export const RightSection = Styled(LeftSection)`
flex:2;
margin-left:54px;
padding-top:35px;
padding-left:22px;

`


export const ShapeAddress = Styled('p')`
font-size:32px;
font-weight:bold;
letter-spacing: 0.88px;
letter-spacing: 1.28px;
color: #242424;
opacity: 1;
`


export const ColumWrapper = Styled('div')`
display:flex;
flex-direction: column;
justify-content:center;
items:center
flex:1
width:100%;



`

export const UserName = Styled(ShapeAddress)`
font-size:22px;
font-weight:normal;
letter-spacing: 0.88px;
color: #000000;
opacity: 1;
margin-top:16px;
margin-bottom:9px;
`
export const Address = Styled(ShapeAddress)`
font-size:16px;
font-weight:normal;
letter-spacing: 0.64px;
color: #000000;
opacity: 1;
margin-top:16px;
width:209px;
margin-bottom:9px;
`


export const WrapperRowInput = Styled('div')`
display:flex;
flex-direction:row;
width:100%;
justify-content:space-between;
align-items:start;
margin-right: 50px;
margin-bottom:41px;

`


export const HeaderTitleRight = Styled('div')`
flex-direction:row;
width:100%;
display: flex;
justify-content:space-between;
align-items:start;

`
export const FooterTitleRight = Styled('div')`
flex-direction:row;
width:100%;
display: flex;
justify-content:space-between;
align-items:start;
margin:16px 0px;

`

export const ImageCard = Styled.img`
width: 135px;
height: 90px;
opacity: 1;
object-fit:cover;
`

export const OrderItemsWrapper = Styled('div')`
flex-direction:row;
width:100%;
display: flex;
justify-content:space-between;
align-items:start;
margin-bottom:20px;
`

export const OrderPriceWrapper = Styled('div')`
flex-direction:row;
width:100%;
display: flex;
justify-content:space-between;
align-items:start;

margin-top:18px
`


export const TextTitle = Styled('p')`
font-size: 22px;
letter-spacing: 0.44px;
color: #707070;
opacity: 1;
margin-left:10px;

`


export const PriceText = Styled('p')`
font-size: 22px;
letter-spacing: 0.44px;
color: #707070;
opacity: 1;
padding-left:10px ;

`
export const TotalPriceText = Styled('p')`
font-size: 22px;
letter-spacing: 0.44px;
color:#242424;
opacity: 1;
padding-left:10px ;

`
export const CountText = Styled('p')`
font-size: 16px;
letter-spacing: 0.44px;
color: #707070;
opacity: 1;
display: flex;
justify-content:center;
align-items:center;
margin-left:10px

`



export const RevieworderButton = Styled.button`
width: 324px;
height: 62px;
background: #FCDD06;
border-radius: 10px;
opacity: 1;
display:flex;
border:none;
outline:none;
justify-content:center;
align-items:center;
font-size:24px;
margin-right:9px;
margin-bottom:61px;
margin-top:30px;
float:right;

`
