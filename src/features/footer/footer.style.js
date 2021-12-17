import styled from "styled-components";

export const Footer = styled.footer`
    display:flex;
    background-color:${({theme})=>theme.secondaryColor};
    width:100%;
    height:120px;
    box-shadow: 0px -4px 4px rgb(0 0 0 / 25%);
    justify-content: space-evenly;
    align-items:center;
`;
export const FooterTextDiv=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`
 export const FooterText = styled.h3`
    font-size:1.5rem;
    color:${({theme})=>theme.textColor}
 `;