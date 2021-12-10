import styled from "styled-components"
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scroll}) => (scroll ? '#000' : 'transparent')};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    background: #e57468;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    @media screen and (max-width: 960){
        transition: 0.8s ease-in-out;
    }
`
export const NavLogo = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 500px;
    @media screen and (max-width: 768px){
        display: none;  
    }
`
export const NavItem = styled.li`
    height: 60px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active{
        border-bottom: 3px solid #fff;
        border: none;
    }
`
export const NavBtn  = styled.nav`
    display: flex;
    align-items: center;
    position: absolute;
    left: 90%;
    @media screen and (max-width: 780px){
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover{
        transition:  all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`