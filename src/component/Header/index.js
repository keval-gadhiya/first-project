import { Link } from "react-router-dom";
import './App.css';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";

const HeaderCompoenent = () => {
    return (
        <header>
            <div className="header-container">
                <div className="left-logos">
                <Link to="/Dashboard" className="d-flex align-items-center">
                    <img src="assets/logo/logo.svg" className="logo" alt="Logo" />
                </Link>

                <Link to="/Dashboard" className="d-flex align-items-center">
                    <img src="assets/logo/logo.svg" className="logo" alt="Logo" />
                </Link>

                </div>
                <Link to="/Dashboard" className="d-flex align-items-center">
                    <img src="assets/logo/logo.svg" className="logo" alt="Logo" />
                </Link>
</div>


        </header>
    );
};

export default HeaderCompoenent;
