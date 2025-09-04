import React from "react";
import open from "../assets/open.svg";
import copy from "../assets/copy.svg";

// Add the title prop "Helpful resources"
// Need to copy when copy icon is triggered
function HelpfulResource({ link, label }) {
    return (
        <div>
            <div className="component-one">
                <p>React Tutorial</p>
                <a href="https://www.w3schools.com/react/default.asp">
                    <img src={open} alt="open-icon" />
                </a>
                <a href="">
                    <img src={copy} alt="copy-icon" />
                </a>
            </div>
            <div className="component-two">
                <p>React Components</p>
                <a href="https://www.w3schools.com/react/react_components.asp">
                    <img src={open} alt="open-icon" />
                </a>
                <a href="">
                    <img src={copy} alt="copy-icon" />
                </a>
            </div>
            <div className="component-three">
                <p>React Props</p>
                    <a href="https://www.w3schools.com/react/react_props.asp">
                        <img src={open} alt="open-icon" />
                    </a>
                    <a href="">
                        <img src={copy} alt="copy-icon" />
                    </a>
            </div>
            <div className="component-four">
                <p>React JSX</p>
                    <a href="https://www.w3schools.com/react/react_jsx.asp">
                        <img src={open} alt="open-icon" />
                    </a>
                    <a href="">
                        <img src={copy} alt="copy-icon" />
                    </a>
            </div>
            <div className="component-five">
                <p>React Conditional Rendering</p>
                    <a href="https://www.w3schools.com/react/react_conditional_rendering.asp">
                        <img src={open} alt="open-icon" />
                    </a>
                    <a href="">
                        <img src={copy} alt="copy-icon" />
                    </a>
            </div>
        </div>
    );
}
export default HelpfulResource;