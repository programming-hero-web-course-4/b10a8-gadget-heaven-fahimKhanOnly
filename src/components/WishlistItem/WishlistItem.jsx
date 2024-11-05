import { addToCart } from "../cartStorage";

const WishlistItem = ({singleData}) => {
    let handleCartItem = data => addToCart(data);
    return (
        <div className="flex gap-6 p-6 justify-center bg-white rounded-2xl">
            <div className="w-[275px]">
                <img className="w-full h-[175px] rounded-xl" src={singleData.product_image} alt={singleData.product_title} />
            </div>
            <div className="w-full flex flex-col justify-between items-start">
                <h1 className="font-bold text-2xl">{singleData.product_title}</h1>
                <p className="font-medium text-gray-600"><span className="font-bold text-black">Description: </span>{singleData.description}</p>
                <p className="font-bold text-lg">Price: ${singleData.price}</p>

                <button onClick={() => handleCartItem(singleData)} className="btn rounded-full bg-purple-600 text-white hover:text-black hover:border-purple-600">Add to Cart</button>
            </div>
        </div>
    );
};

export default WishlistItem;