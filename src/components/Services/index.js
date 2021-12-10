import React from 'react'
import {ServWrapper, ServCard, 
    ServIcon, ServH2, ServP, ServH1, ServContainer} from "./ServiceElements"
import Iconserv from "../images/iconserv.svg"
import Iconserv2 from "../images/iconserv2.svg"
import Iconserv3 from "../images/iconserv3.svg"

const ServiceElements = () => {
    return (
        <>
        <ServContainer id="services">
            <ServH1>
                Our Services
            </ServH1>
            <ServWrapper>
                <ServCard>
                    <ServIcon src ={Iconserv}/>

                    <ServH2>Header second</ServH2>
                    <ServP>this is this and that this and that</ServP>
                </ServCard>
    
                <ServCard>
                    <ServIcon src ={Iconserv2}/>

                    <ServH2>Header second</ServH2>
                    <ServP>this is this and that this and that</ServP>
                </ServCard>
           
                <ServCard>
                    <ServIcon src ={Iconserv3}/>

                    <ServH2>Header second</ServH2>
                    <ServP>this is this and that this and that</ServP>
                </ServCard>
            </ServWrapper>

        </ServContainer>
            
        </>
    )
}

export default ServiceElements