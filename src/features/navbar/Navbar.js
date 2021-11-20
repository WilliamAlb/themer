import React from "react";
import { NavLink } from "react-router-dom";
import * as S from './navbar.style';

import { useSelector,useDispatch } from "react-redux";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "@firebase/auth";

import { selectDarkMode,toggleDarkMode } from "../slices/currentThemeSlice";

import { icons } from "../../util/icons";
import { routes } from '../../util/routes'

import { auth } from "../../util/firebase";

export function Navbar(){

    const dispatch = useDispatch();
    const isDark = useSelector(selectDarkMode);

    const handleThemeClick = (e) =>{
        dispatch(toggleDarkMode());
    }
    const handleLogout = (e) =>{
        signOut(auth)
    }

    const [user] = useAuthState(auth);

    const isLoggedIn=!!user;

    return (
        <S.Nav>
            <S.NavLogoContainer>
                <NavLink to={routes.main}>{icons.logo}</NavLink>
                <S.NavLogoName>THEMER</S.NavLogoName>
            </S.NavLogoContainer>

            <S.NavButtonContainer>
                <NavLink to={isLoggedIn?routes.create:routes.login}><S.Button className='nav-button'>{isLoggedIn?'Create':'Login'}</S.Button></NavLink>
                {isLoggedIn?<S.Button onClick={handleLogout}>Logout</S.Button>:null}
                {isDark?
                <S.NavbarMode xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleThemeClick}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></S.NavbarMode>:
                <S.NavbarMode xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleThemeClick}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></S.NavbarMode>
                }
            </S.NavButtonContainer>
        </S.Nav>
    );
}