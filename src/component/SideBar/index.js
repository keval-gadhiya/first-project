import Button from '@mui/material/Button';
import "./side-bar.css"
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg"

const SideBar = () => {
    return (
        <>
            <div className="sidebar">
                {/* Logo */}
                <div className="col-sm-2 part1">
                    <Link to={'/home'}>
                        <img src={logo} className="logo"></img>
                    </Link>
                </div>
                <ul>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'></span>
                            Text
                            <span className='arrow'></span>
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideBar;