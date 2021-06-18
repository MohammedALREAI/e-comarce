
import styled from 'styled-components'
import { Row } from './Row'
import { IDisplay } from './styles.interface'

export const Card = styled(Row)<IDisplay>`
border-radius:${(props) => props.radius ? (typeof (props.radius) === 'string' ? props.radius : props.radius + 'px') : '0px'};
opacity: 1;

`
