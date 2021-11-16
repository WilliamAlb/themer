import styled from "styled-components";


export const LoginSection = styled.section`
    margin-top:80px;
    min-height:calc(100vh - 80px);
    height:1px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${({theme})=>theme.backgroundColor};
    color:${({theme})=>theme.textColor};
`
export const H1 = styled.h1`
    font-size:3rem;
    font-family:'Roboto';
    font-weight:300;

`
export const Input = styled.input`
width:80%;
margin:20px 0px;
font-size:2rem;
`
export const SubmitButton = styled.input`
width:80%;
margin:20px;
font-size:4rem;
font-weight:200;
border-radius:60px;
background-color:${({theme})=>theme.textColor};
border-color:${({theme})=>theme.textColor};
color:${({theme})=>theme.backgroundColor};;
`