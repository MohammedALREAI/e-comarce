
import styled from 'styled-components'
import { FlexBox, Column } from './styles'

export const Section = styled(FlexBox)`
  align-items: center;
  margin: 0 auto;
  max-width: 1640px;
  width:100%;`




export const MainContainer = styled(Column)`
  flex-direction: column;
  max-width: 1920px;
  @media screen and (min-width: 1920px) {
    margin: 0 auto;
  }
`
