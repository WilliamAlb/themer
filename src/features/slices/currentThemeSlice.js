import { createSlice } from "@reduxjs/toolkit";
import { CONSTS } from "../../util/CONSTS";

const initialState = {
    theme:window.localStorage.getItem('savedTheme')?window.localStorage.getItem('savedTheme'):CONSTS.initialTheme,
    isDark:false
}

const currentThemeReducer = createSlice({
    name:'currentTheme',
    initialState:initialState,
    reducers:{
        changeTheme:(state,action)=>{
            state=action.payload;
            state.isDark=false;
        },
        resetTheme:(state)=>{
            state=initialState;
            state.isDark=false;
        },
        toggleDarkMode:(state)=>{
            
            state.isDark=!state.isDark;
            state.isDark? state.theme   =  CONSTS.initialThemeDark   : state.theme=CONSTS.initialTheme;
        }
    }
})

export const {changeTheme,resetTheme,toggleDarkMode} = currentThemeReducer.actions;
export const selectTheme = (state) => state.currentTheme;
export const selectDarkMode = (state) => state.currentTheme.isDark;
export default currentThemeReducer.reducer;
