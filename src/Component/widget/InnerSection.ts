import styled from 'styled-components'
import { Column, Row } from './styles'

export const InnerSection = styled(Column)`
  align-items: center;
  margin: 0 auto;

  max-width: 1640px;
  width:100%;
`
export const InnerColSection = styled(InnerSection)`
  align-items: flex-start;
  justify-content:flex-start;
`
export const NavInnerSection = styled(Row)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-items: center;
    margin: 0 auto;
    max-width: 1640px;
    width:100%;
`
