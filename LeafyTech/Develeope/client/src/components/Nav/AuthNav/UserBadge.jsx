// AuthNav/UserBadge.jsx
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function UserBadge() {
    return (
        <>
            {/* User infos */}
            <Link to={"??"} className="me-10 flex flex-row items-center gap-x-2 bg-blue-200 pe-6 rounded-full hover:bg-blue-300 transition duration-75 ease-in" >
                {/* User profile image */}
                <div className="w-[40px] h-[40px] border rounded-full border-blue-500" >
                    <div className="bg-black w-full h-full rounded-full border border-white flex flex-row items-center justify-center">
                        {/* Here will appear an image profile that link to ??? */}
                        <FaUser className="text-white" />
                    </div>
                </div>
                {/* username displayed here */}
                <p> username</p >
            </Link>
        </>
    );
};

export default UserBadge;