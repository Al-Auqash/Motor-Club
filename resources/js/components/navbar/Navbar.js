import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="row bg-secondary">
                <div className="col-2">
                    <p>logo</p>
                </div>
                <div className="col-10">
                    <p>The Cycle of Leo</p>
                </div>
            </div>
            <div className="row">
                <Link className="col-2">home</Link>
                <Link className="col-2">profile</Link>
                <Link className="col-2">vision and mission</Link>
                <Link className="col-2">product</Link>
                <Link className="col-2">contact us</Link>
                <Link className="col-2">about us</Link>
            </div>
        </div>
    );
};

export default Navbar;
