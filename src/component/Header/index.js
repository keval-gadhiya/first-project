import * as React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import logo from "../../assets/logo/logo.svg"
import Button from '@mui/material/Button';
import SearchBox from "../Searchbox";

// Icons
import {
    HugeiconsIcon,
    MenuCollapseIcon,
    Moon02Icon,
    Notification03Icon,
    ArrowDown01Icon,
} from '../Icon/icon.js';

// //Menu
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
// import { useState } from "react";


const HeaderCompoenent = () => {

    //     const [anchorEl, setAnchorEl] = useState(null);
    //   const open = Boolean(anchorEl);
    //    const handleClick = (event) => {
    //     setAnchorEl(event.cu);
    //   };
    //    const handleClose = () => {
    //     setAnchorEl(null);
    //   };

    return (
        <>
            <header>
                <div className="container-fluid w-100">
                    <div className="d-flex align-items-center">

                        {/* Logo */}
                        <div className="col-sm-2 part1">
                            <Link to={'/home'}>
                                <img src={logo} className="logo"></img>
                            </Link>
                        </div>

                        {/* Search & Icon */}
                        <div className="col-sm-3 d-flex align-items-center part2">
                            <Button className="rounded-circle mr-3">
                                <HugeiconsIcon icon={MenuCollapseIcon} />
                            </Button>
                            <SearchBox />
                        </div>


                        {/* End Part */}
                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle mr-3">
                                <HugeiconsIcon icon={Moon02Icon} />
                            </Button>

                            <Button className="rounded-circle mr-3">
                                <HugeiconsIcon icon={Notification03Icon} />
                            </Button>


                            {/* Account Menu */}
                            <Button className="myAccount d-flex align-items-center">
                                {/* <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Avatar /> Profile
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Avatar /> My account
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
 */}

                                <div className="userImg">
                                    <span className="rounded-circle">
                                        <img
                                            src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                    </span>

                                </div>
                                <div className="userInfo">
                                    <p>
                                        John Smith
                                    </p>
                                </div>
                                <div className="myAccIcon">
                                    <HugeiconsIcon icon={ArrowDown01Icon} />
                                </div>

                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderCompoenent;
