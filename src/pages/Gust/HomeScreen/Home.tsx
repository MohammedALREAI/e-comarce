import React, { useEffect } from 'react'
import { Slider } from '../../../Component/Slider/slider'
import { FeaturedProducts } from '../FeaturedProducts/FeaturedProducts'
import { TopRate } from '../TopRate/TopRate'
import { useDispatch, useSelector } from 'react-redux'
import { TState } from '../../../redux/Store'
import { GuestActions } from '../../../redux/Guest/index'
import { IGuestState } from '../../../redux/Guest/GuestState.interface'
import { bindActionCreators } from 'redux'
import { SpinnerContainer } from '../../../Component/widget/styles'
import { SliceArray } from 'utils/SliceArray'

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
? <SpinnerContainer />
: (
                <>
                    <Slider data={sliderImages} />
                    <FeaturedProducts data={sliceArray}/>
                    <TopRate data={sliderImages} />
                </>)
        }
