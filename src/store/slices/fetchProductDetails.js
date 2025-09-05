import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProductsDetails = createAsyncThunk('fetchProductDetails', async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    return await res.json()
})

const ProductDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: {
    data: null,
    isError: false,
    isLoading: false
  },
  
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsDetails.pending, (state) => {
        state.isLoading = true
        state.data = null
      })
      .addCase(fetchProductsDetails.fulfilled, (state, action) => {
        state.data = action.payload
        state.isError = false
        state.isLoading = false
      })
      .addCase(fetchProductsDetails.rejected, (state) => {
        state.isError = true
        state.isLoading = false
      })
  }
})


export default ProductDetailsSlice.reducer