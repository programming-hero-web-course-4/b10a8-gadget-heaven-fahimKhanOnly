import { Link, useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { addToCart, getStoredData } from "../cartStorage";
import Dashboard from "../Dashboard/Dashboard";
import { FaSortAmountDown } from "react-icons/fa";
import successIcon from "../../assets/Group.png";


const Cart = () => {
    let data = getStoredData();
    let navigate = useNavigate();
    let getPrice = data.map(price => price.price);
    let totalCost = getPrice.reduce((x, y) => x + y, 0);
    let makePurchase = (e) => {
        document.getElementById('my_modal_5').showModal();
        if(data.length){
            localStorage.removeItem("cart-items");
            document.getElementById('my_modal_5').showModal();
        }
    }

    return (
        <div>
            <Dashboard></Dashboard>
            <div className="container mx-auto mt-12">
                <div className="flex justify-between">
                    <h2 className="font-extrabold text-2xl">Cart</h2>
                    <div className="flex gap-5 items-center">
                        <h2 className="font-bold text-2xl">Total cost: ${totalCost.toFixed(2)}</h2>
                        <button className="btn btn-outline border-purple-600 rounded-full">Sort by Price <FaSortAmountDown/></button>
                        <button disabled={data.length ? false : true} onClick={makePurchase} className="btn bg-purple-600 text-white px-7 rounded-full hover:border-purple-600 hover:text-black">Purchase</button>
                    </div>

                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box flex flex-col justify-center items-center">
                        <img src={successIcon}/>
                        <h3 className="font-extrabold text-2xl mt-4">Payment Successful</h3>
                        <div className="divider"></div>
                        <p className="py-3 font-medium text-gray-600">Thanks for purchasing.</p>
                        <p className="font-medium text-gray-600">Total: ${totalCost}</p>
                        <div className="modal-action w-full">
                        <form method="dialog" className="w-full">
                            <button onClick={() => navigate("/")} className="btn rounded-full font-bold w-full">Close</button>
                        </form>
                        </div>
                    </div>
                    </dialog>
                </div>
                <div className="flex flex-col gap-6 mt-8">
                    {data.map(singleData => <CartItem key={singleData.product_id} singleData={singleData}></CartItem>)}
                </div>
            </div>
        </div>
    );
};

export default Cart;