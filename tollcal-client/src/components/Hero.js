import React from "react";
import { HeroContainer,HeroContainer2, HeroH1, HeroChoiceTxt, HeroContent, HeroContent2, BtnCont, HeroAll, HeroH1Box, CarStyled2 } from "./Hero.styles";
import { ChoiceBtn} from "./Hero.styles";
import { useNavigate } from "react-router-dom";
import { CarStyled } from "./Hero.styles";

// shows initial page of the webapp. 

export default function HeroSection({handleOCState,handleRCState}) {

    let navigate = useNavigate();

    return (
        <>
        <HeroAll>
            <HeroContainer>
                <HeroContent>
                  <HeroH1Box>
                    <HeroH1 paragraph = 'true'> View current & upcoming toll prices for the 91 express lanes. </HeroH1>
                  </HeroH1Box>
                    <CarStyled />
                </HeroContent>     
            </HeroContainer>
            
            <HeroContainer2 >
                <HeroContent2>
                    <HeroChoiceTxt paragraph = 'true'> Please choose an area.</HeroChoiceTxt>
                    <BtnCont>
                        <ChoiceBtn onClick={()=>{navigate("/oc");}}> Orange County </ChoiceBtn>
                        <ChoiceBtn onClick={()=>{navigate("/rc");}}> Riverside County </ChoiceBtn>
                    </BtnCont>
                    <CarStyled2/>
                </HeroContent2>
            </HeroContainer2>
        </HeroAll>
        </>
    );
};




