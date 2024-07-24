import React from 'react'

const Input = ({lable, id, name, value, err, onChange, type}) => {
    return (
        <>
            <label htmlFor={id}>{lable}</label>
            <input autoComplete="off" type={type} id={id} name={id} value={value} onChange={onChange} />
            <p>{err}</p>
        </>
    )
}

export default Input