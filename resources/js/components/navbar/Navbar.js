import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

const Navbar = () => {
    return (
        <div>
            <div className="navbar row p-0 m-0">
                <div className="col-2 p-0">
                    <img src="images/glowing_ball.png" className="w-50" />
                </div>
                <div className="col-10 title p-0 d-flex flex-column justify-content-center">
                    <p className="m-0">THE CYCLE OF LEO</p>
                </div>
            </div>
            <div className="row">
                <a href="/" className="col-2 navText">
                    HOME
                </a>
                <a href="/profile" className="col-2 navText">
                    PROFILE
                </a>
                <a href="/vision-and-mission" className="col-2 navText">
                    VISION AND MISSION
                </a>
                <a href="/product" className="col-2 navText">
                    PRODUCT
                </a>
                <a href="/contact" className="col-2 navText">
                    CONTACT US
                </a>
                <a href="/about" className="col-2 navText">
                    ABOUT US
                </a>
            </div>
        </div>
    );
};

export default Navbar;

if (document.getElementById("navbar")) {
    ReactDOM.render(<Navbar />, document.getElementById("navbar"));
}