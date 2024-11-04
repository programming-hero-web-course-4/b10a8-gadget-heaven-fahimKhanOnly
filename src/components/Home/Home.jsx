import { useLoaderData } from "react-router-dom";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";

const Home = () => {
    let data = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <Products data={data}></Products>
        </div>
    );
};

export default Home;