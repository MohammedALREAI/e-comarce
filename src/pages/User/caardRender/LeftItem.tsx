import React from 'react'
import { Typography, Divider } from '../../../Component/widget/styles'
import { CheckoutButton, WrapperLeft } from './style'
interface Props {
m?:string
}

export const LeftItem = (props: Props) => {
    return (
        <WrapperLeft>
            <Typography mb={30} color="#242424" weight="bold" fontSize={32}>Subtotal (3) items</Typography>
            <Typography mb={10} color="#242424" weight="bold" fontSize={24}>$999.97</Typography>
            <Typography mb={30} color="#242424" weight="bold" fontSize={32}>$989.97</Typography>
            <Divider mb={20} width="100%" height={1} color="#242424"/>
            <CheckoutButton>Proceed to checkout</CheckoutButton>

        </WrapperLeft>
    )
}
