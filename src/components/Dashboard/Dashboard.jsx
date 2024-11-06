import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className="bg-purple-600 text-white">
                <div className="container mx-auto py-7">
                    <h1 className="text-center font-extrabold text-3xl">Dashboard</h1>
                    <p className="text-center text-gray-200 font-medium my-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                    <div className="flex gap-6 justify-center">
                        <NavLink to={`/cart`} className={({ isActive }) => (isActive ? 'btn btn-outline font-extrabold text-lg text-purple-600 bg-white rounded-full px-10' : 'btn btn-outline text-white rounded-full px-10')}>Cart</NavLink>
                        
                        
                        <NavLink to={`/wishlist`} className={({ isActive }) => (isActive ? 'btn btn-outline font-extrabold text-lg text-purple-600 bg-white rounded-full px-10' : 'btn btn-outline text-white rounded-full px-10')}>Wishlist</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;