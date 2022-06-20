import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Profile = () => {
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        axios
            .get("/api/profile")
            .then((response) => {
                setProfile(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(profile);
    return (
        <div>
            {/* {profile.map((profile) => ( */}
            <Card title="Profile" desc={profile.profile} />
            {/* ))} */}
        </div>
    );
};

export default Profile;
