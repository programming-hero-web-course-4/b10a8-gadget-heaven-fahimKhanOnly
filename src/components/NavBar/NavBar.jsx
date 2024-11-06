import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";



const NavBar = () => {
    let location = useLocation().pathname;
    return (
        <div className={location === "/" ? "bg-purple-600 mx-8 mt-8 pt-4 pb-5 rounded-t-2xl" : "mx-8 mt-8 pt-4 pb-5 rounded-t-2xl"}>
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
                        className="menu text-black menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/statistics">Statistics</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                    </ul>
                    </div>
                    <a className={location === "/" ? "text-2xl font-extrabold" : "text-2xl text-black font-extrabold"}>Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center px-1 gap-10 text-black">
                        <NavLink className={({ isActive }) => (location === "/" ? 'home' : 'font-medium')} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => (location === "/statistics" ? "others text-purple-700" : location === "/" ? 'font-medium text-white' : "font-medium")} to="/statistics">Statistics</NavLink>
                        <NavLink className={({ isActive }) => (location === "/dashboard" ? "others text-purple-700" : location === "/" ? 'font-medium text-white' : "font-medium")} to="/dashboard">Dashboard</NavLink>


                        <NavLink className={({ isActive }) => (location === "/faq" ? "others text-purple-700" : location === "/" ? 'font-medium text-white' : "font-medium")} to="/faq">FAQ</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <Link to="/cart" className="relative rounded-full border bg-white text-black p-3"><IoCartOutline className=" text-lg" /></Link>
                    <Link to="/wishlist" className="relative rounded-full border bg-white text-black p-3"><FaRegHeart/></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;