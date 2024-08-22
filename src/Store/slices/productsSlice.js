import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: 'products',
    initialState:[],
    reducers:{
        updateProducts(state, action){
            return state = action.payload;
        }
    }
})
export const {updateProducts} = slice.actions
export default slice.reducer