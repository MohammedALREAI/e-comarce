import styled from 'styled-components'
import { FlexBox } from './FlexBox'
import { IDisplay } from './styles.interface'


interface IRowJS extends IDisplay{
    JC?:'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end',
    item?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'first' | 'start' | 'end';

}


export const Row = styled(FlexBox)<IRowJS>`
align-items: ${props => props.item ? props.item : 'start'};
flex-direction: row;
justify-content: ${(props) => props.JC ? props.JC : 'start'};

`
