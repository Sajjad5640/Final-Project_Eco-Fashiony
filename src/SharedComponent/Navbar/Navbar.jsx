import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-green-600 via-teal-500 to-blue-500 shadow-lg text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-white text-black rounded-box z-50">
                            <li><NavLink to="/about" className="hover:text-teal-500">About Page</NavLink></li>
                            <li>
                                <details>
                                    <summary className="hover:text-teal-500">Men</summary>
                                    <ul className="p-2 bg-gray-100 rounded-lg">
                                        <li><NavLink to="/ms" className="hover:text-teal-500">Shirt</NavLink></li>
                                        <li><NavLink to="/mp" className="hover:text-teal-500">Pant</NavLink></li>
                                        <li><NavLink to="/punjabi" className="hover:text-teal-500">Punjabi</NavLink></li>
                                        <li><NavLink to="/tshirt" className="hover:text-teal-500">T-Shirt</NavLink></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary className="hover:text-teal-500">Women</summary>
                                    <ul className="p-2 bg-gray-100 rounded-lg">
                                        <li><NavLink to="/shawl" className="hover:text-teal-500">Shawl</NavLink></li>
                                        <li><NavLink to="/wld" className="hover:text-teal-500">Long Dresses</NavLink></li>
                                        <li><NavLink to="/wsa" className="hover:text-teal-500">Saree</NavLink></li>
                                        <li><NavLink to="/three-piece" className="hover:text-teal-500">Three-Piece</NavLink></li>
                                    </ul>
                                </details>
                            </li>
                            <li><NavLink to="/cl" className="hover:text-teal-500">Customer List</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/">
                        <img className='h-12' src="/5.png" alt="Brand Logo"/>
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 text-white z-50">
                        <li><NavLink to="/about" className="hover:text-yellow-300">About</NavLink></li>
                        <li>
                            <details>
                                <summary className="hover:text-yellow-300">Men</summary>
                                <ul className="p-2 bg-gray-100 text-black rounded-lg">
                                    <li><NavLink to="/ms" className="hover:text-teal-500">Shirt</NavLink></li>
                                    <li><NavLink to="/mp" className="hover:text-teal-500">Pant</NavLink></li>
                                    <li><NavLink to="/punjabi" className="hover:text-teal-500">Punjabi</NavLink></li>
                                    <li><NavLink to="/tshirt" className="hover:text-teal-500">T-Shirt</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="hover:text-yellow-300">Women</summary>
                                <ul className="p-2 bg-gray-100 text-black rounded-lg">
                                    <li><NavLink to="/shawl" className="hover:text-teal-500">Shawl</NavLink></li>
                                    <li><NavLink to="/wld" className="hover:text-teal-500">Long Dresses</NavLink></li>
                                    <li><NavLink to="/wsa" className="hover:text-teal-500">Saree</NavLink></li>
                                    <li><NavLink to="/three-piece" className="hover:text-teal-500">Three-Piece</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li><NavLink to="/cl" className="hover:text-yellow-300">Customer List</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/6.jpg" alt="User Avatar"/>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-white text-black rounded-box">
                            <li>
                                <NavLink to="/pf" className="hover:text-teal-500">
                                    Profile <span className="badge bg-teal-400 text-white">New</span>
                                </NavLink>
                            </li>
                            <li><NavLink to="/settings" className="hover:text-teal-500">Settings</NavLink></li>
                            <li><NavLink to="/lg" className="hover:text-red-500">Logout</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
