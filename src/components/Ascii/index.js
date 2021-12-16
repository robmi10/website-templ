import React, {useState} from 'react'
import {NibiruContainer, NibiruNavbar, Button_wrap} from "./AsciiElements"
import dancing3 from "../images/akiraa3.gif"
import "./Ascii.css"
const Ascii = () => {
    const [colour, setColour] = useState(false)
    const handle_colour = () =>{
        setColour(!colour)
    }

    return (
        <>
        <NibiruContainer>
            <NibiruNavbar>
            <h1 className="fontascii">NIBIRU</h1>
            <Button_wrap onClick={handle_colour}>TOOGLE</Button_wrap>
            </NibiruNavbar>
            { colour ?  <img autoPlay loop muted className="asciilayout" style={{borderRadius: 20, height: 500, width: 500, position: "absolute", left: 400, top: 80, background: "#ffff", tintColor: 'gray'}} src={dancing3}/> : <img  className="asciilayout2" style={{borderRadius: 20, height: 500, width: 500, position: "absolute", left: 400, top: 80, background: "#ffff", tintColor: 'gray'}} src={dancing3}/>}
        </NibiruContainer>
        </>
    )
}
export default Ascii
