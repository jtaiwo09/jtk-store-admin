import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isError: false,
        loading: false,
    },
    reducers: {
        //GET ALL
        getProductStart: (state)=> {
            state.loading = true;
        },
        getProductSuccess: (state, action)=> {
            state.loading = false;
            state.isError = false
            state.products = action.payload;
        },
        getProductFailure: (state)=> {
            state.loading = false;
            state.isError = true;
        },
        //DELETE PRODUCT
        deleteProductStart: (state)=> {
            state.loading = true;
        },
        deleteProductSuccess: (state, action)=> {
            state.loading = false;
            state.isError = false;
            // state.products = state.products.splice(state.products.findIndex(product=> product._id === action.payload, 1))
            state.products = state.products.filter(item=> item._id !== action.payload);
        },
        deleteProductFailure: (state)=> {
            state.loading = false;
            state.isError = true;
        },
        //UPDATE PRODUCT
        updateProductStart: (state)=> {
            state.loading = true;
        },
        updateProductSuccess: (state, action)=> {
            state.loading = false;
            state.isError = false;
            state.products[state.products.findIndex(product=> product._id === action.payload.id, 1)] = action.payload.product
        },
        updateProductFailure: (state)=> {
            state.loading = false;
            state.isError = true;
        },
        //ADD PRODUCT
        addProductStart: (state)=> {
            state.loading = true;
        },
        addProductSuccess: (state, action)=> {
            state.loading = false;
            state.isError = false;
            state.products.push(action.payload)
        },
        addProductFailure: (state)=> {
            state.loading = false;
            state.isError = true;
        },
    }
});

export const { getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure, updateProductStart, updateProductSuccess, updateProductFailure, addProductStart, addProductSuccess, addProductFailure } = productSlice.actions;
export default productSlice.reducer;