import { NavLink } from "react-router-dom";
import Product from "../Product/Product";
import { useEffect, useState } from "react";

const Products = ({data}) => {
    let [getItem, setItem] = useState([]);

    useEffect(() => {
        setItem(data.products);
    }, [])
    let categories = [];
    getItem.map(cat => !categories.includes(cat.category) && categories.push(cat.category));

    return (
        <div className="container mx-auto mt-80">
            <h1 className="text-center font-extrabold text-4xl mb-9">Explore Cutting-Edge Gadgets</h1>
            <div className="flex gap-6 justify-center">
                <div className="flex flex-col h-fit items-center gap-7 p-5 rounded-xl border bg-white">
                    <NavLink to="/" className="btn w-full rounded-full">All</NavLink>
                    {categories.map((category, idx) => <NavLink to={`/${category}`} className="btn font-medium text-start w-full rounded-full hover:bg-[#ae67f1" key={idx}>{category}</NavLink>)}
                </div>
                <div className="lg:grid grid-cols-3 gap-6">
                    {getItem.map(productData => <Product key={productData.product_id} data={productData}></Product>)}
                </div>
            </div>
        </div>
    );
};

export default Products;
