import React from "react";
import open from "../assets/open.svg";

function OpenLink(link) {
    return (
        <a target="_blank" rel="noreferrer">
            <img src={open} alt="open-icon" />
        </a>
    );
}
export default OpenLink;