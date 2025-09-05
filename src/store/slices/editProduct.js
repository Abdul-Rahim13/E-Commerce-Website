import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProuctByid = createAsyncThunk('fetchProuctByid', async(id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return res.data
})

export const fetchupdatedProduct = createAsyncThunk('fetchupdatedProduct', async({id, updatedData}) => {
    const res = await axios.put(`https://fakestoreapi.com/products/${id}`, updatedData)
    return res.data
})

const editProductDetailsSlice = createSlice({
    name: 'editProductDetails',
    initialState: {
        data: null,
        isLoading: false,
        isUpdating: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProuctByid.pending , (state) => {
            state.isLoading =  true,
            state.error = null
        })
        .addCase (fetchProuctByid.fulfilled, (state, action) => {
            state.data = action.payload,
            state.isLoading =  false
        })
        .addCase (fetchProuctByid.rejected, (state, action) => {
            state.isLoading =  false,
            state.error = action.error.message
        })
        .addCase(fetchupdatedProduct.pending, (state) => {
        state.isUpdating = true
      })
      .addCase(fetchupdatedProduct.fulfilled, (state, action) => {
        state.isUpdating = false
        state.data = action.payload 
      })
      .addCase(fetchupdatedProduct.rejected, (state) => {
        state.isUpdating = false
      })
    }
})

export default editProductDetailsSlice.reducer