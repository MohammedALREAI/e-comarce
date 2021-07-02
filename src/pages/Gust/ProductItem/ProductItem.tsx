import {
    TextRow,
    RightContainer,
    HalfRow,
    SpecificationSection,
    LeftContainer,
    TextTitle,
    InnerSectionWrapper,
} from './productItem.styles'
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'
import { ReviewItem } from './ReviewItem'
import { Column, Row, SpinnerContainer } from 'Component/widget/styles'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { TState } from 'redux/Store'
import { GuestActions } from 'redux/Guest/index'
import { Navigation } from 'Component/Navigation/Navigater'
import { bindActionCreators } from 'redux'
import { URL_IMAGES } from 'Const/env'


export const ProductItem = () => {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const gust = useSelector((state: TState) => state.gust)
    const { fetchProduct, getProductById } = bindActionCreators(GuestActions, dispatch)
    const { id } = useParams<{ id: string }>()
    const product = gust.product

    useEffect(() => {
        fetchProduct()
        getProductById(id)
    }, [dispatch, id])

    return gust.isLoading || product.isLoading
? (
        <SpinnerContainer />
    )
: (
        <Column bg="#FFFFFF" height={948}>
            <InnerSectionWrapper>
                <Navigation title={product.product.name} />
                <Row mt={62}>
                    <LeftContainer>
                        <LeftSide image={URL_IMAGES + product.product.image} />
                    </LeftContainer>
                    <RightContainer
                        name={product.product.name}
                        description={product.product.description}
                        price={product.product.price}
                        count={1}
                    >
                        <RightSide />
                    </RightContainer>
                </Row>
                <Column mt={63}>
                    <TextTitle
                        style={{
                            marginBottom: '31px',
                        }}
                    >
                        {' '}
                        Specification
                    </TextTitle>
                    <SpecificationSection>
                        <TextTitle style={{ fontSize: '24px' }}> Technical Details</TextTitle>
                        <Column mt={30}>
                            {Array(5)
                                .fill(0)
                                .map((x, index) => (
                                    <Row key={index}>
                                        <HalfRow isHover={index % 2 === 0}>
                                            <Row>
                                                <TextRow>Brand :</TextRow>
                                            </Row>
                                            <Row>
                                                <TextRow>Apple </TextRow>
                                            </Row>
                                        </HalfRow>
                                        <HalfRow isHover={index % 2 === 0}>
                                            <Row>Brand:</Row>
                                            <Row>Apple</Row>
                                        </HalfRow>
                                    </Row>
                                ))}
                        </Column>
                        {}
                    </SpecificationSection>
                    <TextTitle
                        style={{
                            marginTop: '63px',
                            marginBottom: '31px',
                        }}
                    >
                        {' '}
                        Reviews
                    </TextTitle>
                    <SpecificationSection style={{ padding: '30px 50px' }}>
                        {Array(6)
                            .fill(0)
                            .map((x, index) => (
                                <ReviewItem key={index} />
                            ))}
                    </SpecificationSection>
                </Column>
            </InnerSectionWrapper>
        </Column>
    )
}
