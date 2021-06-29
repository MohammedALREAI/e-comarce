import { useState, CSSProperties } from 'react'
import { CardItem } from './CardItem'
import SwipeableViews from 'react-swipeable-views'
import { Column, InnerSection, Row } from 'Component/widget/styles'
import { URL_IMAGES } from 'Const/env'
import { IFeatherProduct } from 'redux/Guest/GuestState.interface'
import { Dot } from '../HomeScreen/Home.styles'
import { LabelName } from './LableTitle'
import { IProduct } from 'redux/Cart/CartState.interface'
interface Props {
    data: Array<IProduct>;
}
const cssStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: 'auto',
}

export const FeaturedProducts = ({ data }: Props) => {
     const [sliderIndex, setSliderIndex] = useState<number>(0)
     const insiderData = data.map((x, index) => (
        <Row JC="space-between" mt={43} radius={16} key={index}>
            {x.map((item: IFeatherProduct, itemIndex: number) => (
                <CardItem
                    _id={item._id}
                    imag={URL_IMAGES + item.image}
                    key={itemIndex}
                    title={item.name}
                    rate={item.rating}
                    discount={0}
                    price={item.price}
                />
            ))}
        </Row>
    ))

    return (
        <Column bg="#F7F8FC" height={948}>
            <InnerSection>
                <LabelName />
                <Row width="400px" JC="flex-end" item="center" mb={32} mt={30}>
                    {data.map((x, i) => (
                        <Dot width="25px" isGrey={sliderIndex !== i} onClick={() => setSliderIndex(i)} />
                    ))}
                </Row>
                <SwipeableViews index={sliderIndex} style={cssStyle}>
                    {insiderData}
                </SwipeableViews>
            </InnerSection>
        </Column>
    )
}
