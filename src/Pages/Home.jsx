import React, { useState } from 'react'
import HeroSection from "../Components/HeroSection/HeroSection"
import Categories from '../Components/Category/Categories'
import FoodItems from '../Components/FoodItems/FoodItems'
import ItenSlider from '../Components/ItemSlider/ItenSlider'

const Home = () => {
    const[category, setCategory] = useState('')
    return (
        <>
            <HeroSection />
            <Categories category={category} setCategory={setCategory}/>
            <FoodItems category={category}/>
            <ItenSlider/>
        </>
    )
}

export default Home