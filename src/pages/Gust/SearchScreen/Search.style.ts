import { RowInnerSlider } from './../FeaturedProducts/styles'
import styled from 'styled-components'
export const WrapperSearch = styled(RowInnerSlider)`
 align-items: start;
  flex-wrap: wrap;
  justify-content: space-between;
margin-top:10px;
margin-top: 43px;
max-width: 1800px;
width: 90vw;

  @media screen and (max-width: 1100px) {
    justify-content: center;
flex-direction: column;
    align-items: center;
  }

`
