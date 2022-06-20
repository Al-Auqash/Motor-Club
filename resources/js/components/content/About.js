import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const About = () => {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        axios
            .get("/api/about")
            .then((response) => {
                setAbout(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // console.log(about);
    return (
        <div>
            {/* {about.map((about) => ( */}
                <Card title="About Us" desc={about.about} />
            {/* ))} */}
        </div>
    );
};

export default About;
