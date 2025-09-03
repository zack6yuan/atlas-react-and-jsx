import React from "react";

// Image imports
import day from "./assets/day.svg";
import evening from "./assets/evening.svg";
import night from "./assets/night.svg";

// Greeting component
function Greeting() {
    return (
        <h1 className="greeting">
            <img src={"day"} alt="day" />
            Good Morning!
        </h1>
    );
}
export default Greeting;