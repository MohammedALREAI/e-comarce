
import Styled from 'styled-components'



export const LeftCard = Styled('div')`
width: 398px;
height: 528px;
background: #F2F2F2;
border-radius: 16px;
opacity: 1;
padding:20px 16px;
margin-left:32px;

`
export const RightCard = Styled('div')`
width: 950px;
height: 528px;
background: #F2F2F2;
border-radius: 16px;
display: flex;
flex-wrap: nowrap;
align-content: center;
justify-content: center;
opacity: 1;
padding:20px 16px;
margin-left:32px;

`
export const ImageProfile = Styled('img')`
width: 137px;
height: 137px;
border-radius: 50%;
border: 7px solid yellow;
margin-right: 20px;
opacity: 1;
object-fit: cover;
`
export const UploadPhotoButton = Styled('button')`
display:flex;
justify-content:center;
align-items:center;
width: 153px;
height: 40px;
background: #FCDD06;
opacity: 1;
margin-top: 30px;
font-size:13px;
border:none;
outline:none;
letter-spacing: 0.52px;
color: #000000;
margin: 0px auto
`



export const ImageProfileWithoutBorder = Styled('img')`
width: 198px;
height: 198px;
border-radius: 50%;
margin-right: 20px;
opacity: 1;
object-fit: cover;
margin-bottom:30px
`



export const UserNameProfile = Styled('p')`
text-align: left;
font-size:32px;
letter-spacing: 0px;
color: #242424;
opacity: 1;
`
export const LabelProfile = Styled('p')`
text-align: left;
font-size:24px;
letter-spacing: 0px;
color: #707070;
opacity: 1;
margin-left:15px;
flex:1;
`
export const LabelValueProfile = Styled('p')`
text-align: left;
font-size:24px;
letter-spacing: 0px;
color: #000000;
flex:1;
opacity: 1;
margin-left:75px;
`
export const MyProfile = Styled('p')`
font-weight: bold;
font-size: 32px;
letter-spacing: 1.28px;
color: #242424;
opacity: 1;
margin-right:40px;
margin-bottom:65px
`

export const ItemsList = Styled(UserNameProfile)`
margin:15px 0px;
font-size: 24px;
letter-spacing: 0px;
color: #242424;
opacity: 1;
`


export const WrapperImageAndUser = Styled('div')`

align-content: center;
    align-items: center;
    display: flex;
    justify-content: space-around;
    width:100%
`
