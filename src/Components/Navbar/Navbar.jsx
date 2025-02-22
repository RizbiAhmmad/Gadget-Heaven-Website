import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <nav className={`${isHomePage ? 'bg-purple-500' : 'bg-white'} p-4 md:p-6 mx-6 transition-colors duration-300`}>
            <div className="container mx-auto flex justify-between items-center">
                <NavLink to="/" className={`${isHomePage ? 'text-white' : 'text-black'} text-2xl font-bold`}>
                    Gadget Heaven
                </NavLink>

                <ul className="flex space-x-6">
                    <li>
                        <NavLink 
                            to="/" 
                            className={`${isHomePage ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-700'}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/statics" 
                            className={`${isHomePage ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-700'}`}
                        >
                            Statistics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/listedGadgets" 
                            className={`${isHomePage ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-700'}`}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/compare" 
                            className={`${isHomePage ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-700'}`}
                        >
                            Compare
                        </NavLink>
                    </li>
                </ul>

                <div className="flex space-x-4 items-center">
                    {/* Cart Icon */}
                    <NavLink to="/cart" className={`${isHomePage ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-700'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zm-9.83-4.25l1.58-6.59c.13-.54.65-.91 1.22-.91H19c.75 0 1.38.58 1.45 1.32l.66 4.66c.09.65-.41 1.25-1.07 1.33H8.52l-.35 1.48H19v2H8c-.84 0-1.57-.53-1.84-1.32L4.26 7H2V5h2.33l1.84 7.75z"/>
                        </svg>
                    </NavLink>

                    {/* Heart Icon */}
                    <NavLink to="/wishlist" className={`${isHomePage ? 'text-white hover:text-gray-200' : 'text-black hover:text-gray-700'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
