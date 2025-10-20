import { Link } from "react-router-dom";

function Footer() {
    const footerLinks = [
        { label: "azienda", path: "/azienda" },
        { label: "contatti", path: "/contatti" },
        { label: "privacy", path: "/privacy-policy" },
        { label: "terms", path: "/terms" },
        { label: "Admin", path: "/login" },
    ]

    const renderedLinks = footerLinks.map((item, i) => {
        return (
            <li key={i} className="capitalize">
                <Link to={item.path}>
                    {item.label}
                </Link>
            </li>
        )
    });

    return (
        <footer className="bg-neutral-100">
            <div className="container mx-auto py-5">
                <div>
                    <ul>
                        {renderedLinks}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;