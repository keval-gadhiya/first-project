// SideBar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import './side-bar.css';
import logo from '../../assets/logo/logo.svg';
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


    const [productOpen, setProductOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;
    // Auto-close Product submenu if not on product route
    useEffect(() => {
        if (!location.pathname.startsWith('/product')) {
            setProductOpen(false);
        }
    }, [location.pathname]);

    const getButtonClass = (path, exact = true) => {
        if (exact) {
            return location.pathname === path
                ? 'active-menu-button'
                : 'menu-button';
        } else {
            return location.pathname.startsWith(path)
                ? 'active-menu-button'
                : 'menu-button';
        }
    };

    return (
        <div className="sidebar">
            <div className="col-sm-2 part1">
                <Link to="/">
                    <img src={logo} className="logo" alt="logo" />
                </Link>
            </div>

            <ul>
                <li>
                    {/* Dashboard */}
                    <Button className={getButtonClass('/dashboard')}
                        component={Link} to="/dashboard">
                        <div className="button-inner">
                            <div className="row-sm-3">
                                <HugeiconsIcon icon={DashboardBrowsingIcon} />
                                <p className="menu-p-tag">Dashboard</p>
                            </div>
                        </div>
                    </Button>

                    {/* Product */}
                    <Button
                        component={Link} to="/product"
                        className={getButtonClass('/product', false)}
                        onClick={() => setProductOpen(!productOpen)}
                    >
                        <div className="button-inner">
                            <div className="row-sm-3">
                                <HugeiconsIcon icon={DeliveryBox01Icon} />
                                <p className="menu-p-tag">Product</p>
                            </div>
                            <HugeiconsIcon
                                icon={ArrowDown01Icon}
                                style={{
                                    transform: productOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease',
                                    color: 'white',
                                }}
                            />
                        </div>
                    </Button>

                    {productOpen && (
                        <div className="sub-menu">
                            <ul>
                                <li style={{ marginTop: '12px' }}>
                                    <Link
                                        to="/product-list"
                                        className={`sub-menu-link ${currentPath === '/product-list' ? 'active-sub-menu-link' : ''}`}
                                    >
                                        <p >Product List</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/product-view"
                                         className={`sub-menu-link ${currentPath === '/product-view' ? 'active-sub-menu-link' : ''}`}
                                         >
                                        <p>Product View</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/product-upload" 
                                         className={`sub-menu-link ${currentPath === '/product-upload' ? 'active-sub-menu-link' : ''}`}
                                         >
                                        <p>Product Upload</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Message */}
                    <Button className={getButtonClass('/message')}
                        component={Link} to="/message">
                        <div className="button-inner">
                            <div className="row-sm-3">
                                <HugeiconsIcon icon={Message01Icon} />
                                <p className="menu-p-tag">Message</p>
                            </div>
                        </div>
                    </Button>

                    {/* User */}
                    <Button className={getButtonClass('/user')}
                        component={Link} to="/user">
                        <div className="button-inner">
                            <div className="row-sm-3">
                                <HugeiconsIcon icon={UserCircle02Icon} />
                                <p className="menu-p-tag">User</p>
                            </div>
                        </div>
                    </Button>

                    {/* Setting */}
                    <Button className={getButtonClass('/setting')}
                        component={Link} to="/setting">
                        <div className="button-inner">
                            <div className="row-sm-3">
                                <HugeiconsIcon icon={Setting07Icon} />
                                <p className="menu-p-tag">Setting</p>
                            </div>
                        </div>
                    </Button>

                    {/* Info */}
                    <Button className={getButtonClass('/info')}
                        component={Link} to="/info">
                        <div className="button-inner">
                            <div className="row-sm-3">
                                <HugeiconsIcon icon={HelpSquareIcon} />
                                <p className="menu-p-tag">Info</p>
                            </div>
                        </div>
                    </Button>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
