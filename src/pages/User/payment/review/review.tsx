import React from 'react'

import { Column, Row } from '../../../../Component/widget/styles'
import { Label, InputField } from '../../../../Component/Form/Form.style'
import { useFormik, FormikProvider } from 'formik'
import logo from '../../../../Assets/Images/login.png'
import { ReviewText, FooterTitleRight, TextFooter, InnerSection, WrapperRowInput, RevieworderButton, ChangeText, HeaderTitleRight, WrapperCard, ShapeAddress, Divider, WrapperReviewRow, LeftSection, RightSection, BoxNumber, TextActive } from './review.style'
import { OrderDetails } from './orderDtails'


interface IInitialValues{
    country:string,
    city:string,
    zip:string | number,
    stress:string
 }
 const initialValues:IInitialValues = {
    country: '',
    city: '',
    zip: '',
    stress: '',
 }

 const Review = () => {
    const formik = useFormik<IInitialValues>({
        initialValues,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2))
        },

      })
    return (
        <Column bg="#FFFFFF">
        <InnerSection>
            <ReviewText>Review Order</ReviewText>
            <WrapperReviewRow>
                <BoxNumber isActive={true} >1</BoxNumber>
                <TextActive isActive={true} >Shipping and Payment</TextActive>
                <Divider />
                <BoxNumber isActive={false} >2</BoxNumber>
                <TextActive isActive={false} >Place an Order</TextActive>
            </WrapperReviewRow>
            <WrapperCard>
                <LeftSection>
                    <FormikProvider value={formik}>

                    <Column>
                    <ShapeAddress>Shipping Address</ShapeAddress>

                    <WrapperRowInput>
                        <Row mr={50}>
                        <Column width="100%" mr={50}>
    <Label>Country</Label>
    <InputField width={360}/>
    </Column>
                            </Row>
                            <Row>
                            <Column width="100%" mr={50}>
    <Label>city</Label>
    <InputField width={360}/>
    </Column>

                            </Row>

                    </WrapperRowInput>
                    <WrapperRowInput>
                        <Row mr={50}>
                        <Column width="100%" mr={50}>
    <Label>Zip Code</Label>
    <InputField width={360}/>
    </Column>
                            </Row>
                            <Row>
                            <Column width="100%" mr={50}>
    <Label>Street Address</Label>
    <InputField width={360}/>
    </Column>

                            </Row>

                    </WrapperRowInput>


                    <ShapeAddress>Shipping Address</ShapeAddress>

<Column>
</Column>
                    <WrapperRowInput>
                        <Row mr={50}>
                        <Column width="100%" mr={50}>
    <Label>Country</Label>
    <InputField width={360}/>
    </Column>
                            </Row>
                            <Row>
                            <Column width="100%" mr={50}>
    <Label>city</Label>
    <InputField width={360}/>
    </Column>

                            </Row>

                    </WrapperRowInput>
                    <WrapperRowInput>
                        <Row mr={50}>
                        <Column width="100%" mr={50}>
    <Label>Zip Code</Label>
    <InputField width={360}/>
    </Column>
                            </Row>
                            <Row>
                            <Column width="100%" mr={50}>
    <Label>Street Address</Label>
    <InputField width={360}/>
    </Column>

                            </Row>

                    </WrapperRowInput>



                    </Column>
                    </FormikProvider>

                </LeftSection>

<RightSection>
    <HeaderTitleRight>
<ReviewText>Order Details</ReviewText>
<ChangeText>change</ChangeText>

    </HeaderTitleRight>
    <Column mt={30}>
    <OrderDetails
     title="iPhone 11 Pro 256GB Memory"
    image={logo}
    priceItem={20}
    countItem={20}
    isHr={true}

    />
    <OrderDetails
     title="iPhone 11 Pro 256GB Memory"
    image={logo}
    priceItem={20}
    countItem={20}
    isHr={true}

    />

    </Column>

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
            </WrapperCard>
<RevieworderButton>Review order</RevieworderButton>

            </InnerSection>
            </Column>
    )
}


export default Review
