import React, { useState } from 'react';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { Head, Link } from '@inertiajs/react';

import { Infinity, Users, CreditCard, ChevronLeft, ChevronRight  } from 'lucide-react';  


const Stock = () => {
  // State to manage selected filter values
  const [filters, setFilters] = useState({
    marque: '',
    modele: '',
    condition: '',
    minPrix: '',
    maxPrix: '',
    kilometrage: '',
    driveType: '',
    typeCarburant: '',
    options: '',
    transmission: '',
    couleur: '',
  });

  // State to manage the active tab (Tout, Neuf, Occasion)
  const [activeTab, setActiveTab] = useState('Tout');

  // Handle dropdown changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Updated filter options based on luxury cars
  const marqueOptions = ['Mercedes-AMG', 'Bentley', 'Porsche'];
  const conditionOptions = ['Neuf', 'Importée Neuve'];
  const driveTypeOptions = ['4x4', 'RWD', 'AWD'];
  const typeCarburantOptions = ['Essence', 'Hybrid'];
  const transmissionOptions = ['Automatic'];
  const couleurOptions = ['Grey', 'White', 'Black'];

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      marque: '',
      modele: '',
      condition: '',
      minPrix: '',
      maxPrix: '',
      kilometrage: '',
      driveType: '',
      typeCarburant: '',
      options: '',
      transmission: '',
      couleur: '',
    });
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  return (

    <>
    {/* Navigation Bar - Responsive */}
    <nav className="relative z-10 flex flex-col md:flex-row justify-between items-center p-4 md:p-6 bg-[#0a0a0a]">
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
    
    <div className="bg-[#0a0a0a] text-white p-4 min-h-screen">
      {/* Breadcrumb */}
      <div className="text-sm mb-4">
        <span className="text-gray-400">Homepage</span>
        <span className="text-gray-400 mx-2">-</span>
        <span className="text-orange-500">Search</span>
      </div>
  
      {/* Centered 4x4 Filter Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <select
          name="marque"
          value={filters.marque}
          onChange={handleFilterChange}
          className="bg-gray-900 border border-gray-700 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Marque</option>
          {marqueOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
  
        <select
          name="modele"
          value={filters.modele}
          onChange={handleFilterChange}
          className="bg-gray-900 border border-gray-700 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Modèle</option>
          <option value="G63">G63</option>
          <option value="BENTAYGA S">BENTAYGA S</option>
          <option value="911 Carrera">911 Carrera</option>
        </select>
  
        <select
          name="condition"
          value={filters.condition}
          onChange={handleFilterChange}
          className="bg-gray-900 border border-gray-700 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Condition</option>
          {conditionOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
    
        <select
          name="transmission"
          value={filters.transmission}
          onChange={handleFilterChange}
          className="bg-gray-900 border border-gray-700 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Transmission</option>
          {transmissionOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
  
        <select
          name="driveType"
          value={filters.driveType}
          onChange={handleFilterChange}
          className="bg-gray-900 border border-gray-700 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Type de transmission</option>
          {driveTypeOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
  
        <select
          name="typeCarburant"
          value={filters.typeCarburant}
          onChange={handleFilterChange}
          className="bg-gray-900 border border-gray-700 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Type carburant</option>
          {typeCarburantOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
  
        <select
          name="couleur"
          value={filters.couleur}
          onChange={handleFilterChange}
          className="bg-gray-900 border border-gray-700 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Couleur</option>
          {couleurOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
  
        <input
          type="text"
          name="kilometrage"
          value={filters.kilometrage}
          onChange={handleFilterChange}
          placeholder="Kilométrage"
          className="bg-gray-900 border border-gray-700 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
  
      {/* Clear All - Right-aligned on mobile too */}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-4">
          <button
            onClick={clearFilters}
            className="text-gray-400 hover:text-orange-500"
          >
            Clear all
          </button>
        </div>
  
        {/* Tabs and Search Bar - Responsive layout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          {/* Tabs - Scrollable on small screens */}
          <div className="flex space-x-4 overflow-x-auto pb-2 w-full sm:w-auto">
            <button
              onClick={() => handleTabChange('Tout')}
              className={`${
                activeTab === 'Tout' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'
              } pb-2 whitespace-nowrap`}
            >
              Tout (3)
            </button>
            <button
              onClick={() => handleTabChange('Neuf')}
              className={`${
                activeTab === 'Neuf' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'
              } pb-2 whitespace-nowrap`}
            >
              Neuf (3)
            </button>
          </div>
        </div>
      </div>
  
      {/* Updated Car Grid with actual car information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Porsche 911 */}
        <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="h-48 overflow-hidden">
            <img 
              src="/images/cars/luxury/1Untitled.jpg" 
              alt="Porsche 911" 
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">PORSCHE 911 CARRERA</h3>
            <p className="text-gray-400">2025 • Cabriolet • Essence</p>
            <div className="mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
              <span className="text-orange-500 font-bold">Contactez-nous</span>
              <button className="bg-orange-600 text-white px-4 py-2 rounded w-full sm:w-auto hover:bg-orange-700 transition-colors">Details</button>
            </div>
          </div>
        </div>
  
        {/* Bentley Bentayga */}
        <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="h-48 overflow-hidden">
            <img 
              src="/images/cars/luxury/2Untitled.jpg" 
              alt="Bentley Bentayga" 
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">BENTLEY BENTAYGA S E-HYBRIDE</h3>
            <p className="text-gray-400">2025 • SUV • Hybrid</p>
            <div className="mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
              <span className="text-orange-500 font-bold">Contactez-nous</span>
              <button className="bg-orange-600 text-white px-4 py-2 rounded w-full sm:w-auto hover:bg-orange-700 transition-colors">Details</button>
            </div>
          </div>
        </div>
  
        {/* Mercedes-Benz G63 AMG */}
        <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="h-48 overflow-hidden">
            <img 
              src="/images/cars/luxury/3Untitled.jpg" 
              alt="Mercedes-Benz G63 AMG" 
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">MERCEDES-BENZ G 63 AMG</h3>
            <p className="text-gray-400">2025 • SUV • Essence</p>
            <div className="mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
              <span className="text-orange-500 font-bold">Contactez-nous</span>
              <button className="bg-orange-600 text-white px-4 py-2 rounded w-full sm:w-auto hover:bg-orange-700 transition-colors">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Stock;