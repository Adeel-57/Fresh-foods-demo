import { createContext, useState } from "react";

export const CartContext = createContext()

export const ContexProvider = ({children})=>{
const [isAdd, setAdd] = useState([])
return <CartContext.Provider value={[isAdd, setAdd]}>
    {
        children
    }
</CartContext.Provider>
}