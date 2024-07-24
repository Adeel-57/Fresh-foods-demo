import { createSlice } from "@reduxjs/toolkit"

const itemExisting = (state,action)=>state.findIndex((item)=>item._id===action.payload._id)
const slice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers:{
        AddToWishList(state, action){  
            const existing = itemExisting(state,action)
            if(existing === -1){
                state.push({...action.payload})
            }
        },
        RemoveToWishList(state, action){  
            const existing = itemExisting(state,action)
            if(existing !== -1){
                state.splice(existing, 1)
            }
        },
        
    }
})

export const {AddToWishList, RemoveToWishList} = slice.actions;
export default slice.reducer;
