import React from 'react'
import { Section, Row, Column, Typography } from '../widget/styles'
import { ShopeButton } from './Slider.style'
import useTheme from '../../theme/useTheme'
interface Props {
data:string
}

export const SliderItem = (props: Props) => {
    const {
 color: {
 hero: {
 textBold,
        text,
        yellow,
        grey,
},
},
} = useTheme()
    return (
        <Section>
            <Row>
                <Column>
                <Typography color={text} as='h1' >
                    Save up to $99.99
                    </Typography>
                <Typography color={textBold} margin={10} >iPhone 11 PRO </Typography>
                <Typography color={text}>Pro cameras.Pro display. Pro performance.  </Typography>
                <ShopeButton bg={yellow}>Shop now</ShopeButton>

                </Column>

                </Row>

        </Section>
    )
}
