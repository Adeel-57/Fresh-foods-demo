import React, { useEffect, useState } from 'react'
import { hero } from '../../assets/assets'
import './ItemSlider.css'

const ItenSlider = () => {
    const [index, setIndex] = useState(0)
    const [timer, setTimer] = useState()
    useEffect(function () {
        clearTimeout(timer)
        let timerID = setTimeout(() => {
            nextIndex()
        }, 3000)
        setTimer(timerID)
    }, [index])
    function nextIndex() {
        if (index < hero.length - 1) { setIndex(pre => pre + 1) }
        else { setIndex(0) }
    }
    function prevIndex() {
        if (index > 0) { setIndex(pre => pre - 1) }
        else { setIndex(hero.length - 1) }
    }
    return (
        <div className='slider-container'>
            <div className="slider-content">
                <div className="btn">
                    <button onClick={prevIndex}>Previos</button>
                    <button onClick={nextIndex}>Next</button>
                </div>
                <img src={hero[index]} alt="" />
            </div>
        </div>
    )
}

export default ItenSlider