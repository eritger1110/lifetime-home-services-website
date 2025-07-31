import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentBrand, setCurrentBrand] = useState('lifetime');
  const [currentPage, setCurrentPage] = useState('home');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showAreasDropdown, setShowAreasDropdown] = useState(false);
  const [showZipCodes, setShowZipCodes] = useState({});
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Enhanced Google Reviews with 5-star reviews only
  const googleReviews = [
    {
      text: "Lifetime Home Services did an amazing job with our radon mitigation system. Professional, efficient, and the results speak for themselves. Highly recommend!",
      author: "Sarah M.",
      stars: 5
    },
    {
      text: "Outstanding floor coating service! The Torginol system looks incredible and the lifetime warranty gives us peace of mind. Worth every penny.",
      author: "Mike R.",
      stars: 5
    },
    {
      text: "The team was professional, on time, and did excellent work on our custom closets. The quality is top-notch and exactly what we wanted.",
      author: "Jennifer L.",
      stars: 5
    },
    {
      text: "Best radon testing service in Wisconsin! Fast, accurate, and they explained everything clearly. Will definitely use them again.",
      author: "David K.",
      stars: 5
    },
    {
      text: "America In-Home installed our smart home system perfectly. Everything works flawlessly and the team was incredibly knowledgeable.",
      author: "Lisa T.",
      stars: 5
    }
  ];

  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % googleReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [googleReviews.length]);

  const getCurrentReviews = () => {
    const reviews = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentReviewIndex + i) % googleReviews.length;
      reviews.push(googleReviews[index]);
    }
    return reviews;
  };

  const brandConfig = {
    lifetime: {
      name: 'Lifetime Home Services',
      logo: 'LifetimeHomeServicesLogo.png',
      heroImage: 'lifetime-hero-house.jpg',
      tagline: 'Trusted Solutions. Lifetime Results.',
      services: ['Radon Testing', 'Radon Mitigation', 'Duct Cleaning/AeroSeal', 'Concrete Floor Coatings']
    },
    aih: {
      name: 'America In-Home',
      logo: 'AmericaIn-HomeLogo.jpg',
      heroImage: 'america-smart-home-hero.jpg',
      heroVideo: 'https://www.youtube.com/embed/NXCMKyYHl-o?autoplay=1&mute=1&loop=1&playlist=NXCMKyYHl-o&controls=0&showinfo=0&rel=0&modestbranding=1',
      tagline: 'Smart Home Technology. Professional Installation. Lifetime Support.',
      services: ['Smart Home Automation', 'Security Systems', 'Control4 Integration']
    },
    closets: {
      name: 'Closet Concepts',
      logo: 'ClosetConcepts_Logo.jpg',
      heroImage: 'closets-luxury-hero.jpg',
      heroVideo: 'https://www.youtube.com/embed/F-cmkRASFhQ?autoplay=1&mute=1&loop=1&playlist=F-cmkRASFhQ&controls=0&showinfo=0&rel=0&modestbranding=1',
      tagline: 'Custom Storage Solutions. Premium Quality. Lifetime Organization.',
      services: ['Custom Closets', 'Garage Storage', 'Home Office Organization', 'Pantry Systems']
    }
  };

  const stateServices = {
    wisconsin: ['Radon Testing', 'Radon Mitigation', 'Duct Cleaning/AeroSeal', 'Concrete Floor Coatings', 'Custom Closets', 'Smart Home Automation', 'Security Systems'],
    illinois: ['Radon Mitigation', 'Duct Cleaning/AeroSeal'],
    minnesota: ['Radon Testing', 'Radon Mitigation'],
    colorado: ['Radon Testing', 'Radon Mitigation']
  };

  const stateZipCodes = {
    wisconsin: {
      preview: ['53005', '53045', '53072', '53090', '53095', '53151', '53186', '53188'],
      full: ['53005', '53045', '53072', '53090', '53095', '53151', '53186', '53188', '53189', '53190', '53191', '53192', '53193', '53194', '53195', '53196', '53197', '53198', '53199', '53201', '53202', '53203', '53204', '53205', '53206', '53207', '53208', '53209', '53210', '53211', '53212', '53213', '53214', '53215', '53216', '53217', '53218', '53219', '53220', '53221', '53222', '53223', '53224', '53225', '53226', '53227', '53228', '53233', '53234', '53235', '53237', '53244', '53259', '53263', '53274', '53278', '53288', '53290', '53293', '53295']
    },
    illinois: {
      preview: ['60001', '60002', '60004', '60005', '60006', '60007', '60008', '60009'],
      full: ['60001', '60002', '60004', '60005', '60006', '60007', '60008', '60009', '60010', '60011', '60012', '60013', '60014', '60015', '60016', '60017', '60018', '60019', '60020', '60021', '60022', '60025', '60026', '60029', '60030', '60031', '60033', '60034', '60035', '60037', '60038', '60039', '60040', '60041', '60042', '60043', '60044', '60045', '60046', '60047', '60048', '60050', '60051', '60053', '60055', '60056', '60060', '60061', '60062', '60064', '60065', '60067', '60068', '60069', '60070', '60071', '60072', '60073', '60074', '60075', '60076', '60077', '60078', '60081', '60082', '60083', '60084', '60085', '60086', '60087', '60088', '60089', '60090', '60091', '60092', '60093', '60094', '60095', '60096', '60097', '60098', '60099']
    },
    minnesota: {
      preview: ['55001', '55002', '55003', '55009', '55011', '55014', '55016', '55017'],
      full: ['55001', '55002', '55003', '55009', '55011', '55014', '55016', '55017', '55018', '55019', '55020', '55021', '55024', '55025', '55027', '55031', '55033', '55038', '55041', '55042', '55043', '55044', '55045', '55046', '55047', '55051', '55052', '55053', '55054', '55055', '55056', '55057', '55060', '55063', '55066', '55068', '55069', '55070', '55071', '55072', '55073', '55075', '55076', '55077', '55079', '55080', '55082', '55083', '55084', '55085', '55090', '55092', '55101', '55102', '55103', '55104', '55105', '55106', '55107', '55108', '55109', '55110', '55111', '55112', '55113', '55114', '55115', '55116', '55117', '55118', '55119', '55120', '55121', '55122', '55123', '55124', '55125', '55126', '55127', '55128', '55129', '55130', '55133', '55144', '55150', '55155', '55161', '55164', '55165', '55166', '55168', '55169', '55170', '55171', '55172', '55175', '55177', '55182', '55187', '55188', '55191', '55199']
    },
    colorado: {
      preview: ['80001', '80002', '80003', '80004', '80005', '80007', '80010', '80011'],
      full: ['80001', '80002', '80003', '80004', '80005', '80007', '80010', '80011', '80012', '80013', '80014', '80015', '80016', '80017', '80018', '80019', '80020', '80021', '80022', '80023', '80024', '80025', '80026', '80027', '80030', '80031', '80033', '80034', '80035', '80036', '80037', '80038', '80040', '80041', '80045', '80046', '80047', '80101', '80102', '80103', '80104', '80105', '80106', '80107', '80108', '80109', '80110', '80111', '80112', '80113', '80116', '80117', '80118', '80120', '80121', '80122', '80123', '80124', '80125', '80126', '80127', '80128', '80129', '80130', '80131', '80132', '80133', '80134', '80135', '80136', '80137', '80138', '80202', '80203', '80204', '80205', '80206', '80207', '80208', '80209', '80210', '80211', '80212', '80214', '80215', '80216', '80218', '80219', '80220', '80221', '80222', '80223', '80224', '80225', '80226', '80227', '80228', '80229', '80230', '80231', '80232', '80233', '80234', '80235', '80236', '80237', '80238', '80239', '80246', '80247', '80249', '80264', '80290', '80293', '80294']
    }
  };

  const areaCodesByState = {
    wisconsin: ['262', '414', '608', '715', '920'],
    illinois: ['224', '312', '331', '630', '708', '773', '815', '847', '872'],
    minnesota: ['218', '320', '507', '612', '651', '763', '952'],
    colorado: ['303', '719', '720', '970']
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setShowServicesDropdown(false);
    setShowAreasDropdown(false);
    window.scrollTo(0, 0);
  };

  const navigateToBrand = (brand) => {
    setCurrentBrand(brand);
    setCurrentPage('home');
    setShowServicesDropdown(false);
    setShowAreasDropdown(false);
    window.scrollTo(0, 0);
  };

  const toggleZipCodes = (state) => {
    setShowZipCodes(prev => ({
      ...prev,
      [state]: !prev[state]
    }));
  };

  const renderHeader = () => (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img 
            src={brandConfig[currentBrand].logo} 
            alt={brandConfig[currentBrand].name}
            className="logo"
            onClick={() => navigateToBrand(currentBrand)}
          />
        </div>
        
        <nav className="main-nav">
          <div className="brand-links">
            <button 
              className={`brand-link ${currentBrand === 'lifetime' ? 'active' : ''}`}
              onClick={() => navigateToBrand('lifetime')}
            >
              Lifetime Home Services
            </button>
            <button 
              className={`brand-link ${currentBrand === 'aih' ? 'active' : ''}`}
              onClick={() => navigateToBrand('aih')}
            >
              America In-Home
            </button>
            <button 
              className={`brand-link ${currentBrand === 'closets' ? 'active' : ''}`}
              onClick={() => navigateToBrand('closets')}
            >
              Closet Concepts
            </button>
          </div>
          
          <div className="nav-links">
            <div className="dropdown">
              <button 
                className="nav-button"
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
              >
                Services ▼
              </button>
              {showServicesDropdown && (
                <div className="dropdown-menu">
                  {currentBrand === 'lifetime' && (
                    <>
                      <button className="dropdown-item" onClick={() => navigateToPage('radon-testing')}>Radon Testing</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('radon-mitigation')}>Radon Mitigation</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('duct-cleaning')}>Duct Cleaning/AeroSeal</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('floor-coatings')}>Concrete Floor Coatings</button>
                    </>
                  )}
                  {currentBrand === 'aih' && (
                    <>
                      <button className="dropdown-item" onClick={() => navigateToPage('smart-home')}>Smart Home Automation</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('security-systems')}>Security Systems</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('control4')}>Control4 Integration</button>
                    </>
                  )}
                  {currentBrand === 'closets' && (
                    <>
                      <button className="dropdown-item" onClick={() => navigateToPage('custom-closets')}>Custom Closets</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('garage-storage')}>Garage Storage</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('home-office')}>Home Office Organization</button>
                      <button className="dropdown-item" onClick={() => navigateToPage('pantry-systems')}>Pantry Systems</button>
                    </>
                  )}
                </div>
              )}
            </div>
            
            <div className="dropdown">
              <button 
                className="nav-button"
                onClick={() => setShowAreasDropdown(!showAreasDropdown)}
              >
                Service Areas ▼
              </button>
              {showAreasDropdown && (
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={() => navigateToPage('wisconsin')}>Wisconsin</button>
                  <button className="dropdown-item" onClick={() => navigateToPage('illinois')}>Illinois</button>
                  <button className="dropdown-item" onClick={() => navigateToPage('minnesota')}>Minnesota</button>
                  <button className="dropdown-item" onClick={() => navigateToPage('colorado')}>Colorado</button>
                </div>
              )}
            </div>
            
            <button className="nav-button" onClick={() => navigateToPage('contact')}>Contact</button>
            <button className="nav-button" onClick={() => navigateToPage('financing')}>Financing</button>
          </div>
        </nav>
        
        <div className="contact-info">
          <div className="phone">(262) 955-5701</div>
        </div>
      </div>
    </header>
  );

  const renderHeroSection = () => {
    // Video hero for America In-Home
    if (currentBrand === 'aih' && currentPage === 'home') {
      return (
        <section className="hero-section-video">
          <div className="hero-video-container">
            <iframe
              src={brandConfig[currentBrand].heroVideo}
              title="America In-Home Smart Home Solutions"
              className="hero-video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <div className="hero-content-overlay">
              <div className="hero-text-content">
                <h1 className="hero-company-name">{brandConfig[currentBrand].name}</h1>
                <h2 className="hero-tagline-special">{brandConfig[currentBrand].tagline}</h2>
                <p className="hero-subtitle-new">Expert care for the spaces beneath, around, and within your home</p>
                <div className="hero-cta-buttons">
                  <button className="cta-button primary large with-border" onClick={() => navigateToPage('contact')}>
                    Get Free Estimate
                  </button>
                  <button className="cta-button secondary large" onClick={() => navigateToPage('smart-home')}>
                    Learn About Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Video hero for Closet Concepts
    if (currentBrand === 'closets' && currentPage === 'home') {
      return (
        <section className="hero-section-video">
          <div className="hero-video-container">
            <iframe
              src={brandConfig[currentBrand].heroVideo}
              title="Closet Concepts Manufacturing"
              className="hero-video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <div className="hero-content-overlay">
              <div className="hero-text-content">
                <h1 className="hero-company-name">{brandConfig[currentBrand].name}</h1>
                <h2 className="hero-tagline-special">{brandConfig[currentBrand].tagline}</h2>
                <p className="hero-subtitle-new">Expert care for the spaces beneath, around, and within your home</p>
                <div className="hero-cta-buttons">
                  <button className="cta-button primary large with-border" onClick={() => navigateToPage('contact')}>
                    Get Free Estimate
                  </button>
                  <button className="cta-button secondary large" onClick={() => navigateToPage('custom-closets')}>
                    View Our Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Standard hero for Lifetime Home Services
    return (
      <section className="hero-section-fullscreen">
        <div className="hero-background">
          <img 
            src={brandConfig[currentBrand].heroImage} 
            alt={brandConfig[currentBrand].name}
            className="hero-image-fullscreen"
          />
        </div>
        <div className="hero-content-overlay">
          <div className="hero-text-content">
            <h1 className="hero-company-name">{brandConfig[currentBrand].name}</h1>
            <h2 className="hero-tagline-special">{brandConfig[currentBrand].tagline}</h2>
            <p className="hero-subtitle-new">Expert care for the spaces beneath, around, and within your home</p>
            <div className="hero-cta-buttons">
              <button className="cta-button primary large with-border" onClick={() => navigateToPage('contact')}>
                Get Free Estimate
              </button>
              <button className="cta-button secondary large" onClick={() => navigateToPage('radon-testing')}>
                Learn About Testing First
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderServicesSection = () => {
    const services = {
      lifetime: [
        {
          title: 'Free Radon Testing',
          description: 'Professional radon testing with EPA-certified equipment and detailed reporting.',
          image: 'radon-testing-professional.jpg',
          page: 'radon-testing'
        },
        {
          title: 'Radon Mitigation',
          description: 'Complete radon mitigation systems with Festa fans and lifetime warranties.',
          image: 'radon-mitigation-system.jpg',
          page: 'radon-mitigation'
        },
        {
          title: 'Duct Cleaning/AeroSeal',
          description: 'Professional duct cleaning and AeroSeal duct sealing services.',
          image: 'aeroseal-logo.png',
          page: 'duct-cleaning'
        },
        {
          title: 'Concrete Floor Coatings',
          description: 'Premium Torginol floor coatings with polyaspartic topcoat and lifetime warranty.',
          image: 'concrete-coatings-professional.jpg',
          page: 'floor-coatings'
        }
      ],
      aih: [
        {
          title: 'Smart Home Automation',
          description: 'Complete Control4 home automation systems for modern living.',
          image: 'control4-smart-home.jpg',
          page: 'smart-home'
        },
        {
          title: 'Security Systems',
          description: 'Professional security system installation and monitoring.',
          image: 'Securityfront.jpg',
          page: 'security-systems'
        },
        {
          title: 'Control4 Integration',
          description: 'Advanced Control4 integration for seamless home automation.',
          image: 'control4-integration.jpg',
          page: 'control4'
        }
      ],
      closets: [
        {
          title: 'Custom Closets',
          description: 'Luxury walk-in and reach-in closet systems designed and built in Wisconsin.',
          image: 'Closet5.jpg',
          page: 'custom-closets'
        },
        {
          title: 'Garage Storage',
          description: 'Premium garage organization systems with custom wood construction.',
          image: 'Garage1.jpg',
          page: 'garage-storage'
        },
        {
          title: 'Home Office Organization',
          description: 'Custom home office solutions with built-in desks and storage.',
          image: 'HomeOffice2.png',
          page: 'home-office'
        },
        {
          title: 'Pantry Systems',
          description: 'Custom pantry organization with pull-out drawers and adjustable shelving.',
          image: 'Pantry1.jpeg',
          page: 'pantry-systems'
        }
      ]
    };

    return (
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services[currentBrand].map((service, index) => (
              <div key={index} className="service-card" onClick={() => navigateToPage(service.page)}>
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} className="service-image" />
                  <div className="service-overlay">
                    <button className="service-learn-more">Learn More</button>
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderGoogleReviews = () => (
    <section className="google-reviews-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="reviews-carousel">
          {getCurrentReviews().map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-stars">
                {'★'.repeat(review.stars)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">- {review.author}</div>
            </div>
          ))}
        </div>
        <div className="google-reviews-link">
          <a 
            href="https://www.google.com/search?q=Lifetime+Home+Services+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="google-link"
          >
            View All Google Reviews →
          </a>
        </div>
      </div>
    </section>
  );

  const renderRadonLevelsSection = () => (
    <section className="radon-levels-section">
      <div className="container">
        <h2 className="section-title">Understanding Radon Levels</h2>
        <div className="radon-levels-grid">
          <div className="radon-level-card safe">
            <h3>0-2 pCi/L</h3>
            <p className="level-status">Safe</p>
            <p>Acceptable levels. No action needed.</p>
          </div>
          <div className="radon-level-card caution">
            <h3>2-4 pCi/L</h3>
            <p className="level-status">Caution</p>
            <p>Consider mitigation. EPA recommends action.</p>
          </div>
          <div className="radon-level-card danger">
            <h3>4+ pCi/L</h3>
            <p className="level-status">Danger</p>
            <p>Immediate mitigation required by EPA.</p>
          </div>
          <div className="radon-level-card extreme">
            <h3>20+ pCi/L</h3>
            <p className="level-status">Extreme</p>
            <p>Emergency mitigation needed immediately.</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderFooter = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={brandConfig[currentBrand].logo} alt={brandConfig[currentBrand].name} className="footer-logo" />
          <p className="footer-tagline">{brandConfig[currentBrand].tagline}</p>
          {/* SEO Footer References */}
          {currentBrand === 'aih' && (
            <p className="footer-seo-reference">formerly americainhome.com</p>
          )}
          {currentBrand === 'closets' && (
            <p className="footer-seo-reference">formerly closetconcepts.com</p>
          )}
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-services">
            {brandConfig[currentBrand].services.map((service, index) => (
              <li key={index}>
                <button 
                  className="footer-service-link"
                  onClick={() => navigateToPage(service.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-'))}
                >
                  {service}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Information</h4>
          <p className="footer-phone">(262) 955-5701</p>
          <p className="footer-address">3485 N. 124th St.<br />Brookfield, WI 53005</p>
          <a 
            href="https://maps.google.com/?q=3485+N.+124th+St.+Brookfield+WI+53005"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-directions"
          >
            Get Directions
          </a>
        </div>
        
        <div className="footer-section">
          <h4>Business Hours</h4>
          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
          <p>Saturday: 9:00 AM - 3:00 PM</p>
          <p>Sunday: Closed</p>
          <p className="emergency-note">Emergency services available 24/7</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 {brandConfig[currentBrand].name}. All rights reserved.</p>
        <div className="footer-links">
          <button onClick={() => navigateToPage('privacy')}>Privacy Policy</button>
          <button onClick={() => navigateToPage('terms')}>Terms of Service</button>
        </div>
      </div>
    </footer>
  );

  // Page content rendering
  const renderPageContent = () => {
    if (currentPage === 'home') {
      return (
        <div className="homepage">
          {renderHeroSection()}
          {renderServicesSection()}
          {currentBrand === 'lifetime' && renderRadonLevelsSection()}
          {renderGoogleReviews()}
        </div>
      );
    }

    // Radon Testing Page - COMPREHENSIVE EDUCATION
    if (currentPage === 'radon-testing') {
      return (
        <div className="service-page">
          <div className="page-header">
            <div className="container">
              <h1>Professional Radon Testing</h1>
              <p>EPA-certified radon testing with fast, accurate results</p>
            </div>
          </div>
          
          <div className="page-content">
            <div className="container">
              <div className="content-grid">
                <div className="content-main">
                  <h2>What is Radon?</h2>
                  <p>Radon is a colorless, odorless, and tasteless radioactive gas that occurs naturally in the environment. It comes from the breakdown of uranium in soil, rock, and water. Think of it like an invisible gas that can sneak into your home through tiny cracks and openings.</p>
                  
                  <div className="radon-explanation-box">
                    <h3>How Radon Forms (Simple Explanation)</h3>
                    <ol>
                      <li><strong>Underground uranium breaks down</strong> - Like old rocks crumbling apart</li>
                      <li><strong>Creates radon gas</strong> - An invisible gas is released</li>
                      <li><strong>Gas rises through soil</strong> - Like bubbles rising in water</li>
                      <li><strong>Enters homes through cracks</strong> - Finds tiny openings in foundations</li>
                      <li><strong>Gets trapped inside</strong> - Builds up in basements and lower levels</li>
                    </ol>
                  </div>
                  
                  <h2>Why is Radon Dangerous?</h2>
                  <p>Radon is the second leading cause of lung cancer in the United States, responsible for about 21,000 deaths each year. When you breathe in radon gas, tiny radioactive particles get stuck in your lungs and can damage lung tissue over time.</p>
                  
                  <div className="health-risks-section">
                    <h3>Health Risks by the Numbers</h3>
                    <div className="risk-stats">
                      <div className="risk-stat">
                        <h4>1 in 15 homes</h4>
                        <p>Have elevated radon levels</p>
                      </div>
                      <div className="risk-stat">
                        <h4>21,000 deaths</h4>
                        <p>Per year from radon exposure</p>
                      </div>
                      <div className="risk-stat">
                        <h4>2nd leading cause</h4>
                        <p>Of lung cancer after smoking</p>
                      </div>
                    </div>
                  </div>
                  
                  <h2>What is Radon Testing?</h2>
                  <p>Radon testing is the only way to know if your home has dangerous levels of radon gas. Our EPA-certified professionals use state-of-the-art equipment to provide accurate measurements of radon levels in your home.</p>
                  
                  <div className="testing-process-visual">
                    <h3>Our Testing Process (Step by Step)</h3>
                    <div className="process-steps">
                      <div className="process-step">
                        <div className="step-number">1</div>
                        <h4>Professional Placement</h4>
                        <p>We place testing equipment in the lowest livable level of your home</p>
                      </div>
                      <div className="process-step">
                        <div className="step-number">2</div>
                        <h4>48-72 Hour Testing</h4>
                        <p>Equipment measures radon levels continuously for accurate results</p>
                      </div>
                      <div className="process-step">
                        <div className="step-number">3</div>
                        <h4>Detailed Report</h4>
                        <p>You receive a comprehensive report with EPA recommendations</p>
                      </div>
                      <div className="process-step">
                        <div className="step-number">4</div>
                        <h4>Free Consultation</h4>
                        <p>We explain your results and discuss next steps if needed</p>
                      </div>
                    </div>
                  </div>
                  
                  <h2>Understanding Your Test Results</h2>
                  <p>Radon is measured in picocuries per liter (pCi/L). Here's what different levels mean:</p>
                  
                  <div className="radon-levels-explanation">
                    <div className="level-explanation safe">
                      <h4>0-2 pCi/L - Safe Range</h4>
                      <p>These are acceptable levels. No action is needed, but you should test again in 2 years.</p>
                    </div>
                    <div className="level-explanation caution">
                      <h4>2-4 pCi/L - Consider Action</h4>
                      <p>The EPA recommends considering mitigation. Any level of radon poses some risk.</p>
                    </div>
                    <div className="level-explanation danger">
                      <h4>4+ pCi/L - Take Action</h4>
                      <p>The EPA strongly recommends mitigation. This is like smoking half a pack of cigarettes per day.</p>
                    </div>
                    <div className="level-explanation extreme">
                      <h4>20+ pCi/L - Emergency Action</h4>
                      <p>Immediate mitigation needed. This is like smoking 2 packs of cigarettes per day.</p>
                    </div>
                  </div>
                  
                  <h2>When Should You Test?</h2>
                  <div className="when-to-test">
                    <ul>
                      <li><strong>Buying or selling a home</strong> - Required for most real estate transactions</li>
                      <li><strong>Every 2 years</strong> - EPA recommends regular testing</li>
                      <li><strong>After home renovations</strong> - Changes to your home can affect radon levels</li>
                      <li><strong>If you've never tested</strong> - 1 in 15 homes has elevated radon</li>
                      <li><strong>If neighbors have high levels</strong> - Radon can vary greatly between homes</li>
                    </ul>
                  </div>
                  
                  <div className="cta-section">
                    <h3>Ready to Test Your Home?</h3>
                    <p>Contact us today for your FREE radon test. Protect your family's health with professional testing.</p>
                    <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                      Schedule Free Test
                    </button>
                  </div>
                </div>
                
                <div className="content-sidebar">
                  <div className="info-box">
                    <h4>Why Test for Radon?</h4>
                    <ul>
                      <li>Radon is the #2 cause of lung cancer</li>
                      <li>1 in 15 homes has elevated radon</li>
                      <li>Testing is the only way to know</li>
                      <li>Required for real estate transactions</li>
                      <li>Protects your family's health</li>
                    </ul>
                  </div>
                  
                  <div className="info-box">
                    <h4>Trusted Resources</h4>
                    <ul>
                      <li><a href="https://www.epa.gov/radon/citizens-guide-radon" target="_blank" rel="noopener noreferrer">EPA Citizen's Guide to Radon</a></li>
                      <li><a href="https://www.epa.gov/radon/health-risk-radon" target="_blank" rel="noopener noreferrer">EPA Radon Health Risks</a></li>
                      <li><a href="https://www.airthings.com/resources/what-is-radon" target="_blank" rel="noopener noreferrer">Airthings - What is Radon?</a></li>
                      <li><a href="https://www.dhs.wisconsin.gov/radon/index.htm" target="_blank" rel="noopener noreferrer">Wisconsin DHS Radon Program</a></li>
                      <li><a href="https://www.cdc.gov/radon/index.html" target="_blank" rel="noopener noreferrer">CDC Radon Information</a></li>
                    </ul>
                  </div>
                  
                  <div className="info-box">
                    <h4>Testing Equipment</h4>
                    <img src="radon-testing-professional.jpg" alt="Professional radon testing equipment" className="sidebar-image" />
                    <p>We use EPA-certified continuous radon monitors for the most accurate results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Radon Mitigation Page
    if (currentPage === 'radon-mitigation') {
      return (
        <div className="service-page">
          <div className="page-header">
            <div className="container">
              <h1>Radon Mitigation Systems</h1>
              <p>Professional radon mitigation with guaranteed results</p>
            </div>
          </div>
          
          <div className="page-content">
            <div className="container">
              <div className="content-grid">
                <div className="content-main">
                  <h2>Professional Radon Mitigation</h2>
                  <p>Our certified radon mitigation specialists design and install custom systems to reduce radon levels in your home. We use only the highest quality materials and proven techniques to ensure your family's safety.</p>
                  
                  <div className="mitigation-video-section">
                    <h3>How Radon Mitigation Works</h3>
                    <div className="video-container">
                      <iframe
                        src="https://www.youtube.com/embed/oSLf6kJW_CM?rel=0&modestbranding=1"
                        title="Radon Mitigation System Animation"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p>This animation shows how sub-slab mitigation systems work to remove radon from your home.</p>
                  </div>
                  
                  <h3>Types of Mitigation Systems</h3>
                  
                  <div className="mitigation-systems-grid">
                    <div className="mitigation-system">
                      <h4>Sub-Slab Depressurization</h4>
                      <p>The most common and effective method for homes with basements or slab-on-grade foundations. A pipe system draws radon from beneath the foundation and vents it safely outside.</p>
                      <div className="system-features">
                        <ul>
                          <li>Most effective for basement homes</li>
                          <li>Reduces levels by 90%+ typically</li>
                          <li>Quiet operation</li>
                          <li>Minimal disruption to home</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mitigation-system">
                      <h4>Sump Pit System</h4>
                      <p>Utilizes existing sump pit for radon removal. The system draws radon through the sump pit and vents it outside through a dedicated fan system.</p>
                      <div className="system-features">
                        <ul>
                          <li>Uses existing sump pit</li>
                          <li>Cost-effective solution</li>
                          <li>Effective for many home types</li>
                          <li>Professional installation required</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mitigation-system">
                      <h4>Drain Tile System</h4>
                      <p>Utilizes existing perimeter drain system for radon removal. Effective for homes with existing drain tile around the foundation.</p>
                      <div className="system-features">
                        <ul>
                          <li>Works with existing drainage</li>
                          <li>Comprehensive coverage</li>
                          <li>Effective for older homes</li>
                          <li>Professional assessment needed</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mitigation-system">
                      <h4>Crawl Space Encapsulation</h4>
                      <p>For homes with crawl spaces, we seal and ventilate the space to prevent radon entry and ensure proper air circulation.</p>
                      <div className="system-features">
                        <ul>
                          <li>Complete space sealing</li>
                          <li>Moisture control included</li>
                          <li>Improves air quality</li>
                          <li>Energy efficiency benefits</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <h3>Festa Radon Fans - Industry Leading</h3>
                  <p>We exclusively use <a href="https://festaradontech.com" target="_blank" rel="noopener noreferrer">Festa Radon Technologies</a> fans, the industry leader in radon mitigation equipment:</p>
                  
                  <div className="festa-fans-section">
                    <div className="fan-model">
                      <h4>Maverick Eagle</h4>
                      <p>High-performance fan for standard applications with excellent reliability and quiet operation.</p>
                    </div>
                    <div className="fan-model">
                      <h4>Eagle Max</h4>
                      <p>Maximum power for challenging installations and high radon levels.</p>
                    </div>
                    <div className="fan-model">
                      <h4>Legends Series</h4>
                      <p>Premium fans with extended warranties and superior performance.</p>
                    </div>
                  </div>
                  
                  <h3>Our Installation Process</h3>
                  <div className="installation-process">
                    <div className="process-step">
                      <h4>1. Comprehensive Home Evaluation</h4>
                      <p>We assess your home's foundation, existing systems, and radon levels to design the perfect solution.</p>
                    </div>
                    <div className="process-step">
                      <h4>2. Custom System Design</h4>
                      <p>Every system is custom-designed for your specific home and radon levels.</p>
                    </div>
                    <div className="process-step">
                      <h4>3. Professional Installation</h4>
                      <p>Our certified technicians install your system with minimal disruption to your home.</p>
                    </div>
                    <div className="process-step">
                      <h4>4. Post-Installation Testing</h4>
                      <p>We test the system to ensure it's working properly and reducing radon levels.</p>
                    </div>
                    <div className="process-step">
                      <h4>5. System Performance Verification</h4>
                      <p>Follow-up testing confirms your radon levels are below EPA action levels.</p>
                    </div>
                  </div>
                  
                  <div className="cta-section">
                    <h3>Need Radon Mitigation?</h3>
                    <p>Contact us for a free consultation and estimate. Protect your family with professional radon mitigation.</p>
                    <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                      Get Free Estimate
                    </button>
                  </div>
                </div>
                
                <div className="content-sidebar">
                  <div className="info-box">
                    <h4>System Benefits</h4>
                    <ul>
                      <li>Reduces radon levels by 90%+</li>
                      <li>Professional installation</li>
                      <li>Quiet operation</li>
                      <li>Energy efficient</li>
                      <li>Increases home value</li>
                      <li>Protects family health</li>
                    </ul>
                  </div>
                  
                  <div className="info-box">
                    <h4>Quality Guarantee</h4>
                    <p>We guarantee our mitigation systems will reduce radon levels below 4 pCi/L or we'll modify the system at no additional cost.</p>
                  </div>
                  
                  <div className="info-box">
                    <h4>Trusted Resources</h4>
                    <ul>
                      <li><a href="https://www.radonaway.com/what-is-radon.php" target="_blank" rel="noopener noreferrer">RadonAway - What is Radon?</a></li>
                      <li><a href="https://festaradontech.com" target="_blank" rel="noopener noreferrer">Festa Radon Technologies</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Smart Home Page
    if (currentPage === 'smart-home') {
      return (
        <div className="service-page">
          <div className="page-header">
            <div className="container">
              <h1>Smart Home Automation</h1>
              <p>Complete Control4 home automation systems for modern living</p>
            </div>
          </div>
          
          <div className="page-content">
            <div className="container">
              <div className="content-grid">
                <div className="content-main">
                  <h2>Transform Your Home with Smart Technology</h2>
                  <p>Experience the ultimate in home automation with our professional Control4 systems. Control lighting, climate, entertainment, and security from anywhere in your home or around the world.</p>
                  
                  <h3>What is Smart Home Automation?</h3>
                  <p>Smart home automation allows you to control and monitor your home's systems remotely. Imagine adjusting your thermostat, turning on lights, or checking security cameras all from your smartphone or tablet.</p>
                  
                  <h3>Our Smart Home Solutions</h3>
                  <div className="smart-features">
                    <div className="feature-card">
                      <h4>Lighting Control</h4>
                      <p>Control every light in your home with scenes, schedules, and remote access.</p>
                    </div>
                    <div className="feature-card">
                      <h4>Climate Control</h4>
                      <p>Intelligent temperature control that learns your preferences and saves energy.</p>
                    </div>
                    <div className="feature-card">
                      <h4>Entertainment Systems</h4>
                      <p>Seamless audio and video distribution throughout your entire home.</p>
                    </div>
                    <div className="feature-card">
                      <h4>Security Integration</h4>
                      <p>Complete security system integration with cameras, alarms, and access control.</p>
                    </div>
                  </div>
                  
                  <div className="cta-section">
                    <h3>Ready to Automate Your Home?</h3>
                    <p>Contact us for a free consultation and see how smart home technology can enhance your lifestyle.</p>
                    <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                      Get Free Consultation
                    </button>
                  </div>
                </div>
                
                <div className="content-sidebar">
                  <div className="info-box">
                    <h4>Benefits</h4>
                    <ul>
                      <li>Increased convenience</li>
                      <li>Energy savings</li>
                      <li>Enhanced security</li>
                      <li>Increased home value</li>
                      <li>Remote monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Security Systems Page
    if (currentPage === 'security-systems') {
      return (
        <div className="service-page">
          <div className="page-header">
            <div className="container">
              <h1>Professional Security Systems</h1>
              <p>Complete security solutions for your home and family</p>
            </div>
          </div>
          
          <div className="page-content">
            <div className="container">
              <div className="content-grid">
                <div className="content-main">
                  <h2>Comprehensive Home Security</h2>
                  <p>Protect what matters most with our professional security system installation and monitoring services. Our systems provide 24/7 protection and peace of mind.</p>
                  
                  <div className="security-gallery">
                    <img src="Securityfront.jpg" alt="Security system front panel" className="security-image" />
                    <img src="SecurityBack.jpg" alt="Security system back panel" className="security-image" />
                  </div>
                  
                  <h3>Security Features</h3>
                  <ul>
                    <li>24/7 professional monitoring</li>
                    <li>Mobile app control</li>
                    <li>Door and window sensors</li>
                    <li>Motion detectors</li>
                    <li>Security cameras</li>
                    <li>Smart locks integration</li>
                  </ul>
                  
                  <div className="cta-section">
                    <h3>Secure Your Home Today</h3>
                    <p>Contact us for a free security assessment and custom quote.</p>
                    <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                      Get Free Assessment
                    </button>
                  </div>
                </div>
                
                <div className="content-sidebar">
                  <div className="info-box">
                    <h4>Why Choose Professional Security?</h4>
                    <ul>
                      <li>Professional installation</li>
                      <li>24/7 monitoring</li>
                      <li>Insurance discounts</li>
                      <li>Increased home value</li>
                      <li>Peace of mind</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Duct Cleaning/AeroSeal Page
    if (currentPage === 'duct-cleaning') {
      return (
        <div className="service-page">
          <div className="page-header">
            <div className="container">
              <h1>Duct Cleaning & AeroSeal Services</h1>
              <p>Professional duct cleaning and sealing for improved air quality and energy efficiency</p>
            </div>
          </div>
          
          <div className="page-content">
            <div className="container">
              <div className="content-grid">
                <div className="content-main">
                  <h2>Professional Duct Cleaning & AeroSeal</h2>
                  <p>Improve your home's air quality and energy efficiency with our comprehensive duct cleaning and AeroSeal duct sealing services. Our certified technicians use state-of-the-art equipment to clean and seal your ductwork for optimal performance.</p>
                  
                  <h3>Duct Cleaning Services</h3>
                  <p>Over time, dust, debris, and contaminants build up in your ductwork, reducing air quality and system efficiency. Our thorough duct cleaning process removes these contaminants, improving your indoor air quality and helping your HVAC system run more efficiently.</p>
                  
                  <div className="service-benefits">
                    <h4>Benefits of Professional Duct Cleaning:</h4>
                    <ul>
                      <li>Improved indoor air quality</li>
                      <li>Reduced allergens and dust</li>
                      <li>Better HVAC system efficiency</li>
                      <li>Extended equipment life</li>
                      <li>Reduced energy costs</li>
                      <li>Elimination of odors</li>
                    </ul>
                  </div>
                  
                  <h3>AeroSeal Duct Sealing</h3>
                  <p>AeroSeal is a revolutionary duct sealing technology that seals leaks from the inside out. This patented process can seal up to 90% of duct leaks, dramatically improving your home's energy efficiency and comfort.</p>
                  
                  <div className="aeroseal-process">
                    <h4>How AeroSeal Works:</h4>
                    <div className="process-steps">
                      <div className="process-step">
                        <div className="step-number">1</div>
                        <h5>System Preparation</h5>
                        <p>We prepare your duct system and measure existing leakage</p>
                      </div>
                      <div className="process-step">
                        <div className="step-number">2</div>
                        <h5>Sealant Application</h5>
                        <p>Safe, non-toxic sealant is blown through your ducts</p>
                      </div>
                      <div className="process-step">
                        <div className="step-number">3</div>
                        <h5>Automatic Sealing</h5>
                        <p>Sealant finds and seals leaks automatically</p>
                      </div>
                      <div className="process-step">
                        <div className="step-number">4</div>
                        <h5>Verification</h5>
                        <p>We verify the sealing results and provide documentation</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3>AeroSeal Benefits</h3>
                  <div className="aeroseal-benefits">
                    <div className="benefit-card">
                      <h4>Energy Savings</h4>
                      <p>Reduce energy costs by up to 30% with properly sealed ducts</p>
                    </div>
                    <div className="benefit-card">
                      <h4>Improved Comfort</h4>
                      <p>Eliminate hot and cold spots throughout your home</p>
                    </div>
                    <div className="benefit-card">
                      <h4>Better Air Quality</h4>
                      <p>Prevent dust and contaminants from entering your ductwork</p>
                    </div>
                    <div className="benefit-card">
                      <h4>Proven Results</h4>
                      <p>Real-time measurement shows exactly how much leakage was sealed</p>
                    </div>
                  </div>
                  
                  <div className="cta-section">
                    <h3>Ready to Improve Your Air Quality?</h3>
                    <p>Contact us today for a free consultation and estimate on duct cleaning and AeroSeal services.</p>
                    <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                      Get Free Estimate
                    </button>
                  </div>
                </div>
                
                <div className="content-sidebar">
                  <div className="info-box">
                    <h4>Service Benefits</h4>
                    <ul>
                      <li>Improved air quality</li>
                      <li>Energy savings up to 30%</li>
                      <li>Better HVAC performance</li>
                      <li>Reduced allergens</li>
                      <li>Proven technology</li>
                      <li>Professional installation</li>
                    </ul>
                  </div>
                  
                  <div className="info-box">
                    <h4>AeroSeal Technology</h4>
                    <img src="aeroseal-logo.png" alt="AeroSeal technology" className="sidebar-image" />
                    <p>AeroSeal is the industry-leading duct sealing technology, proven to seal up to 90% of duct leaks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Floor Coatings Page
    if (currentPage === 'floor-coatings') {
      return (
        <div className="service-page">
          <div className="page-header">
            <div className="container">
              <h1>Concrete Floor Coatings</h1>
              <p>Premium Torginol floor coatings with lifetime warranty</p>
            </div>
          </div>
          
          <div className="page-content">
            <div className="container">
              <div className="content-grid">
                <div className="content-main">
                  <h2>Premium Concrete Floor Coatings</h2>
                  <p>Transform your concrete floors with our premium Torginol coating systems. Our polyaspartic topcoat technology provides superior durability, chemical resistance, and a beautiful finish that will last a lifetime.</p>
                  
                  <h3>Why Choose Polyaspartic Over Epoxy?</h3>
                  <p>While traditional epoxy coatings have been popular, polyaspartic technology represents the next generation of floor coatings. Unlike old epoxy systems, our polyaspartic topcoat provides superior performance and longevity.</p>
                  
                  <div className="coating-comparison">
                    <div className="comparison-grid">
                      <div className="comparison-card polyaspartic">
                        <h4>Polyaspartic (Our System)</h4>
                        <ul>
                          <li>UV stable - won't yellow</li>
                          <li>Faster cure time (1 day)</li>
                          <li>Superior chemical resistance</li>
                          <li>Flexible - resists cracking</li>
                          <li>Temperature tolerant</li>
                          <li>Lifetime warranty</li>
                        </ul>
                      </div>
                      <div className="comparison-card epoxy">
                        <h4>Traditional Epoxy</h4>
                        <ul>
                          <li>Yellows over time</li>
                          <li>Longer cure time (3-5 days)</li>
                          <li>Limited chemical resistance</li>
                          <li>Brittle - can crack</li>
                          <li>Temperature sensitive</li>
                          <li>Limited warranty</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <h3>Our Installation Process</h3>
                  <p>Proper preparation is key to a long-lasting floor coating. We take 2-3 days to ensure proper prep of the floor, including the first coat of base material and flakes that need time to adhere to the concrete before adding the polyaspartic topcoat.</p>
                  
                  <div className="installation-timeline">
                    <div className="timeline-step">
                      <h4>Day 1: Surface Preparation</h4>
                      <p>Diamond grinding and crack repair to ensure proper adhesion</p>
                    </div>
                    <div className="timeline-step">
                      <h4>Day 2: Base Coat & Flakes</h4>
                      <p>Application of base coat and decorative flakes with proper cure time</p>
                    </div>
                    <div className="timeline-step">
                      <h4>Day 3: Polyaspartic Topcoat</h4>
                      <p>Final polyaspartic topcoat application for ultimate protection</p>
                    </div>
                  </div>
                  
                  <h3>Color Options & Customization</h3>
                  <p>Choose from a wide variety of color flakes and solid colors to create the perfect look for your space. Our design team will help you select the ideal combination to complement your home or business.</p>
                  
                  <div className="color-gallery">
                    <img src="concrete-coatings-professional.jpg" alt="Professional concrete coating installation" className="gallery-image" />
                  </div>
                  
                  <h3>Applications</h3>
                  <div className="applications-grid">
                    <div className="application-card">
                      <h4>Garage Floors</h4>
                      <p>Protect your garage floor from oil stains, chemicals, and wear</p>
                    </div>
                    <div className="application-card">
                      <h4>Basement Floors</h4>
                      <p>Transform damp basements into beautiful, functional spaces</p>
                    </div>
                    <div className="application-card">
                      <h4>Commercial Spaces</h4>
                      <p>Durable flooring solutions for retail, warehouse, and office spaces</p>
                    </div>
                    <div className="application-card">
                      <h4>Outdoor Patios</h4>
                      <p>Weather-resistant coatings for outdoor concrete surfaces</p>
                    </div>
                  </div>
                  
                  <div className="cta-section">
                    <h3>Ready to Transform Your Floors?</h3>
                    <p>Contact us today for a free estimate on your concrete floor coating project.</p>
                    <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                      Get Free Estimate
                    </button>
                  </div>
                </div>
                
                <div className="content-sidebar">
                  <div className="info-box">
                    <h4>Coating Benefits</h4>
                    <ul>
                      <li>Lifetime warranty</li>
                      <li>Chemical resistant</li>
                      <li>Easy to clean</li>
                      <li>Slip resistant options</li>
                      <li>UV stable</li>
                      <li>Fast installation</li>
                    </ul>
                  </div>
                  
                  <div className="info-box">
                    <h4>Maintenance</h4>
                    <p>Our polyaspartic coatings require minimal maintenance. Simply sweep and mop as needed to keep your floors looking like new.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (currentPage === 'control4') {
      return (
        <div className="service-page">
          <div className="page-header">
            <div className="container">
              <h1>Control4 Integration</h1>
              <p>Advanced Control4 integration for seamless home automation</p>
            </div>
          </div>
          
          <div className="page-content">
            <div className="container">
              <div className="content-grid">
                <div className="content-main">
                  <h2>Professional Control4 Systems</h2>
                  <p>Control4 is the leading home automation platform, providing seamless integration of all your home's systems. From lighting and climate to entertainment and security, Control4 brings everything together in one easy-to-use interface.</p>
                  
                  <h3>What Makes Control4 Special?</h3>
                  <ul>
                    <li>Single interface for all home systems</li>
                    <li>Professional installation and programming</li>
                    <li>Scalable system that grows with your needs</li>
                    <li>Works with thousands of devices</li>
                    <li>Reliable and secure platform</li>
                  </ul>
                  
                  <div className="cta-section">
                    <h3>Experience Control4</h3>
                    <p>Schedule a demonstration to see how Control4 can transform your home.</p>
                    <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                      Schedule Demo
                    </button>
                  </div>
                </div>
                
                <div className="content-sidebar">
                  <div className="info-box">
                    <h4>Control4 Benefits</h4>
                    <ul>
                      <li>One app controls everything</li>
                      <li>Professional support</li>
                      <li>Reliable performance</li>
                      <li>Future-proof technology</li>
                      <li>Increased home value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Financing Page - RESTORED
    if (currentPage === 'financing') {
      return (
        <div className="financing-page">
          <div className="page-header">
            <div className="container">
              <h1>Financing Options</h1>
              <p>Flexible financing solutions to fit your budget</p>
            </div>
          </div>
          
          <div className="financing-content">
            <div className="container">
              <div className="financing-hero">
                <h2>As Low as 0% Financing Available</h2>
                <p>Make your home improvement dreams a reality with our flexible financing options.</p>
                <a 
                  href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="financing-cta"
                >
                  Apply for Financing
                </a>
              </div>
              
              <div className="financing-options">
                <div className="financing-card">
                  <h3>0% Interest Options</h3>
                  <p>Qualified buyers can take advantage of promotional 0% interest financing for up to 12 months.</p>
                  <ul>
                    <li>No interest if paid in full within promotional period</li>
                    <li>Quick approval process</li>
                    <li>No prepayment penalties</li>
                  </ul>
                </div>
                
                <div className="financing-card">
                  <h3>Extended Payment Plans</h3>
                  <p>Longer-term financing options with competitive rates for larger projects.</p>
                  <ul>
                    <li>Terms up to 60 months</li>
                    <li>Fixed monthly payments</li>
                    <li>Competitive interest rates</li>
                  </ul>
                </div>
              </div>
              
              <div className="financing-benefits">
                <h3>Financing Benefits</h3>
                <ul>
                  <li>Quick and easy application process</li>
                  <li>Competitive interest rates</li>
                  <li>Flexible payment terms</li>
                  <li>No prepayment penalties</li>
                  <li>Same-day approval available</li>
                  <li>Start your project immediately</li>
                </ul>
              </div>
              
              <div className="financing-cta-section">
                <h3>Ready to Get Started?</h3>
                <p>Apply for financing today and start your home improvement project right away.</p>
                <a 
                  href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="financing-link"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Contact Page
    if (currentPage === 'contact') {
      return (
        <div className="contact-page">
          <div className="page-header">
            <div className="container">
              <h1>Contact Us</h1>
              <p>Get in touch for your free consultation and estimate</p>
            </div>
          </div>
          
          <div className="contact-content">
            <div className="container">
              <div className="contact-grid">
                <div className="contact-info">
                  <div className="contact-card">
                    <h3>Phone</h3>
                    <p className="contact-phone">(262) 955-5701</p>
                  </div>
                  
                  <div className="contact-card">
                    <h3>Address</h3>
                    <p>3485 N. 124th St.<br />Brookfield, WI 53005</p>
                    <a 
                      href="https://maps.google.com/?q=3485+N.+124th+St.+Brookfield+WI+53005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="directions-link"
                    >
                      Get Directions
                    </a>
                  </div>
                  
                  <div className="contact-card">
                    <h3>Business Hours</h3>
          <p>Monday - Friday: 8:00 AM - 5:00 PM<br />
             Saturday: 9:00 AM - 3:00 PM<br />
             Sunday: Closed</p>
                  </div>
                  
                  <div className="google-map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1234567890123!2d-88.1234567!3d43.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA3JzI0LjQiTiA4OMKwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{border: 0}}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lifetime Home Services Location"
                    ></iframe>
                  </div>
                </div>
                
                <div className="contact-form">
                  <h3>Request Free Estimate</h3>
                  <form className="estimate-form">
                    <div className="form-row">
                      <input type="text" placeholder="First Name" required />
                      <input type="text" placeholder="Last Name" required />
                    </div>
                    <div className="form-row">
                      <input type="email" placeholder="Email" required />
                      <input type="tel" placeholder="Phone" required />
                    </div>
                    <input type="text" placeholder="Address" required />
                    <select required>
                      <option value="">Select Service</option>
                      {brandConfig[currentBrand].services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    <textarea placeholder="Additional Details" rows="4"></textarea>
                    <button type="submit" className="submit-button">Send Request</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // State Pages
    if (['wisconsin', 'illinois', 'minnesota', 'colorado'].includes(currentPage)) {
      const stateName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
      const services = stateServices[currentPage] || [];
      const zipCodes = stateZipCodes[currentPage] || { preview: [], full: [] };
      const areaCodes = areaCodesByState[currentPage] || [];
      
      return (
        <div className="state-page">
          <div className="state-header">
            <div className="container">
              <h1>{stateName} Service Area</h1>
              <p>Professional services throughout {stateName}</p>
            </div>
          </div>
          
          <div className="state-content">
            <div className="container">
              <div className="services-available">
                <h2>Services Available in {stateName}</h2>
                <div className="state-services-grid">
                  {services.map((service, index) => (
                    <div key={index} className="state-service-card">
                      <h3>{service}</h3>
                      <p>Professional {service.toLowerCase()} services available throughout {stateName}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="service-areas">
                <h2>Zip Codes We Service</h2>
                <div className="zip-codes-display">
                  <div className="zip-codes-grid">
                    {(showZipCodes[currentPage] ? zipCodes.full : zipCodes.preview).map((zip, index) => (
                      <span key={index} className="zip-code">{zip}</span>
                    ))}
                  </div>
                  {!showZipCodes[currentPage] && zipCodes.full.length > zipCodes.preview.length && (
                    <button 
                      className="show-more-zips"
                      onClick={() => toggleZipCodes(currentPage)}
                    >
                      Show All Zip Codes ({zipCodes.full.length} total)
                    </button>
                  )}
                </div>
                
                <div className="area-codes">
                  <h3>Area Codes Served</h3>
                  <div className="area-codes-list">
                    {areaCodes.map((code, index) => (
                      <span key={index} className="area-code">({code})</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Closet Concepts Main Page
    if (currentPage === 'closet-concepts') {
      return (
        <div className="brand-page closet-concepts-page">
          <div className="brand-hero">
            <div className="container">
              <div className="hero-content">
                <img src="ClosetConcepts_Logo.jpg" alt="Closet Concepts" className="brand-logo" />
                <h1>Custom Storage Solutions</h1>
                <p>Premium Wisconsin-made closets and organization systems since 1987</p>
                <div className="hero-buttons">
                  <button className="cta-button primary large" onClick={() => navigateToPage('contact')}>
                    Get Free Design Consultation
                  </button>
                  <button className="cta-button secondary large" onClick={() => navigateToPage('custom-closets')}>
                    View Our Work
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="services-section">
            <div className="container">
              <h2>Our Storage Solutions</h2>
              <div className="services-grid">
                <div className="service-card" onClick={() => navigateToPage('custom-closets')}>
                  <img src="Closet5.jpg" alt="Custom Closets" />
                  <h3>Custom Closets</h3>
                  <p>Maximize your closet space with custom-designed storage solutions</p>
                </div>
                <div className="service-card" onClick={() => navigateToPage('garage-storage')}>
                  <img src="Garage1.jpg" alt="Garage Storage" />
                  <h3>Garage Storage</h3>
                  <p>Transform your garage into an organized, functional space</p>
                </div>
                <div className="service-card" onClick={() => navigateToPage('home-office')}>
                  <img src="HomeOffice4.jpg" alt="Home Office" />
                  <h3>Home Office</h3>
                  <p>Built-in office solutions for productivity and organization</p>
                </div>
                <div className="service-card" onClick={() => navigateToPage('pantry-systems')}>
                  <img src="Pantry1.jpeg" alt="Pantry Systems" />
                  <h3>Pantry Systems</h3>
                  <p>Custom pantry organization for maximum efficiency</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="why-choose-section">
            <div className="container">
              <h2>Why Choose Closet Concepts?</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <h3>Wisconsin Made</h3>
                  <p>All products manufactured in Wisconsin with premium materials</p>
                </div>
                <div className="feature-card">
                  <h3>Custom Design</h3>
                  <p>Every system is designed specifically for your space and needs</p>
                </div>
                <div className="feature-card">
                  <h3>Professional Installation</h3>
                  <p>Expert installation by our certified technicians</p>
                </div>
                <div className="feature-card">
                  <h3>Lifetime Quality</h3>
                  <p>Built to last with premium hardware and finishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Custom Closets Page
    if (currentPage === 'custom-closets') {
      return (
        <div className="service-page">
          <div className="page-header">
            <div className="container">
              <h1>Custom Closets</h1>
              <p>Maximize your storage with custom-designed closet solutions</p>
            </div>
          </div>
          
          <div className="page-content">
            <div className="container">
              <div className="content-grid">
                <div className="content-main">
                  <h2>Custom Closet Design & Installation</h2>
                  <p>Transform your closet into an organized, efficient space with our custom closet systems. Every closet is designed specifically for your needs, space, and lifestyle.</p>
                  
                  <div className="closet-gallery">
                    <div className="gallery-grid">
                      <img src="Closet5.jpg" alt="Walk-in closet with custom shelving" />
                      <img src="Closet3.jpg" alt="Organized closet with drawers" />
                      <img src="ReachinCloset1.jpg" alt="Reach-in closet organization" />
                    </div>
                  </div>
                  
                  <h3>Closet Types</h3>
                  <div className="closet-types">
                    <div className="type-card">
                      <h4>Walk-In Closets</h4>
                      <p>Maximize your walk-in closet with custom shelving, drawers, and hanging solutions</p>
                    </div>
                    <div className="type-card">
                      <h4>Reach-In Closets</h4>
                      <p>Double your storage capacity in standard reach-in closets</p>
                    </div>
                    <div className="type-card">
                      <h4>Master Suites</h4>
                      <p>Luxury closet systems for master bedroom suites</p>
                    </div>
                    <div className="type-card">
                      <h4>Kids' Closets</h4>
                      <p>Adjustable systems that grow with your children</p>
                    </div>
                  </div>
                  
                  <h3>Design Process</h3>
                  <div className="process-steps">
                    <div className="process-step">
                      <div className="step-number">1</div>
                      <h4>Free Consultation</h4>
                      <p>We visit your home to assess your space and discuss your needs</p>
                    </div>
                    <div className="process-step">
                      <div className="step-number">2</div>
                      <h4>Custom Design</h4>
                      <p>Our designers create a 3D rendering of your new closet</p>
                    </div>
                    <div className="process-step">
                      <div className="step-number">3</div>
                      <h4>Manufacturing</h4>
                      <p>Your closet is built to order in our Wisconsin facility</p>
                    </div>
                    <div className="process-step">
                      <div className="step-number">4</div>
                      <h4>Professional Installation</h4>
                      <p>Expert installation by our certified technicians</p>
                    </div>
                  </div>
                </div>
                
                <div className="content-sidebar">
                  <div className="info-box">
                    <h4>Features</h4>
                    <ul>
                      <li>Custom shelving</li>
                      <li>Soft-close drawers</li>
                      <li>Adjustable hanging rods</li>
                      <li>LED lighting options</li>
                      <li>Premium finishes</li>
                      <li>Lifetime warranty</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Garage Storage Page
    if (currentPage === 'garage-storage') {
      return (
        <div className="service-page">
          <div className="page-header">
            <div className="container">
              <h1>Garage Storage Systems</h1>
              <p>Transform your garage into an organized, functional space</p>
            </div>
          </div>
          
          <div className="page-content">
            <div className="container">
              <div className="content-grid">
                <div className="content-main">
                  <h2>Custom Garage Organization</h2>
                  <p>Reclaim your garage space with our custom storage solutions. From wall systems to overhead storage, we'll help you organize everything from tools to seasonal items.</p>
                  
                  <div className="garage-gallery">
                    <div className="gallery-grid">
                      <img src="Garage1.jpg" alt="Organized garage with wall storage" />
                      <img src="Garage2.jpg" alt="Garage storage system with cabinets" />
                    </div>
                  </div>
                  
                  <h3>Storage Solutions</h3>
                  <div className="storage-solutions">
                    <div className="solution-card">
                      <h4>Wall Storage Systems</h4>
                      <p>Maximize wall space with slatwall and hook systems</p>
                    </div>
                    <div className="solution-card">
                      <h4>Overhead Storage</h4>
                      <p>Utilize ceiling space for seasonal and bulk items</p>
                    </div>
                    <div className="solution-card">
                      <h4>Garage Cabinets</h4>
                      <p>Secure storage for tools, chemicals, and valuables</p>
                    </div>
                    <div className="solution-card">
                      <h4>Workbenches</h4>
                      <p>Custom workstations for projects and repairs</p>
                    </div>
                  </div>
                </div>
                
                <div className="content-sidebar">
                  <div className="info-box">
                    <h4>Benefits</h4>
                    <ul>
                      <li>Maximize floor space</li>
                      <li>Easy access to items</li>
                      <li>Weather-resistant materials</li>
                      <li>Custom configurations</li>
                      <li>Professional installation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Home Office Page
    if (currentPage === 'home-office') {
      return (
        <div className="service-page">
          <div className="page-header">
            <div className="container">
              <h1>Home Office Solutions</h1>
              <p>Built-in office systems for productivity and organization</p>
            </div>
          </div>
          
          <div className="page-content">
            <div className="container">
              <div className="content-grid">
                <div className="content-main">
                  <h2>Custom Home Office Design</h2>
                  <p>Create the perfect workspace with our custom home office solutions. From built-in desks to storage systems, we'll design an office that maximizes productivity and organization.</p>
                  
                  <div className="office-gallery">
                    <div className="gallery-grid">
                      <img src="HomeOffice2.png" alt="Built-in home office desk" />
                      <img src="HomeOffice4.jpg" alt="Custom office storage" />
                      <img src="HomeOffice5.jpg" alt="Home office organization" />
                    </div>
                  </div>
                  
                  <h3>Office Features</h3>
                  <div className="office-features">
                    <div className="feature-card">
                      <h4>Built-In Desks</h4>
                      <p>Custom desks designed for your space and work style</p>
                    </div>
                    <div className="feature-card">
                      <h4>Storage Solutions</h4>
                      <p>File storage, bookshelves, and organization systems</p>
                    </div>
                    <div className="feature-card">
                      <h4>Cable Management</h4>
                      <p>Integrated solutions for clean, organized technology</p>
                    </div>
                    <div className="feature-card">
                      <h4>Lighting Integration</h4>
                      <p>Built-in lighting for optimal work conditions</p>
                    </div>
                  </div>
                </div>
                
                <div className="content-sidebar">
                  <div className="info-box">
                    <h4>Design Options</h4>
                    <ul>
                      <li>Standing desk options</li>
                      <li>Multiple monitor setups</li>
                      <li>Printer storage</li>
                      <li>Reference material storage</li>
                      <li>Personal item display</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Pantry Systems Page
    if (currentPage === 'pantry-systems') {
      return (
        <div className="service-page">
          <div className="page-header">
            <div className="container">
              <h1>Pantry Organization Systems</h1>
              <p>Custom pantry solutions for maximum efficiency and organization</p>
            </div>
          </div>
          
          <div className="page-content">
            <div className="container">
              <div className="content-grid">
                <div className="content-main">
                  <h2>Custom Pantry Design</h2>
                  <p>Transform your pantry into an organized, efficient space with our custom storage solutions. From adjustable shelving to specialized storage for different food types, we'll maximize every inch of your pantry.</p>
                  
                  <div className="pantry-gallery">
                    <img src="Pantry1.jpeg" alt="Organized pantry with custom shelving" className="gallery-image" />
                  </div>
                  
                  <h3>Pantry Solutions</h3>
                  <div className="pantry-solutions">
                    <div className="solution-card">
                      <h4>Adjustable Shelving</h4>
                      <p>Flexible shelving that adapts to your storage needs</p>
                    </div>
                    <div className="solution-card">
                      <h4>Pull-Out Drawers</h4>
                      <p>Easy access to items in deep pantry spaces</p>
                    </div>
                    <div className="solution-card">
                      <h4>Specialized Storage</h4>
                      <p>Custom solutions for spices, cans, and bulk items</p>
                    </div>
                    <div className="solution-card">
                      <h4>Door Storage</h4>
                      <p>Maximize door space with specialized racks and holders</p>
                    </div>
                  </div>
                </div>
                
                <div className="content-sidebar">
                  <div className="info-box">
                    <h4>Benefits</h4>
                    <ul>
                      <li>Easy inventory management</li>
                      <li>Reduced food waste</li>
                      <li>Quick meal preparation</li>
                      <li>Maximized storage space</li>
                      <li>Clean, organized appearance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default page content
    return (
      <div className="page-content">
        <div className="container">
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <button onClick={() => navigateToPage('home')} className="cta-button primary">
            Return Home
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`app ${currentBrand}`}>
      {renderHeader()}
      <main className="main-content">
        {renderPageContent()}
      </main>
      {renderFooter()}
    </div>
  );
}

export default App;

