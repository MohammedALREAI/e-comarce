import React, { useState, CSSProperties } from 'react'
import PersonIcon from '@material-ui/icons/Person'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import LogoIcon from '../../Assets/Images/logo.png'
import useTheme from '../../theme/useTheme'
import { NavContainer, NavBox, SearchInput, SearchButton, StyledSearchIcon, Logo } from '../me'
import { NavInnerSection, Row, Typography, Column, Image } from '../widget/styles'
import { List, ListItem } from './NavBar.styles'

const StyleObj:CSSProperties = {
    fontSize: 22,
    color: '#FFF',
    fill: '#FFF',
    margin: 'auto 0 auto 32px',
    paddingBottom: '3px',
    marginBottom: '11px',
}


export const Navbar = () => {
    const { color: { navBg }, space: { logo, navH } } = useTheme()
    const [value, setValue] = useState<string>('')
    return (
        <NavContainer>
        <NavInnerSection>
            <NavBox><Image src={LogoIcon} alt="Logo" height={logo.height} width={logo.width} fit="cover"/></NavBox>
            <NavBox style={{ background: '#FFF', borderRadius: 6 }}>
                <SearchInput value={value} type="text" placeholder="Search" onChange={e => {
                    setValue(e.target.value)
                }}/>
                <SearchButton>
                    <StyledSearchIcon/>
                    Search
                </SearchButton>
            </NavBox>
            <NavBox>
                <List>
                    <ListItem>
                        <Column item="center">
                <PersonIcon style={StyleObj} />
                <Typography mt={11} color="#FFFFFF" fontSize={13}>Login / Sign up</Typography>

                        </Column>

                    </ListItem>
                    <ListItem>
                    <Column item="center">

                <BookmarkIcon style={StyleObj}/>
                <Typography color="#FFFFFF" fontSize={13}>Wishlist</Typography>
                </Column>

                    </ListItem>
                    <ListItem>
                    <Column item="center" JC="center">

                <ShoppingCartIcon style={StyleObj}/>
                <Typography color="#FFFFFF" fontSize={13}>Cart</Typography>
                </Column>
                    </ListItem>
                </List>
            </NavBox>
        </NavInnerSection>
    </NavContainer>


    )
}
