// pages/Auth/AuthLayout.jsx - this will be access only by authorized users and admin
import { Outlet, useMatches } from "react-router-dom";
import AuthNav from "../../components/Nav/AuthNav/AuthNav";
import AuthSidenav from "../../components/SideNavs/AuthSidenav/AuthSidenav";

function AuthLayout() {
    const matches = useMatches();

    // Get the current route's handle title
    const currentMatch = matches[matches.length - 1];
    const title = currentMatch?.handle?.title || "Default title";

    return (
        <div>
            <AuthNav />
            <main className="grid grid-cols-12 h-screen">
                <aside className="col-span-2">
                    <AuthSidenav />
                </aside>
                <section className="col-span-10 bg-neutral-200">
                    <div className="container mx-auto">
                        <header>
                            {/* Title taken from router handle */}
                            <h1>{title}</h1>
                        </header>
                        <div>
                            <Outlet />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AuthLayout;