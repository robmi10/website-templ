import styled from "styled-components"
import {Link} from "react-scroll"

export const NibiruContainer = styled.div`
    display: flex;
    z-index: 1;
    background: #e57468;
    color: #ffff;
    height: 608px;

    @media screen and (max-width: 768px){
        padding: 100px 0;
    };
`
export const NibiruNavbar = styled.div`
    display: flex;
    z-index: 3;
    background: #c8d6da;
    height: 70px;
    width: 100%;
    border: 10px;
`

export const NibiruNavH1 = styled.h1`
    background: #010606;
    color: #101522;
    display: flex;
    z-index: 5;

    @media screen and (max-width: 768px){
        
    }
`
export const Button_wrap = styled.button`
    border-radius: 20px;
    background: ${({primary}) => (primary ? '#e57468' : '#e57468')};
    white-space: nowrap;
    font-size: 5px
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) =>(primary ? '#fff': '#e57468')};
    }
`