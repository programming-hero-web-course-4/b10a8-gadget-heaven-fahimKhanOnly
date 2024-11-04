const Footer = () => {
    return (
        <div className="container mx-auto mt-20">
            <div>
                <h1 className="text-center text-3xl font-extrabold mb-2">Gadget Heaven</h1>
                <p className="text-center font-medium text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider"></div>
            <footer className="footer justify-evenly text-black p-10 pt-0">
                <nav>
                    <h6 className="footer-title opacity-100">Services</h6>
                    <a className="link link-hover font-medium text-gray-600">Product Support</a>
                    <a className="link link-hover font-medium text-gray-600">Order Tracking</a>
                    <a className="link link-hover font-medium text-gray-600">Shipping & Delivery</a>
                    <a className="link link-hover font-medium text-gray-600">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title opacity-100">Company</h6>
                    <a className="link link-hover font-medium text-gray-600">About us</a>
                    <a className="link link-hover font-medium text-gray-600">Careers</a>
                    <a className="link link-hover font-medium text-gray-600">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title opacity-100">Legal</h6>
                    <a className="link link-hover font-medium text-gray-600">Terms of Services</a>
                    <a className="link link-hover font-medium text-gray-600">Privacy policy</a>
                    <a className="link link-hover font-medium text-gray-600">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;