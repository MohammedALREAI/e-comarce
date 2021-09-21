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

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import { TState, AppDispatch } from '../../../redux/Store'
import { Navigation } from '../../../Component/Navigation/Navigater'
import { URL_IMAGES } from '../../../Const/env'
import { formatDate } from '../../../utils/formatDate'
import { fetchProduct, getProductById } from '../../../redux/Guest/GuestAction'

// import { useToken } from '../../../utils/useToken'
import { ReviewActions } from '../../../redux/Review/ReviewAction'

const ProductItem = () => {
  const dispatch = useDispatch()
  const gust = useSelector((state: TState) => state.gust)
  const { product } = gust
  const state = useSelector((state: TState) => state)
  const { id } = useParams<{ id: string }>()
  const search = useLocation().search
  const reviewFromQuery = (
    new URLSearchParams(search).get('review') ? new URLSearchParams(search).get('review') : ''
  ) as string
  const ratingFromQuery = (
    new URLSearchParams(search).get('rating') ? new URLSearchParams(search).get('rating') : 0
  ) as number
  const [count, setCount] = useState<number>(1)
  const [rating, setRating] = useState<number>(ratingFromQuery || 0)
  const [review, setReview] = useState<string>(reviewFromQuery || '')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    console.log('enter to this seeee+')

       dispatch(fetchProduct())
  dispatch(getProductById(id))
  }, [dispatch, id])

  useEffect(() => {
    if (state.review?.success) {
      const data = {
        comment: review,
        rating,
        createdAt: formatDate(new Date().toString()),
        name: state.auth.user?.name,
      }

      dispatch(ReviewActions.addReview(data, id))
      setError('')
      setReview('')
      setRating(0)
    }
  }, [dispatch, rating, review, state.review?.success, state?.auth.user.name])

  //   type pr = ReturnType<typeof product.product.product >
  console.log('the  product item is ', product.product)

  return product.product.isLoading && !product.product.product
? (
    <SpinnerContainer />
  )
: (
    <Column bg="#FFFFFF" height={948}>
      <InnerSectionWrapper>
        <Navigation title={product.product?.product?.brand + ''} />
        <Row mt={62}>
          <LeftContainer>
            <LeftSide image={`${URL_IMAGES}${product?.product?.product?.image}`} />
          </LeftContainer>
          <RightContainer>
            <RightSide product={product!.product!.product!} count={1} />
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
                    <TextRow>{product?.product?.product?.brand} </TextRow>
                  </Row>
                </HalfRow>
                <HalfRow isHover={false}>
                  <Row>category:</Row>
                  <Row>{product?.product?.product?.category}</Row>
                </HalfRow>
              </Row>
            </Column>
          </SpecificationSection>
          {product &&
            product.product &&
            product.product.product &&
            product.product.product.reviews &&
            product.product.product.reviews.length > 0 && (
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
                  {product.product.product?.reviews?.length &&
                    product.product.product.reviews.map((review: any) => (
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

export default ProductItem
