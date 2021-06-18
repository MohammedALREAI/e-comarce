
import React, { CSSProperties, useState } from 'react'
import { FlexRow, FlexColumn, BackgroundedFlexBox } from '../me'
import { Typography, Button, FlexBox, Column, Image, Row, InnerSection } from '../widget/styles'
import { SectionSlider } from './Slider.style'
import play from '../../Assets/Images/play.png'
import { Arrow, Dot } from '../../pages/Gust/HomeScreen/Home.styles'
import SwipeableViews from 'react-swipeable-views'

interface Props {
me?:string
}

const style:CSSProperties = {

  outline: 'none',
}


const styles = {
  root: {
    position: 'relative',
    width: '100%',
    height: 678,
  },
}

export const Slider = ({ me }: Props) => {
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


    const SliderItem = () => (
      <Row width="100%" >
      <Column width="40%" mt={173}>
      <Typography fontSize={32} mb={10} color="#242424"> Save up to $39.99</Typography>
      <Typography fontSize={60} mb={10} weight="bold" color="#242424"> PlayStation 5</Typography>
      <Typography fontSize={32} mb={42} color="#242424"> Lightning-fast download speed with super-fast SSD storage</Typography>
  <Button style={style} color="#242424" bg="#FCDD06" fontSize={22} radius={20} width={220} height={56}>Shop now</Button>
      </Column>
      <Column></Column>
      <Column>
    <Image src={play} height="90%" width="100%" fit="cover" my={12}/>
      </Column>

    </Row>
    )


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

<SliderItem/>
<SliderItem/>
<SliderItem/>

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
