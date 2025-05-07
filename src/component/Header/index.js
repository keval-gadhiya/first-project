import { Link } from "react-router-dom";
import './App.css';

const HeaderCompoenent = ()=> {
    return(
        <>
       <header>
        <div className="container-fluid">
            <div className="row d-flex align-items-center">
                <div className="col-xs-3">
                <Link to="/Dashboard">
                    <img src="assets/logo/logo.svg" className="logo" alt="Logo" />
                </Link>
                </div>
            </div>
        </div>
       </header>
        </>
    )
}

export default HeaderCompoenent;