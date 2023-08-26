import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async()=>{
    try{
    const res = await axios.get('')
        return res.data;
    } 
    catch (error) {
      console.log(error);
    };
})

