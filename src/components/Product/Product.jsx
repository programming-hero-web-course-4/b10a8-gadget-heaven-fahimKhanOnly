import { Link } from "react-router-dom";

const Product = ({data}) => {
    const {product_id, product_title, product_image, price} = data;
    return (
        <div className="p-6 rounded-xl bg-white">
            <img className="w-full rounded-lg h-[275px] mb-5" src={product_image} alt={product_title}/>
            <h1 className="font-bold text-2xl mb-2">{product_title}</h1>
            <p className="font-medium text-gray-600 mb-3">Price: {price}k</p>
            <Link to={`/products/${product_id}`} className="btn btn-outline btn-sm text-purple-600 rounded-full border-purple-500 px-5 hover:bg-purple-600">View Details</Link>
        </div>
    );
};

export default Product;
