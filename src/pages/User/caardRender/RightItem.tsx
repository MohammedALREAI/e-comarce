import React from 'react'
import { Typography, InnerSection, Column, Row, Divider, Image, Button, GeneralComponentDiv } from '../../../Component/widget/styles'
import imges from '../../../Assets/Images/play.png'
import { ButtonCounter, RowCenter, CloseWrapper } from './style'
import CloseIcon from '@material-ui/icons/Close'
import { IconButton } from '@material-ui/core'
interface Props {
m?:string
}

export const RightItem = (props: Props) => {
    return (
        <Row radius={16} bg="#F2F2F2" height={242} padding={13} width="100%" mb={30} >
            <Row >
                <Image src={imges} alt="item product" width={304} height="100%"/>
            </Row>
            <RowCenter mt={50}>
                <Typography color="#242424" weight="bold" fontSize={24}>Apple iPhone 11 Pro 256GB Memory</Typography>
            </RowCenter>
            <RowCenter height={40} mt={101} >


                        <ButtonCounter bg="#FFFFFF" >-</ButtonCounter>
                        <RowCenter width={204} bg="#FFFFFF">
                        <Typography color="#242424" weight="bold" fontSize={24}>10</Typography>

                        </RowCenter>
                        <ButtonCounter bg="#FFFFFF" isActive={true}>2</ButtonCounter>
            </RowCenter>
            <Column>
            <CloseWrapper>
            <IconButton aria-label="delete">
  <CloseIcon />
</IconButton>
            </CloseWrapper>



            <RowCenter mt={53}>
            <Typography color="#242424" weight="bold" fontSize={30}>$499.99</Typography>
            </RowCenter>


</Column>


        </Row>
    )
}
