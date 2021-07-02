import React from 'react'
import { WrapperImages, ImageLists } from './productItem.styles'
import { Column, Image } from '../../../Component/widget/styles'
interface LeftProps {
     image:string
}

export const LeftSide = ({ image }:LeftProps) => {
    return (
        <Column>
            <Image fit="cover" width="100%" height="501px" src={image} />
              <WrapperImages>
                   {Array(3).fill(0).map((_, index) =>
                <ImageLists src={image} key={index} alt={'productImage'} />,

                    )}

            </WrapperImages>
        </Column>
    )
}
