import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage'
import Sidebar from '../components/Sidebar'
import ProjectPage from '../components/ProjectPage'
import {firstpageObj, secondpageObj, homepageObj} from "../components/ProjectPage/Data"
import ServiceElements from '../components/Services'
import Footer  from '../components/Footer'


const Pages = () => {
    const [isOpen, setisOpen] = useState(false) 
    const toggle = ( ) =>{
        setisOpen(!isOpen)
    }
    return (
        <>
          <Navbar toggle = {toggle}/>  
          <HomePage {...homepageObj}/>
          <Sidebar isOpen = {isOpen} toggle = {toggle} />
          <ProjectPage {...firstpageObj}/>
          <ProjectPage {...secondpageObj}/>
          <ServiceElements/>
          <Footer/>
        </>
    )
}

export default Pages
