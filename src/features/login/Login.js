import React,{useState} from "react";

import { signInWithEmailAndPassword} from "@firebase/auth";

import * as S from './login.style';
import { auth } from "../../util/firebase";
import { NavLink } from "react-router-dom";
import { routes } from "../../util/routes";
import { Popup } from "../popup/Popup";

export function Login(){

    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [popup,setPopup] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,username,password)
        .then(
            (userCredentials)=>{
                setUsername('');
                setPassword('');
            }).catch(
                (error)=> {
                    setPopup(error.code);
                setTimeout(() => {
                    setPopup('');
                }, 3000);
            }
                );

    }
    return (
        <S.LoginSection>
            <Popup isOpen={!!popup} message={popup} closeTimeoutMS={200}/>
            <S.loginContent>
                <S.H1>Login to Themer</S.H1>
                <S.loginForm onSubmit={handleSubmit}>
                    <S.loginLabel htmlFor='usernameInput'>Email</S.loginLabel>
                    <br/>
                    <S.Input id='usernameInput' required type='text' value={username} onChange={({target})=>setUsername(target.value)}></S.Input>
                    <br/>
                    <S.loginLabel  htmlFor='passwordInput'>Password</S.loginLabel>
                    <br/>
                    <S.Input id='passwordInput'required type='password'value={password} onChange={({target})=>setPassword(target.value)}></S.Input>
                    <br/>
                    <S.SubmitButton type='submit' value='Login'></S.SubmitButton>
                </S.loginForm>
                <p>Don't have an account? {<NavLink to={routes.register}>Register</NavLink>} </p>
            </S.loginContent>
            <S.loginSplash></S.loginSplash>
        </S.LoginSection>
    );
}