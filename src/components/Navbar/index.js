import React, {useState, useEffect}from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, 
    NavMenu, NavItem, NavLinks, 
    NavBtn, NavBtnLink} from "./NavbarElements"
import {FaBars} from 'react-icons/fa'
import "./NavbarElements.css"
import animateScroll from 'react-scroll'

const Navbar = ({toggle}) => {
    const [borderHome, setborderHome] = useState(false)
    const [borderProjects, setborderProjects] = useState(false)
    const [borderAbout, setborderAbout] = useState(false)
    const [borderServices, setborderServices] = useState(false)

    const [scroll, setScroll] = useState(false)
    const changeScroll = () =>{
        if(window.scrollY < 80){
            setScroll(true)
        }
        else{
            setScroll(false)
        } 
    }

    const goHome = () =>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });

    }

    const goInformation = () =>{
        window.scrollTo({top: 1550, left: 0, behavior: 'smooth' });
    }
    const goServices = () =>{
        window.scrollTo({top: 2400, left: 0, behavior: 'smooth' });
    }

    const goProjects = () =>{
        window.scrollTo({top: 650, left: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', changeScroll)
    }, [])
    return (
        <>
            <NavbarContainer  scroll = {scroll}>
                <NavLogo>
                    <MobileIcon onClick ={toggle}> 
                        <FaBars/>
                    </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks onClick={goHome}>
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={goInformation}>
                            Information
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={goProjects}>
                            Projects
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={goServices}>
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink to="/contact">Contact</NavBtnLink>
                    </NavBtn>
                </NavMenu>
                </NavLogo>
            </NavbarContainer>
        </>
    )
}

export default Navbar
