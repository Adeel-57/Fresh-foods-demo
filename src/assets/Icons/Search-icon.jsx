import React, { useState } from 'react'
import './Search-icon.css'

const Search_icon = ({ size, color, setQuery }) => {
    function onInput(e){
        setQuery(e.target.value.trim().toLowerCase())
    }
    return (
        <div className='Search' >
            <input type="text" className='Search_input' onInput={onInput} onBlur={(e)=>{setQuery('');e.target.value=''}} autoComplete='off'/>
            <svg width={size} height={size} viewBox="2 2 20 18" className='Search_icon'>
                <path fill={color} d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />
            </svg>
        </div>
    )
}

export default Search_icon