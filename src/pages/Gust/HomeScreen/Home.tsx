import React, { useEffect } from 'react'
import { TopRate } from '../TopRate/TopRate'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchSliderImage,
} from '../../../redux/Guest/GuestAction'
import { TState } from '../../../redux/Store'
import { SpinnerContainer } from '../../../Component/widget/styles'
import { Slider } from '../../../Component/Slider/slider'
import { FeaturedProducts } from '../FeaturedProducts/FeaturedProducts'

 const HomeScreen = () => {
  const dispatch = useDispatch()

  const state = useSelector((state: TState) => state)

  useEffect(() => {
    dispatch(fetchSliderImage())
  }, [dispatch])

  console.log('the slice isLoading', state.gust.isLoading)

  return state.gust.isLoading
? (
    <SpinnerContainer />
  )
: (
    <>

      <Slider data={state.gust.sliderImages} />
        <FeaturedProducts />
        <TopRate data={state.gust.sliderImages} />
    </>
  )
}


export default HomeScreen
