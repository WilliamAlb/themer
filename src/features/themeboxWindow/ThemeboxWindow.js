import ReactModal from "react-modal";
import * as S from './themeboxWindow.style';
import {useDispatch } from "react-redux";

import { changeTheme } from "../slices/currentThemeSlice";


export function ThemeboxWindow(props){
    
    const dispatch = useDispatch();

    const modalStyle = {
        content:{
            position: "absolute",
            width: 'fit-content',
            height: 1,
            minHeight:350,
            top: window.scrollY+300,
            left: "50%",
            transform:"translate(-50%,-50%)",
            outline: "none",
            animation:'shootinWindow 1s ease',
            boxShadow:'0px 4px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius:20,
            margin:'10px;'
        },
        overlay:{
            position:'absolute',
            height:'100%',
            width:"100%",
            top:0,
            left: 0,
            zIndex:999,
        },
    }
    
    const handleApply = () =>{
        dispatch(changeTheme(props.renderTheme));
    }
    const handleSave =()=> {
        dispatch(changeTheme(props.renderTheme));
        window.localStorage.setItem('savedTheme',JSON.stringify(props.renderTheme));
    }
    const modalClose = () =>{
        props.setWindow(false);
    }
    
    return(
        <ReactModal 
            isOpen={props.isOpen}
            className='themeboxModal'
            overlayClassName='themeboxModalOverlay'
            style={modalStyle}
        >
            <S.PopupDiv>
                <S.WindowHeader>
                    <S.WindowTitle>{props.renderTheme.name}</S.WindowTitle>
                    <S.X xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={modalClose}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></S.X>
                </S.WindowHeader>
                <S.CirclesContainer>
                    <S.CircleContainer>
                        <S.Circle color={props.renderTheme.primaryColor}></S.Circle>
                        <S.CircleTextContainer>
                            <h3>Primary:</h3>
                            <br/>
                            <h3>{props.renderTheme.primaryColor}</h3>
                        </S.CircleTextContainer>
                    </S.CircleContainer>
                    <S.CircleContainer>
                        <S.Circle color={props.renderTheme.secondaryColor}></S.Circle>
                        <S.CircleTextContainer>
                            <h3>Secondary:</h3>
                            <br/>
                            <h3>{props.renderTheme.secondaryColor}</h3>
                        </S.CircleTextContainer>
                    </S.CircleContainer>
                    <S.CircleContainer>
                        <S.Circle color={props.renderTheme.textColor}></S.Circle>
                        <S.CircleTextContainer>
                            <h3>Text:</h3>
                            <br/>
                            <h3>{props.renderTheme.textColor}</h3>
                        </S.CircleTextContainer>
                    </S.CircleContainer>
                    <S.CircleContainer>
                        <S.Circle color={props.renderTheme.backgroundColor}></S.Circle>
                        <S.CircleTextContainer>
                            <h3>Background:</h3>
                            <br/>
                            <h3>{props.renderTheme.backgroundColor}</h3>
                        </S.CircleTextContainer>
                    </S.CircleContainer>
                </S.CirclesContainer>

                <S.ButtonContainer>
                    <S.Button onClick={handleApply}>Apply</S.Button>
                    <S.Button onClick={handleSave}>Save</S.Button>
                </S.ButtonContainer>
            </S.PopupDiv>
        </ReactModal>
    )
    
}