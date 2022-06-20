import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Navbar from "./navbar/navbar";
import Sidebar from "./navbar/Sidebar";
import Homepage from "./content/Homepage";
import Profile from "./content/Profile"
import VisionAndMission from "./content/VisionAndMission"
import Product from "./content/Product"
import Contact from "./content/Contact"
import About from "./content/About"

function App() {
    return (
        <div className="container-fluid h-100 m-0">
            <div className="row">
                <Navbar />
            </div>
            <div className="row">
                <div className="col-4">
                    <Sidebar />
                </div>
                <div className="col-8">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/vision-and-mission" element={<VisionAndMission />} />
                            <Route path="/product" element={<Product />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
