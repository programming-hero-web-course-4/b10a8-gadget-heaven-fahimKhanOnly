import { CiCircleRemove } from "react-icons/ci";


const CartItems = ({singleData}) => {
    return (
        <div className="flex gap-6 p-6 justify-center bg-white rounded-2xl">
            <div className="w-[245px]">
                <img className="w-full h-[130px] rounded-xl" src={singleData.product_image} alt={singleData.product_title} />
            </div>
            <div className="w-full relative flex flex-col justify-between">
                <button>
                    <CiCircleRemove style={{transform: 'translate(-50% ,-50%)'}} className="font-bold text-3xl text-red-500 absolute top-1/2 bottom-1/2 right-0" />
                </button>
                
                <h1 className="font-bold text-2xl">{singleData.product_title}</h1>
                <p className="font-medium text-gray-600">{singleData.description}</p>
                <p className="font-bold text-lg">Price: ${singleData.price}</p>
            </div>
        </div>
    );
};

export default CartItems;
