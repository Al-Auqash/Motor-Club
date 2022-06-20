import React from "react";

const Profile = () => {
    return (
        <div>
            <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="false"
            >
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        {/* <img src="" class="d-block w-100" alt="..." /> */}
                        <div className="card bg-orange m-4">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="d-flex flex-column h-100">
                                            <p className="mb-1 pt-2 text-bold">
                                                Welcome to
                                            </p>
                                            <h5 className="font-weight-bolder">
                                                The Cycle of Leo
                                            </h5>
                                            <p className="mb-5">
                                                Where the Cycle is a thing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        {/* <img src="" class="d-block w-100" alt="..." /> */}
                        <div className="card bg-orange m-4">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="d-flex flex-column h-100">
                                            <p className="mb-1 pt-2 text-bold">
                                                Welcome to
                                            </p>
                                            <h5 className="font-weight-bolder">
                                                The Cycle of Leo
                                            </h5>
                                            <p className="mb-5">
                                                Where the Cycle is a thing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        {/* <img src="" class="d-block w-100" alt="..." /> */}
                        <div className="card bg-orange m-4">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="d-flex flex-column h-100">
                                            <p className="mb-1 pt-2 text-bold">
                                                Welcome to
                                            </p>
                                            <h5 className="font-weight-bolder">
                                                The Cycle of Leo
                                            </h5>
                                            <p className="mb-5">
                                                Where the Cycle is a thing
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Profile;
