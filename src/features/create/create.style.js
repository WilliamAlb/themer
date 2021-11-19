import styled from "styled-components";

export const CreateSection = styled.section`
    padding-top:90px;
    padding-bottom:10px;
    padding-left:20px;
    padding-right:20px;
    min-height:calc(100vh - 100px);
    height:fit-content;
    background-color:${({theme})=>theme.backgroundColor};
    color:${({theme})=>theme.textColor};
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;
export const Title = styled.h1`
    font-size:4rem;
    color:${({theme})=>theme.textColor};
    font-family:'Roboto';
    font-weight:300;
`;

export const PickerContainer = styled.div`
    display:flex;
    width:90%;
    min-height:800px;
    align-items:center;
    justify-content:space-evenly;
    flex-wrap:wrap;
`;
export const PickerForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
export const SwatchContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:400px;

    @media only screen and (max-width:400px){
        width:300px;
    }
`

export const Label = styled.label`
    font-size:2rem;
    color:${({theme})=>theme.textColor};
    font-family:'Roboto';
    font-weight:300;
    margin:25px;
`

export const Input = styled.input`
    font-size:2rem;
    color:${({theme})=>theme.textColor};
    font-family:'Roboto';
    font-weight:300;
    width:100px;
    height:30px;
    background-color:transparent;
    border:none;
`
export const NameInput = styled.input`
        width:250px;
        font-size:2rem;
        border-radius:10px;
`
export const SubmitButton = styled.input`
    width:80%;
    margin:20px;
    font-size:4rem;
    font-weight:200;
    border-radius:60px;
    background-color:${({theme})=>theme.textColor};
    border-color:${({theme})=>theme.textColor};
    color:${({theme})=>theme.backgroundColor};
    &:hover{
        background-color:${({theme})=>theme.textColor};
        border-color:${({theme})=>theme.textColor};
        color:${({theme})=>theme.backgroundColor};
    }
`