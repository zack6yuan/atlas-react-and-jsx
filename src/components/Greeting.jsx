import React from "react";

// Image imports
import day from "../assets/day.svg";
import evening from "../assets/evening.svg";
import night from "../assets/night.svg";

// Greeting component
function Greeting() {
    return (
        <div>
            <h1 className="greeting">
                <img src={day} alt="day" />
                Good Morning!
            </h1>
            <h1 className="greeting">
                <img src={day} alt="day" />
                Good Afternoon!
            </h1>
            <h1 className="greeting">
                <img src={evening} alt="evening" />
                Good Evening!
            </h1>
            <h1 className="greeting">
                <img src={night} alt="night" />
                Good Night!
            </h1>
        </div>
    );
}
export default Greeting;