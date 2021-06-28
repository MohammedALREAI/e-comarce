import React, { useState, CSSProperties } from 'react'
import { Column, Row, InnerSection } from '../widget/styles'
import { Arrow, Dot } from '../../pages/Gust/HomeScreen/Home.styles'
import SwipeableViews from 'react-swipeable-views'
import { ISliderImages } from '../../redux/Guest/GuestState.interface'
import { SliderItem } from './SliderItem'
// import { URL_IMAGES } from '../../Const/env'
interface Props {
data:ISliderImages[]
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
      const handleChangeIndex = () => { console.log('me') }
      const handleLeft = () => {
        if (sliderIndex === 0) {
            setSliderIndex(2)
        }
    }
    const handleRight = () => {
        if (sliderIndex === 0) {
            setSliderIndex(2)
        }
    }

const cssStyle:CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '678px',
}

  return (
<Column bg="#F2F2F2">



<InnerSection bg="#F2F2F2">
  <Column>
        <SwipeableViews index={sliderIndex} style={cssStyle}>
          { data && data.map((item) => (
            <SliderItem
            _id={item._id}
              name={item.name}
             price={item.price}
              description={item.description}
              image={'https://proshop-ms.herokuapp.com/' + item.image} />
          ))}


        </SwipeableViews>
        <Row width="400px" JC="center" item="center" mb={32}>
            <Arrow isLeft={true} onClick={handleRight}>&#8250;</Arrow>
                 <Dot width="25px" isGrey={sliderIndex !== 0} onClick={() => setSliderIndex(0)}/>
                 <Dot width="25px" isGrey={sliderIndex !== 1} onClick={() => setSliderIndex(1)}/>
                 <Dot width="25px" isGrey={sliderIndex !== 2} onClick={() => setSliderIndex(2)}/>
            <Arrow onClick={handleLeft}>&#8250;</Arrow>
            </Row>
  </Column>

      </InnerSection>

</Column>

  )
}
