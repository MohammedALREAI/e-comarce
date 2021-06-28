import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
export const MainContainer = styled('main')`
  align-items: center;
  background: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 1920px;
  width: 100%;
  @media screen and (min-width: 1920px) {
    margin: 0 auto;
  }
`

interface ITypography{
  fontSize?: number, color?: string
}
export const Typography = styled('p') <ITypography>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
`


export const FlexBox = styled('div')`
    align-items: center;
    background: ${(props) => props.color};
    display: flex;
    height: auto;
    justify-content: center;
    width: 100%;
`

export const BackgroundedFlexBox = styled(FlexBox)`
    background: #000;
    `

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`

export const InnerSection = styled(FlexColumn)`
  align-items: center;
  margin: 0 auto;
  
  max-width: 1640px;
  width:100%;
`

export const NavContainer = styled('nav')`
    align-items: center;
    background: #242424 0% 0% no-repeat padding-box;
    display: flex;
    height: 85px;
    justify-content: center;
    opacity: 1;
    width:100%
`

export const NavInnerSection = styled(InnerSection)`
    flex-direction: row;
    justify-content: space-between;
`

export const NavBox = styled(FlexRow)`
    width: auto;
`

export const Logo = styled('img')`
    height: 50px;
    object-fit: cover;
    opacity: 1;
    width: 180px;
`

export const SearchInput = styled('input')`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border:none;
    border-radius: 6px;
    height: 40px;
    opacity: 1;
    padding:12px 26px;
    width:550px;
    &:focus{
        border:none;
        outline:none;
    }
`

export const SearchButton = styled(FlexBox)` 
    background: #FCDD06 0% 0% no-repeat padding-box;
    border-radius: 6px;
    cursor:pointer;
    height: 40px;
    opacity: 1;
    width: 152px;
`

export const StyledSearchIcon = styled(SearchIcon)`
    font-size:18;
    margin-right:10px;
`


export const FlexColumnImag = styled(FlexColumn)`
align-items: flex-start;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
    padding-bottom: 2px;


`
