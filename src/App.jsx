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
        <Section title="What is react?">
            React is an open source front-end JavaScript library developed and maintained by Meta that helps developers build single-page applications.
            The building blocks of React are broken down into functional components, which makes code maintainable and reusable.
            With a strong ecosystem containing various tools and libraries, React simplifies the process of building dynamic and interactive web applications.
        </Section>
        <Section title="Benefits of react">
            <ul>
                <li> Component-based architecture making code maintainable and scaleable</li>
                <li>Declarative syntax that makes code easier to understand</li>
                <li>Efficient rendering to the DOM (Document Object Model)</li>
                <li>Simplifies implementing dynamic content and interactive UI elements</li>
                <li>Strong ecosystem of tools and libraries to pair with it's core functionality</li>
            </ul>
        </Section>
        <HelpfulResource title="Helpful Resources">
        </HelpfulResource>
        <AboutMe>
                Hello! My name is Zack Yuan. I am currently in Trimester 5, the last phase of the Full-Stack Web Development specialization at Atlas School in Tulsa, Oklahoma.
                Recently diving into ReactJS, it has quickly become my preference to build UI's and reusable components.
                After finishing school, I plan to implement the technical and soft skills I've built to contribute to a goal-oriented team.
                Aside from programming, I'm an avid pickleball player, and have experience with video editing and production.
        </AboutMe>
        <Footer />
    </div>
  )
}
export default App;