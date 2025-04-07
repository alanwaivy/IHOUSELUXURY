import React, {useState,useEffect,useRef} from 'react';
import { Head, Link } from '@inertiajs/react';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { Infinity, Users, CreditCard, ChevronLeft, ChevronRight  } from 'lucide-react';  
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Welcome({ carss,brands,maxPrice }) {

    const [filters, setFilters] = useState({
        brand: '',
        mark: '',
        price: maxPrice
    });

    const currentBrand = brands.find(b => b.id === filters.brand);
    const availableMarks = currentBrand?.marks || [];



    return (
        <>
            {/* Hero section */}
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F26%2F26%2F14%2F5858093%2F6%2FrawImage.jpg&f=1&nofb=1&ipt=6df8d6189bb0b53ebbcddcce7e72308cb95e44bf4c7805d006382cecf9ea3d36&ipo=images')  " }}>
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Navigation Bar */}
            <nav className="relative z-10 flex justify-between items-center p-6">
                <div className="text-white text-2xl font-bold">
                <span className="text-orange-500">I</span>
                <span className="text-white">HOUSE</span> <span className="text-orange-500">LUXURY</span>
                </div>
                <div className="flex space-x-6 text-white">
                <Link href="/" className="hover:text-orange-500">Accueil</Link>
                <Link href="/stock" className="hover:text-orange-500">Stock</Link>
                <Link href="/contact" className="hover:text-orange-500">Contact</Link>
                </div>
                <div className="flex space-x-4 text-white">
                <Link href={route('login')} className="flex items-center space-x-1 hover:text-orange-500">
                    <FaUser />
                    <span>Login</span>
                </Link>
                <Link href={route('register')} className="flex items-center space-x-1 hover:text-orange-500">
                    <FaUserPlus />
                    <span>Register</span>
                </Link>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center pb-20 justify-center h-full text-center text-white ">
                <h1 className="text-5xl md:text-6xl font-bold mb-8">
                TROUVER VOTRE <span className="text-orange-500">VÉHICULE</span>
                </h1>

                {/* Search Filters */}


            <div className="flex text-black justify-center space-x-4 px-4 py-2">
                {/* Brand Dropdown */}
                <div className="relative w-60">
                <select 


                    value={filters.brand}
                    onChange={(e) => setFilters({...filters, brand: e.target.value, mark: ''})}
                    className="w-full px-3 py-2 border rounded-md appearance-none bg-white"
                >




                    <option value="">All Brands</option>
                    {brands.map((brand) => (
                        <option key={brand.id} value={brand.id}>
                            {brand.name}
                        </option>
                    ))}
                </select>


                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                </div>



                {/* Mark Dropdown */}
                <div className="relative w-60">
                <select 


                    value={filters.mark}
                    onChange={(e) => setFilters({...filters, mark: e.target.value})}
                    className="w-full px-3 py-2 border rounded-md appearance-none bg-white"
                >


                    <option value="">All Marks</option>
                    {availableMarks.map((mark) => (
                        <option key={mark.id} value={mark.id}>
                            {mark.name}
                        </option>
                    ))}
                </select>


                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                </div>



                {/* Price Dropdown */}
                <div className="relative w-60">
                <select 


                    value={filters.price}
                    onChange={(e) => setFilters({...filters, price: e.target.value})}
                    className="w-full px-3 py-2 border rounded-md appearance-none bg-white"
                >


                    <option value={maxPrice}>Max Price</option>
                    {[maxPrice, maxPrice * 0.75, maxPrice * 0.5, maxPrice * 0.25].map((price) => (
                        <option key={price} value={price}>
                            {price.toLocaleString()} €
                        </option>
                    ))}
                </select>


                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                </div>


                {/* Search Button */}
                <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </button>
            </div>



            </div>

            </div>


        </>

    );}
