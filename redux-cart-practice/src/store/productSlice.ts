import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../types/product";


export type CartItem = Product & {
    quantity: number;
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        sepeteEkle(state, action: PayloadAction<Product>) {
            const product = action.payload;
            const existingProduct = state.items.find((item) => item.id === product.id)
            if (existingProduct) {
                existingProduct.quantity += 1
            } else {
                state.items.push({
                    ...product,
                    quantity: 1,
                })
            }
        },
        adetArttir(state, action: PayloadAction<string>) {
            const product = state.items.find((item) => item.id === action.payload)
            if (product) {
                product.quantity += 1
            }
        },
        adetAzalt(state, action: PayloadAction<string>) {
            const product = state.items.find((item) => item.id === action.payload)
            if (product && product.quantity > 1) {
                product.quantity -= 1
            } else {
              state.items = state.items.filter((item) => item.id !== action.payload)
            }
        },
        sepettenSil(state, action: PayloadAction<string>) {
            const product = state.items.find((item) => item.id === action.payload)
            if (product) {
             state.items = state.items.filter((item) => item.id !== action.payload)
            }
        },
        sepetiTemizle(state) {
            state.items = []
        }
    }
})

export const {sepeteEkle,adetArttir,adetAzalt,sepettenSil,sepetiTemizle} = cartSlice.actions;
export default cartSlice.reducer;