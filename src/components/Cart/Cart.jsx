import CartItems from "../CartItems/CartItems";
import { getStoredData } from "../cartStorage";
import Dashboard from "../Dashboard/Dashboard";


const Cart = () => {
    let data = getStoredData();
    let getPrice = data.map(price => price.price);
    let totalCost = getPrice.reduce((x, y) => x + y);

    return (
        <div>
            <Dashboard></Dashboard>
            <div className="container mx-auto mt-12">
                <div className="flex justify-between">
                    <h2 className="font-extrabold text-2xl">Cart</h2>
                    <div>
                        <h2 className="font-bold text-2xl">Total cost: ${totalCost.toFixed(2)}</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-6 mt-8">
                    {data.map(singleData => <CartItems key={singleData.product_id} singleData={singleData}></CartItems>)}
                </div>
            </div>
        </div>
    );
};

export default Cart;