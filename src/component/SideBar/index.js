import Button from '@mui/material/Button';
import "./side-bar.css"
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg"
import { HugeiconsIcon } from '@hugeicons/react';

// Icons
import {
    DashboardBrowsingIcon,
    ArrowDown01Icon,
    UserCircle02Icon,
    Setting07Icon,
    HelpSquareIcon,
    DeliveryBox01Icon,
    Message01Icon,
} from '../Icon/icon.js';

const SideBar = () => {
    return (
        <>
            <div className="sidebar">
                {/* Logo */}
                <div className="col-sm-2 part1">
                    <Link to={'/dashboard'}>
                        <img src={logo} className="logo"></img>
                    </Link>
                </div>
                <ul>
                    <li>
                        {/* Menu Button */}
                        {/* Dashboard */}
                        <Button className='active-menu-button'>
                            <div className='button-inner'>
                                <div className='row-sm-3'>
                                    <HugeiconsIcon icon={DashboardBrowsingIcon} />
                                    <p className='menu-p-tag'>Dashboard</p>
                                </div>
                            </div>
                        </Button>

                         {/* Product */}
                        <Button className='menu-button'>
                            <div className='button-inner'>
                                <div className='row-sm-3'>
                                    <HugeiconsIcon icon={DeliveryBox01Icon} />
                                    <p className='menu-p-tag'>Product</p>
                                </div>
                                <HugeiconsIcon icon={ArrowDown01Icon} />
                            </div>
                        </Button>

                         {/* Message */}
                        <Button className='menu-button'>
                            <div className='button-inner'>
                                <div className='row-sm-3'>
                                    <HugeiconsIcon icon={Message01Icon} />
                                    <p className='menu-p-tag'>Message</p>
                                </div>
                                <HugeiconsIcon icon={ArrowDown01Icon} />
                            </div>
                        </Button>

                         {/* User */}
                        <Button className='menu-button'>
                            <div className='button-inner'>
                                <div className='row-sm-3'>
                                    <HugeiconsIcon icon={UserCircle02Icon} />
                                    <p className='menu-p-tag'>User</p>
                                </div>
                                <HugeiconsIcon icon={ArrowDown01Icon} />
                            </div>
                        </Button>

                          {/* Setting */}
                        <Button className='menu-button'>
                            <div className='button-inner'>
                                <div className='row-sm-3'>
                                    <HugeiconsIcon icon={Setting07Icon} />
                                    <p className='menu-p-tag'>Setting</p>
                                </div>
                                <HugeiconsIcon icon={ArrowDown01Icon} />
                            </div>
                        </Button>

                          {/* Info */}
                        <Button className='menu-button'>
                            <div className='button-inner'>
                                <div className='row-sm-3'>
                                    <HugeiconsIcon icon={HelpSquareIcon} />
                                    <p className='menu-p-tag'>Info</p>
                                </div>
                                <HugeiconsIcon icon={ArrowDown01Icon} />
                            </div>
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideBar;