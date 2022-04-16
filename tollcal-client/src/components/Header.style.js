import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

// styling for the header
export const CustomizedAppBar = styled(AppBar)`
background-color: #FFFFFF;
position: static;
box-shadow: none;
`;


export const CustomizedIconBtns = styled(IconButton)`
color: #895cf2;
margin: 10px;
font-size: 1.5rem;
font-weight: 600;

    @media (min-width: 480px ) and  (max-width: 1024px) {
            font-size: 1rem;
        }
`;

export const CutstomizedToolBar = styled(Toolbar)`
    justify-content: space-between;
`;

export const CustomizedTypo = styled(Typography)`
color: black;
background: linear-gradient(to right, #000000 51%, #895cf2 50%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 2.5rem;
font-weight: 600;
`;

export const LinkContainer = styled('div')`
    display: flex;
    @media (max-width: 480px) {
            display: none;
        }
`;

export const LogoContainer = styled('div')`
    display: flex;
    justify-content: flex-end;
`;

export const Hamburger = styled('div')`
    display: flex;
    @media (min-width: 480px) {
            display: none;
        } 
`;

