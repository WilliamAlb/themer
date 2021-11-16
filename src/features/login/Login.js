import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "@firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

import { collection,setDoc,doc } from "firebase/firestore/lite";

import { selectTheme } from "../slices/currentThemeSlice";
import './loginStyle.css';
import * as S from './login.style';
import { auth } from "../../util/firebase";
import { Route, useNavigate } from "react-router";
import { database } from "../../util/firebase";
import { NavLink } from "react-router-dom";
import { routes } from "../../util/routes";

export function Login(){

    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,username,password)
        .then(
            (userCredentials)=>{
                setUsername('');
                setPassword('');
            }).catch(
                (error)=> console.log(error)
                );

    }
    
    const registerWithEmailAndPassword = async (e) => {
        e.preventDefault();
        try {
          const res = await createUserWithEmailAndPassword(auth,username, password);
          const user = res.user;
          const docData = doc(database,'users','one');
          
          await setDoc(docData,{
            uid: user.uid,
            displayName:'fuckface',
            email:username,
          });
        } catch (err) {
          console.error(err);
          console.log(err.message);
        }
      };

    return (
        <S.LoginSection>
            <div className='loginContent'>
                <S.H1>Login to Themer</S.H1>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <label htmlFor='usernameInput'>Email</label>
                    <br/>
                    <S.Input id='usernameInput' type='text' value={username} onChange={({target})=>setUsername(target.value)}></S.Input>
                    <br/>
                    <label htmlFor='passwordInput'>Password</label>
                    <br/>
                    <S.Input id='passwordInput' type='password'value={password} onChange={({target})=>setPassword(target.value)}></S.Input>
                    <br/>
                    <S.SubmitButton type='submit' value='Login'></S.SubmitButton>
                </form>
                <p>Don't have an account? {<NavLink to={routes.register}>Register</NavLink>} </p>
            </div>
            <div className='loginSplash'></div>
        </S.LoginSection>
    );
}