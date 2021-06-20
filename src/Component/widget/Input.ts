

import styled from 'styled-components'
import { GeneralComponentDiv } from './GeneralComponentDiv'


export const Input = styled(GeneralComponentDiv).attrs({
as: 'input',
})`

border: "1px solid #707070";
border-radius:${(props) => props.radius ? (typeof (props.radius) === 'string' ? props.radius : props.radius + 'px') : '0px'};
color: ${(props) => (props.color ? props.color : '#707070')};
background: ${(props) => (props.bg ? props.bg : '#fff')};
 `

export const InputData = styled('input')`
border: 1px solid #242424;
border:none;
border-radius: 6px;
height: 40px;
opacity: 1;
outline :none;
padding:10px;
width: 398px;

&::placeholder{

}

`
