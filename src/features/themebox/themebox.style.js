import styled from "styled-components";

export const ThemeboxDiv = styled.div`
    display:flex;
    width:380px;
    height:300px;
    background-color:${({renderTheme}) => renderTheme.backgroundColor};
    position:relative;
    border:2px solid ${({theme})=>theme.primaryColor};
    cursor:pointer;
    overflow:hidden;
    border-radius:50px;
    @media only screen and (max-width:400px){
        height:150px;
        width:200px;
    }
`
export const ThemeboxTriangle = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 300px 380px;
    border-color: transparent transparent ${({renderTheme}) => renderTheme.primaryColor} transparent;

    @media only screen and (max-width:400px){
        border-width: 0 0 150px 200px;
    }
`
export const ThemeboxText = styled.p`
    position:absolute;
    font-size:2rem;
    top:10%;
    left:10%;
    color:${({renderTheme})=>renderTheme.textColor};

    @media only screen and (max-width:400px){
        font-size:1rem;
    }
`
export const ThemeboxCube = styled.div`
    position:absolute;
    bottom:5%;
    right:5%;
    height:100px;
    width:100px;
    background-color:${({renderTheme})=>renderTheme.secondaryColor};
    border-radius:50%;

    @media only screen and (max-width:400px){
        height:50px;
        width:50px;
    }
`