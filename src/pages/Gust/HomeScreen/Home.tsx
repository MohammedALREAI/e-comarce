import React, { useEffect } from 'react'
import { TopRate } from '../TopRate/TopRate'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SliceArray } from 'utils/SliceArray'
import { GuestActions } from 'redux/Guest/GuestAction'
import { TState } from 'redux/Store'
import { SpinnerContainer } from 'Component/widget/styles'
import { Slider } from 'Component/Slider/slider'
import { FeaturedProducts } from '../FeaturedProducts/FeaturedProducts'

export const HomeScreen = () => {
    const dispatch = useDispatch()
    const { fetchSliderImage, fetchProduct } = bindActionCreators(GuestActions, dispatch)

    const { isLoading, sliderImages, products } = useSelector((state: TState) => state.gust)
    const chunkSize = window.innerWidth > 1100 ? 3 : window.innerWidth > 800 ? 2 : 1

    const sliceArray = SliceArray(products, chunkSize)
    useEffect(() => {
        fetchSliderImage()
        fetchProduct()
    }, [dispatch])

    return isLoading
? (
        <SpinnerContainer />
    )
: (
        <>
            <Slider data={sliderImages} />
            <FeaturedProducts data={sliceArray} />
            <TopRate data={sliderImages} />
        </>
    )
}
