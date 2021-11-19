import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { writeThemes,selectThemesState } from "../slices/themesSlice";

import { Themebox } from '../themebox/Themebox';

import * as S from "./create.style";

export function Create(){

    const dispatch = useDispatch();
    const navigator = useNavigate();
    const pushState = useSelector(selectThemesState);

    const [primaryColor,setPrimaryColor] = useState('#764ABC');
    const [secondaryColor,setSecondaryColor] = useState('#764ABC');
    const [textColor,setTextColor] = useState('#764ABC');
    const [backgroundColor,setBackgroundColor] = useState('#FEFEFE');
    const [name,setName] = useState('Example');

    const handlePrimaryChange = (e) =>{
        setPrimaryColor(e.target.value);
    }

    const handleSecondaryChange = (e) =>{
        setSecondaryColor(e.target.value);
    }

    const handleTextChange = (e) =>{
        setTextColor(e.target.value);
    }

    const handleBackgroundChange = (e) =>{
        setBackgroundColor(e.target.value);
    }

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(writeThemes({
            primaryColor:primaryColor,
            secondaryColor:secondaryColor,
            textColor:textColor,
            backgroundColor:backgroundColor,
            name:name
        }
        ));
        navigator('/');
    }
    
    return (
        <S.CreateSection>
            <S.Title>Create a Theme</S.Title>
            <S.PickerContainer>
                <Themebox renderTheme={{name:name,primaryColor:primaryColor,secondaryColor:secondaryColor,textColor:textColor,backgroundColor:backgroundColor}}/>
                <S.PickerForm onSubmit={handleSubmit}>
                    <S.SwatchContainer>
                        <S.Label for='namePicker'>Name</S.Label>
                        <S.NameInput type='text' id='namePicker' maxLength='14' value={name} onChange={handleNameChange}></S.NameInput>
                    </S.SwatchContainer>
                    <S.SwatchContainer>
                        <S.Label for='primaryColorPicker'>Primary Color</S.Label>
                        <S.Input type='color' id='primaryColorPicker' onChange={handlePrimaryChange} value={primaryColor}></S.Input>
                    </S.SwatchContainer>
                    <S.SwatchContainer>
                        <S.Label for='secondaryColorPicker'>Secondary Color</S.Label>
                        <S.Input type='color' id='secondaryColorPicker' onChange={handleSecondaryChange} value={secondaryColor}></S.Input>
                    </S.SwatchContainer>
                    <S.SwatchContainer>
                        <S.Label for='textColorPicker'>Text Color</S.Label>
                        <S.Input type='color' id='textColorPicker' onChange={handleTextChange} value={textColor}></S.Input>
                    </S.SwatchContainer>
                    <S.SwatchContainer>
                        <S.Label for='backgroundColorPicker'>Background Color</S.Label>
                        <S.Input type='color' id='backgroundColorPicker' onChange={handleBackgroundChange} value={backgroundColor}></S.Input>
                    </S.SwatchContainer>
                    <S.SubmitButton value={'Create'} type='submit' disabled={pushState!=="loading"?false:true}></S.SubmitButton>
                </S.PickerForm>
            </S.PickerContainer>
        </S.CreateSection>
    );
}