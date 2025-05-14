import React from "react";
import Menu from '@mui/material/Menu';
import "../Notification/notification.css"
import { Box } from '@mui/material'; // Import Box and Typography

//SVGs

import {
    HeaderNotification,
} from '../../assets/menu/svg.js';


const NotificationMenu = ({ isOpenNotitfication, openNotification, onClose }) => {
    return (
        <Menu
            className="notification-class"
            openNotification={isOpenNotitfication}
            id="notification-menu"
            open={openNotification}
            onClose={onClose}
            onClick={onClose}
            PaperProps={{
                className: `custom-notification-menu${openNotification ? ' open' : ''}`,
                style: {
                    boxShadow: 'none',
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >

            <div className="row-sm-3 " style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <p
                    style={{ fontSize: '18px', fontWeight: '800', }}
                    className="p-tag">Notifications</p>
                <p style={{ fontSize: '15px', fontWeight: '500', color: "#737DF5" }}>View All</p>
            </div>

            {/* Box 1 */}
            <Box className="notification-info-border">
                <img src={HeaderNotification} />
                <Box sx={{ paddingLeft: '12px' }}>
                    <div className="row-sm-3 " style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <p
                            style={{ fontSize: '16px', fontWeight: '500', marginRight: '8px' }}
                            className="p-tag">Notification Heading</p>
                        <p className="time">1 min ago</p>
                    </div>
                    <p
                        style={{ fontSize: '14px', fontWeight: '400', color: "#6D757C" }}
                        className="p-tag">Whitelist Bank Account Request is awaiting your approval.</p>
                </Box>
            </Box>

            {/* Box 2 */}
            <Box className="notification-info-border">
                <img src={HeaderNotification} />
                <Box sx={{ paddingLeft: '12px' }}>
                    <div className="row-sm-3 " style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <p
                            style={{ fontSize: '16px', fontWeight: '500', marginRight: '8px' }}
                            className="p-tag">Notification Heading</p>
                        <p className="time">1 min ago</p>
                    </div>
                    <p
                        style={{ fontSize: '14px', fontWeight: '400', color: "#6D757C" }}
                        className="p-tag">Whitelist Bank Account Request is awaiting your approval.</p>
                </Box>
            </Box>


            {/* Box 3 */}
            <Box className="notification-info-border">
                <img src={HeaderNotification} />
                <Box sx={{ paddingLeft: '12px' }}>
                    <div className="row-sm-3 " style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <p
                            style={{ fontSize: '16px', fontWeight: '500', marginRight: '8px' }}
                            className="p-tag">Notification Heading</p>
                        <p className="time">1 min ago</p>
                    </div>
                    <p
                        style={{ fontSize: '14px', fontWeight: '400', color: "#6D757C" }}
                        className="p-tag">Whitelist Bank Account Request is awaiting your approval.</p>
                </Box>
            </Box>


            {/* Box 4 */}
            <Box className="notification-info-border">
                <img src={HeaderNotification} />
                <Box sx={{ paddingLeft: '12px' }}>
                    <div className="row-sm-3 " style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <p
                            style={{ fontSize: '16px', fontWeight: '500', marginRight: '8px' }}
                            className="p-tag">Notification Heading</p>
                        <p className="time">1 min ago</p>
                    </div>
                    <p
                        style={{ fontSize: '14px', fontWeight: '400', color: "#6D757C" }}
                        className="p-tag">Whitelist Bank Account Request is awaiting your approval.</p>
                </Box>
            </Box>

        </Menu>
    );
};

export default NotificationMenu;