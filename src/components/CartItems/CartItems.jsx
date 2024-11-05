const CartItems = ({singleData}) => {
    return (
        <div className="flex gap-6 p-6 bg-white rounded-2xl">
            <img className="w-[270px] h-[170px] rounded-xl" src={singleData.product_image} alt={singleData.product_title} />
            <div className="w-full">
                <h1 className="font-bold text-2xl">{singleData.product_title}</h1>
                <p className="font-medium text-gray-600">{singleData.description}</p>
                <p className="font-bold text-lg">Price: ${singleData.price}</p>
            </div>
        </div>
    );
};

export default CartItems;