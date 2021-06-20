

import styled from 'styled-components'
import { Field } from 'formik'

export const InputField = styled(Field)<{width:number | string}>`

border:none;
border: 1px solid #242424;
border:none;
border-radius: 6px;
height: 40px;
margin-top:10px;
opacity: 1;
outline:none;
padding:10px;
width:${props => props.width ? (typeof (props.width) === 'string' ? props.width : props.width + 'px') : '100%'};
&::placeholder{
color:#707070;
outline: none;
}
`


export const SpanError = styled('span')`
color:red;
margin-top:7px;
`

export const Label = styled('label')`
color: #242424;
font-size:22px;
letter-spacing:0.88px;
margin-bottom:10px;
opacity: 1;
`


export const ButtonLogin = styled('button')`
align-items: center;
background: #FCDD06;
border:none;
border-radius: 6px;
color: #242424;
display:flex;
font-size: 22px;
height: 40px;
justify-content: center;
margin-top:30px;
opacity: 1;
outline:none;
width: 398px;
`
