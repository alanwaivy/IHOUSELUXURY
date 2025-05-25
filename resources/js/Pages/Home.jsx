import React, {useState,useEffect,useRef} from 'react';
import { Head, Link } from '@inertiajs/react';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { Infinity, Users, CreditCard, ChevronLeft, ChevronRight  } from 'lucide-react';  
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Welcome({ }) {


    const [selectedMake, setSelectedMake] = useState('All Makes');
    const [selectedModel, setSelectedModel] = useState('All Models');
    const [maxPrice, setMaxPrice] = useState('Max Price');

    // State to manage active tab and selected car
    const [activeTab, setActiveTab] = useState('Neuf');
    const [selectedCar, setSelectedCar] = useState(null);

     // Car data with more comprehensive information
    const cars = {
        Neuf: [
        {
            id: 1,
            brand: 'Luxury',
            model: 'Car 1',
            type: 'Importée Neuve',
            year: '2024',
            kilometers: '0 Km',
            transmission: 'Automatic',
            drivetrain: 'AWD',
            price: 'Contactez-nous',
            imageUrl: '/images/cars/luxury/1Untitled.jpg',
            mainListing: true
        },
        {
            id: 2,
            brand: 'Luxury',
            model: 'Car 2',
            type: 'Importée Neuve',
            year: '2024',
            kilometers: '0 Km',
            transmission: 'Automatic',
            drivetrain: 'AWD',
            price: 'Contactez-nous',
            imageUrl: '/images/cars/luxury/2Untitled.jpg'
        },
        {
            id: 3,
            brand: 'Luxury',
            model: 'Car 3',
            type: 'Importée Neuve',
            year: '2024',
            kilometers: '0 Km',
            transmission: 'Automatic',
            drivetrain: 'AWD',
            price: 'Contactez-nous',
            imageUrl: '/images/cars/luxury/3Untitled.jpg'
        },
        {
            id: 4,
            brand: 'Luxury',
            model: 'Car 4',
            type: 'Importée Neuve',
            year: '2024',
            kilometers: '0 Km',
            transmission: 'Automatic',
            drivetrain: 'AWD',
            price: 'Contactez-nous',
            imageUrl: '/images/cars/luxury/Untitled.jpg'
        }
        ],
        Occasion: [
        {
            id: 5,
            brand: 'Luxury',
            model: 'Car 5',
            type: 'Occasion',
            year: '2023',
            kilometers: '15,000 Km',
            transmission: 'Automatic',
            drivetrain: 'AWD',
            price: 'Contactez-nous',
            imageUrl: '/images/cars/luxury/1Untitled.jpg'
        },
        {
            id: 6,
            brand: 'Luxury',
            model: 'Car 6',
            type: 'Occasion',
            year: '2023',
            kilometers: '12,000 Km',
            transmission: 'Automatic',
            drivetrain: 'AWD',
            price: 'Contactez-nous',
            imageUrl: '/images/cars/luxury/2Untitled.jpg'
        }
        ]
    };


    // Handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Handle car selection for modal or detailed view
    const handleCarSelect = (car) => {
        setSelectedCar(car);
    };

    // Array of features to make the component more dynamic and maintainable
    const features = [
        {
        // Unique icon for each feature with distinct color
        icon: <Infinity className="w-12 h-12 text-white bg-orange-600 p-2 rounded-full" />,
        title: 'Très large choix de marques',
        description: 'We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.'
        },
        {
        icon: <Users className="w-12 h-12 text-white bg-green-600 p-2 rounded-full" />,
        title: 'Satisfaction de nos client',
        description: 'We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.'
        },
        {
        icon: <CreditCard className="w-12 h-12 text-white bg-blue-600 p-2 rounded-full" />,
        title: 'Meilleurs prix du marché',
        description: 'We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.'
        }
    ];


     // State for current slide and brands
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    // Brand data
    const brands = {
        'Luxury Cars': [
            {
                id: 1,
                model: "Luxury Car 1",
                type: "Importée Neuve",
                year: 2024,
                kilometers: "0 Km",
                transmission: "Automatic",
                fuel: "Petrol",
                price: "Contactez-nous",
                imageUrl: "/images/cars/luxury/1Untitled.jpg",
            },
            {
                id: 2,
                model: "Luxury Car 2",
                type: "Importée",
                year: 2024,
                kilometers: "0 Km",
                transmission: "Automatic",
                fuel: "Petrol",
                price: "Contactez-nous",
                imageUrl: "/images/cars/luxury/2Untitled.jpg",
            },
            {
                id: 3,
                model: "Luxury Car 3",
                type: "Importée Neuve",
                year: 2024,
                kilometers: "0 Km",
                transmission: "Automatic",
                fuel: "Petrol",
                price: "Contactez-nous",
                imageUrl: "/images/cars/luxury/3Untitled.jpg",
            },
            {
                id: 4,
                model: "Luxury Car 4",
                type: "Importée Neuve",
                year: 2024,
                kilometers: "0 Km",
                transmission: "Automatic",
                fuel: "Petrol",
                price: "Contactez-nous",
                imageUrl: "/images/cars/luxury/Untitled.jpg",
            },
        ]
    };

    // Active brand state
    const [activeBrand, setActiveBrand] = useState('Luxury Cars');

    // Slide navigation functions
    const nextSlide = () => {
        const maxSlides = brands[activeBrand].length - (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1);
        if (currentSlide < maxSlides) {
            setCurrentSlide(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        }
    };

    // Update slider position when currentSlide changes
    useEffect(() => {
        if (sliderRef.current) {
            const slideWidth = 100 / (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1);
            sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        }
    }, [currentSlide]);

    // Update slider on window resize
    useEffect(() => {
        const handleResize = () => {
            setCurrentSlide(0); // Reset to first slide on resize
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // State and logic for each brand's carousel
    const brandCarousels = Object.keys(brands).reduce((acc, brandName) => {
        const carouselRef = useRef();
        const [width, setWidth] = useState(0);
        const [currentIndex, setCurrentIndex] = useState(0);
    
        useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
        }, []);1
    
        const handleNext = () => {
        if (currentIndex < brands[brandName].length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        };
    
        const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
        };
    
        acc[brandName] = { carouselRef, width, currentIndex, setCurrentIndex, handleNext, handlePrev };
        return acc;
    }, {});




    // Brand logo data
    const brandLogos = [
        {
          name: "Mercedes-Benz",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
        },
        {
          name: "Porsche",
          logo: "https://static.cdnlogo.com/logos/p/63/porsche.svg",
        },
        {
          name: "BMW",
          logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
        },
        {
          name: "Bentley",
          logo: "https://download.logo.wine/logo/Bentley/Bentley-Logo.wine.png",
        },
    ];
  
    // State and logic for the carousel 2
    const carouselRef = useRef();
    const [width, setWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
    }, []);

    const handleNext = () => {
    if (currentIndex < brandLogos.length - 1) {
        setCurrentIndex(currentIndex + 1);
    }
    };

    const handlePrev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
    }
    };



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

        
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    

    return (
        <>
        {/* Hero section */}
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/cars/luxury/Untitled.jpg')" }}>
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
          {/* Navigation Bar */}
          <nav className="relative z-10 flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
            <div className="text-white text-2xl font-bold mb-4 md:mb-0">
              <span className="text-white">LUXURY</span> <span className="text-orange-500">AUTO</span>
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
      
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              TROUVER VOTRE <span className="text-orange-500">VÉHICULE</span>
            </h1>
      
            {/* Search Filters */}
            <div className="flex flex-col sm:flex-row text-black justify-center space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-4xl px-4 py-2">
              {/* Make Dropdown */}
              <div className="relative w-full sm:w-60">
                <select 
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md appearance-none bg-white"
                >
                  <option>All Makes</option>
                  {/* Add more make options */}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
              </div>
      
              {/* Model Dropdown */}
              <div className="relative w-full sm:w-60">
                <select 
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md appearance-none bg-white"
                >
                  <option>All Models</option>
                  {/* Add more model options */}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
              </div>
      
              {/* Max Price Dropdown */}
              <div className="relative w-full sm:w-60">
                <select 
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md appearance-none bg-white"
                >
                  <option>Max Price</option>
                  {/* Add price range options */}
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
      
        {/* Main section for new cars */}
        <div className="bg-gray-900 text-white p-4 md:p-6">
          {/* Header section with title and filter buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
            <div>
              <span className="text-gray-300 text-lg">Découvrez</span>
              <h2 className="text-3xl md:text-4xl font-bold">Nos Nouveautés</h2>
            </div>
            <div className="flex space-x-4">
              {['Neuf', 'Occasion'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`
                    px-4 py-2 rounded-md transition-colors duration-300
                    ${activeTab === tab 
                      ? 'bg-orange-600 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'}
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
      
          {/* Grid layout for car listings - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cars[activeTab].map((car, index) => (
              <div 
                key={car.id} 
                className={`
                  bg-gray-800 rounded-lg overflow-hidden shadow-lg 
                  transform transition-transform duration-300 hover:scale-105
                  ${car.mainListing ? 'col-span-1 sm:col-span-2 row-span-1 md:row-span-2' : ''}
                `}
                onClick={() => handleCarSelect(car)}
              >
                <div className="relative">
                  <img 
                    src={car.imageUrl} 
                    alt={`${car.brand} ${car.model}`} 
                    className={`w-full ${car.mainListing ? 'h-64 md:h-96' : 'h-48'} object-cover`}
                  />
                  <div className="absolute top-2 left-2 bg-orange-600 text-white px-2 py-1 rounded-md text-xs">
                    {car.year}
                  </div>
                </div>
                <div className={`p-3 ${car.mainListing ? 'mt-auto' : ''}`}>
                  <h3 className="text-lg font-semibold">{car.brand} {car.model}</h3>
                  {car.type && <p className="text-gray-400 text-xs">{car.type}</p>}
                  <div className="mt-1 text-xs text-gray-300">
                    <span>{car.kilometers}</span> • 
                    <span> {car.transmission}</span> • 
                    <span> {car.drivetrain}</span>
                  </div>
                  <div className="mt-2 text-base font-bold text-orange-500">
                    {car.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
      
          {/* Optional: Modal for car details */}
          {selectedCar && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-gray-800 p-4 md:p-8 rounded-lg w-full max-w-2xl">
                <h2 className="text-xl md:text-2xl font-bold mb-4">{selectedCar.brand} {selectedCar.model}</h2>
                <button 
                  onClick={() => setSelectedCar(null)} 
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                >
                  Close
                </button>
                {/* Add more detailed car information here */}
              </div>
            </div>
          )}
        </div>
      
        {/* Why use Luxury Auto section */}
        <div className="bg-gray-900 text-white py-8 md:py-16">
          {/* Responsive container with max width */}
          <div className="container mx-auto px-4">
            {/* Section title */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pourquoi 
                <span className="text-orange-600 ml-2">Luxury Auto</span> ?
              </h2>
            </div>
      
            {/* Social media icons - top right of the section (hidden on small screens) */}
            <div className="hidden md:flex absolute right-8 top-4 space-x-4 text-gray-400">
              <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
            </div>
      
            {/* Features grid - responsive layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all duration-300 group"
                >
                  {/* Centered icon with background */}
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
      
                  {/* Feature title */}
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
      
                  {/* Feature description */}
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
      
            {/* Call to action button */}
            <div className="text-center mt-8 md:mt-12">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors">
                Voir 181 Neuf
              </button>
            </div>
          </div>
        </div>
      
        {/* Best sales section */}
        <div className="bg-gray-900 text-white p-4 md:p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
            <h2 className="text-3xl md:text-4xl font-bold">Nos Véhicules</h2>
          </div>
          
          {/* Slider container */}
          <div className="relative overflow-hidden">
            {/* Previous button */}
            <button
              onClick={prevSlide}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-r ${
                currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-opacity-75'
              }`}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Slider wrapper */}
            <div className="overflow-hidden">
              <div 
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  width: `${brands['Luxury Cars'].length * (100 / (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1))}%`
                }}
              >
                {brands['Luxury Cars'].map((car) => (
                  <div 
                    key={car.id} 
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex-shrink-0"
                  >
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                      <div className="relative">
                        <img 
                          src={car.imageUrl} 
                          alt={car.model}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-orange-600 text-white px-2 py-1 rounded-md text-sm">
                          {car.year}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold">{car.model}</h3>
                        <p className="text-gray-400 text-sm">{car.type}</p>
                        <div className="mt-2 text-sm text-gray-300">
                          <span>{car.kilometers}</span> • 
                          <span> {car.transmission}</span> • 
                          <span> {car.fuel}</span>
                        </div>
                        <div className="mt-4 text-lg font-bold text-orange-500">
                          {car.price}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={nextSlide}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-l ${
                currentSlide >= brands['Luxury Cars'].length - (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1)
                  ? 'opacity-50 cursor-not-allowed'
                  : 'opacity-100 hover:bg-opacity-75'
              }`}
              disabled={currentSlide >= brands['Luxury Cars'].length - (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1)}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      
        {/* Marques Section */}
        <div className="bg-gray-900 py-8">
          <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-6">Nos Marques</h2>
          <div className="relative max-w-5xl mx-auto px-4">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === 0}
            >
              ←
            </button>
      
            {/* Carousel Container */}
            <div className="overflow-hidden" ref={carouselRef}>
              <motion.div
                className="flex"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                animate={{ x: -currentIndex * (window.innerWidth >= 768 ? 300 : 250) }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {brandLogos.map((brand, index) => (
                  <div
                    key={index}
                    className="min-w-[200px] md:min-w-[250px] mx-2 md:mx-4 bg-gray-300 rounded-lg flex flex-col items-center justify-center p-4"
                  >
                    <div className="flex items-center justify-center" style={{ height: brand.name === 'Porsche' || brand.name === 'Bentley' ? '160px' : '128px' }}>
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        style={{
                          width: brand.name === 'Porsche' || brand.name === 'Bentley' ? '160px' : '128px',
                          height: brand.name === 'Porsche' || brand.name === 'Bentley' ? '160px' : '128px',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <p className="mt-2 text-center text-gray-800 font-semibold">
                      {brand.name}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
      
            {/* Next Button */}
            <button
              onClick={handleNext}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 ${
                currentIndex === brandLogos.length - (window.innerWidth >= 768 ? 3 : 2) ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === brandLogos.length - (window.innerWidth >= 768 ? 3 : 2)}
            >
              →
            </button>
          </div>
        </div>
      
        {/* Footer Section */}      
        <footer className="w-full pt-10 md:pt-20 bg-gray-900 text-white py-8">
          <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-4">À propos</h3>
              <p className="text-sm">
                Luxury Auto est la référence en import de véhicules de luxe neufs au Maroc. Toute marque confondue avec la possibilité de commander sur mesure.
              </p>
            </div>
      
            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Luxury Auto</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-orange-500 hover:underline">Accueil</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-orange-500 hover:underline">Contact</Link>
                </li>
                <li>
                  <Link href="/stock" className="text-orange-500 hover:underline">Stock</Link>
                </li>
              </ul>
            </div>
      
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-lg font-semibold mb-2">+212 661 21 23 19</p>
              <p className="text-sm mb-2">info@luxuryauto.ma</p>
              <p className="text-sm">
                Angle Boulevard d'Anfa & Rue Abou Abdou Rabia El Aouda
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-orange-500">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
      
            {/* Newsletter Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form onSubmit={handleSubmit} className="flex items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full p-2 rounded-l-md bg-gray-800 text-white border-none focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                >
                  →
                </button>
              </form>
              <p className="mt-4 text-sm">
                Abonnez-vous à notre newsletter pour être les premiers informés des nouvelles offres chez Luxury Auto.
              </p>
            </div>
          </div>
      
          {/* Copyright */}
          <div className="text-center text-sm mt-8 border-t border-gray-800 pt-4">
            2025 © Copyright Luxury Auto. All rights reserved.
          </div>
        </footer>
      </>
    );
}