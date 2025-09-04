import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";

// Render the App component to the root element
function App() {
  return (
    <div className="app">
        <Header />
        <Section />
        <HelpfulResource />
    </div>
  )
}
export default App;