import styled from "styled-components";

const sizes={
    boxSize:{width:'380px',height:'300px'},
    innerCubeSize:{size:'100px'},
    text:{size:'2rem'}
}

if(window.outerWidth<400){
    sizes.boxSize.width='200px';
    sizes.boxSize.height='150px';
    sizes.innerCubeSize.size='50px';
    sizes.text.size='1.2rem';
}
export const ThemeboxDiv = styled.div`
    display:flex;
    width:${sizes.boxSize.width};
    height:${sizes.boxSize.height};
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
    border-width: 0 0 ${sizes.boxSize.height} ${sizes.boxSize.width};
    border-color: transparent transparent ${({renderTheme}) => renderTheme.primaryColor} transparent;
`
export const ThemeboxText = styled.p`
    position:absolute;
    font-size:${sizes.text.size};
    top:10%;
    left:10%;
    color:${({renderTheme})=>renderTheme.textColor};
`
export const ThemeboxCube = styled.div`
    position:absolute;
    bottom:5%;
    right:5%;
    height:${sizes.innerCubeSize.size};
    width:${sizes.innerCubeSize.size};
    background-color:${({renderTheme})=>renderTheme.secondaryColor};
    border-radius:50%;
`