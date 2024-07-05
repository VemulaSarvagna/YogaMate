import React, { useState, useEffect } from "react";
import Pose from "./Pose";

import { useLocation } from "react-router-dom";

const Poses = () => {
    const [poses, setPoses] = useState([]);
    const [category,setcategory]=useState(null);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");


    useEffect(() => {
        fetch(`https://yoga-api-nzy4.onrender.com/v1/categories?id=${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPoses(data.poses);
                setcategory(data.category_name);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div>
            <div className="category_name">
                 <p>{category}</p>
            </div>
        <div className="poses">
            {poses.map((pose,index) => (
                   <Pose
                   key={index}
                   english_name={pose.english_name}
                   sanskrit_name_adapted={pose.sanskrit_name_adapted}
                   url_png={pose.url_png}
                   benefits={pose.pose_benefits}
               />
            ))}
        </div>
        </div>
    );
};

export default Poses;
