import React,{useEffect,useState} from "react";

import { useDispatch,useSelector } from "react-redux";

import { fetchThemes, selectThemesState, selectThemes } from "../slices/themesSlice";

import { Themebox } from "../themebox/Themebox";
import { ThemeboxWindow } from "../themeboxWindow/ThemeboxWindow";
import { LoadingBrush, ThemesSection } from "./dashboard.style";


export function Dashboard(){

    const [themeWindowTheme,setThemeWindowTheme] = useState({});
    const [themeWindowOpen,setThemeWindowOpen] = useState(false);

    const dispatch = useDispatch();
    const themesLoading = useSelector(selectThemesState);
    const themes = useSelector(selectThemes);

    useEffect(()=>{
        dispatch(fetchThemes());
    },[dispatch]);

    const handleClick = (theme)=>{
        setThemeWindowTheme(theme);
        setThemeWindowOpen(true);
    }

    return (
    <div>
        {themesLoading!=="succeded"?
            <LoadingBrush xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill='currentColor' d="M18,1H10A3,3,0,0,0,7,4H6A3,3,0,0,0,3,7v3a3,3,0,0,0,3,3h6a1,1,0,0,1,1,1v1a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V17a2,2,0,0,0-2-2V14a3,3,0,0,0-3-3H6a1,1,0,0,1-1-1V7A1,1,0,0,1,6,6H7a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V4A3,3,0,0,0,18,1ZM15,17v4H13V17ZM19,6a1,1,0,0,1-1,1H10A1,1,0,0,1,9,6V4a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1Z"/></LoadingBrush>:
            <ThemesSection>
                <ThemeboxWindow isOpen={themeWindowOpen} renderTheme={themeWindowTheme} setWindow={setThemeWindowOpen}/>
               {themes.themes.map((theme)=>{
                   return <Themebox renderTheme={theme} onClick={handleClick}/>
               })}
            </ThemesSection>
        }

    </div>
    )
}