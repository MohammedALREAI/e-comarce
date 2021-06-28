import { CSSProperties } from 'react'
import { Button, Column, Image, Row } from '../widget/styles'
import { PriceText, NameText, DescriptionText } from './Slider.style'
 interface Props {
  _id: string,
  name: string
  description: string
  image: string,
  price:number
    }


    const style:CSSProperties = {
      outline: 'none',
    }
export const SliderItem = ({ name, description, price, image, _id }:Props) => (
    <Row width="100%" key={_id} >
    <Column width="40%" mt={173}>
    <PriceText> Save up to ${price}</PriceText>
    <NameText >{name.substring(0, 15)}</NameText>
    <DescriptionText> {description.substring(0, 80)}</DescriptionText>
<Button style={style} color="#242424" bg="#FCDD06" fontSize={22} radius={20} width={220} height={56}>Shop now</Button>
    </Column>
    <Column></Column>
    <Column>
  <Image src={image} height="90%" width="100%" fit="cover" my={12}/>
    </Column>

  </Row>
  )
