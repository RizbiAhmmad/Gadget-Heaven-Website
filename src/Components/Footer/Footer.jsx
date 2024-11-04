import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8 mt-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gadget Heaven</h2>
                <p className="text-gray-600 mb-8">Leading the way in cutting-edge technology and innovation.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700">
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-purple-500">Product Support</a></li>
                            <li><a href="#" className="hover:text-purple-500">Order Tracking</a></li>
                            <li><a href="#" className="hover:text-purple-500">Shipping & Delivery</a></li>
                            <li><a href="#" className="hover:text-purple-500">Returns</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-purple-500">About Us</a></li>
                            <li><a href="#" className="hover:text-purple-500">Careers</a></li>
                            <li><a href="#" className="hover:text-purple-500">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-purple-500">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-purple-500">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-purple-500">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;