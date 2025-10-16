function DesktopNav({ navLinks }) {
    const renderedNavLinks = navLinks.map((item, i) => {
        return (
            <li key={i}>
                <a
                    className="px-2 py-3 capitalize hover:opacity-40 transition-opacity duration-75 ease-in-out"
                    href={item.path}
                >
                    {item.label}
                </a>
            </li>
        )
    })

    return (
        <ul className="inline-flex">
            {renderedNavLinks}
        </ul>

    );
};

export default DesktopNav;