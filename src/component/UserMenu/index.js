import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { Box, p } from '@mui/material'; // Import Material UI components
import "../UserMenu/menu.css"; // Import custom CSS for styling

// Import SVG icons used in the menu items
import {
    AvatarAdd,
    Logout,
    Setting,
    SwitcAccount,
} from '../../assets/menu/svg.js';

// UserMenu component definition
const UserMenu = ({ anchorEl, open, onClose }) => {
    return (
        <Menu
            className="menu-class" 
            anchorEl={anchorEl} 
            id="account-menu" 
            open={open}
            onClose={onClose}
            onClick={onClose} 
            PaperProps={{ // Props applied to the Paper component that wraps the menu items
                className: `custom-user-menu${open ? ' open' : ''}`, 
                style: {
                    boxShadow: 'none', // Remove default shadow
                    padding: '16px 0', // Vertical padding inside the menu
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }} 
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} 
        >
            {/* User Information Section */}
            <Box className="user-info-border">
                <Avatar>JS</Avatar>
                <Box className="user-text-container">
                    <p variant="body1" className="p-tag">John Smith</p> {/* User's Name */}
                    <p variant="body2" color="textSecondary" className="p-tag">Email ID</p> {/* User's Email */}
                </Box>
            </Box>

            {/* Menu Items */}
            <MenuItem
                className="menu-item-custom"
                onClick={onClose}
            >
                <img src={Setting} alt="User Settings" /> <p variant="body1" className="p-tag">User Settings</p>
            </MenuItem>
            <MenuItem
                className="menu-item-custom"
                onClick={onClose}
            >
                <img src={AvatarAdd} alt="New Login" /> <p variant="body1" className="p-tag">New Login</p>
            </MenuItem>
            <MenuItem
                className="menu-item-custom"
                onClick={onClose}
            >
                <img src={Logout} alt="Log Out" /> <p variant="body1" className="p-tag">Log Out</p>
            </MenuItem>
            <MenuItem
                className="menu-item-custom"
                onClick={onClose}
            >
                <img src={SwitcAccount} alt="Switch Account" /> <p variant="body1" className="p-tag">Switch Account</p>
            </MenuItem>
        </Menu>
    );
};

export default UserMenu;