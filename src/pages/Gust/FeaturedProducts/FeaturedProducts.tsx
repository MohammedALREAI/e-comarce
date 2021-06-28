import { useState, CSSProperties } from 'react'
import { InnerSection, Column, Typography, Divider, Row } from '../../../Component/widget/styles'
import { CardItem } from './CardItem'
import { Dot } from '../HomeScreen/Home.styles'
import { IFeatherProduct } from '../../../redux/Guest/GuestState.interface'

import SwipeableViews from 'react-swipeable-views'

interface Props {
    data: Array<any>
}
const cssStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: 'auto',
}

export const FeaturedProducts = ({ data } : Props) => {
    const [sliderIndex, setSliderIndex] = useState<number>(0)

console.log('the length', data.length)

    return (
        <Column bg="#F7F8FC" height={948}>
            <InnerSection>
                <Column item="center" mt={62}>
                    <Typography fontSize={32} color="#242424" weight="bold">Featured Products</Typography>

                    <Divider width={200} height={7} color="#FCDD06" mt={22} />
                    <Divider width="100%" height={1} />
                </Column>
                <Row width="400px" JC="flex-end" item="center" mb={32} mt={30}>
                    {data.map((x, i) => (
                        <Dot width="25px" isGrey={sliderIndex !== i} onClick={() => setSliderIndex(i)} />
                    ))}

                </Row>
                <SwipeableViews index={sliderIndex} style={cssStyle}>
                    {data.map((x:any, index:number) => (
                        <Row JC="space-between" mt={43} radius={16} key={index} >
                            {x.map((item:IFeatherProduct, itemIndex:number) => (
                                <CardItem
                                _id={item._id}
                                imag={process.env.URL_IMAGES + item.image}
                                     key={itemIndex}
                                    title={item.name}
                                    rate={item.rating}
                                    discount={0}
                                    price={item.price}
                                />

                            ))}
                        </Row>),
                    )}
                </SwipeableViews>
            </InnerSection>
        </Column>

    )
}
