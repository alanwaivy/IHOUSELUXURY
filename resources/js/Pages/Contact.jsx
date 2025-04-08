
import React, {useState,useEffect,useRef} from 'react';
import { Head, Link } from '@inertiajs/react';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { Infinity, Users, CreditCard, ChevronLeft, ChevronRight  } from 'lucide-react';  
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";



export default function Contact({ auth, laravelVersion, phpVersion }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//     console.log(formData);
//   };




      // State for the newsletter email input
      const [email, setEmail] = useState("");
  
      // Handle email input change
      const handleEmailChange = (e) => {
      setEmail(e.target.value);
      };
  
      // Handle form submission (for the newsletter signup)
      const handleSubmit = (e) => {
      e.preventDefault();
      // Add your newsletter signup logic here (e.g., API call)
      console.log("Newsletter signup with email:", email);
      setEmail(""); // Clear the input after submission
      };
  
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      
  return (
<>
        {/* Navigation Bar - Responsive */}
        <nav className="relative z-10 flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
          <div className="text-white text-2xl font-bold mb-4 md:mb-0">
            <span className="text-orange-500">I</span>
            <span className="text-white">HOUSE</span> <span className="text-orange-500">LUXURY</span>
          </div>
          
          {/* Mobile Menu Button - Visible on small screens */}
          <div className="block md:hidden absolute top-4 right-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          
          {/* Navigation Links - Responsive */}
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-white w-full md:w-auto items-center`}>
            <Link href="/" className="hover:text-orange-500">Accueil</Link>
            <Link href="/stock" className="hover:text-orange-500">Stock</Link>
            <Link href="/contact" className="hover:text-orange-500">Contact</Link>
          </div>
          
          {/* Auth Links - Responsive */}
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-white w-full md:w-auto items-center mt-2 md:mt-0`}>
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

    <div className="bg-[#131929] min-h-screen text-white">
        <div className="container mx-auto px-4 py-8 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Contact Form */}
                <div className="order-2 md:order-1">
                    <form onSubmit={handleSubmit} className="space-y-6 backdrop-blur-lg bg-[#131929]/30 p-6 md:p-8 rounded-2xl shadow-xl h-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Name" 
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full bg-[#131929]/50 border border-gray-700/50 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300 text-sm sm:text-base"
                            />
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Email" 
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-[#131929]/50 border border-gray-700/50 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300 text-sm sm:text-base"
                            />
                        </div>
                        
                        <input 
                            type="tel" 
                            name="phone"
                            placeholder="Phone" 
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-[#131929]/50 border border-gray-700/50 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300 text-sm sm:text-base"
                        />
                        
                        <textarea 
                            name="message"
                            placeholder="Message" 
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full bg-[#131929]/50 border border-gray-700/50 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300 text-sm sm:text-base"
                        ></textarea>
                        
                        <div className="flex items-center space-x-4">
                            <input 
                                type="checkbox" 
                                id="privacy-policy"
                                className="text-orange-500 focus:ring-orange-500 rounded"
                            />
                            <label htmlFor="privacy-policy" className="text-gray-400 text-sm">
                                I accept the privacy policy
                            </label>
                        </div>
                        
                        <button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="order-1 md:order-2 mb-8 md:mb-0">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Contact us</h1>
                    
                    <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg">
                        Luxury Auto est la référence en importation de véhicules de luxe neufs au Maroc. Toute marques confondues avec la possibilité de commander du sur mesure.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center space-x-4 p-3 bg-[#131929]/30 rounded-xl backdrop-blur-lg">
                            <div className="text-orange-500 bg-orange-500/10 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h3m-3-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            <span className="text-sm sm:text-base md:text-lg">+212 661 21 23 19</span>
                        </div>
                        
                        <div className="flex items-center space-x-4 p-3 bg-[#131929]/30 rounded-xl backdrop-blur-lg">
                            <div className="text-orange-500 bg-orange-500/10 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-sm sm:text-base md:text-lg">info@luxuryauto.ma</span>
                        </div>
                        
                        <div className="flex items-center space-x-4 p-3 bg-[#131929]/30 rounded-xl backdrop-blur-lg">
                            <div className="text-orange-500 bg-orange-500/10 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <span className="text-xs sm:text-sm md:text-base">Angle Boulevard d'Anfa & Rue Ain Harouda, Racine, Casablanca</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                            <a 
                                key={index} 
                                href="#" 
                                className="text-gray-400 hover:text-orange-500 transition-all duration-300 p-2 rounded-xl border border-gray-700/50 hover:border-orange-500 bg-[#131929]/30 backdrop-blur-lg transform hover:scale-110"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
        {/* Footer */}
        <footer className="w-full pt-12 bg-gray-900 text-white py-6">
            <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                {/* Description */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">À propos</h3>
                    <p className="text-xs sm:text-sm">
                        Luxury Auto est la référence en import de véhicules de luxe neufs au Maroc. Toute marque confondue avec la possibilité de commander sur mesure.
                    </p>
                </div>
                
                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Luxury Auto</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="text-orange-500 hover:underline text-sm">Accueil</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-orange-500 hover:underline text-sm">Contact</Link>
                        </li>
                        <li>
                            <Link href="/stock" className="text-orange-500 hover:underline text-sm">Stock</Link>
                        </li>
                    </ul>
                </div>
                
                {/* Contact Information */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <p className="text-base font-semibold mb-2">+212 661 21 23 19</p>
                    <p className="text-xs sm:text-sm mb-2">info@luxuryauto.ma</p>
                    <p className="text-xs sm:text-sm">
                        Angle Boulevard d'Anfa & Rue Abou Abdou Rabia El Aouda
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-white hover:text-orange-500">
                            <FaFacebookF className="h-4 w-4" />
                        </a>
                        <a href="#" className="text-white hover:text-orange-500">
                            <FaTwitter className="h-4 w-4" />
                        </a>
                        <a href="#" className="text-white hover:text-orange-500">
                            <FaInstagram className="h-4 w-4" />
                        </a>
                        <a href="#" className="text-white hover:text-orange-500">
                            <FaLinkedinIn className="h-4 w-4" />
                        </a>
                    </div>
                </div>
                
                {/* Newsletter Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
                    <form onSubmit={handleSubmit} className="flex items-center">
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full p-2 rounded-l-md bg-gray-800 text-white border-none focus:outline-none text-xs sm:text-sm"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-3 py-2 rounded-r-md hover:bg-orange-600 transition duration-300"
                        >
                            →
                        </button>
                    </form>
                    <p className="mt-3 text-xs sm:text-sm">
                        Abonnez-vous à notre newsletter pour être les premiers informés des nouvelles offres chez Luxury Auto.
                    </p>
                </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center text-xs sm:text-sm mt-6 border-t border-gray-800 pt-3">
                2025 © Copyright Luxury Auto. All rights reserved.
            </div>
        </footer>
    </div>
</>
  );


};

