import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { ReactComponent as CarSvg } from "../assets/car_img2.svg";
import { ReactComponent as CarSvg2 } from "../assets/car_img3.svg";

// Styling for hero which is first page user sees visiting website. Has media queries for different screens including mobile

export const CarStyled = styled(CarSvg)`

    height: 400px;

    @media (max-width: 480px) {
                
     height: 150px;
     overflow-x: hidden;
    }
    
    @media (min-width: 480px ) and  (max-width: 1024px) {
            height: 300px;
	    overflow-x: hidden;
        }
`;


export const CarStyled2 = styled(CarSvg2)`

    height: 400px;

    @media (max-width: 480px) {
                
     height: 200px;
     overflow-x: hidden;
    }
    
    @media (min-width: 480px ) and  (max-width: 1024px) {
            height: 350px;
	    overflow-x: hidden;

        }
`;

export const HeroBG = styled('div')`

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;


export const HeroContainer = styled('div')`

    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #0c0c0c;
    background-image: linear-gradient(to top, #895cf2 0%, #fbc2eb 100%);

   
`;

export const HeroH1Box = styled('div')`
    width: 750px;

    @media (max-width: 480px) {
                
        width: 300px;
        margin-bottom: 50px;
        overflow-x: hidden;
    } 

    @media (min-width: 480px ) and  (max-width: 1024px) {
            width: 700px;
            margin-bottom: 50px;
	    overflow-x: hidden;
        }
    
    @media (min-width: 1200px) and (max-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) { 
    
        width: 700px;
	overflow-x: hidden;

    
    }



`;

export const HeroH1 = styled('p')`

    color:black;
    font-size: 3.5rem;
    font-weight: 600;
    text-align: center;
    //width: 30%;
    margin-right: 5rem;

    @media (max-width: 480px) {
            
            font-size: 2.2rem;
            margin-right: 0;
	    overflow-x: hidden;
        } 

    @media (min-width: 480px ) and  (max-width: 1024px) {
        
        font-size: 2.9rem;
        margin-right: 0;
	overflow-x: hidden;
    }



    

`;

export const HeroChoiceTxt = styled('p')`
    color: #000;
    font-size: 3rem;
    text-align: center;
    margin-top: 1rem;
    font-weight: bold;

    @media (max-width: 480px) {
        font-size: 1.8rem;
        
    } 

`;


export const HeroContent = styled('div')`
    z-index: 3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 65px;

    @media (max-width: 480px) {
        flex-direction: column;   
        width: 300px;
	overflow-x: hidden;
         
    } 

    @media (min-width: 480px ) and  (max-width: 1024px) {
            flex-direction: column;

        }

    @media (min-width: 1200px) and (max-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) { 
    
        width: 1200px;

}`;

export const HeroContent2 = styled('div')`
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    margin-top: 1rem;

    @media (max-width: 480px) {
        flex-direction: column;   
        width: 300px;  
	overflow-x: hidden;
    } 

`;


export const HeroContainer2 = styled('div')`

    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
 

`;

export const ChoiceBtn = styled(Button)`
    font-family: Sans-serif;
    display: block;
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    font-size: 2em;
    text-transform: uppercase;
    color: #fff;
    border-radius: 6px;
    margin: 2.5rem;
    padding: 1em 3em;
    background-size: 300% 300%;
    color: white;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-image: linear-gradient(to right, #895cf2 0%, #ffabf4 50%, #895cf2 100%);
    transition: 0.5s;

    :hover {
        background-position: right center;
    }


    @media (max-width: 480px) {
        width: 300px;
        font-size: 1.5rem;
        overflow-x: hidden;
    }
    
    @media (min-width: 480px ) and  (max-width: 1024px) {
        
       width: 300px;
       font-size: 1.5rem;
    }
`;

export const BtnCont = styled('div')`
    display:flex;
    align-items: center;
    flex-direction: row;
    margin-top: 5rem;

    @media (max-width: 480px) {
        flex-direction: column;
        margin-top: 20px;
        width: 480px;  
	overflow-x: hidden;
        
    } 

    @media (min-width: 480px ) and  (max-width: 1024px) {
        
        font-size: 2.9rem;
        margin-right: 0;
    }
`;

export const HeroAll = styled('div')`
    display: flex;
    flex-direction: column;
`;


  
