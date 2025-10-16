// SideNav.jsx
import { Link, Form } from "react-router-dom";

function SideNav({ children, links }) {
    const renderedLinks = links.map((item, i) => {
        const IconComponent = item.icon;

        return (
            <li key={i}>
                {item.isForm ? (
                    <Form method="post" action={item.path} className="text-neutral-700 transition duration-75 ease-in-out block bg-transparent hover:bg-black/15 ps-2.5 py-3 text-nowrap rounded-md cursor-pointer">
                        <button type="submit" className="flex flex-row items-center gap-x-2.5 cursor-pointer">
                            {IconComponent && <IconComponent />}
                            <span>
                                {item.label}
                            </span>
                        </button>
                    </Form>
                ) : (
                    <Link
                        to={item.path}
                        className="text-neutral-700 transition duration-75 ease-in-out block bg-transparent hover:bg-black/15 ps-2.5 py-3 text-nowrap rounded-md"
                    >
                        <div className="flex flex-row items-center gap-x-2.5">
                            <div className={`${IconComponent ? "flex" : "hidden"}`}>
                                {IconComponent && <IconComponent />}
                            </div>
                            <div>
                                <p>
                                    {item.label}
                                </p>
                            </div>
                        </div>
                    </Link>
                )
                }
            </li >
        );
    })

    return (
        <nav className="flex justify-center;
">
            <div className="w-[250px] mx-auto pe-5">

                <ul className="flex flex-col justify-center gap-y-0.5 mt-5">
                    {renderedLinks}
                </ul>
                {children}
            </div>
        </nav>
    );
};

export default SideNav;