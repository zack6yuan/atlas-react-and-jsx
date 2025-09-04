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
        <Section title="What is react?" >
            React is an open source front-end JavaScript library developed and maintained by Meta that helps developers build single-page applications.
            The building blocks of React are broken down into functional components, which makes code maintainable and reusable.
            With a strong ecosystem containing various tools and libraries, React simplifies the process of building dynamic and interactive web applications.
        </Section>
        <HelpfulResource title="Helpful Resources" />
        <AboutMe />
        <Footer />
    </div>
  )
}
export default App;