import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize";



function Orb() {

    const {width, height} = useWindowSize()
    console.log(width,height);
    
    
    const moveOrb = keyframes`
        0%{
            transform: translate(0,0);
        }
        50%{
            transform: translate(${width / 1.2}px, ${height / 2}px);
        }
        100%{
            transform: translate(0,0);
        }
    `
    const OrbStyled = styled.div`
        width:70vh;
        height:70vh;
        position:absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background:linear-gradient(180deg,rgb(255, 0, 221) 0%,rgb(153, 0, 153) 100%);
        filter: blur(300px);
        animation: ${moveOrb} 15s alternate linear infinite;
    `;


    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb