import styled,{keyframes} from "styled-components";


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
    @media only screen and (max-width:570px){
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

    @media only screen and (max-width:570px){
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

    @media only screen and (max-width:570px){
        height:50px;
        width:50px;
    }
`

export const ThemeboxDiv = styled.div`
    display:flex;
    width:380px;
    height:300px;
    background-color:${({renderTheme}) => renderTheme.backgroundColor};
    position:relative;
    border:2px solid ${({theme})=>theme.primaryColor};
    cursor:pointer;
    // overflow:hidden;
    border-radius:20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform-style:preserve-3d;

    &:hover{
        transform: perspective(1200px) rotateX(50deg) rotateY(20deg) rotateZ(-25deg);
    }
    &:hover ${ThemeboxContent1}{
        transform: perspective(1200px) translateX(35px) translateY(0px) translateZ(50px);
        transition-delay:0.5s;
    }
    &:hover ${ThemeboxContent2}{
        transform: perspective(1200px) translateX(35px) translateY(0px) translateZ(40px);
        transition-delay:0.4s;
    }
    &:hover ${ThemeboxContent3}{
        transform: perspective(1200px) translateX(35px) translateY(0px) translateZ(30px);
        transition-delay:0.3s;
    }
    &:hover ${ThemeboxContent4}{
        transform: perspective(1200px) translateX(35px) translateY(0px) translateZ(20px);
        transition-delay:0.2s;
    }
    &:hover ${ThemeboxContent5}{
        transform: perspective(1200px) translateX(35px) translateY(0px) translateZ(10px);
        transition-delay:0.1s;
    }
    &:hover ${ThemeboxCube}{
        transform: perspective(1200px) translateX(35px) translateY(0px) translateZ(10px);
        transition-delay:0.7s;
    }
    &:hover ${ThemeboxText}{
        transform: perspective(1200px) translateX(35px) translateY(0px) translateZ(40px);
        transition-delay:0.1s;
        text-shadow: 2px 0px ${({renderTheme})=>renderTheme.secondaryColor}, -2px 0px ${({renderTheme})=>renderTheme.secondaryColor}, 0px 2px ${({renderTheme})=>renderTheme.secondaryColor}, 0px -2px ${({renderTheme})=>renderTheme.secondaryColor};
    }
    
    
    @media only screen and (max-width:570px){
        height:150px;
        width:200px;
    }

`