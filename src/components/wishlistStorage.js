import { toast } from "react-toastify";


const getStoredWishlist = () => {
    let storage = localStorage.getItem('wishlist');
    if(storage){
        return JSON.parse(storage);
    }
    else{
        return [];
    }
}

const addToWishlist = (data) => {
    let storedData = getStoredWishlist();
    let getOldProductId = data.product_id;
    let id = storedData.map(ids => ids.product_id);

    if(!id.includes(getOldProductId)){
        storedData.push(data);
        let stringifiedData = JSON.stringify(storedData);
        localStorage.setItem("wishlist", stringifiedData);
        toast.success('Item added to the Wishlist.', {
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

export {addToWishlist, getStoredWishlist};