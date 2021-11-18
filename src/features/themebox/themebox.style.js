import styled from "styled-components";

const boxSize = {width:'380px',height:'300px'};
const innerCubeSize = {size:'100px'}

if(window.outerWidth<400){
    boxSize.width='200px';
    boxSize.height='150px';
    innerCubeSize.size='50px';
}
export const ThemeboxDiv = styled.div`
    display:flex;
    width:${boxSize.width};
    height:${boxSize.height};
    background-color:${({renderTheme}) => renderTheme.backgroundColor};
    position:relative;
    border:2px solid ${({theme})=>theme.primaryColor};
    cursor:pointer;
    overflow:hidden;
    border-radius:50px;
`
export const ThemeboxTriangle = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 ${boxSize.height} ${boxSize.width};
    border-color: transparent transparent ${({renderTheme}) => renderTheme.primaryColor} transparent;
`
export const ThemeboxText = styled.p`
    position:absolute;
    font-size:2rem;
    top:5%;
    left:5%;
    color:${({renderTheme})=>renderTheme.textColor};
`
export const ThemeboxCube = styled.div`
    position:absolute;
    bottom:5%;
    right:5%;
    height:${innerCubeSize.size};
    width:${innerCubeSize.size};
    background-color:${({renderTheme})=>renderTheme.secondaryColor};
    border-radius:50%;
`