import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Clients = () => {
    const [client, setClient] = useState([]);
    useEffect(() => {
        axios
            .get("/api/client")
            .then((response) => {
                setClient(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    
    console.log(client);
    return (
        <div>
            {client.map((client) => (
                <Card title="Our Client" desc={client.name} />
            ))}
        </div>
    );
};

export default Clients;
