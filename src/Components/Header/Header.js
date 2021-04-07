import React from "react";
//import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.css";


const Header = () => {
    //let history = useHistory();
    return (
        <div>
            <div>
                <h1>My Weather Application</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink className="inactive" exact activeClassName="active" to="/">
                            Home Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="inactive" exact activeClassName="active" to="/HourlyPage">
                            Hourly Page
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    )

}

export default Header;