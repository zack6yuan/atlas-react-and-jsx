import React from "react";
import open from "../assets/open.svg";
import copy from "../assets/copy.svg";

// Need to copy when copy icon is triggered

function HelpfulResource({ link, label, title }) {
    return (
        <div>
            <h1>{ title }</h1>
            <div className="component-one">
                <p>React Tutorial (W3 Schools)
                    <a href="https://www.w3schools.com/react/default.asp" target="_blank" rel="noreferrer">
                        <img src={open} alt="open-icon" />
                    </a>
                    <a href="">
                        <img src={copy} alt="copy-icon" />
                    </a>
                </p>
            </div>
            <div className="component-two">
                <p>React Components (W3 Schools)
                    <a href="https://www.w3schools.com/react/react_components.asp" target="_blank" rel="noreferrer">
                        <img src={open} alt="open-icon" />
                    </a>
                    <a href="">
                        <img src={copy} alt="copy-icon" />
                    </a>
                </p>
            </div>
            <div className="component-three">
                <p>React Props (W3 Schools)
                    <a href="https://www.w3schools.com/react/react_props.asp" target="_blank" rel="noreferrer">
                        <img src={open} alt="open-icon" />
                    </a>
                    <a href="">
                        <img src={copy} alt="copy-icon" />
                    </a>
                </p>
            </div>
            <div className="component-four">
                <p>React JSX (W3 Schools)
                    <a href="https://www.w3schools.com/react/react_jsx.asp" target="_blank" rel="noreferrer">
                        <img src={open} alt="open-icon" />
                    </a>
                    <a href="">
                        <img src={copy} alt="copy-icon" />
                    </a>
                </p>
            </div>
            <div className="component-five">
                <p>React Conditional Rendering (W3 Schools)
                    <a href="https://www.w3schools.com/react/react_conditional_rendering.asp" target="_blank" rel="noreferrer">
                        <img src={open} alt="open-icon" />
                    </a>
                    <a href="">
                        <img src={copy} alt="copy-icon" />
                    </a>
                </p>
            </div>
        </div>
    );
}
export default HelpfulResource;