import React from 'react'

const Input = ({lable, name, value, err, onChange, type}) => {
    return (
        <>
            <p className='lable'>{lable}</p>
            <input autoComplete="off" type={type} name={name} value={value} onChange={onChange} />
            <p className='err'>{err}</p>
        </>
    )
}

export default Input