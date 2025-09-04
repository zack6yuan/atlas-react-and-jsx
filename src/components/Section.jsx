// Need to use a prop here
function Section() {
    return (
        <div className="about-section">
            <h1>What is react?</h1>
            React is an open source front-end JavaScript library developed and maintained by Meta that helps developers build single-page applications.
            The building blocks of React are broken down into functional components, which makes code maintainable and reusable.
            With a strong ecosystem containing various tools and libraries, React simplifies the process of building dynamic and interactive web applications.
            <h1>Benefits of react</h1>
            <ul>
                <li>Component-based architecture that makes components maintainable and scaleable</li>
                <li>Declarative syntax that makes code easier to understand</li>
                <li>Efficient rendering to the DOM (Document Object Model)</li>
                <li>Simplifies implementing dynamic content and interactive UI elements</li>
                <li>Strong ecosystem of tools and libraries to pair with the core functionality of React</li>
            </ul>
        </div>
    );
}
export default Section;