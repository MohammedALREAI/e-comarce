import React, { useState } from 'react'
import { Slider } from '../../../Component/Slider/slider'
import { FeaturedProducts } from '../FeaturedProducts/FeaturedProducts'
import { TopRate } from '../TopRate/TopRate'


export const HomeScreen = () => {
    return (
<>
<Slider/>
<FeaturedProducts/>
<TopRate/>
</>
)
    }
