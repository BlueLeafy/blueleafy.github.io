// AuthNav/UserNotify.jsx - how can it be used??
// new quote request on a product??? email access ??
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserNotify() {
    // useAdmin notificatio length > 0 start animation and numerb apppear
    return (
        <div className="me-10">
            <div className="relative">
                {/* animation will start and the number overlapping will appeare only if there is any new notification */}
                <Link to={"???"} className="notify-animate">
                    <FaBell className="text-3xl" />
                    <div className="absolute -top-1.5 -right-0.5 bg-red-800 rounded-full w-[18px] h-[18px] flex flex-row items-center justify-center pointer-events-none z-0">
                        <p className="text-white font-extrabold">2</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default UserNotify;