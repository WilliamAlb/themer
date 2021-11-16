import React from "react";

import styled from "styled-components";

import { useDispatch,useSelector } from "react-redux";

import { fetchThemes } from "../slices/themesSlice";

import { Themebox } from "../themebox/Themebox";

const loadingCircle = styled.div`
    width:100px;
    height:100px;
    background-color:red;
    position: absolute;
    top:50%;
    left:50%;
`
export function Dashboard(){

    const dispatch = useDispatch();
    return (<div>

        <h1>lorem</h1>
        <h1>ipsum</h1>
        <h1>fuckface</h1>
        <h1>xdddd</h1>
        <h1>lorem</h1>
        <h1>ipsum</h1>
        <h1>fuckface</h1>
        <h1>xdddd</h1>
        <h1>lorem</h1>
        <h1>ipsum</h1>
        <h1>fuckface</h1>
        <h1>xdddd</h1>
        <button onClick={(e)=>{dispatch(fetchThemes())}}>fuck fuck</button>
        <Themebox></Themebox>
    </div>)
}