import { configureStore} from '@reduxjs/toolkit'
import ProductDetailsReducer from './slices/fetchProductDetails'

export const store = configureStore({
    reducer: {
        products: ProductDetailsReducer
    }
})