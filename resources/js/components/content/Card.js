import React from "react";
import "./../style.css"

const Card = (props) => {
    return (
        <div className="card bg-dark-orange m-4">
                <div className="card-body p-3">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex flex-column h-100">
                                {/* <p className="mb-1 pt-2 text-bold">{Welcome to}</p> */}
                                <h5 className="font-weight-bolder">
                                    {props.title}
                                </h5>
                                <p className="mb-5">
                                    {props.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Card;
