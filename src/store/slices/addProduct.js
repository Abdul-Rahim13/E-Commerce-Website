import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const addProduct = createAsyncThunk('addProduct', async (newProduct) => {
  const res = await axios.post('https://fakestoreapi.com/products', newProduct)
  return res.data
})

const addProductSlice = createSlice({
  name: 'addProduct',
  initialState: {
    data: null,         
    isAdding: false,    
    error: null,        
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.isAdding = true
        state.error = null
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isAdding = false
        state.data = action.payload
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isAdding = false
        state.error = action.error.message
      })
  },
})

export default addProductSlice.reducer
