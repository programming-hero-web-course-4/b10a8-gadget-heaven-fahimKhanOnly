import { useParams, useLoaderData } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { IoCartOutline, IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { addToCart } from "../cartStorage";


const ProductDetails = () => {
    let data = useLoaderData();
    let params = useParams();

    let findRealData = data.products.find(info => info.product_id == params.product_id);
    let {product_id, product_title, product_image, price, description, availability, Specification, rating} = findRealData;



    let handleCartItem = id => {
        addToCart(id);
    }
    return (
        <div>
            <div className="bg-purple-600 pb-40 mx-8 pt-8 mb-96">
                <div className="container mx-auto text-white">
                    <div>
                        <h1 className="text-center font-extrabold text-3xl mb-3">Product Details</h1>
                        <p className="w-[810px] mx-auto text-center font-medium mb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>

                    <div className="container  flex gap-6 bg-white text-black p-6 absolute rounded-2xl">
                        <div>
                            <img className="w-[460px] h-[400px] rounded-xl" src={product_image} alt={product_title} />
                        </div>
                        <div className="flex flex-col items-baseline justify-between">
                            <h2 className="font-bold text-2xl">{product_title}</h2>
                            <p className="font-bold text-gray-700">Price: ${price}</p>
                            <p className="border-green-600 border rounded-full bg-[#64fd642a] inline px-5 py-1 font-medium text-green-900">{availability ? "In Stock" : "Out of Stock"}</p>
                            <p className="text-gray-600 font-medium">{description}</p>
                            <div>
                                <ul className="list-decimal">
                                    <h4 className="font-bold text-lg">Specification:</h4>
                                    {Specification.map((specs, idx) => <li className="text-gray-600 font-medium ml-6" key={idx}>{specs}</li>)}
                                </ul>
                            </div>
                            <h4 className="font-extrabold">Rating</h4>
                            <div className="flex gap-2 items-center">
                                <IoStar className="text-[#F9C004] text-lg" />
                                <IoStar className="text-[#F9C004] text-lg" />
                                <IoStar className="text-[#F9C004] text-lg" />
                                <IoStar className="text-[#F9C004] text-lg" />
                                <FaRegStar className="text-[#F9C004] text-lg"/>
                                <p className="px-3 font-medium text-gray-700 rounded-full bg-[#80808044]">{rating}</p>
                            </div>
                                
                            <div className="flex gap-4 mt-3">
                                <button onClick={() => handleCartItem(product_id)} className="btn rounded-full font-bold px-6 bg-purple-700 text-white flex items-center hover:border hover:border-purple-700 hover:text-black">Add To Card <IoCartOutline className="text-xl"/></button>
                                <button className="border rounded-full"><FaRegHeart className="m-4"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;