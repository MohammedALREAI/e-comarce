import { useState } from 'react'
import PersonIcon from '@material-ui/icons/Person'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { NavInnerSection } from '../widget/styles'
import {
  List,
  LogoTextYellow,
  LogoTextWhite,
  StyleObj,
  NavBox,
  NavContainer,
  StyledSearchIcon,
  SearchButton,
  SearchInput,
} from './NavBar.styles'
import { ListNavItem } from './ListNavItem'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { useSelector, useDispatch } from 'react-redux'
import { TState } from '../../redux/Store'
import IUserState from '../../redux/User/shapeState.interface'
import { logoutSuccess } from '../../redux/User/UserAction'
import { useHistory } from 'react-router'

export const Navbar = () => {
     const [value, setValue] = useState < string >('')
     const history = useHistory()
     const user = useSelector((state: TState) => state.user)
  const dispatch = useDispatch()
  const _id = user.user._id
  console.log('user is me is  ', _id)
  return (
    <NavContainer>
      <NavInnerSection>
        <NavBox>
          <LogoTextYellow to="/">Pro</LogoTextYellow>
          <LogoTextWhite to="/">Shop</LogoTextWhite>
        </NavBox>

        <NavBox style={{ background: '#FFF', borderRadius: 6 }}>
          <SearchInput
            value={value}
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
          <SearchButton
            onClick={() => {
              history.push(`/search${value ? `?keyword=${value}` : ''}`)
            }}
          >
            <StyledSearchIcon />
            Search
          </SearchButton>
        </NavBox>
        <NavBox>
          <List>
            <ListNavItem
              to={_id ? '/profile' : '/login'}
              title={_id ? 'Profile' : 'Login / Sign up'}
            >
              <PersonIcon style={StyleObj} />
            </ListNavItem>

            <ListNavItem to="/wishlist" title="Wishlist">
              <BookmarkIcon style={StyleObj} />
            </ListNavItem>

            {_id && (
              <>
                <ListNavItem to="/cart" isBadge={true} countBadge={2} title="Cart">
                  <ShoppingCartIcon style={StyleObj} />
                </ListNavItem>
                <ListNavItem to="/" title="logout" onClick={() => dispatch(logoutSuccess())}>
                  <ExitToAppIcon style={StyleObj} />
                </ListNavItem>
              </>
            )}
          </List>
        </NavBox>
      </NavInnerSection>
    </NavContainer>
  )
}
