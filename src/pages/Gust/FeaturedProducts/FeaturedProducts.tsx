/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-lone-blocks */
import { useState, CSSProperties, useEffect } from 'react'
import { CardItem } from './CardItem'
import SwipeableViews from 'react-swipeable-views'
import { InnerSection, SpinnerContainer } from '../../../Component/widget/styles'
import { Dot } from '../HomeScreen/Home.styles'
import { LabelName } from './LableTitle'
import { IProduct } from '../../../redux/Guest/GuestState.interface'
import { FeaturedProductsContainer, WrapperDots, RowInnerSlider } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { TState } from '../../../redux/Store'
import { fetchProduct } from '../../../redux/FeatuerPorduct/FeatuerPorductAction'

interface Props {
  data: IProduct[];
}

const cssStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
}

const cssWrapper: CSSProperties = {
  width: '100%',
  height: '90%',
  background: '#F7F8FC',
}
const DotsStyles: CSSProperties = {
  color: '#707070',
  zIndex: 2,
  margin: 10,
}

export const FeaturedProducts = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(0)

  const dispatch = useDispatch()

  const fetchFeathers = useSelector((state: TState) => state.fetchFeathers)

  useEffect(() => {
       console.log('enter')
    dispatch(fetchProduct())
  }, [dispatch])


  const handleChangeIndex = () => console.log('change index')

 const chunkSize =
    window.innerWidth > 1100 ? 3 : window.innerWidth > 1100 ? 2 : 1
  const getSlides = () => {
    const chunks: any = []

    fetchFeathers.products.map((i:any, idx:number) => {
      if (idx % chunkSize === 0) {
        chunks.push([])
      }

      const firstArrayLength = chunks.length
      const secondArrayLength = chunks[firstArrayLength - 1].length

      chunks[firstArrayLength - 1][secondArrayLength] = i

      return i
})

    return chunks.map((i: any, inx: number) => (
      <RowInnerSlider key={inx}>
        {i.map((item: IProduct) => (
          <CardItem
            product={item}
            key={item._id}
            _id={item._id}
            image={'https://proshop-ms.herokuapp.com/' + item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </RowInnerSlider>
    ))
  }






{ /* <RowInnerSlider key={i}>
        {chunks.map((item:any, itemIndex:number) => (
          <CardItem
            widthBorder={false}
            _id={item._id}
            key={item._id}
            image={'https://proshop-ms.herokuapp.com' + item.image}
            name={item.name}
            price={item.price}
            product={item}
            rating={item.rating}
          />
        ))} */ }







//   if (!fetchFeathers.isLoading) {
// //     len = SliceArrayMe.length
// //     sliderData = SliceArrayMe.map((x:any, i:number) => (
// //       <RowInnerSlider key={i}>
// //         {x.map((item:any, itemIndex:number) => (
// //           <CardItem
// //             widthBorder={false}
// //             _id={item._id}
// //             key={item._id}
// //             image={'https://proshop-ms.herokuapp.com' + item.image}
// //             name={item.name}
// //             price={item.price}
// //             product={item}
// //             rating={item.rating}
// //           />
// //         ))}
// //       </RowInnerSlider>
// //     ))
//   }

  return fetchFeathers.isLoading
? (
    <SpinnerContainer />
  )
: (
    <>
      <FeaturedProductsContainer>
        <InnerSection style={cssWrapper}>
          <LabelName />
          <SwipeableViews index={sliderIndex} style={cssStyle}>
            {getSlides()}
          </SwipeableViews>

          <WrapperDots>
            {Array(getSlides().length)
              .fill(0)
              .map((x, i) => (
                <Dot
                  style={DotsStyles}
                  width="14px"
                  isGrey={sliderIndex !== i}
                  onClick={() => setSliderIndex(i)}
                />
              ))}
          </WrapperDots>
        </InnerSection>
      </FeaturedProductsContainer>
    </>
  )
}
