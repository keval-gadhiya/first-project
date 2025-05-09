import { Link } from "react-router-dom";
import './App.css';
import logo from "../../assets/logo/logo.svg"
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../Searchbox";
import { MdDarkMode } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";



const HeaderCompoenent = () => {
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
                            <Button className="rounded-circle mr-3"><MdMenuOpen /></Button>
                            <SearchBox />
                        </div>

                        {/* End Part */}
                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle mr-3"><MdDarkMode /></Button>
                            <Button className="rounded-circle mr-3"><IoNotifications /></Button>

                            <Button className="myAccount d-flex align-items-center">
                                
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
                                <div>
                                {/* <HugeiconsIcon icon={ArrowDown01Icon} /> */}
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
