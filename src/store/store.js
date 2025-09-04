import { configureStore} from '@reduxjs/toolkit'
import ProductReducer from './slices/fetchProduct'

export const store = configureStore({
    reducer: {
        products: ProductReducer
    }
})