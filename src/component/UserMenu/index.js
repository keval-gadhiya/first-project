import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import "../UserMenu/menu.css"
import { Box, Typography } from '@mui/material'; // Import Box and Typography


//SVGs
import {
    AvatarAdd,
    Logout,
    Setting,
    SwitcAccount,
} from '../../assets/menu/svg.js';


const UserMenu = ({ anchorEl, open, onClose }) => {
    return (
        <Menu
        className="menu-class"
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={onClose}
            onClick={onClose}
            PaperProps={{
                className: `custom-user-menu${open ? ' open' : ''}`,
                style: {
                    boxShadow: 'none',
                    padding: '16px 0',
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
           <Box className= "user-info-border">
                <Avatar>JS</Avatar>
                <Box className="user-text-container" >
                    <p className="p-tag" >John Smith</p>
                    <p className="p-tag">Email ID</p>
                </Box>
            </Box>
            <MenuItem
                className="menu-item-custom"
                onClick={onClose}>
                <img src={Setting} /> <p className="p-tag">User Settings</p>
            </MenuItem>
            <MenuItem onClick={onClose}
                className="menu-item-custom">
                <img src={AvatarAdd} /> <p className="p-tag">New Login</p>
            </MenuItem>
            <MenuItem onClick={onClose}
                className="menu-item-custom">
                <img src={Logout} /> <p className="p-tag">Log Out</p>
            </MenuItem>
            <MenuItem onClick={onClose}
                className="menu-item-custom">
                <img src={SwitcAccount} /> <p className="p-tag">Switch Account</p>
            </MenuItem>
        </Menu>
    );
};

export default UserMenu;
