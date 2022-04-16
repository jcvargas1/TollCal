import { styled } from '@mui/material/styles';
import { Typography,Card, CardHeader, Container } from '@mui/material';


// styling for the data displaying part of website. also has media queries for diff kinds of screens.

export const MainContainer = styled('div')`
display: flex;
flex-direction: column;
 
`;

export const InfoText = styled(Typography)`
    color: black;
    font-size: 4rem;
    text-align: center;
    margin-top: 2rem;
    font-weight: bold;
    
    @media (min-width: 2561px )  {
            font-size: 5rem;
        }

`;

export const SomeTile = styled(Card)`
    margin-bottom: 1rem;
`;

export const TileContent = styled(Typography)`
    color: black;
    
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    font-weight: bold;
`;

export const TileContentTitle = styled(CardHeader)`
    color: white;
    font-size: 1.5rem;
    background-color: black;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
`;


export const DirectionTypo = styled(Typography)`
    color: #000;
    font-size: 3rem;
    text-align: center;
    margin-top: 1rem;
    font-weight: bold;
    
    @media (min-width: 1921px ) and (max-width: 2560px)  {
            font-size: 3.5rem;    
        }
    @media (min-width: 2561px )  {
            font-size: 5rem;
        }
`;

export const DirectionContainer = styled(Container)`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const OuterGridContainer = styled(Container)`
display: flex;
flex-direction: row;

    @media (min-width: 0px ) and  (max-width: 1024px) {
            flex-direction: column;
        }
`;

export const WazeFrame = styled('div')`
    display: flex;
    justify-content: center;
    margin-top: 4rem;
`;

export const TileTitleText = styled(Typography)`
    color: white;
    
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    font-weight: bold;
`;