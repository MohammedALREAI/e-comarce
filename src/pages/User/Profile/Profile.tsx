import { InnerColSection, Row, Column, Divider } from 'Component/widget/styles'
import { LeftCard, ImageProfile, RightCard, LabelValueProfile, MyProfile, UploadPhotoButton, ImageProfileWithoutBorder, LabelProfile, UserNameProfile, WrapperImageAndUser, ItemsList } from './profile.styles'

export const Profile = () => {
    return (
        <Column bg="#FFFFFF">
            <Row style={{ marginTop: '129px' }}>
                <LeftCard >
                    <WrapperImageAndUser>
                        <ImageProfile src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                        <UserNameProfile>Amy Mayer</UserNameProfile>
                    </WrapperImageAndUser>
                    <Column mt={33}>
                        <ItemsList>My Orders</ItemsList>
                        <ItemsList>Wishlist</ItemsList>
                        <ItemsList>Notifcations</ItemsList>
                        <ItemsList>Settings</ItemsList>
                        <Divider width="100%" height={1} style={{ marginBottom: '15px' }} />
                        <ItemsList>Logout</ItemsList>

                    </Column>

                </LeftCard>
                <RightCard>
                    <Row>
                        <Column>
                            <MyProfile>My Profile</MyProfile>
                            <Column>
                                <Row item="center">
                                    <LabelProfile>First Name</LabelProfile>
                                    <LabelValueProfile>mme</LabelValueProfile>

                                </Row>
                            </Column>
                            <Column>
                                <Row item="center">
                                    <LabelProfile>last Name</LabelProfile>
                                    <LabelValueProfile>mme</LabelValueProfile>

                                </Row>
                            </Column>
                            <Column>
                                <Row item="center">
                                    <LabelProfile>Email</LabelProfile>
                                    <LabelValueProfile>mme</LabelValueProfile>

                                </Row>
                            </Column>
                            <Column>
                                <Row item="center">
                                    <LabelProfile>Birthday</LabelProfile>
                                    <LabelValueProfile>mme</LabelValueProfile>

                                </Row>
                            </Column>







                        </Column>




                    </Row>

                    <Row style={{ flex: '1' }}>
                        <Column >
                            <ImageProfileWithoutBorder src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                            <UploadPhotoButton>Upload new photo</UploadPhotoButton>
                        </Column>

                    </Row>
                </RightCard>

            </Row>
        </Column>
    )
}
