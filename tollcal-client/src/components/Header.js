import React from "react";
import {CustomizedAppBar, CustomizedIconBtns, CutstomizedToolBar,CustomizedTypo, LinkContainer, LogoContainer, Hamburger} from './Header.style';
import { Link } from "react-router-dom";
import { Divider, IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


// header for site that always is being displayed
export default function NavBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <CustomizedAppBar>
                <CutstomizedToolBar>
                    <LogoContainer>
                        <Link to ="/" style={{ textDecoration: 'none' }}><CustomizedTypo>
                            TollCal
                        </CustomizedTypo>
                        </Link>
                    </LogoContainer>
                <Hamburger>
                    <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                        <MenuIcon /> 
                    </IconButton>
                    <Menu 
                       id="basic-menu"
                       anchorEl={anchorEl}
                       open={open}
                       onClose={handleClose}
                       MenuListProps={{
                         'aria-labelledby': 'basic-button',
                       }}
                     >

                    <Link to ="/oc" style={{ textDecoration: 'none' }}> 
                        <MenuItem onClick={handleClose}>
                            Orange County
                        </MenuItem>
                    </Link>

                    <Link to ="/rc" style={{ textDecoration: 'none' }}> 
                        <MenuItem onClick={handleClose}>
                            Riverside County
                        </MenuItem>
                    </Link>

                    <Link to ="/ocrc" style={{ textDecoration: 'none' }}> 
                        <MenuItem onClick={handleClose}>
                            Both Counties
                        </MenuItem>
                    </Link>

                    <Link to ="/cams" style={{ textDecoration: 'none' }}> 
                        <MenuItem onClick={handleClose}>
                            Traffic Cams
                        </MenuItem>
                    </Link>

                    <Link to ="/about" style={{ textDecoration: 'none' }}> 
                        <MenuItem onClick={handleClose}>
                            About
                        </MenuItem>
                    </Link>

                    </Menu>
                    </Hamburger>


                    <LinkContainer >
                        <Link to ="/oc" style={{ textDecoration: 'none' }}>
                        <CustomizedIconBtns>
                            Orange County
                        </CustomizedIconBtns>
                        </Link>

                        <Link to ="/rc" style={{ textDecoration: 'none' }}>
                        <CustomizedIconBtns>
                            Riverside County
                        </CustomizedIconBtns>
                        </Link>

                        <Link to ="/ocrc" style={{ textDecoration: 'none' }}>
                        <CustomizedIconBtns>
                            Both Counties
                        </CustomizedIconBtns>
                        </Link>

                        <Link to ="/cams" style={{ textDecoration: 'none' }}>
                        <CustomizedIconBtns>
                            Traffic Cams
                        </CustomizedIconBtns>
                        </Link>

                        <Link to ="/about" style={{ textDecoration: 'none' }}>
                        <CustomizedIconBtns>
                            About
                        </CustomizedIconBtns>
                        </Link>

                    </LinkContainer>
                </CutstomizedToolBar>
                <Divider />
            </CustomizedAppBar>
        </>
    );
}


