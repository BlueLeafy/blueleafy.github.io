// page/ProductDetails.jsx
// it is editable the data from here on
import { Outlet, useLoaderData, Link } from "react-router-dom";
import Card from "../../components/Utils/Card";

function ProductDetails() {
    const product = useLoaderData();


    const links = [
        { label: "Informazioni Generali", path: "" },
        { label: "Media", path: "media" },
        { label: "Documenti", path: "documenti" }
    ];

    const renderedLinks = links.map((link, i) => {
        return (
            <li key={i}>
                <Link to={`${link.path}`} className="py-0.5 block text-blue-500 hover:text-blue-700 transition duration-75 ease-in-out">
                    {link.label}
                </Link>
            </li>
        );
    })

    return (
        <div className="py-5 px-5 w-full h-full flex justify-center">
            <Card primary>
                <Card.Header>

                    <nav>
                        <ul className="flex flex-row justify-center gap-x-5">
                            {renderedLinks}
                        </ul>
                    </nav>
                </Card.Header>
                <Card.Body className="flex flex-col space-y-5 py-5">
                    <Outlet context={{ product }} />
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductDetails;