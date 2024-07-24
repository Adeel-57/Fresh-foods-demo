import { createSlice } from "@reduxjs/toolkit"

const itemExisting = (state,action)=>state.findIndex((item)=>item._id===action.payload._id)
const slice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        AddToCart(state, action){  
            const existing = itemExisting(state,action)
            if(existing === -1){
                state.push({...action.payload, quantity:1})
            }
        },
        RemoveToCart(state, action){  
            const existing = itemExisting(state,action)
            if(existing !== -1){
                state.splice(existing, 1)
            }
        },
        IncreaseQuantity(state, action){  
            const existing = itemExisting(state,action)
            state[existing].quantity += 1;
        },
        DecreaseQuantity(state, action){  
            const existing = itemExisting(state,action)
            state[existing].quantity -= 1;
            if(state[existing].quantity < 1){
                state.splice(existing, 1)
            }
        }
    }
})

export const {AddToCart, RemoveToCart, IncreaseQuantity, DecreaseQuantity} = slice.actions;
export default slice.reducer;