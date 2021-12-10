import React, {useState} from 'react'
import {HomeContainer, HomeContent, HomeH1, HomeP, HomeBtnWrap, ArrowForwad, ArrowRight} from "./HomePageElements"
import {Button } from '../Tools/ButtonElements'

const HomePage = ({light, id, imgStart, firstline, lightTxt, 
    headline, darkTxt, description, 
    buttonLabel, imga, 
    alt, primary, dark, dark2}) => {
    const [hover, sethover] = useState(false)

    const onHover = () =>{
        sethover(!hover)
    }

    return (
        <>
            <HomeContainer light ={light} id={id}>
                <HomeContent>
                    <HomeH1>
                        {firstline}
                    </HomeH1>
                    <HomeP>
                        {description}
                    </HomeP>
                    <HomeBtnWrap>
                    <Button to="/" onMouseEnter={onHover} onMouseLeave={onHover}>
                            Projects {
                                hover  ? <ArrowForwad/> : <ArrowRight/>
                            }
                    </Button>
                </HomeBtnWrap>
                </HomeContent>
            </HomeContainer>
        </>
    )
}

export default HomePage
