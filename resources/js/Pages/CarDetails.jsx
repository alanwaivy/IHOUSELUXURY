import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { Infinity, Users, CreditCard } from 'lucide-react';

const CarDetails = ({ car }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [message, setMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation Bar - Responsive */}
      <nav className="relative z-10 flex flex-col md:flex-row justify-between items-center p-4 md:p-6 bg-[#0a0a0a]">
        <div className="text-white text-2xl font-bold mb-4 md:mb-0">
          <span className="text-orange-500">I</span>
          <span className="text-white">HOUSE</span> <span className="text-orange-500">LUXURY</span>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="block md:hidden absolute top-4 right-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Navigation Links */}
        <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-white w-full md:w-auto items-center`}>
          <Link href="/" className="hover:text-orange-500">Accueil</Link>
          <Link href="/stock" className="hover:text-orange-500">Stock</Link>
          <Link href="/contact" className="hover:text-orange-500">Contact</Link>
        </div>
        
        {/* Auth Links */}
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

      {/* Navigation Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-gray-400">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/" className="hover:text-orange-500">Homepage</Link>
          <span>/</span>
          <Link href="/stock" className="hover:text-orange-500">Stock</Link>
          <span>/</span>
          <Link href="#" className="text-orange-500">PORSCHE 911 CARRERA</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src={car.images[selectedImage]}
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {car.images.map((image, index) => (
                <div 
                  key={index}
                  className={`h-20 rounded-lg overflow-hidden cursor-pointer ${selectedImage === index ? 'ring-2 ring-orange-500' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
            <div className="text-sm text-gray-400 mb-4">
              {car.year} • {car.type} • {car.fuel}
            </div>

            <div className="text-2xl text-orange-500 font-bold mb-8">
              Prix : Contactez-nous
            </div>

            <div className="bg-[#131929] rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Caractéristiques</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Marque:</span>
                    <span>Porsche</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Modèle:</span>
                    <span>911 Carrera</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Année:</span>
                    <span>{car.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transmission:</span>
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Condition:</span>
                    <span>{car.condition}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Kilométrage:</span>
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Type carburant:</span>
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Portes:</span>
                    <span>{car.doors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cylindrée:</span>
                    <span>{car.cylinders}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Couleur:</span>
                    <span>{car.color}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Description Section */}
        <div className="mt-12 bg-[#131929] rounded-lg p-8 w-full">
          <h2 className="text-2xl font-semibold mb-6 text-white">Description</h2>
          <p className="text-gray-400 leading-relaxed">
            PORSCHE 911 CARRERA (importée neuve) est disponible actuellement chez Luxury Auto. Cette voiture exceptionnelle représente le summum du luxe et de la performance. Avec son design emblématique et ses performances incomparables, la 911 Carrera incarne l'excellence automobile. Importée neuve, elle offre une expérience de conduite unique, alliant puissance, confort et sophistication.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 bg-[#131929] rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-6 text-white">Send message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="bg-[#0a0a0a] rounded-lg p-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email*"
                className="bg-[#0a0a0a] rounded-lg p-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="bg-[#0a0a0a] rounded-lg p-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Message*"
              rows="4"
              className="w-full bg-[#0a0a0a] rounded-lg p-3 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="privacy" className="rounded border-gray-700" />
                <label htmlFor="privacy" className="text-sm text-gray-400">
                  I accept the privacy policy
                </label>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Offer ID */}
        <div className="mt-8 flex items-center justify-between">
          <div className="text-gray-400">Offre ID #{car.id}</div>
          <div className="flex space-x-2">
            <button className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
              <FaUser className="text-white" />
            </button>
            <button className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
              <FaUserPlus className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#131929] text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-orange-500">I</span>
                <span className="text-white">HOUSE</span> <span className="text-orange-500">LUXURY</span>
              </div>
              <p className="text-gray-400">
                Luxury Auto est la référence en importation de véhicules de luxe neufs au Maroc. Toute marques certifiées avec la possibilité de commander du sur mesure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>+212 661 21 23 19</p>
                <p>info@luxuryauto.ma</p>
                <p>Angle Boulevard d'Anfa & Rue Ain Harrouda Racine, Casablanca</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-orange-500">Accueil</Link>
                <Link href="/stock" className="block text-gray-400 hover:text-orange-500">Stock</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-orange-500">Contact</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 © Copyright Luxury Auto . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CarDetails; 