import React from "react";
import faqBg from "../../../assets/faqBg.svg"

const Faq = () => {
    return (
        <>
            <div className=" bg-[#9538E2] text-white">
                <div className="p-32 flex flex-col justify-center items-center gap-6 py-8 mb-12">
                    <h1 className="text-center font-extrabold text-3xl">Frequently Asked Questions</h1>
                    <p className="max-w-[550px] text-center text-gray-200 font-medium my-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="container mx-auto flex gap-10 items-center px-32 py-12">
                <div>
                    <img className="border rounded-3xl h-full" src={faqBg}/>
                </div>
            <div className="space-y-1">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        <h4 className="font-bold text-2xl">What is Gadget Heaven?</h4>
                    </div>
                    <div className="collapse-content">
                        <p className="font-medium text-gray-600 pr-10">Gadget Heaven is an online store specializing in the latest tech gadgets and accessories, offering products ranging from smartphones and laptops to cameras and smartwatches.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        <h4 className="font-bold text-2xl">How can I place an order?</h4>
                    </div>
                    <div className="collapse-content">
                        <p className="font-medium text-gray-600 pr-10">Browse through our categories or featured products, select the item you're interested in, and click "View Details" to see more information. Click "Add to Cart" and proceed to checkout to complete your purchase.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        <h4 className="font-bold text-2xl">What is your return policy?</h4>
                    </div>
                    <div className="collapse-content">
                        <p className="font-medium text-gray-600 pr-10">We offer returns on most products within 7 days of purchase. Please ensure items are returned in their original condition and packaging.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        <h4 className="font-bold text-2xl">How long does shipping take?</h4>
                    </div>
                    <div className="collapse-content">
                        <p className="font-medium text-gray-600 pr-10">Shipping times vary based on your location and chosen delivery method. Standard shipping usually takes 2-10 days, while express options are available for faster delivery.</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Faq;