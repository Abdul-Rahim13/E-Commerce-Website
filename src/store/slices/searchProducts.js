import { createSlice } from '@reduxjs/toolkit'

const searchProductsSlice = createSlice({
  name: 'search',
  initialState: {
    allProducts: [],      
    searchResults: []
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload
      state.searchResults = action.payload 
    },
    searchProducts: (state, action) => {
      const keyword = action.payload.toLowerCase()
      state.searchResults = state.allProducts.filter((item) =>
        item.title.toLowerCase().includes(keyword)
      )
    }
  }
})

export const { setAllProducts, searchProducts } = searchProductsSlice.actions
export default searchProductsSlice.reducer
