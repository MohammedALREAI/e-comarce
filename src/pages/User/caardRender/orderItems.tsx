import React from 'react'
import { Typography, InnerSection, Column, Row, Divider } from '../../../Component/widget/styles'
import { WrapperCardPayment, RowCenter, WrapperLeft } from './style'
import imges from '../../../Assets/Images/play.png'
import { RightItem } from './RightItem'
import { LeftItem } from './LeftItem'

interface Props {
s?:string
}

export const OrderItems = (props: Props) => {
    return (
        <Column bg="#FFFFFF">
        <InnerSection>
            <Column mt={38}>
            <Typography color="#707070" fontSize={24}> Back  /  Shopping Cart </Typography>
            {/* <Typography color="#242424" fontSize={24} mx={2}>Shopping Cart</Typography> */}
            <Row JC="space-between" item="center" mt={30}>
                <Row width={1226} maxWidth={1226} style={{
                        flex: '0 0 151%',

                }}>

                    <Column>
                        <RightItem/>
                        <RightItem/>

                    </Column>

                </Row>
                <Row width={384} ml={30} pt={20}>
                <LeftItem/>
                </Row>
                </Row>

                </Column>


            </InnerSection>
            </Column>
    )
}
