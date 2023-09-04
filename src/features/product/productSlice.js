import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProducts, productDetails } from './productApi';

export const fetchProductsAsync = createAsyncThunk('product/fetchProducts', async() => {
    const res = await fetchProducts()
    return res.data;
})
export const productDetailsAsync = createAsyncThunk('product/productDetails', async(id) => {
    const res = await productDetails(id)
    return res.data;
})

const productSlice = createSlice({
    name : 'product',
    initialState : {
        product : null,
        isLoading : false,
        error : null,
        products : [],
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchProductsAsync.pending, (state) => {
            state.isLoading = true;
            state.error = null;
            state.products = []
        })
        .addCase(fetchProductsAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.products = action.payload
        })
        .addCase(fetchProductsAsync.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.products = []
        })
        .addCase(productDetailsAsync.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(productDetailsAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        })
        .addCase(productDetailsAsync.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export default productSlice.reducer;