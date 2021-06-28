import { Column, Divider, Row } from '../../../Component/widget/styles'
import { LeftCard, ImageProfile, ChangePassWord, RightCard, MyProfile, UploadPhotoButton, ImageProfileWithoutBorder, LabelProfile, UserNameProfile, WrapperImageAndUser, ItemsList } from './profile.styles'
import { useSelector, useDispatch } from 'react-redux'
import { RowInformation } from './RowInformation'
import { TState } from '../../../redux/Store'
import { bindActionCreators } from 'redux'
import { UserActions } from '../../../redux/User'

export const Profile = () => {
const user = useSelector((state:TState) => state.user)
const state = useSelector((state:TState) => state.user)
const dispatch = useDispatch()
const { logoutSuccess } = bindActionCreators(UserActions, dispatch)

  return (
        <Column bg="#FFFFFF">
            <Row style={{ marginTop: '129px' }}>
                <LeftCard >
                    <WrapperImageAndUser>
                        <ImageProfile src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                        <UserNameProfile>{user.user.name}</UserNameProfile>
                    </WrapperImageAndUser>
                    <Column mt={33}>
                        <ItemsList>My Orders</ItemsList>
                        <ItemsList>Wishlist</ItemsList>
                        <ItemsList>Notifcations</ItemsList>
                        <ItemsList>Settings</ItemsList>
                        <Divider width="100%" height={1} style={{ marginBottom: '15px' }} />
                        <ItemsList onClick={() => logoutSuccess()} >Logout</ItemsList>

                    </Column>

                </LeftCard>
                <RightCard>
                    <Row>
                        <Column>
                            <MyProfile>My Profile</MyProfile>
                           <RowInformation label="First Name" value={user.user.name}/>
                           <RowInformation label="Last Name" value={user.user.name}/>
                           <RowInformation label="Email" value={user.user.email}/>
                           <RowInformation label="Join from " value={'' + new Date().toDateString()}/>
                           <ChangePassWord>
                           <UploadPhotoButton>Change Password</UploadPhotoButton>
                           </ChangePassWord>
                        </Column>

                    </Row>

                    <Row style={{ flex: '1' }}>
                        <Column >
                            <ImageProfileWithoutBorder src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                            <UploadPhotoButton as="a" href="/update-profile">Upload new photo</UploadPhotoButton>
                        </Column>

                    </Row>
                </RightCard>

            </Row>
        </Column>
    )
}
