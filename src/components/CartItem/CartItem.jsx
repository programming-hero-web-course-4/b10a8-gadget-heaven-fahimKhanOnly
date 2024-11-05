const CartItems = ({singleData}) => {
    return (
        <div className="flex gap-6 p-6 justify-center bg-white rounded-2xl">
            <div className="w-[245px]">
                <img className="w-full h-[130px] rounded-xl" src={singleData.product_image} alt={singleData.product_title} />
            </div>
            <div className="w-full flex flex-col justify-between">
                <h1 className="font-bold text-2xl">{singleData.product_title}</h1>
                <p className="font-medium text-gray-600">{singleData.description}</p>
                <p className="font-bold text-lg">Price: ${singleData.price}</p>
            </div>
        </div>
    );
};

export default CartItems;
