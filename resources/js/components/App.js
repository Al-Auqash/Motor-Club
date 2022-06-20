import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Sidebar from "./navbar/Sidebar";
import Homepage from "./content/Homepage";
import Profile from "./content/Profile";
import VisionAndMission from "./content/VisionAndMission";
import Product from "./content/Product";
import Contact from "./content/Contact";
import About from "./content/About";
import Article from "./content/Article";
import Event from "./content/Event";
import Gallery from "./content/Gallery";
import Client from "./content/Client";

function App() {
    return (
        <div className="container h-100 m-0">
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/vision-and-mission"
                        element={<VisionAndMission />}
                    />
                    <Route path="/product" element={<Product />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/article" element={<Article />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/client" element={<Client />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
