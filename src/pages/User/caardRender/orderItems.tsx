import React, { useEffect, useState } from 'react'
import { Typography, InnerSection, Column, Row, SpinnerContainer } from '../../../Component/widget/styles'
import { RightItem } from './RightItem'
import { LeftItem } from './LeftItem'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { TState } from 'redux/Store'
import { ActionGuest } from 'redux/Guest/GuestType'
import {bindActionCreators} from'redux'


interface Props {
s?:string
}

export const OrderItems = (props: Props) => {
   
    return (
        <Column bg="#FFFFFF">
        <InnerSection>
            <Column mt={38}>
            <Typography color="#707070" fontSize={24}> <span onClick={() => history.goBack()}> Back</span> /  Shopping Cart </Typography>
            <Row JC="space-between" item="center" mt={30}>
                <Row width={1226} maxWidth={1226} style={{
                        flex: '0 0 151%'}}>
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
            </Column>,
    )
}

