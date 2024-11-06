import { useLoaderData } from "react-router-dom";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import { Helmet } from "react-helmet";

const Home = () => {
    let data = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <Hero></Hero>
            <Products data={data}></Products>
        </div>
    );
};

export default Home;