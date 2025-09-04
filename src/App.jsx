import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

// Render the App component to the root element
function App() {
  return (
    <div className="app">
        <Header />
        <Section />
        <HelpfulResource />
        <AboutMe />
        <Footer />
    </div>
  )
}
export default App;