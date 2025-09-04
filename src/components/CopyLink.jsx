import React from "react";
import copy from "../assets/copy.svg";

// Need to copy when the icon is clicked
function CopyLink(link) {
    return (
        <img className="copy" src={copy} alt="copy-icon" />
    )
}
export default CopyLink;