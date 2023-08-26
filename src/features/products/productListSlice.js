import { createSlice } from '@reduxjs/toolkit'

export const productListSlice = createSlice({
    name : 'ProductsList',
    initialState : [],
    reducers : {
        addProduct : (state) => {

        }
    }
});

export const { addProduct } = productListSlice.actions;
export default productListSlice.reducer;