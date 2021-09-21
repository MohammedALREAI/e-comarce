import { Column, Divider, InnerSection, Row } from '../../../Component/widget/styles'
import { LeftCard, ImageProfile, ChangePassWord, RightCard, MyProfile, UploadPhotoButton, ImageProfileWithoutBorder, LabelProfile, UserNameProfile, WrapperImageAndUser, ItemsList } from './profile.styles'
import { useSelector, useDispatch } from 'react-redux'
import { RowInformation } from './RowInformation'
import { TState } from '../../../redux/Store'
import { AuthActions } from '../../../redux/Auth'
import { useHistory } from 'react-router'

export const Profile = () => {
const auth = useSelector((state:TState) => state.auth)
const dispatch = useDispatch()
const history = useHistory()

     return (
       <Column bg="#FFFFFF">
         <InnerSection bg="#FFFFFF">
           <Row style={{ marginTop: '129px' }}>
             <LeftCard>
               <WrapperImageAndUser>
                 <ImageProfile src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                 <UserNameProfile>{auth.user.name.split(' ')[0]}</UserNameProfile>
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
                     dispatch(AuthActions.logoutSuccess(history))
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
                   <RowInformation
                     label="First Name"
                     value={` ${auth.user.name
                       .split(' ')[0]
                       .charAt(0)
                       .toUpperCase()}${auth.user.name.split(' ')[0].slice(1)}`}
                   />
                   {auth.user.name.split(' ').length > 1 && (
                     <RowInformation
                       label="Last Name"
                       value={` ${auth.user.name
                         .split(' ')[0]
                         .charAt(0)
                         .toUpperCase()}${auth.user.name.split(' ')[1].slice(1)}`}
                     />
                   )}
                   <RowInformation label="Email" value={auth.user.email} />
                   <RowInformation label="Join from " value={'' + new Date().toDateString()} />
                   <ChangePassWord>
                     <UploadPhotoButton to="/update-profile">Change Password</UploadPhotoButton>
                   </ChangePassWord>
                 </Column>
               </Row>

               <Row style={{ flex: '1' }}>
                 <Column>
                   <ImageProfileWithoutBorder src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                   <UploadPhotoButton to="/update-profile">Upload new photo</UploadPhotoButton>
                 </Column>
               </Row>
             </RightCard>
           </Row>
         </InnerSection>
       </Column>
     )
}

export default Profile
