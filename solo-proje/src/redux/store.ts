import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from '../redux/recipeSlice';
import favoriteReducer from '../redux/favoritesSlice';

export const store = configureStore({
    reducer: {
        recipes:recipeReducer,
        favorites:favoriteReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;