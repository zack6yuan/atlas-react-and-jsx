// Image imports
import day from "../assets/day.svg";
import evening from "../assets/evening.svg";
import night from "../assets/night.svg";

// Greeting component
function Greeting() {
    const time = new Date().getHours();

    let image;
    let greeting;

    if (time >= 6 && time < 12) {
        image = day;
        greeting = "Good Morning!"
    } else if (time >= 12 && time < 17) {
        image = day;
        greeting = "Good Afternoon!";
    } else if (time >= 17 && time < 21) {
        image = evening;
        greeting = "Good Evening!";
    } else {
        image = night;
        greeting = "Good Night!"
    }

    return (
        <div>
            <h1 className="greeting">
                <img src={ image }></img>
                <p>{ greeting }</p>
            </h1>
        </div>
    )
}
export default Greeting;