import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Product from "../Product/Product";
import Hero from "../Hero/Hero";

const CategoryProduct = () => {
    let [getData, setData] = useState([]);
    let {products} = useLoaderData();
    let {category} = useParams();

    let categories = [];
    products.filter(product => !categories.includes(product.category) && categories.push(product.category))
    useEffect(() => {
        let categoryData = products.filter(cat => cat.category === category);
        setData(categoryData);
    }, [products]);
    return (
        <div>
            <Hero></Hero>
            <div className="container mx-auto mt-80">
            <h1 className="text-center font-extrabold text-4xl mb-9">Explore Cutting-Edge Gadgets</h1>
            <div className="flex gap-6 justify-center">
                <div className="flex flex-col h-fit items-center gap-7 p-5 rounded-xl border bg-white">
                    <NavLink to="/" className="btn w-full rounded-full">All</NavLink>
                    {categories.map((category, idx) => <NavLink to={`/${category}`} className="btn text-start w-full rounded-full hover:bg-[#ae67f1] hover:text-white" key={idx}>{category}</NavLink>)}
                </div>
                <div className="lg:grid grid-cols-3 gap-6">
                    {getData.map(productData => productData.length ? "No Data found." : <Product key={productData.product_id} data={productData}></Product>)}
                </div>
            </div>
        </div>
        </div>
    );
};

export default CategoryProduct;