import React, { useEffect, useState } from 'react'
import { hero } from '../../assets/assets'
import './ItemSlider.css'

const ItenSlider = () => {
    const item = ['https://images.pexels.com/photos/1126373/pexels-photo-1126373.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=600'] 
    const [index, setIndex] = useState(0)
    useEffect(function () {
        let timerID = setTimeout(() => {
            nextIndex()
        }, 3000)
        return ()=>{
            clearTimeout(timerID)
        }
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