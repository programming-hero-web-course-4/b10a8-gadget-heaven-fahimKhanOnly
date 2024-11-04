import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";



const NavBar = () => {
    return (
        <div className="bg-purple-600 mx-8 mt-8 pt-4 rounded-t-2xl">
            <div className="navbar container mx-auto text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/statistics">Statistics</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    </ul>
                    </div>
                    <a className="text-2xl font-extrabold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-10 menu-horizontal px-1">
                        <NavLink className="font-medium" to="/">Home</NavLink>
                        <NavLink className="font-medium" to="/statistics">Statistics</NavLink>
                        <NavLink className="font-medium" to="/dashboard">Dashboard</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <Link className="rounded-full border bg-white text-black p-2.5"><IoCartOutline className="text-lg" /></Link>
                    <Link className="rounded-full border bg-white text-black p-2.5"><FaRegHeart/></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;