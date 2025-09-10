import links from "../assets/links.json";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <ul>
                <li>{links[0].label}</li>
                <li>{links[1].label}</li>
                <li>{links[2].label}</li>
            </ul>
            <p>
                © {year} Atlas School
            </p>
        </footer>
    );
}
export default Footer;