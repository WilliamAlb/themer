import React from "react";
import { useSelector } from "react-redux";
import { selectThemes } from "../slices/themesSlice";

export function Themebox(){
    const themes = useSelector(selectThemes);
    return (
        <div>
            
        </div>
    )
}