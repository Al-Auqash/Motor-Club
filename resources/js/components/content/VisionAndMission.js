import React, { useEffect, useState } from "react";
import Card from "./Card";

import axios from "axios";

const VisionAndMission = () => {
    const [vam, setVam] = useState([]);
    useEffect(() => {
        axios
            .get("/api/vision-and-mission")
            .then((response) => {
                setVam(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(vam);
    return (
        <div>
            {vam.map((vam) => (
                <div>
                    <Card title="Our Vision" desc={vam.vision} />
                    <Card title="Our Mission" desc={vam.mission} />
                </div>
            ))}
        </div>
    );
};

export default VisionAndMission;
