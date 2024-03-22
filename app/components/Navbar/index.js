const Navbar = () => {
    return (
        <div className="navbar bg-teal-500">
            <div className="navbar-start flex items-center">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl lg:hidden">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex flex-grow justify-center">
                <ul className="menu menu-horizontal">
                    <li><a>Item 1</a></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center justify-end">
                <a className="btn hidden lg:flex mr-4">Hubungi Kami</a>
                <a className="btn hidden lg:block">Button</a>
            </div>
        </div>
    )
}

export default Navbar