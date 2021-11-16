import styled from "styled-components/macro";


export const Button = styled.button`
font-family:'Roboto';
font-weight:300;
font-size:1.5rem;
background-color:${({theme})=>theme.backgroundColor};
border-color:${({theme})=>theme.textColor};
color:${({theme})=>theme.textColor};
margin:10px;
padding:10px;
transition:0.2s all;
border-radius:60px;
z-index:10;
&:hover{
    background-color:${({theme})=>theme.textColor};
    border-color:${({theme})=>theme.textColor};
    color:${({theme})=>theme.backgroundColor};
}

`
export const Nav = styled.nav`
width:100%;
height:80px;
top:0px;
position:fixed;
display:flex;
justify-content:space-around;
align-items:center;
color:${({theme})=>theme.textColor};
box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
z-index:10;
background-color:${({theme})=>theme.backgroundColor};
transition:0.5s
`