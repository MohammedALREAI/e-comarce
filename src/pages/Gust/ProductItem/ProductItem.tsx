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
import { Column, Row, SpinnerContainer } from '../../../Component/widget/styles'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { TState } from '../../../redux/Store'
import { Navigation } from '../../../Component/Navigation/Navigater'
import { URL_IMAGES } from '../../../Const/env'
import { formatDate } from '../../../utils/formatDate'
import { fetchProduct, getProductById } from '../../../redux/Guest/GuestAction'

export const ProductItem = () => {
  const dispatch = useDispatch()
  const gust = useSelector((state: TState) => state.gust)
  const { id } = useParams<{id:string}>()
  useEffect(() => {
    console.log('ssssssssssssssssss45454mm')
    dispatch(getProductById(Number(id)))
  }, [])

  console.log('ther p', gust.product?.isLoading || gust?.product?.product?.isLoading)

  return gust.product?.isLoading || gust?.product?.product?.isLoading
? (
    <SpinnerContainer />
  )
: (
    <Column bg="#FFFFFF" height={948}>
      <InnerSectionWrapper>
        <Navigation title={gust.product.product.product.name} />
        <Row mt={62}>
          <LeftContainer>
            <LeftSide image={URL_IMAGES + gust.product.product.image} />
          </LeftContainer>
          <RightContainer>
            <RightSide product={gust.product.product} count={1} />
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
              <Row>
                <HalfRow isHover={true}>
                  <Row>
                    <TextRow>Brand :</TextRow>
                  </Row>
                  <Row>
                    <TextRow>{gust.product.product.brand} </TextRow>
                  </Row>
                </HalfRow>
                <HalfRow isHover={false}>
                  <Row>category:</Row>
                  <Row>{gust.product.product.category}</Row>
                </HalfRow>
              </Row>
            </Column>
          </SpecificationSection>
          {gust.product.product.reviews?.length > 0 && (
            <>
              <TextTitle
                style={{
                  marginTop: '63px',
                  marginBottom: '31px',
                }}
              >
                Reviews
              </TextTitle>
              <SpecificationSection style={{ padding: '30px 50px' }}>
                {gust.product.product.reviews.length &&
                  gust.product.product.reviews.map((review: any) => (
                    <ReviewItem
                      key={review._id}
                      title={review.name}
                      text={review.comment}
                      date={formatDate(review.createdAt)}
                      rate={review}
                    />
                  ))}
              </SpecificationSection>
            </>
          )}
        </Column>
      </InnerSectionWrapper>
    </Column>
  )
}
