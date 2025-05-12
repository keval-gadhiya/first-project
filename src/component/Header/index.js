import React, { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';
import logo from "../../assets/logo/logo.svg"
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
    const open = Boolean(anchorEl);

    const [isOpenNotitfication, setisOpenNotitfication] = useState(false);
     const openNotification = Boolean(isOpenNotitfication);

    const handleOpenMyAccout = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMyAccout = () => {
        setAnchorEl(null);
    };


    const handleOpenMyNotificaition = () => {
        setisOpenNotitfication(true)
    };

    const handleCloseMyNotificaition = () => {
         setisOpenNotitfication(false)
    };

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

                            {/* Dark Mode  Icon*/}
                            <Button className="rounded-circle mr-3">
                                <HugeiconsIcon icon={Moon02Icon} />
                            </Button>

                            {/* Notification Icon */}
                            <Button 
                            className="rounded-circle mr-3"
                            onClick={handleOpenMyNotificaition}
                            >
                                <HugeiconsIcon icon={Notification03Icon} />
                            </Button>

                               <NotificationMenu
                                openNotification={isOpenNotitfication}
                                open={openNotification}
                                onClose={handleCloseMyNotificaition}
                            />

                            {/* Account Menu Button */}
                            <Button
                                className={`myAccount d-flex align-items-center ${open ? 'menu-open' : ''}`}
                                onClick={handleOpenMyAccout}
                            >
                              
                                <div className="userImg">
                                    <span className="rounded-circle">
                                        <img
                                            src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=3087&auto=format&fit=crop" />
                                    </span>
                                </div>
                                <div className="userInfo">
                                    <p>John Smith</p>
                                </div>
                                <div className="myAccIcon">
                                    <HugeiconsIcon icon={ArrowDown01Icon} />
                                </div>
                            </Button>

                            {/* UserMenu gets anchor and handlers as props */}
                            <UserMenu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleCloseMyAccout}
                            />

                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderCompoenent;
