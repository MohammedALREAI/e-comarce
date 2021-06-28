import { Column, Row, Typography } from '../../../Component/widget/styles'
import { TextRow, RightContainer, HalfRow, SpecificationSection, LeftContainer, TextTitle, InnerSectionWrapper } from './productItem.styles'
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'
import { ReviewItem } from './ReviewItem'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { TState } from 'redux/Store'
import { ActionGuest } from 'redux/Guest/index'
import { bindActionCreators } from 'redux'

interface Props {
    title?: string
}


export const ProductItem = ({ title }: Props) => {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const gust = useSelector((state:TState) => state.gust)
    const { fetchProduct, getProductById } = bindActionCreators(ActionGuest, dispatch)
    const { id, name } = useParams<{id:string, name:string}>()
    const history = useHistory()
    const product = gust.product

    useEffect(() => {
        fetchProduct()
        getProductById(id)
      }, [dispatch, id])



    return gust.isLoading || product.isLoading
 ? (<SpinnerContainer />)
 : (
        <Column bg="#FFFFFF" height={948}>
            <InnerSectionWrapper>
                <Row mt={38}>
                    <Typography color="#707070" fontSize={24}> Back /</Typography>
                    <Typography color="#242424" fontSize={24} mx={2}> iPhone 11 Pro 256GB Memory</Typography>
                </Row>
                <Row mt={62}>
<LeftContainer>
<LeftSide/>
</LeftContainer>
                    <RightContainer>
                    <RightSide/>
                    </RightContainer>
           </Row>
           <Column mt={63}>

           <TextTitle style={{
        marginBottom: '31px',
}}> Specification</TextTitle>
           <SpecificationSection>
           <TextTitle style={{ fontSize: '24px' }}> Technical Details</TextTitle>
           <Column mt={30}>
               {Array(5).fill(0).map((x, index) => (
 <Row key={index}>
 <HalfRow isHover={index % 2 === 0}>
 <Row><TextRow>Brand :</TextRow></Row>
 <Row><TextRow>Apple </TextRow></Row>
 </HalfRow>
 <HalfRow isHover={index % 2 === 0}>
 <Row>Brand:</Row>
 <Row>Apple</Row>
 </HalfRow>

 </Row>

               ))}

           </Column>

           </SpecificationSection>
           <TextTitle style={{
 marginTop: '63px',
        marginBottom: '31px',
}}> Reviews</TextTitle>
           <SpecificationSection style={{ padding: '30px 50px' }}>

                {Array(6).fill(0).map((x, index) => (
                    <ReviewItem key={index}/>
                ))}

               </SpecificationSection>

           </Column>
           </InnerSectionWrapper>
           </Column>

    )
}
