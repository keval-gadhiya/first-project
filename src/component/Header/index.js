import React, { useState } from "react";
import './header.css';
import Button from '@mui/material/Button';
import SearchBox from "../Searchbox";
import UserMenu from "../UserMenu/index.js";
import NotificationMenu from "../Notification/index.js";

// Icons
import {
    HugeiconsIcon,
    MenuCollapseIcon,
    Moon02Icon,
    Notification03Icon,
    ArrowDown01Icon,
} from '../Icon/icon.js';


const HeaderCompoenent = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const isUserMenuOpen = Boolean(anchorEl);

    const [isOpenNotification, setisOpenNotitfication] = useState(false);
     const isNotificationMenuOpen = Boolean(isOpenNotification);

    const handleOpenMyAccount = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMyAccount = () => {
        setAnchorEl(null);
    };


    const handleOpenMyNotification = () => {
        setisOpenNotitfication(true)
    };

    const handleCloseMyNotification = () => {
         setisOpenNotitfication(false)
    };

    return (
        <>
          <header>
            <div className="container-fluid w-100">
                <div className="d-flex align-items-center" style={{ justifyContent: "space-between" }}>
                    {/* Left: Menu + Search */}
                    <div className="col-sm-3 d-flex align-items-center part2">
                        <Button className="rounded-circle mr-3">
                            <HugeiconsIcon icon={MenuCollapseIcon} />
                        </Button>
                        <SearchBox />
                    </div>

                    {/* Right: Icons + Account */}
                    <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                        {/* Dark Mode Icon */}
                        <Button className="rounded-circle mr-3">
                            <HugeiconsIcon icon={Moon02Icon} />
                        </Button>

                        {/* Notification */}
                        <Button
                            className="rounded-circle mr-3"
                            onClick={handleOpenMyNotification}
                        >
                            <HugeiconsIcon icon={Notification03Icon} />
                        </Button>
                        <NotificationMenu
                            openNotification={isOpenNotification}
                            open={isNotificationMenuOpen}
                            onClose={handleCloseMyNotification}
                        />

                        {/* User Account */}
                        <Button
                            className={`myAccount d-flex align-items-center ${isUserMenuOpen ? 'menu-open' : ''}`}
                            onClick={handleOpenMyAccount}
                        >
                            <div className="userImg">
                                <span className="rounded-circle">
                                    <img
                                        src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=3087&auto=format&fit=crop"
                                        alt="User Avatar"
                                    />
                                </span>
                            </div>
                            <div className="userInfo">
                                <p>John Smith</p>
                            </div>
                            <div className="myAccIcon">
                                <HugeiconsIcon icon={ArrowDown01Icon} />
                            </div>
                        </Button>

                        <UserMenu
                            anchorEl={anchorEl}
                            open={isUserMenuOpen}
                            onClose={handleCloseMyAccount}
                        />
                    </div>
                </div>
            </div>
        </header></>
    );
};

export default HeaderCompoenent;
