import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { checkUser, createUser } from './AuthApi'

export const createUserAsync = createAsyncThunk('user/createUser', async(userData)=>{
    const res = await createUser(userData)
    return res.data
})
export const checkUserAsync = createAsyncThunk('user/checkUser', async(loggedInUser) => {
    const res= await checkUser(loggedInUser)
    return res.data
})

const authSlice = createSlice({
    name : 'user',
    initialState : {
        loggedInUser : null,
        error : null,
        isLoading : false,
    },
    extraReducers : (builder) => {
        builder
        .addCase(createUserAsync.pending, (state) => {
            state.isLoading = true;
            state.loggedInUser = null;
            state.error = null;
        })
        .addCase(createUserAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.loggedInUser = action.payload;
            state.error = null;
        })
        .addCase(createUserAsync.rejected, (state, action) => {
            state.isLoading = false;
            state.loggedInUser = null;
            state.error = action.error.message;
        })
        .addCase(checkUserAsync.pending, (state) => {
            state.isLoading = false;
            state.loggedInUser = null;
            state.error = null;
        })
        .addCase(checkUserAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.loggedInUser = action.payload;
            state.error = null;
        })
        .addCase(checkUserAsync.rejected, (state, action) => {
            state.isLoading = false;
            state.loggedInUser = null;
            state.error = action.error.message;
        })
    }
})

export default authSlice.reducer;