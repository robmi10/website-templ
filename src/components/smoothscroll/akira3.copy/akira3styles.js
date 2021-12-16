import styled from "styled-components"
import akira3 from "../img/akira3.jpg"

    

export const AkiraContainer3 = styled.div`
background-image: url(${akira3});
    height: 800px;
    width: 1400px;
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