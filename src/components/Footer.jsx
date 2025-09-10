import links from "../assets/links.json";

function Footer() {
    // get the current year
    const year = new Date().getFullYear();

    // define specific links from imported JSON
    const atlasLink = links[0].link;
    const reactLink = links[1].link;
    const netlifyLink = links[2].link;
    return (
        <footer>
            <ul>
                <li>
                    <a href={atlasLink}>{links[0].label}</a>
                </li>
                <li>
                    <a href={reactLink}>{links[1].label}</a>
                </li>
                <li>
                    <a href={netlifyLink}>{links[2].label}</a>
                </li>
            </ul>
            <p>
                © {year} Atlas School
            </p>
        </footer>
    );
}
export default Footer;