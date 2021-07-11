import { Column, Row } from '../widget/styles'
import { PriceText, NameText, DescriptionText, ButtonHero, ImageSlider } from './Slider.style'
interface Props {
    _id: string;
    name: string;
    description: string;
    image: string;
    price: number;
}

export const SliderItem = ({ name, description, price, image, _id }: Props) => (
    <Row width="100%" key={_id}>
        <Column width="40%" mt={173}>
            <PriceText> Save up to ${price}</PriceText>
            <NameText>{name.substring(0, 15)}</NameText>
            <DescriptionText> {description.substring(0, 80)}</DescriptionText>
            <ButtonHero to={`/product/${_id}`}>Shop now</ButtonHero>
        </Column>
        <Column></Column>
        <Column mt={10}>
            <ImageSlider src={image} alt={name + _id} />
        </Column>
    </Row>
)
