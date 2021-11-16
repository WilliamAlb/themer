import React,{useState} from "react";
import {createUserWithEmailAndPassword } from "@firebase/auth";

import { setDoc,doc } from "firebase/firestore/lite";

import './registerStyle.css';
import * as S from './register.style';
import { auth } from "../../util/firebase";
import { database } from "../../util/firebase";

export function Register(){

    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await createUserWithEmailAndPassword(auth,username, password);
          const user = res.user;
          const docData = doc(database,'users','all');
          
          await setDoc(docData,{
            uid: user.uid,
            displayName:name,
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
                <S.H1>Register to Themer</S.H1>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <label htmlFor='usernameInput'>Email</label>
                    <br/>
                    <S.Input id='usernameInput' type='text' value={username} onChange={({target})=>setUsername(target.value)}></S.Input>
                    <br/>
                    <label htmlFor='passwordInput'>Password</label>
                    <br/>
                    <S.Input id='passwordInput' type='password'value={password} onChange={({target})=>setPassword(target.value)}></S.Input>
                    <br/>
                    <label htmlFor='passwordInput'>Username</label>
                    <br/>
                    <S.Input id='nameInput' type='text'value={name} onChange={({target})=>setName(target.value)}></S.Input>
                    <br/>
                    <S.SubmitButton type='submit' value='Register'></S.SubmitButton>
                </form>
            </div>
            <div className='loginSplash'></div>
        </S.LoginSection>
    );
}