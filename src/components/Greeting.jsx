import React from "react";

// Image imports
import day from "./src/assets/day.svg";
import evening from "./src/assets/evening.svg";
import night from "./src/assets/night.svg";

// Greeting component
function Greeting() {
    return (
        <h1 className="greeting">
            <img src="{day}" alt="day" />
            Good Morning!
        </h1>
    );
}