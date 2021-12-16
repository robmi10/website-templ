import React from 'react'
import Akira from '../smoothscroll/akira'
import Akira2 from '../smoothscroll/akira2'
import Akira3 from '../smoothscroll/akira3.copy'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());


const Akirapages = () => {
    return (
        <>
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), Sticky())}>
                  
                <Akira/>
                </Animator>
            </ScrollPage>

            <ScrollPage page={1}>
                <Animator animation={batch(Fade(), Sticky())}>
          
                <Akira2/>
                </Animator>
            </ScrollPage>

            <ScrollPage page={2}>
                <Animator animation={batch(Fade(), Sticky())}>
             
                <Akira3/>
                </Animator>
            </ScrollPage>

        </ScrollContainer> 

        </>
    )
}

export default Akirapages
