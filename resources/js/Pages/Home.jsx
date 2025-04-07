import React, {useState,useEffect,useRef} from 'react';
import { Head, Link } from '@inertiajs/react';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { Infinity, Users, CreditCard, ChevronLeft, ChevronRight  } from 'lucide-react';  
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Welcome({ carss,marks }) {

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
            brand: 'BENTLEY',
            model: 'BENTAYGA S E-HYBRIDE',
            type: 'Importée Neuve',
            year: 2025,
            kilometers: '0 Km',
            transmission: 'Automatic',
            drivetrain: 'Hybrid',
            price: 'Contactez-nous',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F26%2F26%2F14%2F5858093%2F6%2FrawImage.jpg&f=1&nofb=1&ipt=6df8d6189bb0b53ebbcddcce7e72308cb95e44bf4c7805d006382cecf9ea3d36&ipo=images',
            mainListing: true
        },
        {
            id: 2,
            brand: 'Mercedes-Benz',
            model: 'GLE 350de',
            type: 'Importée',
            year: 2025,
            kilometers: '0 Km',
            transmission: 'Automatic',
            drivetrain: 'Hybrid',
            price: 'Contactez-nous',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F26%2F26%2F14%2F5858093%2F6%2FrawImage.jpg&f=1&nofb=1&ipt=6df8d6189bb0b53ebbcddcce7e72308cb95e44bf4c7805d006382cecf9ea3d36&ipo=images'
        },
        {
            id: 3,
            brand: 'BENTLEY',
            model: 'Continental GT Speed hybrid',
            year: 2025,
            kilometers: '0 Km',
            transmission: 'Automatic',
            drivetrain: 'Hybrid',
            price: 'Contactez-nous',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F26%2F26%2F14%2F5858093%2F6%2FrawImage.jpg&f=1&nofb=1&ipt=6df8d6189bb0b53ebbcddcce7e72308cb95e44bf4c7805d006382cecf9ea3d36&ipo=images'
        },
        {
            id: 4,
            brand: 'Mercedes-Benz',
            model: 'GLC 300de',
            type: 'Importée',
            year: 2025,
            kilometers: '0 Km',
            transmission: 'Automatic',
            drivetrain: 'Hybrid',
            price: 'Contactez-nous',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F26%2F26%2F14%2F5858093%2F6%2FrawImage.jpg&f=1&nofb=1&ipt=6df8d6189bb0b53ebbcddcce7e72308cb95e44bf4c7805d006382cecf9ea3d36&ipo=images'
        },
        {
            id: 5,
            brand: 'Porsche',
            model: 'Cayenne Coupé Pack Sport',
            year: 2025,
            kilometers: '0 Km',
            transmission: 'Automatic',
            drivetrain: 'Hybrid',
            price: 'Contactez-nous',
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F26%2F26%2F14%2F5858093%2F6%2FrawImage.jpg&f=1&nofb=1&ipt=6df8d6189bb0b53ebbcddcce7e72308cb95e44bf4c7805d006382cecf9ea3d36&ipo=images'
        }
        ],
        Occasion: [] // You can populate this with used car data
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
        Audi: [
        {
            id: 1,
            model: "Q8 FACELIFT 2025",
            type: "Importée",
            year: 2025,
            kilometers: "0 Km",
            transmission: "Automatic",
            fuel: "Diesel",
            price: "Contactez-nous",
            imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F26%2F26%2F14%2F5858093%2F6%2FrawImage.jpg&f=1&nofb=1&ipt=6df8d6189bb0b53ebbcddcce7e72308cb95e44bf4c7805d006382cecf9ea3d36&ipo=images",
        },
        {
            id: 2,
            model: "RSQ8 2021",
            type: "Importée Neuve",
            year: 2021,
            kilometers: "35.000 Km",
            transmission: "Automatic",
            fuel: "Diesel",
            price: "Contactez-nous",
            imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F26%2F26%2F14%2F5858093%2F6%2FrawImage.jpg&f=1&nofb=1&ipt=6df8d6189bb0b53ebbcddcce7e72308cb95e44bf4c7805d006382cecf9ea3d36&ipo=images",
        },
        {
            id: 3,
            model: "Q8 FACELIFT",
            type: "Importée Neuve",
            year: 2025,
            kilometers: "0 Km",
            transmission: "Automatic",
            fuel: "Diesel",
            price: "Contactez-nous",
            imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F26%2F26%2F14%2F5858093%2F6%2FrawImage.jpg&f=1&nofb=1&ipt=6df8d6189bb0b53ebbcddcce7e72308cb95e44bf4c7805d006382cecf9ea3d36&ipo=images",
        },
        {
            id: 4,
            model: "Q8 FACELIFT",
            type: "Importée Neuve",
            year: 2024,
            kilometers: "0 Km",
            transmission: "Automatic",
            fuel: "Diesel",
            price: "Contactez-nous",
            imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F26%2F26%2F14%2F5858093%2F6%2FrawImage.jpg&f=1&nofb=1&ipt=6df8d6189bb0b53ebbcddcce7e72308cb95e44bf4c7805d006382cecf9ea3d36&ipo=images",
        },
        ],
        BMW: [
        {
            id: 1,
            model: "X6 M Competition",
            type: "Importée Neuve",
            year: 2025,
            kilometers: "0 Km",
            transmission: "Automatic",
            fuel: "Petrol",
            price: "Contactez-nous",
            imageUrl:
            "https://www.bmwusa.com/content/dam/bmwusa/X6/2025/BMW-MY25-X6-Hero-Desktop.png",
        },
        {
            id: 2,
            model: "iX M60",
            type: "Importée",
            year: 2024,
            kilometers: "10.000 Km",
            transmission: "Automatic",
            fuel: "Electric",
            price: "Contactez-nous",
            imageUrl:
            "https://www.bmwusa.com/content/dam/bmwusa/iX/2025/BMW-MY25-iX-Hero-Desktop.png",
        },
        {
            id: 3,
            model: "X5 xDrive40e",
            type: "Importée Neuve",
            year: 2025,
            kilometers: "0 Km",
            transmission: "Automatic",
            fuel: "Hybrid",
            price: "Contactez-nous",
            imageUrl:
            "https://www.bmwusa.com/content/dam/bmwusa/X5/2025/BMW-MY25-X5-Hero-Desktop.png",
        },
        ],
        Cadillac: [
        {
            id: 1,
            model: "Escalade IQ",
            type: "Importée Neuve",
            year: 2025,
            kilometers: "0 Km",
            transmission: "Automatic",
            fuel: "Electric",
            price: "Contactez-nous",
            imageUrl:
            "https://www.cadillac.com/content/dam/cadillac/na/us/en/index/electric/escalade-iq/01-images/2025-escalade-iq-hero.jpg",
        },
        {
            id: 2,
            model: "Lyriq Sport",
            type: "Importée",
            year: 2024,
            kilometers: "5.000 Km",
            transmission: "Automatic",
            fuel: "Electric",
            price: "Contactez-nous",
            imageUrl:
            "https://www.cadillac.com/content/dam/cadillac/na/us/en/index/electric/lyriq/01-images/2025-lyriq-hero.jpg",
        },
        ],
        Ferrari: [
        {
            id: 1,
            model: "Purosangue",
            type: "Importée Neuve",
            year: 2025,
            kilometers: "0 Km",
            transmission: "Automatic",
            fuel: "Petrol",
            price: "Contactez-nous",
            imageUrl:
            "https://cdn.ferrari.com/cms/network/media/img/resize/62a3c0b1b6d7e672d5e4c4a2-purosangue-hero-desktop?",
        },
        {
            id: 2,
            model: "F80",
            type: "Importée Neuve",
            year: 2025,
            kilometers: "0 Km",
            transmission: "Automatic",
            fuel: "Hybrid",
            price: "Contactez-nous",
            imageUrl:
            "https://cdn.ferrari.com/cms/network/media/img/resize/66f7b8b8b1d2e62b5e4c4a2-f80-hero-desktop?",
        },
        ],
    };

    // Active brand state
    const [activeBrand, setActiveBrand] = useState('Audi');

    // Slide navigation functions
    const nextSlide = () => {
        if (currentSlide < brands[activeBrand].length - 4) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    // Automatic sliding effect
    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.style.transform = `translateX(-${currentSlide * 25}%)`;
        }
    }, [currentSlide]);
     

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
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/Porsche_logo.svg",
    },
    {
      name: "BMW",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    },
    {
      name: "Bentley",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Bentley_logo.svg",
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

    console.log(carss);
    

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
            <div className="flex  text-black justify-center space-x-4 px-4 py-2">
                {/* Make Dropdown */}
                <div className="relative w-60">
                <select 
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md appearance-none bg-white"
                >
                    <option>All Markes</option>
                    {marks.map((mark) => (
                        <option key={mark.id} value={mark.name}>
                            {mark.name}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    
                </div>
                </div>

                {/* Model Dropdown */}
                <div className="relative w-60">
                <select 
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md appearance-none bg-white"
                >
                    <option>All Models</option>
                    {/* Add more model options */}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    
                </div>
                </div>

                {/* Max Price Dropdown */}
                <div className="relative w-60">
                <select 
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md appearance-none bg-white"
                >
                    <option>Max Price</option>
                    {/* Add price range options */}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                
                </div>
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
            <div className="bg-gray-900 text-white p-6">

            {/* Header section with title and filter buttons */}
            <div className="flex justify-between items-center mb-6">
                <div>
                <span className="text-gray-300 text-lg">Découvrez</span>
                <h2 className="text-4xl font-bold">Nos Nouveautés</h2>
                </div>
                <div className="space-x-4">
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

            {/* Grid layout for car listings */}
            <div className="grid grid-cols-4 gap-4">
                {cars[activeTab].map((car, index) => (
                <div 
                    key={car.id} 
                    className={`
                    bg-gray-800 rounded-lg overflow-hidden shadow-lg 
                    transform transition-transform duration-300 hover:scale-105
                    ${car.mainListing ? 'col-span-2 row-span-2' : ''}
                    `}
                    onClick={() => handleCarSelect(car)}
                >
                    <div className="relative">
                    <img 
                        src={car.imageUrl} 
                        alt={`${car.brand} ${car.model}`} 
                        className={`w-full ${car.mainListing ? 'h-96' : 'h-48'} object-cover`}
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
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full">
                    <h2 className="text-2xl font-bold mb-4">{selectedCar.brand} {selectedCar.model}</h2>
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
            <div className="bg-gray-900 text-white py-16">
            {/* Responsive container with max width */}
            <div className="container mx-auto px-4">
                {/* Section title */}
                <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">
                    Pourquoi 
                    <span className="text-orange-600 ml-2">Luxury Auto</span> ?
                </h2>
                </div>
            
                {/* Social media icons - top right of the section */}
                <div className="absolute right-8 top-4 flex space-x-4 text-gray-400">
                <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
                </div>

                {/* Features grid - responsive layout */}
                <div className="grid md:grid-cols-3 gap-8  py-8">
                {features.map((feature, index) => (
                    // Individual feature card with hover effect
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

              
            </div>
            </div>

            {/* Best sales section */}
            <div className="bg-gray-900 text-white p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-4xl font-bold">Marques populaires</h2>
                
                {/* Brand selection buttons */}
                <div className="space-x-4">
                {Object.keys(brands).map((brand) => (
                    <button
                    key={brand}
                    onClick={() => {
                        setActiveBrand(brand);
                        setCurrentSlide(0);
                    }}
                    className={`
                        px-4 py-2 rounded-md transition-colors duration-300
                        ${activeBrand === brand 
                        ? 'bg-orange-600 text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'}
                    `}
                    >
                    {brand} 
                    <span className="ml-2 text-sm bg-gray-700 px-2 rounded">
                        {brands[brand].length} Listings
                    </span>
                    </button>
                ))}
                </div>
            </div>
            {/* Slider container */}
            <div className="relative overflow-hidden">
                {/* Slider wrapper */}
                <div className="overflow-hidden">
                <div 
                    ref={sliderRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                        width: `${brands[activeBrand].length * 25}%`,
                        transform: `translateX(-${currentSlide * (100 / brands[activeBrand].length)}%)`
                    }}
                >
                    {brands[activeBrand].map((car) => (
                        <div 
                            key={car.id} 
                            className="w-1/4 p-2 flex-shrink-0"
                        >
                            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <div className="relative">
                                <img 
                                src={car.imageUrl} 
                                alt={`${activeBrand} ${car.model}`} 
                                className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-orange-600 text-white px-2 py-1 rounded-md text-sm">
                                {car.year}
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{activeBrand} {car.model}</h3>
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
            </div>

            {/* Navigation buttons and View all button container */}
            <div className="flex justify-between items-center mt-6 mx-14">
                <div className="flex space-x-4">
                    <button 
                    onClick={prevSlide} 
                    className={`
                        bg-gray-800 p-2 rounded-full shadow-lg
                        ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}
                    `}
                    disabled={currentSlide === 0}
                    >
                    <ChevronLeft />
                    </button>
                    <button 
                    onClick={nextSlide} 
                    className={`
                        bg-gray-800 p-2 rounded-full shadow-lg
                        ${currentSlide === brands[activeBrand].length - 4 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}
                    `}
                    disabled={currentSlide === brands[activeBrand].length - 4}
                    >
                    <ChevronRight />
                    </button>
                </div>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors">
                    Voir {brands[activeBrand].length} {activeBrand}
                </button>
            </div>
            </div>


            {/* Marques Section */}
            <div className="bg-gray-900 py-8">
                <h2 className="text-center text-white text-3xl font-bold mb-6">Nos Marques</h2>
                <div className="relative max-w-5xl mx-auto">
                    {/* Previous Button */}
                    <button
                    onClick={handlePrev}
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full ${
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
                        animate={{ x: -currentIndex * 300 }} // Adjust 300 based on card width
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {brandLogos.map((brand, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] mx-4 bg-gray-300 rounded-lg flex flex-col items-center justify-center p-4"
                        >
                            <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-32 h-32 object-contain"
                            />
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
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full ${
                        currentIndex === brandLogos.length - 1 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={currentIndex === brandLogos.length - 1}
                    >
                    →
                    </button>
                </div>
                </div>

              {/* Footer Section */}      
            <footer className="w-full pt-20 bg-gray-900 text-white py-8">
<div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
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
        <a href="#" className="text-orange-500 hover:underline">Accueil</a>
    </li>
    <li>
        <a href="#" className="text-orange-500 hover:underline">Contact</a>
    </li>
    <li>
        <a href="#" className="text-orange-500 hover:underline">Stock</a>
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
