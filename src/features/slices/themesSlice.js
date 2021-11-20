import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { collection,getDocs,setDoc,doc } from "firebase/firestore/lite";
import { database } from "../../util/firebase";
import {v4} from 'uuid';


export const fetchThemes = createAsyncThunk(
    'themes/fetchThemes',
    async () =>{
        const themesCol = collection(database, 'themes');
        const themes = await getDocs(themesCol);
        const themesList = themes.docs.map(doc => doc.data());
        return themesList;
    }
)
export const writeThemes = createAsyncThunk(
    'themes/writeThemes',
    async (theme) =>{
        await setDoc(doc(database,'themes',v4()),{
            primaryColor:theme.primaryColor,
            secondaryColor:theme.secondaryColor,
            textColor:theme.textColor,
            backgroundColor:theme.backgroundColor,
            name:theme.name,
        })
        .then(() => {
            theme.navigator('/');
        })
        .catch((error) => {
            console.log(error.code);
        });
    }

    
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
            state.themes.push(action.payload);
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
        [fetchThemes.rejected]:(state)=>{
            state.status='failed';
        },
        [writeThemes.pending]:(state) =>{
            state.status='loading';
        },
        [writeThemes.fulfilled]:(state) =>{
            state.status='succeded';
        },
        [writeThemes.rejected]:(state)=>{
            state.status='failed';
        }
    }
});

export default themesReducer.reducer;
export const selectThemes = (state)=> state.themes;
export const selectThemesState = (state) => state.themes.status;