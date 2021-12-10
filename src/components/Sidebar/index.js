import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,
     SidebarMenu, SidebarLink, 
     SideBtnWrap,SidebarRoute}
     from "./SidebarElements"

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
        <SidebarContainer isOpen= {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="">
                        About
                    </SidebarLink>
                    <SidebarLink to="">
                        Information
                    </SidebarLink>
                    <SidebarLink to="">
                        Projects
                    </SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to="home">
                        Home
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>

        </SidebarContainer>
        </>
    )
}

export default Sidebar
