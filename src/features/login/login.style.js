import styled from "styled-components";
import background from '../../assets/images/loginsplash.jpg'

export const LoginSection = styled.section`
    margin-top:80px;
    min-height:calc(100vh - 80px);
    height:1px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${({theme})=>theme.backgroundColor};
    color:${({theme})=>theme.textColor};
    
    @media only screen and (max-width:600px){
        text-shadow: 1px 1px black;
        background-image: url(${background});
        background-size: cover;
        background-position: center;
    }
    
`
export const H1 = styled.h1`
    font-size:3rem;
    font-family:'Roboto';
    font-weight:300;
    text-align:center;
    @media only screen and (max-height:610px){
        font-size:1.5rem;
    }
`
export const Input = styled.input`
    width:80%;
    margin:20px 0px;
    font-size:2rem;
    @media only screen and (max-height:610px){
        font-size:1rem;
        margin:0px;
    }
`
export const SubmitButton = styled.input`
    width:80%;
    margin:20px;
    font-size:4rem;
    font-weight:200;
    border-radius:60px;
    background-color:${({theme})=>theme.textColor};
    border-color:${({theme})=>theme.textColor};
    color:${({theme})=>theme.backgroundColor};
    @media only screen and (max-width:750px){
        font-size:2rem;
        margin:10px;
    }
    @media only screen and (max-height:610px){
        font-size:2rem;
        margin:10px;
    }
`

export const loginContent = styled.div`
    flex: 1 0 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
export const loginSplash = styled.div`
    flex: 1 0 60%;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    box-shadow: 4px 4px 4px black;
    height: 100%;

    @media only screen and (max-width:600px){
        display:none;
    }
`
export const loginForm = styled.form`
    height:fit-content;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const loginLabel = styled.label`
    font-size: 2rem;
    font-weight: 300;
    justify-self: flex-start;
    @media only screen and (max-height:610px){
        font-size:1.5rem;
    }
`