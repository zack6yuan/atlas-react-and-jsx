function Section({ title, children }) {
    return (
        <div className="about-section">
            <h1>{ title }</h1>
            { children }
        </div>
    );
}
export default Section;