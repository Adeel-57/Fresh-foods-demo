import React, { useEffect, useState } from 'react'

const useLocalStorage = (key,initialData) => {
    const[localData, setLocalData]=useState(initialData)
    useEffect(()=>{
        const existing = JSON.parse(localStorage.getItem(key))
        if(existing){
            setLocalData(existing)
        }else{
            localStorage.setItem(key,JSON.stringify(initialData))
        }
    },[])
    function updateLocalStorage(newData){
        if(typeof newData === 'function'){
            localStorage.setItem(key,JSON.stringify(newData(localData)))
        }else{
            localStorage.setItem(key,JSON.stringify(newData))
        }
        setLocalData(JSON.parse(localStorage.getItem(key)))
    }
    return[localData,updateLocalStorage]
}

export default useLocalStorage