import axios from "axios";
import React, { useEffect, useState } from "react";

import "./../style.css";

const Card = (props) => {
    return (
        <div className="card background-orange h-100">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-title fw-bold text-grey"> {props.name} </p>
                <p className="card-text text-grey"> {props.desc} </p>
            </div>
        </div>
    );
};

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        axios
            .get("/api/gallery")
            .then((response) => {
                setGallery(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(gallery);
    return (
        <div>
            <div className="grid-wrapper my-4">
                {gallery.map((gallery) => (
                    <div>
                        <Card
                            image={gallery.image}
                            name="Harley"
                            desc={gallery.caption}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
