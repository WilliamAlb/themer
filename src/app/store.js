import { configureStore } from "@reduxjs/toolkit";


import currentThemeReducer from '../features/slices/currentThemeSlice';
import themesReducer from '../features/slices/themesSlice';



export const store = configureStore({
    reducer:{
        currentTheme:currentThemeReducer,
        themes:themesReducer,
    }
})