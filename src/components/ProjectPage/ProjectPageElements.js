import styled from "styled-components"

export const ProjectPageContainer = styled.div`
    background: #fff;
    display: flex;
    z-index: 1;
    background: ${({light}) => (light ? '#f9f9f9' : '#101522')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`
export const ProjectWrapper = styled.div`
    display: grid;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
export const ProjectRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col1 col1'` )};
    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
export const TextWrapp = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const FirstLine = styled.p`
    color: #e57468;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const Header = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightTxt}) => (lightTxt ? '#010606': "#f7f8fa" )};

    @media screen and (max-width: 480px){
        font-size: 32px;        
    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkTxt}) => (darkTxt ? "#fff": '#010606')};
`
export const Btnwrappish = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    @media screen and (max-width: 480px){
        font-size: 32px;        
    }
`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`