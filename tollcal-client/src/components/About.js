import { Container } from "@mui/material";
import React from "react";
import { AboutText, ContactTextTitle } from "./About.style";
import Faq from "react-faq-component"
import { ReactComponent as ContactImg } from "../assets/support_img.svg";

// About section of the site.

export default function AboutSection () {

    return (
        <>
        <Container>
          
            <AboutText>
             <b>This website is not endorsed by, directly affiliated with, maintained, authorized, or sponsored by The 91 Express Lanes, OCTA, RCTC, CalTrans, or Waze. Data used for the tolls can be found 
            at <a href = "https://www.91expresslanes.com/general-info/toll-schedules/" style={{ textDecoration: 'none' }}> 91 Express Lanes Website</a> & Live Video from <a href = "https://cwwp2.dot.ca.gov/vm/nomap.html" style={{ textDecoration: 'none' }}>CalTrans Website</a>. All product and company names are the registered trademarks of their original owners. The use of any trade name or trademark is for identification and reference purposes only and does not imply any association with the trademark holder of their product brand.</b>
            </AboutText>
        </Container>

        <Container>
        <Faq
                data={data}
                styles={styles}
            />
        </Container>
        <Container align = "center">
            <ContactTextTitle style = {{textAlign: 'center', color: "#895cf2"}}>Contact</ContactTextTitle>
            <AboutText style = {{textAlign: 'center'}}>contact@tollcal.com</AboutText>
            <ContactImg height = {"350px"} width = {"350px"} />
        </Container>
        </>
    );
};

// FAQ component using npm react-faq-component
const data = {
    title: "FAQ",
    rows: [
        {
            title: "What is this?",
            content: "I created this website due to only being able to see the current toll prices by looking at a chart with the toll schedule or as you approach the digital sign. Many map apps that provide toll info I have found to be inaccurate as well. Having a centralized place to see current/upcoming price, live traffic feed, and map seemed convenient.",
        },
        {
            title: "Why don't you show the prices for other toll roads other than the 91 express lanes?",
            content: "Unfortunately many of the other toll roads do not provide the toll schedules and claim the price is based on the current traffic conditions. In addition to this, toll providers such as The Toll Roads (73,133,241,261) already have their own toll calculator.",
        },
        {
            title: "Why do you only show live traffic cams from Corona?",
            content: "The cameras CalTrans provide that are relevant to this website only provide live feeds in Corona. Orange County has cameras as well but they update an image in time intervals as opposed to a live feed.",
        },
    ],

};


// Styling for FAQ
const styles = {
    titleTextColor: "#895cf2",
    rowTitleColor: "#895cf2",
    arrowColor: "#895cf2",
};

