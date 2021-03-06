import React, { useState, CSSProperties } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Arrow, Dot } from '../../pages/Gust/HomeScreen/Home.styles'
import { SliderItem } from './SliderItem'
import { IProduct } from '../../redux/Guest/GuestState.interface'
import { URL_IMAGES } from '../../Const/env'
import { Column } from '../widget/Column'
import { InnerSection, Row } from '../widget/styles'


interface Props {
    data: IProduct[];
}

const cssStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '678px',
}

const styles = {
    root: {
        position: 'relative',
        width: '100%',
        height: 678,
    },
}

export const Slider = ({ data }: Props) => {
    const [sliderIndex, setSliderIndex] = useState<number>(0)
    const handleChangeIndex = () => {
        console.log('me')
    }
    const handleLeft = () => {
        if (sliderIndex === 0) {
            setSliderIndex(2)
        } else setSliderIndex(sliderIndex - 1)
}
    const handleRight = () => {
        if (sliderIndex === 2) {
            setSliderIndex(0)
        } else setSliderIndex(sliderIndex + 1)
    }

    const sliders =
        data.length &&
        data.map((item) => (
            <SliderItem
                _id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={URL_IMAGES + item.image}
            />
        ))

    return (
        <Column bg="#F2F2F2">
            <InnerSection bg="#F2F2F2">
                <Column>
                    <SwipeableViews index={sliderIndex} style={cssStyle}>
                        {sliders}
                    </SwipeableViews>
                    <Row width="400px" JC="center" item="center" mb={32}>
                        <Arrow isLeft={true} onClick={handleRight}>
                            &#8250;
                        </Arrow>

                        {Array(3)
                            .fill(0)
                            .map((x, index) => (
                                <Dot
                                    width="25px"
                                    isGrey={sliderIndex !== index}
                                    onClick={() => setSliderIndex(index)}
                                />
                            ))}
                        <Arrow onClick={handleLeft}>&#8250;</Arrow>
                    </Row>
                </Column>
            </InnerSection>
        </Column>
    )
}
