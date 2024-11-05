import Dashboard from "../Dashboard/Dashboard";
import WishlistItem from "../WishlistItem/WishlistItem";
import { getStoredWishlist } from "../wishlistStorage";

const Wishlist = () => {
    let listed = getStoredWishlist();
    return (
            <div>
            <Dashboard></Dashboard>
            <div className="container mx-auto mt-12">
                <div className="flex justify-between">
                    <h2 className="font-extrabold text-2xl">Wishlist</h2>
                </div>
                <div className="flex flex-col gap-6 mt-8">
                    {listed.map(singleData => <WishlistItem key={singleData.product_id} singleData={singleData}></WishlistItem>)}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;