import type { Recipe } from "../types/recipe";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type recipeState = {
    recipes: Recipe[],
    selectedRecipe: Recipe | null,
    loading: boolean,
    error: string
}

const initialState: recipeState = {
    recipes: [],
    selectedRecipe: null,
    loading: false,
    error: ""
}

export const getRecipes = createAsyncThunk<Recipe[]>(
    "recipes/getRecipes",
    async () => {
        const response = await fetch("https://dummyjson.com/recipes")
        if (!response.ok) {
            throw new Error("Recipeler alinamadi")
        }
        const data = await response.json()
        return data.recipes
    }
)

export const getRecipeById = createAsyncThunk<Recipe, number>(
    "recipes/getRecipeById",
    async (id) => {
        const response = await fetch(
            `https://dummyjson.com/recipes/${id}`
        );

        if (!response.ok) {
            throw new Error("Recipe alınamadı");
        }
        const data = await response.json();
        return data;
    }
);

const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        selectedRecipeTemizle(state) {
            if (!state.selectedRecipe) {
                return
            } else {
                state.selectedRecipe = null
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRecipes.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.recipes = action.payload;
            })
            .addCase(getRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Ürün detayi alinamadi";
            })
            .addCase(getRecipeById.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getRecipeById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedRecipe = action.payload
            })
            .addCase(getRecipeById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Ürün detayi alinamadi"
            })

    }
})

export const { selectedRecipeTemizle } = recipeSlice.actions
export default recipeSlice.reducer