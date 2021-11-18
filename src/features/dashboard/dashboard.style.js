import styled, { keyframes } from "styled-components";

const expandcontrast = keyframes`
{
    from {
      -webkit-transform: translate(-50%,-50%) rotateX(0) rotate(0.9turn);
              transform: translate(-50%,-50%) rotateX(0) rotate(0.9turn);
    }
    to {
      -webkit-transform: translate(-50%,-50%) rotateX(-180deg) rotate(0.9turn);
              transform: translate(-50%,-50%) rotateX(-180deg) rotate(0.9turn);
    }
  }
  
`
export const LoadingBrush = styled.svg`
    width:100px;
    height:100px;
    position: absolute;
    top:50%;
    left:50%;
    color:${({theme})=>theme.textColor};
    animation: ${expandcontrast}
        2s
        ease-in-out
        0s
        alternate
        infinite
        none
        running;
`

export const ThemesSection = styled.section`
    padding-top:90px;
    padding-bottom:10px;
    min-height:calc(100vh - 70px);
    height:fit-content;
    display:flex;
    flex-wrap:wrap;
    gap:50px;
    align-items:center;
    justify-content:center;
    background-color:${({theme})=>theme.backgroundColor};
    color:${({theme})=>theme.textColor};
`