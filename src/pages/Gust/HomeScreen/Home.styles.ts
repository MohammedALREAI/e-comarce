import { IDisplay, IGeneralDiv } from '../../../Component/widget/styles.interface'
import styled from 'styled-components'
import { Row } from '../../../Component/widget/styles'
import { GeneralComponentDiv } from '../../../Component/widget/GeneralComponentDiv'



interface IDot extends IGeneralDiv{
    isGrey:boolean

}

export const Dot = styled(Row)<IDot>`
background:${(props) => props.isGrey ? '#70707030' : '#FCDD06 '};
border-radius: 50%;
height:${props => props.width ? (typeof (props.width) === 'string' ? props.width : props.width + 'px') : ''};
margin: 0 20px;
width:${props => props.width ? (typeof (props.width) === 'string' ? props.width : props.width + 'px') : ''};
`

interface IArrow extends IDisplay{
    isLeft?:boolean,
    color?:string
}

export const Arrow = styled(GeneralComponentDiv)<IArrow>`
font-size: 35px;
font-weight:bold;
font-weight: 700;
margin:'0px 23px';
width:30px;${(props) => props.isLeft ? 'transform:rotate(-180deg)' : 'transform:rotate(0deg)'};
`
