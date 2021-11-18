import React from "react";
import { ThemeboxCube, ThemeboxDiv, ThemeboxText, ThemeboxTriangle } from "./themebox.style";

export function Themebox({onClick,renderTheme}){

    return (
        <ThemeboxDiv renderTheme={renderTheme} onClick={e=>onClick(renderTheme)}>
            <ThemeboxTriangle renderTheme={renderTheme}></ThemeboxTriangle>
            <ThemeboxText renderTheme={renderTheme}>{renderTheme.name}</ThemeboxText>
            <ThemeboxCube renderTheme={renderTheme}></ThemeboxCube>
        </ThemeboxDiv>
    )
}