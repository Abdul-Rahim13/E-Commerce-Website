import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const searchProductsSlice = createSlice({
    name: 'search',
    initialState:{
        searchResults: []
    },
    reducers: {
        searchProducts: (state, action) => {
            const keyword = action.payload.toLowerCase()
            state.searchResults = state.users.filter((item) => {
                return item.name.toLowerCase().includes(keyword)
            })
        }
    }
})

export default searchProductsSlice.reducer