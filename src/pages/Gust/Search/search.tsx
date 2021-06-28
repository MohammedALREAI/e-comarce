import React from 'react'
import { InnerSection, Column, Typography, Row, Divider } from '../../../Component/widget/styles'
import { CardItem } from '../../Gust/FeaturedProducts/CardItem'
import imges from '../../../Assets/Images/play.png'

interface Props {
    m?: string
}

export const Search = (props: Props) => {
    return (
        <Column bg="#FFFFFF">
            <Column bg="#F7F8FC " height={948} mt={23}>
                <InnerSection mt={23}>
                    <Column item="center" mt={62}>
                        <Typography fontSize={32} color="#242424" weight="bold">Featured Products</Typography>
                        <Divider width={200} height={7} color="#FCDD06" mt={22} />
                        <Divider width="100%" height={1} />
                    </Column>
                    <Row mt={43}>
                        <CardItem
                        _id={'544'}
                            imag={imges}
                            title="some text for you"
                            rate={5}
                            discount={10}
                            price={20}
                        />
                    </Row>
                </InnerSection>
            </Column>
        </Column>
    )
}
