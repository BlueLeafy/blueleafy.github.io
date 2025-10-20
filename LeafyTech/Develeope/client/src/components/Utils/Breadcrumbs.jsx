// Utils/Breadcrumbs.jsx
import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../../hooks/useBreadcrumbs";
import { FaHome } from 'react-icons/fa';

function Breadcrumbs({
    customLabels = {},
    showHome = true,
    separator = '/',
}) {
    const breadcrumbs = useBreadcrumbs();

    // Filter and customize breadcrumbs
    const processedBreadcrumbs = breadcrumbs
        .filter(breadcrumb => showHome || breadcrumb.href !== '/')
        .map(breadcrumb => ({
            ...breadcrumb,
            label: customLabels[breadcrumb.href] || breadcrumb.label
        }));

    if (processedBreadcrumbs.length <= 1) return null;

    return (
        <nav aria-label="Breadcrumb" className="h-[25px] w-full">
            <ol className="breadcrumbs">
                {processedBreadcrumbs.map((breadcrumb, index) => (
                    <li key={breadcrumb.href}>
                        {index > 0 && (
                            <span className="me-1.5">
                                {separator}
                            </span>
                        )}

                        {breadcrumb.isCurrent ? (
                            <span aria-current="page" className="breadcrumb-item font-extralight text-neutral-700">
                                {breadcrumb.label !== "Home" ? breadcrumb.label : <FaHome />}
                            </span>
                        ) : (
                            <Link to={breadcrumb.href} className="breadcrumb-item font-light text-[var(--blue-01)] hover:text-[#1b7aff]">
                                {breadcrumb.label !== "Home" ? breadcrumb.label : <FaHome />}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
};

export default Breadcrumbs;