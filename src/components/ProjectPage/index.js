import React from 'react'
import {Column2, ImgWrap, ProjectPageContainer, ProjectWrapper, 
    ProjectRow, Column1, TextWrapp, 
    FirstLine, Header, Subtitle, Btnwrappish, Img} from "./ProjectPageElements"
import {Button} from "../Tools/ButtonElements"

const ProjectPage = ({light, id, imgStart, firstline, lightTxt, 
    headline, darkTxt, description, 
    buttonLabel, imga, 
    alt, primary, dark, dark2}) => {
    return (
        <>
            <ProjectPageContainer light ={light} id={id}>
                <ProjectWrapper>
                    <ProjectRow imgStart = {imgStart}>
                        <Column1>
                            <TextWrapp>
                                <FirstLine>{firstline}</FirstLine>
                                <Header lightTxt = {!lightTxt}>{headline}</Header>
                                <Subtitle darkTxt = {darkTxt}>{description}</Subtitle>
                                <Btnwrappish>
                                    <Button to="home" 
                                    smooth = {true}
                                    duration ={500}
                                    spy={true}
                                    exact = {true}
                                    offset = {-80}
                                    primary = {primary ? 1 : 0}
                                    dark = {dark ? 1 : 0}
                                    dark2 = {dark2 ? 1 : 0}
                                    >
                                    {buttonLabel}</Button>
                                </Btnwrappish>
                            </TextWrapp>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={imga}/>
                            </ImgWrap>
                        </Column2>
                    </ProjectRow>
                </ProjectWrapper>
            </ProjectPageContainer>
            
        </>
    )
}

export default ProjectPage
