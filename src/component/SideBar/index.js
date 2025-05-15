import Button from '@mui/material/Button';
import "./side-bar.css"
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg"
import { HugeiconsIcon } from '@hugeicons/react';

// Icons
import {
    DashboardBrowsingIcon,
    ArrowDown01Icon,
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
                        <Button className='menu-button'>
                            <div className='button-inner'>
                                <div className='row-sm-3'>
                                    <HugeiconsIcon icon={DashboardBrowsingIcon} />
                                    <p className='menu-p-tag'>Dashboard</p>
                                </div>
                                <HugeiconsIcon icon={ArrowDown01Icon} />
                            </div>
                        </Button>

                         {/* Dashboard */}
                        <Button className='menu-button'>
                            <div className='button-inner'>
                                <div className='row-sm-3'>
                                    <HugeiconsIcon icon={DashboardBrowsingIcon} />
                                    <p className='menu-p-tag'>Dashboard</p>
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