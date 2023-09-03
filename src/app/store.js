import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";
import authSlice from "../features/auth/AuthSlice";

export const store = configureStore({
    reducer : {
        product : productSlice,
        user : authSlice
    }
})