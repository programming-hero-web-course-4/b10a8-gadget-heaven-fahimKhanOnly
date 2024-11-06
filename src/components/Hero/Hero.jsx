import { useLocation } from 'react-router-dom';
import heroImg from '../../assets/banner.jpg';


const Hero = () => {
    const location = useLocation().pathname;
    return (
        <div className={location === "/" ? "bg-purple-600 pb-60 mx-8 text-white rounded-b-2xl" : "bg-purple-600 pb-60 pt-1 text-white"}>
            <div className="hero">
                <div className="hero-content relative text-center">
                    <div className="">
                        <h1 className="text-5xl font-extrabold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <button className="btn btn-primary text-lg bg-white text-purple-700 font-extrabold rounded-full px-7 hover:bg-gray-700 hover:text-white">Shop Now</button>
                    </div>
                </div>
                <div className='p-5 absolute top-[400px] border-[#f1f1f1] border-2 rounded-2xl bg-[#ffffff4b]'>
                    <img className='rounded-xl h-[430px] w-[900px]' src={heroImg} />
                </div>
            </div>
        </div>
    );
};

export default Hero;

// bg-purple-600 pb-60 mx-8 text-white rounded-b-2xl