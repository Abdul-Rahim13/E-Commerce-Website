import { configureStore} from '@reduxjs/toolkit'
import ProductReducer from './slices/fetchProduct'
import ProductDetailsReducer from './slices/fetchProductDetails'
import EditProductDetailsReducer from './slices/editProduct'

export const store = configureStore({
    reducer: {
        products: ProductReducer,
        productDetails: ProductDetailsReducer,
        editproductDetails: EditProductDetailsReducer
    }
})