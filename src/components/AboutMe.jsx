import React from "react";
import profilePicture from "../assets/profile-picture.png";

function AboutMe() {
    return (
        <div className="about-me">
            <img src={profilePicture} alt="profile-picture" />
            <p>
                Hello! My name is Zack Yuan. I am currently in Trimester 5, the last phase of the Full-Stack Web Development specialization at Atlas School in Tulsa, Oklahoma.
                Recently diving into ReactJS, it has quickly become my preference to build UI's and reusable components.
                After finishing school, I plan to implement the technical and soft skills I've built to contribute to a goal-oriented team.
                Aside from programming, I'm an avid pickleball player, and have experience with video editing and production.
            </p>
        </div>
    );
}
export default AboutMe;