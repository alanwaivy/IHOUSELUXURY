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

  // Sample options for dropdowns (you can replace these with API data)
  const marqueOptions = ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes'];
  const conditionOptions = ['Neuf', 'Occasion', 'Certifié'];
  const driveTypeOptions = ['FWD', 'RWD', 'AWD'];
  const typeCarburantOptions = ['Essence', 'Diesel', 'Hybride', 'Électrique'];
  const transmissionOptions = ['Automatique', 'Manuelle'];
  const couleurOptions = ['Noir', 'Blanc', 'Rouge', 'Bleu', 'Gris'];

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
    
    <div className="bg-gray-900 text-white p-4">
      {/* Breadcrumb */}
      <div className="text-sm mb-4">
        <span className="text-gray-400">Homepage</span>
        <span className="text-gray-400 mx-2">-</span>
        <span className="text-orange-500">Search</span>
      </div>
  
      {/* Filter Dropdowns - Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
        <select
          name="marque"
          value={filters.marque}
          onChange={handleFilterChange}
          className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Marque</option>
          {marqueOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
  
        <select
          name="modele"
          value={filters.modele}
          onChange={handleFilterChange}
          className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Modèle</option>
          <option value="Civic">Civic</option>
          <option value="Corolla">Corolla</option>
          <option value="Mustang">Mustang</option>
        </select>
  
        <input
          type="text"
          name="minPrix"
          value={filters.minPrix}
          onChange={handleFilterChange}
          placeholder="Min Prix"
          className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
  
        <input
          type="text"
          name="maxPrix"
          value={filters.maxPrix}
          onChange={handleFilterChange}
          placeholder="Max Prix"
          className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
  
        <input
          type="text"
          name="kilometrage"
          value={filters.kilometrage}
          onChange={handleFilterChange}
          placeholder="Kilométrage"
          className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
  
        <select
          name="typeCarburant"
          value={filters.typeCarburant}
          onChange={handleFilterChange}
          className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Type carburant</option>
          {typeCarburantOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
  
        <select
          name="condition"
          value={filters.couleur}
          onChange={handleFilterChange}
          className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Condition</option>
          {couleurOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
    
        <select
          name="couleur"
          value={filters.couleur}
          onChange={handleFilterChange}
          className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Couleur</option>
          {couleurOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
  
      {/* Clear All - Right-aligned on mobile too */}
      <div className="flex justify-end mb-4">
        <button
          onClick={clearFilters}
          className="text-gray-400 hover:text-orange-500 mr-4"
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
            Tout (228)
          </button>
          <button
            onClick={() => handleTabChange('Neuf')}
            className={`${
              activeTab === 'Neuf' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'
            } pb-2 whitespace-nowrap`}
          >
            Neuf (181)
          </button>
          <button
            onClick={() => handleTabChange('Occasion')}
            className={`${
              activeTab === 'Occasion' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'
            } pb-2 whitespace-nowrap`}
          >
            Occasion (47)
          </button>
        </div>
  
        {/* Search and Compare - Full width on mobile */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
          <button className="text-gray-400 flex items-center justify-center sm:justify-start">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Compare
          </button>
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Enter keyword"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <svg
              className="w-5 h-5 absolute right-2 top-2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
  
      {/* Stock Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Car Card 1 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e" alt="BMW M4" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-bold">BMW M4 Competition</h3>
            <p className="text-gray-400">2023 • 1,500 km</p>
            <div className="mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
              <span className="text-orange-500 font-bold">€89,900</span>
              <button className="bg-orange-500 text-white px-4 py-2 rounded w-full sm:w-auto hover:bg-orange-600 transition-colors">Details</button>
            </div>
          </div>
        </div>
  
        {/* Car Card 2 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <img src="https://images.unsplash.com/photo-1617654112368-307921291f42" alt="Mercedes AMG" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-bold">Mercedes-AMG GT</h3>
            <p className="text-gray-400">2022 • 8,500 km</p>
            <div className="mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
              <span className="text-orange-500 font-bold">€125,000</span>
              <button className="bg-orange-500 text-white px-4 py-2 rounded w-full sm:w-auto hover:bg-orange-600 transition-colors">Details</button>
            </div>
          </div>
        </div>
  
        {/* Car Card 3 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <img src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16" alt="Porsche 911" className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-bold">Porsche 911 GT3</h3>
            <p className="text-gray-400">2023 • 500 km</p>
            <div className="mt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
              <span className="text-orange-500 font-bold">€195,000</span>
              <button className="bg-orange-500 text-white px-4 py-2 rounded w-full sm:w-auto hover:bg-orange-600 transition-colors">Details</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Responsive Pagination - Added for better UX */}
      <div className="flex justify-center mt-8">
        <nav className="inline-flex rounded-md shadow">
          <a href="#" className="py-2 px-4 bg-gray-800 text-gray-400 rounded-l-md hover:bg-gray-700">
            Previous
          </a>
          <a href="#" className="py-2 px-4 bg-orange-500 text-white hover:bg-orange-600">
            1
          </a>
          <a href="#" className="py-2 px-4 bg-gray-800 text-gray-400 hover:bg-gray-700">
            2
          </a>
          <a href="#" className="py-2 px-4 bg-gray-800 text-gray-400 hover:bg-gray-700">
            3
          </a>
          <a href="#" className="py-2 px-4 bg-gray-800 text-gray-400 rounded-r-md hover:bg-gray-700">
            Next
          </a>
        </nav>
      </div>
    </div>
  </>
  );
};

export default Stock;