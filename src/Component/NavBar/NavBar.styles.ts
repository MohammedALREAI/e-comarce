








import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'

import { FlexBox, Column, Row } from '../widget/styles'
export const InnerSection = styled(Column)`
  margin: 0 auto;
  max-width: 1640px;
  width:100%;
`

export const NavContainer = styled('nav')`
    align-items: center;
    background: #242424 0% 0% no-repeat padding-box;
    display: flex;
    height: 85px;
    height: auto;
    justify-content: center;
    opacity: 1;
    width:100%
`

export const NavInnerSection = styled(InnerSection)`
    flex-direction: row;
    justify-content: space-between;
`

export const NavBox = styled(Row)`
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



export const List = styled('ul')`
display: inline-flex;
`

export const ListItem = styled('li')`
color: #FFFFFF;
font-size:13px;
letter-spacing: 0.2px;
list-style: none;
margin-left: 20px;
opacity: 1;

`
