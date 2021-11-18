import React,{useState} from "react";
import {createUserWithEmailAndPassword } from "@firebase/auth";

import * as S from './register.style';
import { auth } from "../../util/firebase";
import { Popup } from "../popup/Popup";

export function Register(){

    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [popup,setPopup] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth,username, password);
        } catch (error) {
          console.log(error);
          setPopup(error.code);
          setTimeout(() => {
              setPopup('');
          }, 3000);
        }
      };

    return (
        <S.RegisterSection>
          <Popup isOpen={!!popup} message={popup} closeTimeoutMS={200}/>
            <S.RegisterContent>
                <S.H1>Register to Themer</S.H1>
                <S.RegisterForm onSubmit={handleSubmit}>
                    <S.RegisterLabel htmlFor='usernameInput'>Email</S.RegisterLabel>
                    <br/>
                    <S.Input id='usernameInput' required type='text' value={username} onChange={({target})=>setUsername(target.value)}></S.Input>
                    <br/>
                    <S.RegisterLabel htmlFor='passwordInput'>Password</S.RegisterLabel>
                    <br/>
                    <S.Input id='passwordInput'required type='password'value={password} onChange={({target})=>setPassword(target.value)}></S.Input>
                    <br/>
                    <S.SubmitButton type='submit' value='Register'></S.SubmitButton>
                </S.RegisterForm>
            </S.RegisterContent>
            <S.RegisterSplash></S.RegisterSplash>
        </S.RegisterSection>
    );
}