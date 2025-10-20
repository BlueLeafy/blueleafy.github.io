// Nav/AuthNav/AuthNav.jsx - Dashboard
import GlobalSearch from "../GlobalSearch";
import Nav from "../Nav";
import UserBadge from "./UserBadge";
import UserNotify from "./UserNotify";
import UserMenu from "./UserMenu";

function AuthNav() {
    // here useAmind() will pass all user infos to children components as props
    return (
        <Nav showSearch={false} showLogo={true} className="h-[80px]">
            <div className="flex flex-row items-center border-l border-dashed border-l-black w-full ps-5 pe-2.5">

                {/* User infos */}
                <UserBadge />

                {/* notification bell */}
                <UserNotify />

                {/* Global Search input */}
                <GlobalSearch />

                {/* User button to access profile logout etc... */}
                <UserMenu />
            </div>
        </Nav>
    );
};

export default AuthNav;