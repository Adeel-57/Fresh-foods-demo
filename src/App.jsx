import { Outlet } from "react-router-dom"
import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import { Provider } from "react-redux"
import { store } from "./Store/store.js"
import { useState } from "react"
import { Modal } from "./Components/Modal/Modal.jsx"

function App() {
  const [query, setQuery] = useState('')
  const [isOpen, setOpen] = useState(false)
  return (
    <Provider store={store}>
      <div className={` ${isOpen?'sticky':''}`}>
      <NavBar setQuery={setQuery} setOpen={setOpen} />
      <Outlet context={query} />
      <Modal isOpen={isOpen} setOpen={setOpen} />
      </div>
    </Provider>
  )
}

export default App
