import React from "react";
import links from "../assets/links.json";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <ul>
                <li>component</li>
                <li>component</li>
                <li>component</li>
            </ul>
            <p>
                © {year} Atlas School
            </p>
        </footer>
    );
}
export default Footer;