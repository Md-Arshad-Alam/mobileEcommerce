import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        auth: authReducer,
    },
});

export default store;
