// hooks/useBreadcrums.js
import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";

export const useBreadcrumbs = () => {
    const location = useLocation();
    const params = useParams();
    const { pathname } = location;

    const breadcrumbs = useMemo(() => {
        if (!pathname) return [];

        const pathSegments = pathname.split('/').filter(segment => segment !== '');

        const crumbs = [];
        let accumulatedPath = '';

        // Add home breadcrumb
        crumbs.push({
            label: "Home",
            href: '/',
            isCurrent: pathname === '/',
        });

        pathSegments.forEach((segment, index) => {
            accumulatedPath += `/${segment}`;

            const decodedSegment = decodeURIComponent(segment);

            // Format the label
            let label = decodedSegment
                .split(/[-_]/)
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            // Use URL parameters for dynamic routes
            if (params.id && index === pathSegments.length - 1 && segment.includes(':')) {
                label = `Item ${params.id}`;
            } else if (params.slug && index === pathSegments.length - 1 && segment.includes(':')) {
                label = String(params.slug).replace(/[-_]/g, ' ');
            }

            // Handle dynamic segments in the path
            if (segment.startsWith(':')) {
                const paramKey = segment.slice(1);
                if (params[paramKey]) {
                    label = params[paramKey];
                }
            };

            crumbs.push({
                label,
                href: accumulatedPath,
                isCurrent: index === pathSegments.length - 1
            });
        });

        return crumbs;
    }, [pathname, params]);

    return breadcrumbs;
};