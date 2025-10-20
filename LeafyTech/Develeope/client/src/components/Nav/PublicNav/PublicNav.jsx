// components/Nav/PublicNav/PublicNav.jsx - Nav visible to the public
import Nav from "../Nav";

function PublicNav() {
    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Prodotti", path: "/prodotti" },
        { label: "Applicazioni", path: "/applicazioni" },
        { label: "Parametri", path: "/parametri" },
        { label: "Azienda", path: "/azienda" },
        { label: "Contatti", path: "/contatti" },
    ];


    return (
        <Nav
            navLinks={navLinks}
            showSearch={true}
            showLogo={true}
        />
    );
};

export default PublicNav;