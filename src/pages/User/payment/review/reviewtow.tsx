import { Column, Row } from '../../../../Component/widget/styles'
import { Label, InputField } from '../../../../Component/Form/Form.style'
import logo from '../../../../Assets/Images/login.png'
import { ReviewText, FooterTitleRight, TextFooter, InnerSection, UserName, Address, WrapperRowInput, RevieworderButton, ChangeText, HeaderTitleRight, WrapperCard, ShapeAddress, Divider, WrapperReviewRow, LeftSection, RightSection, BoxNumber, TextActive } from './review.style'
import { OrderDetails } from './orderDtails'

export const ReviewTow = () => {
    return (
        <Column bg="#FFFFFF">
        <InnerSection>
            <ReviewText>Review Order</ReviewText>
            <WrapperReviewRow>
                <BoxNumber isActive={false} >1</BoxNumber>
                <TextActive isActive={false} >Shipping and Payment</TextActive>
                <Divider />
                <BoxNumber isActive={true} >2</BoxNumber>
                <TextActive isActive={true} >Place an Order</TextActive>
            </WrapperReviewRow>
            <WrapperCard>
                <LeftSection style={{ flex: 3 }}>
                    <Column>
                    <ShapeAddress>Shipping Address</ShapeAddress>
                    <UserName>John rose</UserName>
                    <Address>56051 Jones Falls, Philippines, Turkey - 62502</Address>

                    <HeaderTitleRight style={{ marginTop: '32px' }}>
<ReviewText>Order Details</ReviewText>
<ChangeText >change</ChangeText>

    </HeaderTitleRight>
    <Column mt={30} style={{ width: '461px' }}>
    <OrderDetails
     title="iPhone 11 Pro 256GB Memory"
    image={logo}
    priceItem={20}
    countItem={20}

    />
    <OrderDetails
     title="iPhone 11 Pro 256GB Memory"
    image={logo}
    priceItem={20}
    countItem={20}

    />

<HeaderTitleRight style={{ marginTop: '32px' }}>
<ReviewText>Payment Details</ReviewText>
<ChangeText style={{ textDecoration: 'underline' }}>change</ChangeText>
    </HeaderTitleRight>
    <span>visa</span>
    </Column>
                    </Column>

                </LeftSection>
<Column style={{ flex: 1, height: '280px' }} >
<RightSection style={{ flex: 1, height: '280px' }}>
<ReviewText>Order Details</ReviewText>
    <FooterTitleRight>
<TextFooter>Subtotal</TextFooter>
<TextFooter>$589.98</TextFooter>
    </FooterTitleRight>
    <FooterTitleRight>
<TextFooter>Tax</TextFooter>
<TextFooter>$589.98</TextFooter>
    </FooterTitleRight>
    <FooterTitleRight>
<TextFooter>Shipping</TextFooter>
<TextFooter>$589.98</TextFooter>
    </FooterTitleRight>
    <FooterTitleRight>
<TextFooter style={{ fontWeight: 'bold' }}>Total</TextFooter>
<TextFooter style={{ fontWeight: 'bold' }}>$589.98</TextFooter>
    </FooterTitleRight>

</RightSection>
<RevieworderButton>Review order</RevieworderButton>
</Column>
            </WrapperCard>

            </InnerSection>
            </Column>
    )
}
