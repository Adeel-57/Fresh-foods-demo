import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
    name:'orders',
    initialState:[],
    reducers:{
        placeOrder(state, action){
            state.push([...action.payload,{time:Date()}])
        },
    }
})

export const {placeOrder} = slice.actions
export default slice.reducer