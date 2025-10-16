import { Link } from "react-router-dom";

function Footer() {
    const footerLinks = [
        { label: "azienda", path: "/azienda" },
        { label: "contatti", path: "/contatti" },
        { label: "privacy", path: "/privacy-policy" },
        { label: "terms", path: "/terms" },
        { label: "admin", path: "/admin" },
    ]

    const renderedLinks = footerLinks.map((item, i) => {
        return (
            <li key={i} className="capitalize">
                <a href={item.path}>
                    {item.label}
                </a>
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