import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  return await res.json()
})

const ProductSlice = createSlice({
  name: 'fetchProducts',
  initialState: {
    data: [],
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload
        state.isError = false
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isError = true
    })
  },
})

export default ProductSlice.reducer
