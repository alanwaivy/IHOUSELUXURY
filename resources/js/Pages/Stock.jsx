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




  return (

    <>
         
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
    
    <div className="bg-gray-900 text-white p-4">

          
        
      {/* Breadcrumb */}
      <div className="text-sm mb-4">
        <span className="text-gray-400">Homepage</span>
        <span className="text-gray-400 mx-2">-</span>
        <span className="text-orange-500">Search</span>
      </div>

      {/* Filter Dropdowns */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
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

        <select
          name="condition"
          value={filters.condition}
          onChange={handleFilterChange}
          className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Condition</option>
          {conditionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
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
          name="driveType"
          value={filters.driveType}
          onChange={handleFilterChange}
          className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Drive Type</option>
          {driveTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

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
          name="options"
          value={filters.options}
          onChange={handleFilterChange}
          className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Options</option>
          <option value="GPS">GPS</option>
          <option value="Toit ouvrant">Toit ouvrant</option>
        </select>

        <select
          name="transmission"
          value={filters.transmission}
          onChange={handleFilterChange}
          className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Transmission</option>
          {transmissionOptions.map((option) => (
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

      {/* Clear All and More Filters */}
      <div className="flex justify-end mb-4">
        <button
          onClick={clearFilters}
          className="text-gray-400 hover:text-orange-500 mr-4"
        >
          Clear all
        </button>
        <button className="text-orange-500 flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          More filters
        </button>
      </div>

      {/* Tabs and Search Bar */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => handleTabChange('Tout')}
            className={`${
              activeTab === 'Tout' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'
            } pb-2`}
          >
            Tout (228)
          </button>
          <button
            onClick={() => handleTabChange('Neuf')}
            className={`${
              activeTab === 'Neuf' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'
            } pb-2`}
          >
            Neuf (181)
          </button>
          <button
            onClick={() => handleTabChange('Occasion')}
            className={`${
              activeTab === 'Occasion' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'
            } pb-2`}
          >
            Occasion (47)
          </button>
        </div>

        <div className="flex space-x-2">
          <button className="text-gray-400 flex items-center">
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
          <div className="relative">
            <input
              type="text"
              placeholder="Enter keyword"
              className="bg-gray-800 border border-gray-600 rounded-lg p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
    </div>

    </>
  );
};

export default Stock;