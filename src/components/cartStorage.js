import { toast } from "react-toastify";


const getStoredData = () => {
    let storage = localStorage.getItem('cart-items');
    if(storage){
        return JSON.parse(storage);
    }
    else{
        return [];
    }
}

const addToCart = (data) => {
    let storedData = getStoredData();
    let getOldProductId = data.product_id;
    let id = storedData.map(ids => ids.product_id);

    if(!id.includes(getOldProductId)){
        storedData.push(data);
        let stringifiedData = JSON.stringify(storedData);
        localStorage.setItem("cart-items", stringifiedData);
        toast.success('Item added to the cart.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
}

export {addToCart, getStoredData};