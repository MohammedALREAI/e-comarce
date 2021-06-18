import styled from 'styled-components'
import { GeneralComponentDiv } from './GeneralComponentDiv'
export const Divider = styled(GeneralComponentDiv).attrs({ as: 'hr' })`
color: ${props => props.color ? props.color : '#fff'};


`
