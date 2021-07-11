import React, { useState } from 'react'
import { Typography, Column, Row, Image } from '../../../Component/widget/styles'
import { ButtonCounter, RowCenter, CloseWrapper } from './style'
import CloseIcon from '@material-ui/icons/Close'
import { IconButton } from '@material-ui/core'
interface Props {
    imge: string;
    title: string;
    countP: number;
    incres: () => void;
    decres: () => void;
    price: number;
}

export const RightItem = ({ imge, title, countP, incres, decres, price }: Props) => {
    const [count, setCount] = useState<number>(countP)
    const [isActive, setisActive] = useState<boolean>(false)

    return (
        <Row radius={16} bg="#F2F2F2" height={242} padding={13} width="100%" mb={30}>
            <Row>
                <Image src={imge} alt={title} width={304} height="100%" />
            </Row>
            <RowCenter mt={50}>
                <Typography color="#242424" weight="bold" fontSize={24}>
                    {title}
                </Typography>
            </RowCenter>
            <RowCenter height={40} mt={101}>
                <ButtonCounter bg="#FFFFFF" isActive={!isActive} onClick={decres}>
                    -
                </ButtonCounter>
                <RowCenter width={204} bg="#FFFFFF">
                    <Typography color="#242424" weight="bold" fontSize={24}>
                        {count}
                    </Typography>
                </RowCenter>
                <ButtonCounter bg="#FFFFFF" isActive={isActive} onClick={incres}>
                    +
                </ButtonCounter>
            </RowCenter>
            <Column>
                <CloseWrapper>
                    <IconButton aria-label="delete">
                        <CloseIcon />
                    </IconButton>
                </CloseWrapper>

                <RowCenter mt={53}>
                    <Typography color="#242424" weight="bold" fontSize={30}>
                        ${price}
                    </Typography>
                </RowCenter>
            </Column>
        </Row>
    )
}
