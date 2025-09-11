import open from "../assets/open.svg";
import copy from "../assets/copy.svg";

// Need to copy when copy icon is triggered

// Links array
const links = [
    "https://www.w3schools.com/react/default.asp",
    "https://www.w3schools.com/react/react_components.asp",
    "https://www.w3schools.com/react/react_props.asp",
    "https://www.w3schools.com/react/react_jsx.asp",
    "https://www.w3schools.com/react/react_conditional_rendering.asp"
];

// Labels array
const labels = [
    "React Tutorial",
    "React Components",
    "React Props",
    "React JSX (JavaScript XML)",
    "React Conditional Rendering"
]

function HelpfulResource({ link, label, title, children }) {
    return (
        <div className="HelpfulResource">
            <h1>{ title }</h1>
            <div className="component-one">
                <p>{ labels[0] }
                    <a href={links[0]} target="_blank" rel="noreferrer">
                        <img src={open} alt="open-icon" />
                    </a>
                    <a href="">
                        <img src={copy} alt="copy-icon" />
                    </a>
                </p>
            </div>
            <div className="component-two">
                <p>{ labels[1] }
                    <a href={links[1]} target="_blank" rel="noreferrer">
                        <img src={open} alt="open-icon" />
                    </a>
                    <a href="">
                        <img src={copy} alt="copy-icon" />
                    </a>
                </p>
            </div>
            <div className="component-three">
                <p>{ labels[2] }
                    <a href={links[2]} target="_blank" rel="noreferrer">
                        <img src={open} alt="open-icon" />
                    </a>
                    <a href="">
                        <img src={copy} alt="copy-icon" />
                    </a>
                </p>
            </div>
            <div className="component-four">
                <p>{ labels[3] }
                    <a href={links[3]} target="_blank" rel="noreferrer">
                        <img src={open} alt="open-icon" />
                    </a>
                    <a href="">
                        <img src={copy} alt="copy-icon" />
                    </a>
                </p>
            </div>
            <div className="component-five">
                <p>{ labels[4] }
                    <a href={links[4]} target="_blank" rel="noreferrer">
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