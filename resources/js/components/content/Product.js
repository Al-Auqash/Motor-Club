import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCarousel from "./CardCarousel";
import Card from "./CardCarousel";

const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios
            .get("/api/product")
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(product);
    return (
        <div>
            {/* {product.map((product) => ( */}
            <CardCarousel image1={product.image} image2={product.image} image3={product.image} />
            {/* ))} */}
        </div>
    );
};

export default Product;
