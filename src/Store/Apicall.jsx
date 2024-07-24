import React from 'react'

const Apicall = (store) => (next) => (action) => {
  console.log(action)
  next(action)
}

export default Apicall