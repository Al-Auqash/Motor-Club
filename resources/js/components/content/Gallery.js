import React from "react";

import "./../style.css";

const Card = (props) => {
    return (
        <div className="card background-orange h-100">
            <img
                src="images/motorcycle.jpeg"
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <p className="card-title fw-bold text-grey"> {props.name} </p>
                <p className="card-text text-grey"> {props.desc} </p>
            </div>
        </div>
    );
};

const Gallery = () => {
    return (
        <div>
            <div className="grid-wrapper my-4">
                <Card name="Harley" desc="nice motorocycle" />
                <Card name="Harley" desc="nice motorocycle" />
                <Card name="Harley" desc="nice motorocycle" />
                <Card name="Harley" desc="nice motorocycle" />
                <Card name="Harley" desc="nice motorocycle" />
                <Card name="Harley" desc="nice motorocycle" />
                <Card name="Harley" desc="nice motorocycle" />
                <Card name="Harley" desc="nice motorocycle" />
                <Card name="Harley" desc="nice motorocycle" />
                <Card name="Harley" desc="nice motorocycle" />
            </div>
        </div>
    );
};

export default Gallery;
