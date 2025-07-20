import React, { useState, useEffect } from 'react';
import './App.css';
import { Phone, Mail, MapPin, Star, CheckCircle, Shield, Award, Clock, Users, Wrench, Home, Droplets, Zap, Hammer, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

// Import images
import lifetimeLogo from './assets/LifetimeHomeServicesLogo.png';
import heroImage from './assets/lifetime_hero_house_image.jpeg';
import radonTestingDevice from './assets/radon_testing_device_professional_new.jpg';
import concreteFloorCoating from './assets/concrete_floor_coating_professional.jpg';
import hvacProfessional from './assets/hvac_professional_premium.jpg';
import aerosealLogo from './assets/aeroseal_logo.jpg';

// Flake images
import flakeDesertSand from './assets/flake_desert_sand.jpg';
import flakeOceanBlue from './assets/flake_ocean_blue.jpg';
import flakeTidalWave from './assets/flake_tidal_wave.jpg';
import flakeStormGray from './assets/flake_storm_gray.jpg';
import flakeMixedBed from './assets/flake_mixed_bed.jpg';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCoverageDropdownOpen, setIsCoverageDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPage = (page) => {
    scrollToTop();
    setCurrentPage(page);
  };

  const PhoneButton = ({ isMobile = false, className = "" }) => {
    if (isMobile) {
      return (
        <a href="tel:2629555701" className={`phone-btn mobile-phone ${className}`}>
          <Phone size={16} />
          (262) 955-5701
        </a>
      );
    }
    
    return (
      <button 
        className={`phone-btn desktop-phone ${className}`}
        onClick={() => navigator.clipboard.writeText('(262) 955-5701')}
        title="Click to copy phone number"
      >
        <Phone size={16} />
        (262) 955-5701
      </button>
    );
  };

  // Rest of your component code continues here...
  // (This is just the beginning - I'll provide the complete file in parts)
