import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Recipe } from "../types/recipe";

type favoriteState = {
    recipe:Recipe[],
}

const initialState:favoriteState = {
    recipe:[],
}

const favoriteSlice = createSlice({
    name:"favorites",
    initialState,
    reducers:{
        favoriyeEkle(state,action:PayloadAction<Recipe>){
           const varMi = state.recipe.find((recipe)=>recipe.id === action.payload.id)
           if(varMi){
            return
           }
           state.recipe.push(action.payload)
        },
        favoridenCikar(state,action:PayloadAction<number>){
           state.recipe = state.recipe.filter((favorite)=>favorite.id !== action.payload)
        },
         favorileriTemizle(state){
           state.recipe = []
        },
    }
})

export const {favoriyeEkle,favoridenCikar,favorileriTemizle} = favoriteSlice.actions
export default favoriteSlice.reducer