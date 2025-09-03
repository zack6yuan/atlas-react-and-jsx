// Main file
import "./index.css";
import ReactDOM from "react-dom/client";

import App from "./App";
import Greeting from "./components/Greeting";
import SocialLinks from "./components/SocialLinks";

const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
root.render(<App />)

const SocialsRoot = ReactDOM.createRoot(navSocials);
SocialsRoot.render(<SocialLinks />)
