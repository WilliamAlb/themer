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
    border-radius:20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    @media only screen and (max-width:450px){
        height:150px;
        width:200px;
    }
`
export const ThemeboxContent1 = styled.div`
    width: 80%;
    height: 10px;
    background-color:${({renderTheme})=>renderTheme.primaryColor};
    position:absolute;
    top:35%;
    left 10%;
    border-radius:20px;

`
export const ThemeboxContent2 = styled.div`
    width: 80%;
    height: 10px;
    background-color:${({renderTheme})=>renderTheme.primaryColor};
    position:absolute;
    top:45%;
    left 10%;
    border-radius:20px;
`
export const ThemeboxContent3 = styled.div`
    width: 60%;
    height: 10px;
    background-color:${({renderTheme})=>renderTheme.primaryColor};
    position:absolute;
    top:55%;
    left 10%;
    border-radius:20px;
    @media only screen and (max-width:450px){
        width:58%;
    }
`
export const ThemeboxContent4 = styled.div`
    width: 55%;
    height: 10px;
    background-color:${({renderTheme})=>renderTheme.primaryColor};
    position:absolute;
    top:65%;
    left 10%;
    border-radius:20px;

`
export const ThemeboxContent5 = styled.div`
    width: 50%;
    height: 10px;
    background-color:${({renderTheme})=>renderTheme.primaryColor};
    position:absolute;
    top:75%;
    left 10%;
    border-radius:20px;

`
export const ThemeboxText = styled.p`
    position:absolute;
    font-size:2rem;
    top:10%;
    left:10%;
    color:${({renderTheme})=>renderTheme.textColor};

    @media only screen and (max-width:450px){
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
    border: 2px solid ${({renderTheme})=>renderTheme.primaryColor};

    @media only screen and (max-width:450px){
        height:50px;
        width:50px;
    }
`