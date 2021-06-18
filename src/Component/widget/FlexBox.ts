import styled from 'styled-components'
import { GeneralComponentDiv } from './GeneralComponentDiv'
import { IDisplay } from './styles.interface'






export const FlexBox = styled(GeneralComponentDiv)<IDisplay>`
    align-items: flex-start;
    background: ${(props) => props.color};
    display: flex;
    height: auto;
    justify-content: flex-start;
    width: 100%;

`
export const FlexBoxNav = styled(FlexBox)<IDisplay>`
        width: auto;


`
