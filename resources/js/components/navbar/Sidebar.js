import React from "react";
import ReactDOM from "react-dom";

import "./../style.css";

const Sidebar = () => {
    return (
        <div className="col mt-2 ml-2 bg-grey h-100 p-2">
            <a href="/article" className="row">
                Article
            </a>
            <a href="/event" className="row">
                Event
            </a>
            <a href="/gallery" className="row">
                Gallery
            </a>
            <a href="/client" className="row">
                Our Clients
            </a>
        </div>
    );
};

export default Sidebar;

if (document.getElementById("sidebar")) {
    ReactDOM.render(<Sidebar />, document.getElementById("sidebar"));
}
