import React from 'react'
import { WrapperImages, ImageLists } from './productItem.styles'
import { Column, Image } from '../../../Component/widget/styles'


export const LeftSide = () => {
    return (
        <Column>
        <Image fit="cover" width="100%" height="501px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kQiZHtT29wAv2R_0LklS5cmqdwyI3OTIKQ&usqp=CAU" />
            <WrapperImages>
            <ImageLists src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kQiZHtT29wAv2R_0LklS5cmqdwyI3OTIKQ&usqp=CAU" />
            <ImageLists src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kQiZHtT29wAv2R_0LklS5cmqdwyI3OTIKQ&usqp=CAU" />
            <ImageLists src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kQiZHtT29wAv2R_0LklS5cmqdwyI3OTIKQ&usqp=CAU" />
            </WrapperImages>
        </Column>
    )
}
