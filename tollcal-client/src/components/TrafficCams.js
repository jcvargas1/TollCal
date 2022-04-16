import React from "react";
import styled from "@emotion/styled";
import {ReactComponent as VideoImg} from "../assets/vid_img.svg"
import { Container,Typography, Grid} from "@mui/material";
import ReactPlayer from "react-player";


// Displays the traffic cams page of the site. They're all a part of a MUI grid. Cameras are provided by Caltrans. 

export default function TrafficCams() {
    let rPlayerDim = "400px";
    
    if (window.matchMedia("(max-width: 480px)").matches) {
        rPlayerDim = "320px" 
    }

    return (
    <div>
    <style>{'body { background-color: #EEEEEE; }'}</style>
        <Container item align = "center">
            <CamsTitle>Live Traffic Feeds </CamsTitle>
            <VideoImgStyled  />
        </Container>
        <div>
        
            <Grid container align="center" style = {{marginTop: '1rem'}}>
                <Grid item xs = {12} md = {4} lg = {4} xl = {3}>
                    <VideoTitle>Corona - 0.3 Miles East of Main St.</VideoTitle>
                    <ReactPlayer
                     
                    width={rPlayerDim}
                    height = {rPlayerDim}
                    url= "https://wzmedia.dot.ca.gov/D8/LB-8_91_32.stream/playlist.m3u8" 
                    playing = {false}
                    controls = {true}
                    />
                </Grid>

                <Grid item xs = {12} md = {4} lg = {4} xl = {3}>
                    <VideoTitle>Corona - 2nd St. On-ramp</VideoTitle>
                    <ReactPlayer
                     
                    width={rPlayerDim}
                    height = {rPlayerDim}
                    url= "https://wzmedia.dot.ca.gov/D8/LB-8_91_55.stream/playlist.m3u8"
                    playing = {false}
                    controls = {true}
                    />
                </Grid>

                <Grid item xs = {12} md = {4} lg = {4} xl = {3}>
                    <VideoTitle>Corona - Lincoln On-ramp</VideoTitle>
                    <ReactPlayer
                     
                    width={rPlayerDim}
                    height = {rPlayerDim}
                    url= "https://wzmedia.dot.ca.gov/D8/LB-8_91_54.stream/playlist.m3u8" 
                    playing = {false}
                    controls = {true}
                    />
                </Grid>

                <Grid item xs = {12} md = {4} lg = {4} xl = {3}>
                    <VideoTitle>Corona - 0.2 Miles West of Lincoln</VideoTitle>
                    <ReactPlayer
                     
                    width={rPlayerDim}
                    height = {rPlayerDim}
                    url= "https://wzmedia.dot.ca.gov/D8/LB-8_91_53.stream/playlist.m3u8" 
                    playing = {false}
                    controls = {true}
                    />
                </Grid>

                <Grid item xs = {12} md = {4} lg = {4} xl = {3}>
                    <VideoTitle>Corona - 0.6 Miles East of Maple</VideoTitle>
                    <ReactPlayer
                     
                    width={rPlayerDim}
                    height = {rPlayerDim}
                    url= "https://wzmedia.dot.ca.gov/D8/LB-8_91_52.stream/playlist.m3u8" 
                    playing = {false}
                    controls = {true}
                    />
                </Grid>
                
                <Grid item xs = {12} md = {4} lg = {4} xl = {3}>
                    <VideoTitle>Corona - Maple St.</VideoTitle>
                    <ReactPlayer
                     
                    width={rPlayerDim}
                    height = {rPlayerDim}
                    url= "https://wzmedia.dot.ca.gov/D8/LB-8_91_51.stream/playlist.m3u8" 
                    playing = {false}
                    controls = {true}
                    />
                </Grid>

                <Grid item xs = {12} md = {4} lg = {4} xl = {3}>
                    <VideoTitle>Corona - Serfas Club</VideoTitle>
                    <ReactPlayer
                     
                    width={rPlayerDim}
                    height = {rPlayerDim}
                    url= "https://wzmedia.dot.ca.gov/D8/LB-8_91_50.stream/playlist.m3u8" 
                    playing = {false}
                    controls = {true}
                    />
                </Grid>   

                <Grid item xs = {12} md = {4} lg = {4} xl = {3}>
                    <VideoTitle>Corona - 0.5 Miles West of Serfas Club</VideoTitle>
                    <ReactPlayer
                     
                    width={rPlayerDim}
                    height = {rPlayerDim}
                    url= "https://wzmedia.dot.ca.gov/D8/LB-8_91_49.stream/playlist.m3u8" 
                    playing = {false}
                    controls = {true}
                    />
                </Grid>   

                <Grid item xs = {12} md = {4} lg = {4} xl = {3}>
                    <VideoTitle>Corona - East of the 71 Fwy</VideoTitle>
                    <ReactPlayer
                     
                    width={rPlayerDim}
                    height = {rPlayerDim}
                    url= "https://wzmedia.dot.ca.gov/D8/LB-8_91_48.stream/playlist.m3u8" 
                    playing = {false}
                    controls = {true}
                    />
                </Grid>   

                <Grid item xs = {12} md = {4} lg = {4} xl = {3}>
                    <VideoTitle>Corona - East of the 71 Fwy</VideoTitle>
                    <ReactPlayer
                     
                    width={rPlayerDim}
                    height = {rPlayerDim}
                    url= "https://wzmedia.dot.ca.gov/D8/LB-8_91_47.stream/playlist.m3u8" 
                    playing = {false}
                    controls = {true}
                    />
                </Grid>

                <Grid item xs = {12} md = {4} lg = {4} xl = {3}>
                    <VideoTitle>Corona - Green River</VideoTitle>
                    <ReactPlayer
                     
                    width={rPlayerDim}
                    height = {rPlayerDim}
                    url= "https://wzmedia.dot.ca.gov/D8/LB-8_91_45.stream/playlist.m3u8" 
                    playing = {false}
                    controls = {true}
                    />
                </Grid>

                  <Grid item xs = {12} md = {4} lg = {4} xl = {3}>
                    <VideoTitle>Corona - 0.7 Miles West of Green River</VideoTitle>
                    <ReactPlayer
                    
                    width={rPlayerDim}
                    height = {rPlayerDim}
                    url= "https://wzmedia.dot.ca.gov/D8/LB-8_91_44.stream/playlist.m3u8" 
                    playing = {false}
                    controls = {true}
                    />
                </Grid> 

                    <Grid item xs = {12} md = {4} lg = {4} xl = {3}>
                    <VideoTitle>Corona - County Line</VideoTitle>
                    <ReactPlayer
                    
                    width={rPlayerDim}
                    height = {rPlayerDim}
                    url= "https://wzmedia.dot.ca.gov/D8/LB-8_91_43.stream/playlist.m3u8" 
                    playing = {false}
                    controls = {true}
                    />
                </Grid>       
                    
            </Grid>
        </div>
    </div>
    
    );

};



 const CamsTitle = styled(Typography)`
    color: #895cf2;
    font-size: 3.5rem;
    font-weight: 600;
    margin-top: 3rem;
    margin-bottom: 3rem;

`;

 const VideoTitle = styled(Typography)`
    color: #895cf2;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 3rem;
`;


const VideoImgStyled = styled(VideoImg)`

    height: 250px;

    @media (max-width: 480px) {
                
        height: 150px;
        width: 300px
        }
               
    @media (min-width: 480px ) and  (max-width: 1024px) {
            height: 300px;
            width: 350px;

        }

`;


