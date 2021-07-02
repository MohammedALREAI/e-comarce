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
import { TState } from 'redux/Store'
import { UserActions } from 'redux/User/index'
import IUserState from 'redux/User/shapeState.interface'
import { bindActionCreators } from 'redux'

export const Navbar = () => {
    const [value, setValue] = useState<string>('')
    const user = useSelector((state: TState) => state.user) as IUserState
    const dispatch = useDispatch()
    const { logoutSuccess } = bindActionCreators(UserActions, dispatch)
    const _id = user.user?._id ? user.user._id : undefined
    return (
        <NavContainer>
            <NavInnerSection>
                <NavBox>
                    <LogoTextYellow>Pro</LogoTextYellow>
                    <LogoTextWhite>Shop</LogoTextWhite>
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
                    <SearchButton>
                        <StyledSearchIcon />
                        Search
                    </SearchButton>
                </NavBox>
                <NavBox>
                    <List>
                        <ListNavItem to={_id ? '/profile' : '/login'} title={_id ? 'Profile' : 'Login / Sign up'}>
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
                                <ListNavItem to="/logout" title="logout" onClick={() => logoutSuccess()}>
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
