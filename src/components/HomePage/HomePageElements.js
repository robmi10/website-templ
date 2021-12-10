import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HomeContainer = styled.div`
    background: ${({light}) => (light ? '#f9f9f9' : '#101522')};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 539px;
    position: relative;
    z-index: 1;
`
export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HomeH1 = styled.h1`
    color: #000;
    font-size: 48px;
    text-align: center;
    color: ${({lightTxt}) => (lightTxt ? '#010606': "#f7f8fa" )};
    @media screen and (max-width: 780px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const HomeP = styled.p`
    margin-top: 24px;
    color: #000;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    color: ${({darkTxt}) => (darkTxt ? '#010606': "#fff")};
    @media screen and (max-width: 780px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`
export const HomeBtnWrap = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ArrowForwad = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`