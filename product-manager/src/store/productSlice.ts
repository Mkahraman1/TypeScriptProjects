import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Product } from '../types/Product';
import axios from "axios";

type ProductState = {
    products: Product[];
    loading: boolean;
    error: string | null;
};

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null
}

export const fetchProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        const response = await axios.get<Product[]>("http://localhost:3001/products");
        return response.data;
    }
)

export const addProducts = createAsyncThunk(
    "product/addProducts",
    async (product: Product) => {
        const response = await axios.post("http://localhost:3001/products", product)
        return response.data
    }
)

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id: string) => {
        await axios.delete(`http://localhost:3001/products/${id}`);
        return id;
    }
);

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message || "Bilinmeyen bir hata oluştu";
            })
            .addCase(addProducts.fulfilled, (state, action) => {
                state.products.push(action.payload)
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter((product) => product.id !== action.payload)
            })
    }
})

export default productSlice.reducer;





