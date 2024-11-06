import { NavLink } from "react-router-dom";

const Dashboard = () => {
    document.title = "Dashboard | Gadget Heaven";
    return (
        <div>
            <div className="bg-purple-600 text-white mx-8">
                <div className="container mx-auto py-7">
                    <h1 className="text-center font-extrabold text-3xl">Dashboard</h1>
                    <p className="text-center text-gray-200 font-medium my-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                    <div className="flex gap-6 justify-center">
                        <NavLink to={`/cart`} className="btn btn-outline rounded-full px-10">Cart</NavLink>
                        <NavLink to={`/wishlist`} className="btn btn-outline rounded-full px-10">Wishlist</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;