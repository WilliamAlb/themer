import React from "react";
import { NavLink } from "react-router-dom";
import * as S from './navbar.style';

import { useSelector,useDispatch } from "react-redux";
import { useAuthState } from 'react-firebase-hooks/auth';

import { selectDarkMode,selectTheme,toggleDarkMode } from "../slices/currentThemeSlice";

import { icons } from "../../util/icons";
import { routes } from '../../util/routes'

import { navbarStyles } from "./navbarStyle";
import './Navbar.css';
import styled from "styled-components";
import { getAuth } from "@firebase/auth";
import { auth } from "../../util/firebase";

export function Navbar(){

    const dispatch = useDispatch();
    const isDark = useSelector(selectDarkMode);
    const theme = useSelector(selectTheme);


    


    const handleThemeClick = (e) =>{
        dispatch(toggleDarkMode());
    }
    const [user, loading, error] = useAuthState(auth);
    console.log({user},{loading},{error})

    const isLoggedIn=!!user;

    return (
        <S.Nav>
            <div className='nav-logo-container' style={navbarStyles.navLogoContainer}>
                <NavLink to={routes.main}>{icons.logo}</NavLink>
                <h3>THEMER</h3>
            </div>

            <div className='nav-button-container' style={navbarStyles.navButtonContainer}>
                <NavLink to={isLoggedIn?routes.create:routes.login}><S.Button className='nav-button'>{isLoggedIn?'Create':'Login/Register'}</S.Button></NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" class="navbar-mode" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleThemeClick}>{isDark? <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />:<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />}</svg>
            </div>
        </S.Nav>
    );
}