import Styled from 'styled-components'

import { Column, Row, Image, InnerSection } from '../../../Component/widget/styles'

import { BockBarkButton } from '../FeaturedProducts/styles'


export const WrapperTextDescription = Styled(Column)`
margin-top:32px;
`



export const ImageLists = Styled('img')`
width: 142px;
height: 142px;
border: 1px solid #F2F2F2;
object-fit:cover;
margin-left:15px;
:first-child{
  margin-left:0px;
}
`


export const HalfRow = Styled(Row)<{isHover?:boolean}>`
flex:1;
height: 62px;
font-size:16px;
letter-spacing: 0.64px;
color: #242424;
padding:21px 35px;
margin-right:43px;
${props => props.isHover
? `
border-radius: 10px;
background: #F2F2F2;

`
: `

border-radius: 10px;
background: #FFFFFF;
`}


`
export const WapprerFeadback = Styled(Row)`

display: flex;
    justify-content: space-between;
    margin: 20px 0px;
    align-items: center;


`

export const FeedbackText = Styled('p')`


letter-spacing: 0.64px;
background: #F2F2F2;
opacity: 1;
width:100%;
padding:21px 35px
margin:20px 0px;
color: #242424;








`


export const CommitDate = Styled('p')`

font-size: 16px;
letter-spacing: 0.64px;
color: #707070;
opacity: 0.7;


`



export const TextRow = Styled('p')`

font-size: 16px;
letter-spacing: 0.64px;
color: #242424;
opacity: 1;
`
export const InnerSectionWrapper = Styled(InnerSection)`

align-items: flex-start;


`


export const SpecificationSection = Styled(Column)`
padding-top:34px;
padding-left:51px;
border: 1px solid #BCBCBC;
opacity: 1;
`





export const Specification = Styled('p')

export const WrapperImages = Styled(Row)`
margin-top: 70px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-between;
    align-items: center;
    width:100%;
    height: 142px;
`





export const LeftContainer = Styled(Row)`
flex:1

`

export const RightContainer = Styled(Row)`
flex:3.2;
margin-left:16px;
`

export const TextDescription = Styled('p')`
padding:10px 0px

font-size: 16px
letter-spacing: 0.32px;
color: #242424;
opacity: 1;


`




export const AddToCart = Styled('button')`
display:flex;
justify-content:center;
align-items:center;
width: 324px;
height: 62px;
background: #FCDD06;
border-radius: 10px;
opacity: 1;
font-size: 24px;
letter-spacing: 0.48px;
color: #242424;
text-transform: capitalize;
opacity: 1;
outline:none;
border:none;



`



export const AddToBookmark = Styled(BockBarkButton)`

width: 54px;
height: 62px;
border: 1px solid #FCDD06;
border-radius: 10px;
margin-left:16px;

`




export const WrapperRoundRow = Styled(Row)`
width: 220px;
height: 50px;
`

export const RoundColor = Styled('div')<{bg?:string, isActive?:boolean}>`

width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.bg};
  border: ${props => props.isActive ? '4px solid #242424' : ''};
  margin-left:30px
`
export const ColumWrapper = Styled(Column)`
margin-bottom:52px;
width:100%;
align-items:start;
`


export const RowImageSection = Styled(Row)`
width: 501px;

`

export const ImageItem = Styled(Image)`
width: 501px;
height: 501px;
object-fit:cover;
`





export const ImageList = Styled(Image)`
width: 142px;
height: 142px;
`


export const WrapperImageList = Styled(Row)`
color:red;



`



export const TextTitle = Styled('p')`
font-size :32px;
font-weight:bold;
letter-spacing: 1.28px;
color: #242424;
opacity: 1;

`




export const Input = Styled('div')`
height: 40px;
width:156px;
display:flex;
justify-content:center;
align-items:center;
font-size:24px;
font-weight:bold;
padding:5px 0px;

`

export const CounterButton = Styled('button')`
width: 48px;
font-size: 24px;
font-weight:bold;
border:1px solid #FCDD06;
height: 40px;

`

export const TextColor = Styled('p')`
font-size: 24px;
letter-spacing: 0.96px;
color: #707070;
margin-top:30px


`
export const SpanColor = Styled('span')`

font-size: 24px;
letter-spacing: 0.96px;
color: #242424;
font-weight:bold;
margin-left:10px
margin-bottom:30px;

`
export const SelectedButton = Styled('button')<{isActive?:boolean}>`
width: 135px;
height: 40px;
border-radius: 10px;
opacity: 1;
font-weight:bold;
font-size:20px;
letter-spacing: 0.8px;
outline:none ;
border:none;
margin-left:20px;
${props => props.isActive
? `box-shadow: 0px 2px 20px #08091E1A;
color: #FFFFFF;
background:#242424`
 : `color:#242424;
 background:#F5F5F5

 `}

`
