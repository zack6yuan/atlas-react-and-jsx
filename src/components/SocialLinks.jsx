import React from "react";

import linkedin from "./assets/linkedin";
import github from "./assets/github";

function SocialLinks() {
    return (
        <div className="social-links">
            <a href="https://www.linkedin.com/in/zack6yuan" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/zack6yuan" target="_blank" rel="noreferrer">
                <img src={github} alt="GitHub" />
            </a>
        </div>
    )
}
export default SocialLinks;