import styled from "styled-components"
import akira from "../img/akira.jpg"

export const AkiraContainer = styled.div`
    background-image: url(${akira});
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