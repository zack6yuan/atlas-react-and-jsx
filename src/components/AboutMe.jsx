import React from "react";
import profilePicture from "../assets/profile-picture.png";

function AboutMe( { children }) {
    return (
        <div className="about-me">
            <img src={profilePicture} alt="profile-picture" />
            { children }
        </div>
    );
}
export default AboutMe;