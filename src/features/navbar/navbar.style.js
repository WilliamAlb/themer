import styled from "styled-components/macro";

const sizes = {
    button:window.outerWidth<400?'1rem':'1.5rem'
};

export const Button = styled.button`
    font-family:'Roboto';
    font-weight:300;
    font-size:${sizes.button};
    background-color:${({theme})=>theme.backgroundColor};
    border-color:${({theme})=>theme.textColor};
    color:${({theme})=>theme.textColor};
    margin:${window.outerWidth<400?'5px':'10px'};
    padding:${window.outerWidth<400?'5px 15px':'10px 30px'};
    transition:0.2s all;
    cursor:pointer;
    border-radius:60px;
    z-index:10;
    &:hover{
        background-color:${({theme})=>theme.textColor};
        border-color:${({theme})=>theme.textColor};
        color:${({theme})=>theme.backgroundColor};
    }
`
export const NavButtonContainer = styled.div`
    display:flex;
    align-items:center;
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

export const NavbarLogo = styled.svg`
    min-width: 50px;
    flex: 0 1 75px;
    color:${({theme})=>theme.textColor};
    cursor:pointer;
`
export const NavLogoContainer = styled.div`
    display:flex;
    font-size:2rem;
    font-family:'Roboto';
    font-weight:300;
    align-items:center;
`

export const NavbarMode = styled.svg`
    min-width: 50px;
    flex: 0 1 75px;
    color:${({theme})=>theme.textColor};
    cursor:pointer;
`