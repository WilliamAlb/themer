import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { collection,getDocs } from "firebase/firestore/lite";
import { database } from "../../util/firebase";

export const FBfetchThemes = async () =>{
    console.log(database);
    const themesCol = collection(database, 'themes');
    const themes = await getDocs(themesCol);
    const themesList = themes.docs.map(doc => doc.data());
    return themesList;
}

export const fetchThemes = createAsyncThunk(
    'themes/fetchThemes',
     FBfetchThemes
)

const initialState = {
    themes:[],
    status:'idle',
};

const themesReducer = createSlice({
    name:'themes',
    initialState:initialState,
    reducers:{
        addThing:(state,action)=>{
            state.push(action.payload);
        }
    },
    extraReducers:{
        [fetchThemes.pending]:(state) =>{
            state.status='loading';
        },
        [fetchThemes.fulfilled]:(state,action) =>{
            state.status='succeded';
            state.themes=action.payload;
        },
        [fetchThemes.rejected]:(state,action)=>{
            state.status='failed';
            console.log(action);
        }
    }
});

export default themesReducer.reducer;
export const selectThemes = (state)=> state.themes;