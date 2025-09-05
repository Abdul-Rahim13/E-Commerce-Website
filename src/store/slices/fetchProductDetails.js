import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProductDetails = createAsyncThunk('fetchProductDetails', async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    return await res.json()
})

const ProductDetailsSlice = createSlice({
    name: 'ProductDetails',
    initialState:{
        data: [],
        isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.data = action.payload
            state.isError = false
        })
        .addCase(fetchProductDetails.rejected, (state) => {
            state.isError = true
        })
    }
})

export default ProductDetailsSlice.reducer