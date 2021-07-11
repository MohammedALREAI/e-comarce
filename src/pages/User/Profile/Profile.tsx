import { Column, Divider, InnerSection, Row } from '../../../Component/widget/styles'
import { LeftCard, ImageProfile, ChangePassWord, RightCard, MyProfile, UploadPhotoButton, ImageProfileWithoutBorder, LabelProfile, UserNameProfile, WrapperImageAndUser, ItemsList } from './profile.styles'
import { useSelector, useDispatch } from 'react-redux'
import { RowInformation } from './RowInformation'
import { TState } from '../../../redux/Store'
import { logoutSuccess } from '../../../redux/User/UserAction'
export const Profile = () => {
const user = useSelector((state:TState) => state.user)
const dispatch = useDispatch()
console.log('the user isprofile ', user)
  return (
    <Column bg="#FFFFFF">
      <InnerSection bg="#FFFFFF">
        <Row style={{ marginTop: '129px' }}>
          <LeftCard>
            <WrapperImageAndUser>
              <ImageProfile src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
              <UserNameProfile>{user.user.name.split(' ')[0]}</UserNameProfile>
            </WrapperImageAndUser>
            <Column mt={33}>
              <ItemsList to="/orders">My Orders</ItemsList>
              <ItemsList to="/wishlist">Wishlist</ItemsList>
              <ItemsList to="/notifcations">Notifcations</ItemsList>
              <ItemsList to="/settings">Settings</ItemsList>
              <Divider width="100%" height={1} style={{ marginBottom: '15px' }} />
              <ItemsList
                to="/"
                onClick={() => {
                  dispatch(logoutSuccess())
                }}
              >
                Logout
              </ItemsList>
            </Column>
          </LeftCard>
          <RightCard>
            <Row>
              <Column>
                <MyProfile>My Profile</MyProfile>
                <RowInformation label="First Name" value={user.user.name.split(' ')[0]} />
                <RowInformation
                  label="Last Name"
                  value={user.user.name.split(' ')[1] || user.user.name}
                />
                <RowInformation label="Email" value={user.user.email} />
                <RowInformation label="Join from " value={'' + new Date().toDateString()} />
                <ChangePassWord>
                  <UploadPhotoButton to="/update-profile">Change Password</UploadPhotoButton>
                </ChangePassWord>
              </Column>
            </Row>

            <Row style={{ flex: '1' }}>
              <Column>
                <ImageProfileWithoutBorder src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <UploadPhotoButton to="/update-profile">
                  Upload new photo
                </UploadPhotoButton>
              </Column>
            </Row>
          </RightCard>
        </Row>
      </InnerSection>
    </Column>
  )
}
