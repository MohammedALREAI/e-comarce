import { useState, CSSProperties } from 'react'
import { InnerSection, Column, Typography, Divider, Row } from '../../../Component/widget/styles'
import { CardItem } from './CardItem'
import { Dot } from '../HomeScreen/Home.styles'
import imag from '../../../Assets/Images/play.png'
import SwipeableViews from 'react-swipeable-views'

interface Props {
t?:string
}
const cssStyle:CSSProperties = {
    position: 'relative',
    width: '100%',
    height: 'auto',
  }

export const FeaturedProducts = (props: Props) => {
    const [sliderIndex, setSliderIndex] = useState<number>(0)

    return (
        <Column bg="#F7F8FC" height={948}>
        <InnerSection>
            <Column item="center" mt={62}>
            <Typography fontSize={32} color="#242424" weight="bold">Featured Products</Typography>

            <Divider width={200} height={7} color="#FCDD06" mt={22}/>
            <Divider width="100%" height={1}/>
            </Column>
            <Row width="400px" JC="flex-end" item="center" mb={32} mt={30}>
                 <Dot width="25px" isGrey={sliderIndex !== 0} onClick={() => setSliderIndex(0)}/>
                 <Dot width="25px" isGrey={sliderIndex !== 1} onClick={() => setSliderIndex(1)}/>
                 <Dot width="25px" isGrey={sliderIndex !== 2} onClick={() => setSliderIndex(2)}/>
            </Row>
            <SwipeableViews index={sliderIndex} style={cssStyle}>
                {Array(3).fill(1).map((x, index) => (
            <Row JC="space-between" mt={43} radius={16} key={index} >
                <CardItem imag={imag}
                title="some text for you"
                rate={5}
                discount={10}
                rounded={10}
                />
                <CardItem imag={imag}
                title="some text for you"
                rate={5}
                discount={10}
                rounded={10}
                />
                <CardItem imag={imag}
                title="some text for you"
                rate={5}
                discount={10}
                rounded={10}
                />


            </Row>
                ),
 )}

            </SwipeableViews>
            </InnerSection>
            </Column>

    )
}
