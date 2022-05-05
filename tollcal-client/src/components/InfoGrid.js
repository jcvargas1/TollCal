import React, { useState, useEffect } from "react";
import { Grid, Divider} from '@mui/material';
import { SomeTile, InfoText, DirectionContainer, DirectionTypo, TileContent,TileContentTitle, OuterGridContainer, WazeFrame, MainContainer, TileTitleText} from "./InfoGrid.style";
const store = require("store2");


// Holds the components for the part of the site that displays the data for the user (oc, rc, ocrc) 

let globalFuturePrice = 0
let wazeSize = "1700px";
    
if (window.matchMedia("(min-width: 1921px)").matches) {
    wazeSize = "2000px" 
}


// /oc page
export function GridTilesOC() {

    return (
        
       

        <MainContainer>
            <style>{'body { background-color: #EEEEEE; }'}</style>
            <CurrentTime />
    
            <OuterGridContainer>
                <DirectionContainer >
                <DirectionTypo align = "center" >Westbound</DirectionTypo>
                
                <Grid container flexDirection='column'>
                        
                        <Grid >
                            <SomeTile elevation = {5}>
                                <TileContentTitle
                                     title ={<TileTitleText> Riverside County Line to SR-55</TileTitleText>} style = {{textAlign: 'center'}}>
                                        
                                </TileContentTitle>
                                <TileContent style = {{color: ' #895cf2'}}>Current Price</TileContent>
                                 <TileContent>{CurrentPrice(JSON.parse(store.get('cache-ocwb')))}</TileContent>

                                <Divider />

                                <TimeLeft />
                                <TileContent>{globalFuturePrice}</TileContent>
                            </SomeTile >
                        </Grid>
                    </Grid>
                </DirectionContainer>
            
                <DirectionContainer >
                    <DirectionTypo align = "center" >Eastbound</DirectionTypo>
                    <Grid container flexDirection='column' align = 'center'>
                        <Grid>
                            <SomeTile elevation = {5}>
                                <TileContentTitle
                                    title = {<TileTitleText>SR-55 to Riverside County Line</TileTitleText>} style = {{textAlign: 'center'}}>
                                </TileContentTitle>
 
                                <TileContent style = {{color: ' #895cf2'}}>Current Price</TileContent>
                                <TileContent>{CurrentPrice(JSON.parse(store.get('cache-oceb')))}</TileContent>
                                <Divider />

                                <TimeLeft />
                                <TileContent>{globalFuturePrice}</TileContent>
                            </SomeTile >

                        </Grid>
                    </Grid>  
                </DirectionContainer>
            </OuterGridContainer>
                <WazeFrame>
                    <iframe title = "Waze Frame" src="https://embed.waze.com/iframe?zoom=13&lat=33.869632&lon=-117.673016&ct=livemap&desc=1" width= {wazeSize} height="350" ></iframe>
                </WazeFrame>
         </MainContainer>
    );
};

// rc page
export function GridTilesRC() {

     return (
         <MainContainer>
            <style>{'body { background-color: #EEEEEE; }'}</style>

           <CurrentTime />
    
            <OuterGridContainer>
                <DirectionContainer>
                <DirectionTypo  align = "center" >Westbound</DirectionTypo>
                <Grid container flexDirection='column' >
                        <Grid>
                            <SomeTile elevation = {5}>
                                <TileContentTitle
                                    title = {<TileTitleText>I-15 North to County Line</TileTitleText>} style = {{textAlign: 'center'}}>
                                </TileContentTitle>
                            
                                <TileContent style = {{color: ' #895cf2'}}>Current Price</TileContent>
                                <TileContent>{CurrentPrice(JSON.parse(store.get('cache-rcwb1')))}</TileContent>
                                <Divider />

                                <TimeLeft />
                                <TileContent>{globalFuturePrice}</TileContent>
                            </SomeTile >
                        </Grid>

                        {/* New Card */}
                        <Grid>
                            <SomeTile elevation = {5}>
                                <TileContentTitle
                                    title = {<TileTitleText>McKinley to County Line</TileTitleText>} style = {{textAlign: 'center'}}>
                                </TileContentTitle>
                            
                                <TileContent style = {{color: ' #895cf2'}}>Current Price</TileContent>
                                 <TileContent>{CurrentPrice(JSON.parse(store.get('cache-rcwb2')))}</TileContent>
                                <Divider />

                                <TimeLeft />
                                <TileContent>{globalFuturePrice}</TileContent>
                            </SomeTile >

                        </Grid>
                    </Grid>
                </DirectionContainer>
            
                <DirectionContainer >
                <DirectionTypo align = "center" >Eastbound</DirectionTypo>

                    <Grid container flexDirection='column' >
                        <Grid >
                            <SomeTile elevation = {5}>
                                <TileContentTitle
                                    title = {<TileTitleText>County Line to 15 SB Ontario</TileTitleText>} style = {{textAlign: 'center'}}>
                                </TileContentTitle>
                            
                                <TileContent style = {{color: ' #895cf2'}}>Current Price</TileContent>
                                <TileContent>{CurrentPrice(JSON.parse(store.get('cache-rceb1')))}</TileContent>
                                <Divider />

                            
                                <TimeLeft />
                                <TileContent>{globalFuturePrice}</TileContent>
                            </SomeTile >

                        </Grid>

                        {/* New Card */}
                        <Grid >
                            <SomeTile elevation = {5}>
                                <TileContentTitle
                                    title = {<TileTitleText>County Line to McKinley</TileTitleText>} style = {{textAlign: 'center'}}>
                                </TileContentTitle>
                            
                                <TileContent style = {{color: ' #895cf2'}}>Current Price</TileContent>
                                <TileContent>{CurrentPrice(JSON.parse(store.get('cache-rceb2')))}</TileContent>
                                <Divider />
                                
                                
                                <TimeLeft />
                                <TileContent>{globalFuturePrice}</TileContent>
                            </SomeTile >

                        </Grid>
                    </Grid>
                    
                </DirectionContainer>
            
                </OuterGridContainer>
                <WazeFrame>
                    <iframe title = "Waze Frame" src="https://embed.waze.com/iframe?zoom=13&lat=33.869632&lon=-117.673016&ct=livemap&desc=1" width = {wazeSize} height="350" ></iframe>
                </WazeFrame>
         </MainContainer>
     );
 };

 // shows both ocrc together on 1 page
 export function GridTilesOCRC() {

    return (
         <MainContainer>
            <style>{'body { background-color: #EEEEEE; }'}</style>

           <CurrentTime />
    
            <OuterGridContainer>
                <DirectionContainer>

                <Grid container flexDirection='column' >
                        <DirectionTypo align = "center" >Westbound</DirectionTypo>
                        <Grid  >
                            <SomeTile elevation = {5}>
                                <TileContentTitle
                                    title = "I-15 North to County Line" style = {{textAlign: 'center'}}>
                                </TileContentTitle>
                            
                                <TileContent style = {{color: ' #895cf2'}}>Current Price</TileContent>
                               <TileContent>{CurrentPrice(JSON.parse(store.get('cache-rcwb1')))}</TileContent>
                                <Divider />

                                <TimeLeft />
                                <TileContent>{globalFuturePrice}</TileContent>
                            </SomeTile >
                        </Grid>

                        {/* New Card */}
                        <Grid >
                            <SomeTile elevation = {5}>
                                <TileContentTitle
                                    title = "McKinley to County Line" style = {{textAlign: 'center'}}>
                                </TileContentTitle>
                            
                                <TileContent style = {{color: ' #895cf2'}}>Current Price</TileContent>
                                <TileContent>{CurrentPrice(JSON.parse(store.get('cache-rcwb2')))}</TileContent>
                                <Divider />

                                <TimeLeft />
                                <TileContent>{globalFuturePrice}</TileContent>
                            </SomeTile >

                        </Grid>

                        <Grid  >
                            <SomeTile elevation = {5}>
                                <TileContentTitle
                                    title = "Riverside County Line to SR-55" style = {{textAlign: 'center'}}>
                                </TileContentTitle>
                                <TileContent style = {{color: ' #895cf2'}}>Current Price</TileContent>
                                <TileContent>{CurrentPrice(JSON.parse(store.get('cache-ocwb')))}</TileContent>
                                <Divider />

                                <TimeLeft />
                                <TileContent>{globalFuturePrice}</TileContent>
                            </SomeTile >
                        </Grid>
                    </Grid>
                </DirectionContainer>
            
                <DirectionContainer >
                    <Grid container flexDirection='column' >
                        <DirectionTypo align = "center" >Eastbound</DirectionTypo>
                        <Grid  >
                            <SomeTile elevation = {5}>
                                <TileContentTitle
                                    title = "County Line to 15 SB Ontario" style = {{textAlign: 'center'}}>
                                </TileContentTitle>
                            
                        
                            
                                <TileContent style = {{color: ' #895cf2'}}>Current Price</TileContent>
                                <TileContent>{CurrentPrice(JSON.parse(store.get('cache-rceb1')))}</TileContent>
                                <Divider />

                            
                                <TimeLeft />
                                <TileContent>{globalFuturePrice}</TileContent>
                            </SomeTile >

                        </Grid>

                        {/* New Card */}
                        <Grid >
                            <SomeTile elevation = {5}>
                                <TileContentTitle
                                    title = "County Line to McKinley" style = {{textAlign: 'center'}}>
                                </TileContentTitle>
                            
                                <TileContent style = {{color: ' #895cf2'}}>Current Price</TileContent>
                                <TileContent>{CurrentPrice(JSON.parse(store.get('cache-rceb2')))}</TileContent>
                                <Divider />
                                
                                
                                <TimeLeft />
                                <TileContent>{globalFuturePrice}</TileContent>
                            </SomeTile >

                        </Grid>


                        <Grid  >
                            <SomeTile elevation = {5}>
                                <TileContentTitle
                                    title = "SR-55 to Riverside County Line" style = {{textAlign: 'center'}}>
                                </TileContentTitle>
 
                                <TileContent style = {{color: ' #895cf2'}}>Current Price</TileContent>
                                <TileContent>{CurrentPrice(JSON.parse(store.get('cache-oceb')))}</TileContent>
                                <Divider />

                                <TimeLeft />
                                <TileContent>{globalFuturePrice}</TileContent>
                            </SomeTile >

                        </Grid>
                    </Grid>
                    
                </DirectionContainer>
            
                </OuterGridContainer>
                <WazeFrame>
                    <iframe title = "Waze Frame" src="https://embed.waze.com/iframe?zoom=13&lat=33.869632&lon=-117.673016&ct=livemap&desc=1" width = {wazeSize} height="350" ></iframe>
                </WazeFrame>
         </MainContainer>
    )



 }; 


 
//Gets the current time left for the next hour to occur
function TimeLeft() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);
    
    const getMinutesLeft = () => {
       let num = dateState.toLocaleString('en-US', {
            timeZone: "America/Los_Angeles",
            minute: 'numeric',
            hour12: true,
        })
          return (60 - num)  
    }
    return (<TileContent style = {{color: ' #895cf2'}}>Price in {getMinutesLeft()} minutes</TileContent>)
 };


 // Current time gets the current time for Los Angeles Time zone and is from the function CurrentTime 
function CurrentTime() {


 const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);

    const getCurrentTime = () =>{
        let time = dateState.toLocaleString('en-US', {
             timeZone: "America/Los_Angeles",
             hour: 'numeric',
             minute: 'numeric',
             hour12: true,
                   
         })
         return time
        }
        return (<InfoText>{getCurrentTime()}</InfoText>)
};

// when given json data which is extracted from localstorage it calculates the current and future toll price at given time
export function CurrentPrice(tollschedule) {

    
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 2000);
           
    }, []);

    

    function getDayTime(param) {


        let time = dateState.toLocaleString('en-US', {
            timeZone: "America/Los_Angeles",
            hourCycle: 'h23',
            hour: '2-digit',     
          })

        let day = dateState.toLocaleString('en-US', {
            timeZone: "America/Los_Angeles",
            weekday: "long"
                            
        })

        if (param === "someTime"){
            return time
        }
        else if (param === "someDay") {
            return day
        }


    }

     function checkTimeChange () {

        if (tollschedule === null ){
            return 'Loading'
        }
        
        let prevTime = ""
        let currTollPrice = 0

        let time = getDayTime("someTime")
        let day = getDayTime("someDay")

        
        if (prevTime !== time) {
            prevTime = time

            for (let i = 0; i < (tollschedule).length; i++){
                if((day).toLowerCase() === tollschedule[i].dayofweek && time === tollschedule[i].timeofday){
                    currTollPrice = `$${tollschedule[i].price}`
                    
                    if (i + 1 > (tollschedule).length) {
                        globalFuturePrice = `$${tollschedule[0].price}`
                    }
                    else {
                        globalFuturePrice = `$${tollschedule[i + 1].price}`
                    }  
 
                }
            }
      
        
            
        }
    return currTollPrice
    }
 
return (checkTimeChange())

};



