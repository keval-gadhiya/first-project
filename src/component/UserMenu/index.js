import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import "../UserMenu/menu.css"
import { Box, Typography } from '@mui/material'; // Import Box and Typography


// Icons
import {
    HugeiconsIcon,
    MenuCollapseIcon,
    Moon02Icon,
    Notification03Icon,
    ArrowDown01Icon,
} from '../Icon/icon.js';

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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',  // Changed to row
                    alignItems: 'center',    // Vertically center items
                    padding: '0 16px 16px 16px',
                    borderBottom: '1px solid #E0E0E0',  // Added border
                    marginBottom: '16px' //Added margin
                }}
            >
                <Avatar sx={{ marginRight: '8px' }}>JS</Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <p className="p-tag">John Smith</p>
                    <p className="email">Email ID</p>
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
