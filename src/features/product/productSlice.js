import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetch = createAsyncThunk('product/fetch', async() => {
    // const res = await axios.get('https://fakestoreapi.com/products')
    const res = await axios.get('http://localhost:8080/products')
    return res.data;
})

const productSlice = createSlice({
    name : 'product',
    initialState : {
        isLoading : false,
        error : null,
        products : []
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetch.pending, (state) => {
            state.isLoading = true;
            state.error = null;
            state.products = []
        })
        .addCase(fetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.products = action.payload
        })
        .addCase(fetch.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.products = []
        })
    }
})

export default productSlice.reducer;