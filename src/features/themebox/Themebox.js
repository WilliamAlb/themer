import React from "react";
import { ThemeboxCube, ThemeboxDiv, ThemeboxText, ThemeboxContent1,ThemeboxContent2,ThemeboxContent3, ThemeboxContent4, ThemeboxContent5 } from "./themebox.style";

export function Themebox({onClick,renderTheme}){

    return (
        <ThemeboxDiv renderTheme={renderTheme} onClick={e=>onClick(renderTheme)}>
            <ThemeboxContent1 renderTheme={renderTheme}></ThemeboxContent1>
            <ThemeboxContent2 renderTheme={renderTheme}></ThemeboxContent2>
            <ThemeboxContent3 renderTheme={renderTheme}></ThemeboxContent3>
            <ThemeboxContent4 renderTheme={renderTheme}></ThemeboxContent4>
            <ThemeboxContent4 renderTheme={renderTheme}></ThemeboxContent4>
            <ThemeboxContent5 renderTheme={renderTheme}></ThemeboxContent5>
            <ThemeboxText renderTheme={renderTheme}>{renderTheme.name}</ThemeboxText>
            <ThemeboxCube renderTheme={renderTheme}></ThemeboxCube>
        </ThemeboxDiv>
    )
}