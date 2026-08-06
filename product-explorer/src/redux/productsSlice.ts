import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { Product } from "../types/product"

type ProductsState = {
    products: Product[]
    selectedProduct: Product | null
    loading: boolean
    error: string
}

const initialState: ProductsState = {
    products: [],
    selectedProduct: null,
    loading: false,
    error: "",
}

export const getProducts = createAsyncThunk<Product[]>(
    "products/getProducts",
    async () => {
        const response = await fetch("https://dummyjson.com/products")
        if (!response.ok) {
            throw new Error("Ürünler alınamadı")
        }

        const data = await response.json()

        return data.users
    }
)

export const getProductById = createAsyncThunk<Product, number>(
    "products/getProductById",
    async (id) => {
        const response = await fetch(
            `https://dummyjson.com/products/${id}`
        )

        if (!response.ok) {
            throw new Error("Ürün alınamadı")
        }

        const data: Product = await response.json()

        return data
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true
            state.error = ""
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message ?? "Bir hata oluştu"
        })
            .addCase(getProductById.pending, (state) => {
                state.loading = true
                state.error = ""
                state.selectedProduct = null
            })

            .addCase(getProductById.fulfilled, (state, action) => {
                state.loading = false
                state.selectedProduct = action.payload
            })

            .addCase(getProductById.rejected, (state, action) => {
                state.loading = false
                state.error =
                    action.error.message ?? "Ürün detayı alınamadı"
            })
    },
})

export default productsSlice.reducer