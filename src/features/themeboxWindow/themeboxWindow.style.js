import styled from "styled-components";

export const PopupDiv = styled.div`
    display: flex;
    flex-direction:column;
    min-width:260px;
    max-width:800px;
    height:100%;
    background-color:${({theme})=>theme.backgroundColor};

`
export const Button = styled.button`
    font-family:'Roboto';
    font-weight:300;
    font-size:1.5rem;
    background-color:${({theme})=>theme.backgroundColor};
    border-color:${({theme})=>theme.textColor};
    color:${({theme})=>theme.textColor};
    margin:10px;
    padding:10px 30px;
    height: 50px;
    cursor:pointer;
    transition:0.2s all;
    border-radius:60px;
    z-index:10;

    &:hover{
        background-color:${({theme})=>theme.textColor};
        border-color:${({theme})=>theme.textColor};
        color:${({theme})=>theme.backgroundColor};
    }

`

export const ButtonContainer = styled.div`
    display:flex;
    width:100%;
    height:fit-content;
    justify-content:center;
    align-items:center;

`
export const CirclesContainer = styled.div`
    display:flex;
    justify-content:space-around;
    width:100%;
    height:100%;
    flex-wrap:wrap;
    overflow:overlay;
    
`
export const CircleContainer = styled.div`
    width:400px;
    height:50%;
    position:relative;
    font-size:1.5rem;
    color:${({theme})=>theme.textColor};
    display:flex;
    justify-content:space-around;
    align-items:center;

    @media only screen and (max-width:410px){
        font-size:1rem;
        width:200px;
    }
`
export const CircleTextContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:200px;
    
    @media only screen and (max-width:410px){
        width:70px;
    }
`

export const Circle = styled.div`
    height:100px;
    width:100px;
    border-radius:50%;
    background-color:${({color})=>color};
    border: 2px solid ${({theme})=>theme.textColor};
`
export const WindowTitle = styled.h2`
    font-size:3rem;
    font-weight:300;
    color:${({theme})=>theme.textColor};
    margin:10px;

    @media only screen and (max-width:410px){
        font-size:1.5rem;
    }
`
export const WindowHeader = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
`
export const X = styled.svg`
    height:50px;
    width:50px;
    color:${({theme})=>theme.textColor};
    margin:0px 10px;
    cursor:pointer;
`