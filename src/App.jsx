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
      tagline: 'Lifetime Home Solutions. Trusted Solutions. Lifetime Results.',
      services: ['Radon Testing', 'Radon Mitigation', 'Duct Cleaning/AeroSeal', 'Concrete Floor Coatings']
    },
    aih: {
      name: 'America In-Home',
      logo: 'AmericaIn-HomeLogo.jpg',
      heroImage: 'america-smart-home-hero.jpg',
      tagline: 'Smart Home Technology. Professional Installation. Lifetime Support.',
      services: ['Smart Home Automation', 'Security Systems', 'Control4 Integration']
    },
    closets: {
      name: 'Closet Concepts',
      logo: 'ClosetConcepts_Logo.jpg',
      heroImage: 'closets-luxury-hero.jpg',
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
          <div className="phone">262-955-5701</div>
        </div>
      </div>
    </header>
  );

  const renderHeroSection = () => {
    if (currentBrand === 'closets' && currentPage === 'home') {
      // Video hero for Closet Concepts
      return (
        <section className="hero-section-video">
          <div className="hero-video-container">
            <iframe
              src="https://www.youtube.com/embed/F-cmkRASFhQ?autoplay=1&mute=1&loop=1&playlist=F-cmkRASFhQ&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="Closet Concepts Manufacturing"
              className="hero-video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <div className="hero-content-overlay">
              <div className="hero-text-content">
                <h1 className="hero-title-large">{brandConfig[currentBrand].tagline}</h1>
                <p className="hero-subtitle-large">USA Made. Premium Quality. Lifetime Organization.</p>
                <div className="hero-cta-buttons">
                  <button className="cta-button primary large with-border" onClick={() => navigateToPage('contact')}>
                    Get Free Estimate
                  </button>
                  <button className="cta-button secondary large" onClick={() => navigateToPage('custom-closets')}>
                    Learn About Testing First
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

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
            <h1 className="hero-title-large">{brandConfig[currentBrand].tagline}</h1>
            <p className="hero-subtitle-large">
              {currentBrand === 'lifetime' && 'Professional radon services, floor coatings, and duct cleaning with lifetime warranties.'}
              {currentBrand === 'aih' && 'Complete smart home automation and security solutions for modern living.'}
              {currentBrand === 'closets' && 'Custom storage solutions designed and manufactured in Wisconsin.'}
            </p>
            <div className="hero-cta-buttons">
              <button className="cta-button primary large with-border" onClick={() => navigateToPage('contact')}>
                Get Free Estimate
              </button>
              <button className="cta-button secondary large" onClick={() => navigateToPage(currentBrand === 'lifetime' ? 'radon-testing' : currentBrand === 'aih' ? 'smart-home' : 'custom-closets')}>
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
          description: 'Premium Torginol epoxy floor coatings with lifetime warranties.',
          image: 'professional-floor-coating.jpg',
          page: 'floor-coatings'
        }
      ],
      aih: [
        {
          title: 'Smart Home Automation',
          description: 'Complete home automation systems for lighting, climate, and entertainment.',
          image: 'america-smart-home-hero.jpg',
          page: 'smart-home'
        },
        {
          title: 'Security Systems',
          description: 'Advanced security systems with 24/7 monitoring and mobile access.',
          image: 'security-system-installation.jpg',
          page: 'security-systems'
        },
        {
          title: 'Control4 Integration',
          description: 'Professional Control4 smart home integration and programming.',
          image: 'control4-smart-home.jpg',
          page: 'control4'
        }
      ],
      closets: [
        {
          title: 'Custom Closets',
          description: 'Luxury custom closets designed and manufactured in Wisconsin.',
          image: 'Closet5.jpg',
          page: 'custom-closets'
        },
        {
          title: 'Garage Storage',
          description: 'Complete garage organization systems with premium materials.',
          image: 'Garage1.jpg',
          page: 'garage-storage'
        },
        {
          title: 'Home Office Organization',
          description: 'Professional home office storage and organization solutions.',
          image: 'HomeOffice4.jpg',
          page: 'home-office'
        },
        {
          title: 'Pantry Systems',
          description: 'Custom pantry organization with adjustable shelving and accessories.',
          image: 'Pantry1.jpeg',
          page: 'pantry-systems'
        }
      ]
    };

    return (
      <section className="services-section">
        <div className="container">
          <div className="section-background-logo"></div>
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid-2x2">
            {services[currentBrand].map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button 
                    className="learn-more-btn"
                    onClick={() => navigateToPage(service.page)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderGoogleReviewsSection = () => (
    <section className="google-reviews-section">
      <div className="container">
        <div className="section-background-logo"></div>
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="reviews-carousel">
          {getCurrentReviews().map((review, index) => (
            <div key={index} className="review-card">
              <div className="stars">{'★'.repeat(review.stars)}</div>
              <p>"{review.text}"</p>
              <div className="reviewer">- {review.author}</div>
            </div>
          ))}
        </div>
        <div className="google-reviews-link">
          <a 
            href="https://www.google.com/search?q=Lifetime+Home+Services+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button primary"
          >
            Read All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );

  const renderVideoSection = () => {
    if (currentBrand === 'aih') {
      return (
        <section className="video-showcase-section">
          <div className="container">
            <h2 className="section-title">See Our Work in Action</h2>
            <div className="video-grid">
              <div className="video-item">
                <iframe
                  src="https://www.youtube.com/embed/46YkzyAUCR8"
                  title="America In-Home 25 Second Spot"
                  className="showcase-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h3>Professional Installation</h3>
              </div>
              <div className="video-item">
                <iframe
                  src="https://www.youtube.com/embed/v8mkx8DbJg0"
                  title="America In-Home Web Banner"
                  className="showcase-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h3>Smart Home Solutions</h3>
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (currentBrand === 'closets') {
      return (
        <section className="video-showcase-section">
          <div className="container">
            <h2 className="section-title">USA Manufacturing & Installation</h2>
            <div className="video-grid">
              <div className="video-item">
                <iframe
                  src="https://www.youtube.com/embed/z1FnqXO_6h8"
                  title="Closet Installation Time-lapse"
                  className="showcase-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h3>Professional Installation</h3>
              </div>
              <div className="video-item">
                <iframe
                  src="https://www.youtube.com/embed/F-cmkRASFhQ"
                  title="Manufacturing Process"
                  className="showcase-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h3>USA Manufacturing</h3>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return null;
  };

  const renderHomePage = () => (
    <div className="App" data-brand={currentBrand}>
      {renderHeader()}
      {renderHeroSection()}
      {renderServicesSection()}
      {renderVideoSection()}
      {renderGoogleReviewsSection()}
      {renderFooter()}
    </div>
  );

  const renderContactPage = () => (
    <div className="App" data-brand={currentBrand}>
      {renderHeader()}
      <div className="contact-page">
        <div className="container">
          <div className="contact-header">
            <h1>Contact {brandConfig[currentBrand].name}</h1>
            <p>Get your free estimate today!</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info-section">
              <h2>Get In Touch</h2>
              <div className="contact-details-line">
                <div className="contact-item">
                  <strong>Phone:</strong> 262-955-5701
                </div>
                <div className="contact-item">
                  <strong>Address:</strong> 3485 N. 124th St. Brookfield, WI 53005
                </div>
                <div className="contact-item">
                  <strong>Hours:</strong> Monday - Friday: 8:00 AM - 6:00 PM
                </div>
              </div>
              
              <div className="google-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1234567890123!2d-88.1234567!3d43.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3485+N+124th+St%2C+Brookfield%2C+WI+53005!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lifetime Home Services Location"
                ></iframe>
              </div>
            </div>
            
            <div className="contact-form-section">
              <h2>Request Free Estimate</h2>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="address">Property Address</label>
                  <input type="text" id="address" name="address" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" name="service">
                    <option value="">Select a service</option>
                    {brandConfig[currentBrand].services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4"></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  const renderFinancingPage = () => (
    <div className="App" data-brand={currentBrand}>
      {renderHeader()}
      <div className="financing-page">
        <div className="container">
          <div className="financing-header">
            <h1>Financing Options</h1>
            <p>Make your home improvement dreams affordable with our financing solutions</p>
          </div>
          
          <div className="financing-highlight">
            <h2>As Low as 0% Financing Available</h2>
            <p>Qualified customers can take advantage of promotional financing options</p>
          </div>
          
          <div className="financing-options">
            <div className="financing-card">
              <h3>Synchrony Financing</h3>
              <p>Our primary financing partner offers flexible payment options for all our services.</p>
              <ul>
                <li>Quick online application</li>
                <li>Instant credit decisions</li>
                <li>Promotional financing available</li>
                <li>No prepayment penalties</li>
              </ul>
              <a 
                href="https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="financing-link"
              >
                Apply Now with Synchrony
              </a>
            </div>
            
            <div className="financing-card">
              <h3>Cash Payment Discount</h3>
              <p>Save money with our cash payment options and early payment discounts.</p>
              <ul>
                <li>Immediate project start</li>
                <li>No interest charges</li>
                <li>Potential cash discounts</li>
                <li>Simplified paperwork</li>
              </ul>
              <button 
                className="financing-link"
                onClick={() => navigateToPage('contact')}
              >
                Contact for Cash Pricing
              </button>
            </div>
          </div>
          
          <div className="financing-cta">
            <h3>Ready to Get Started?</h3>
            <p>Contact us today to discuss financing options for your project</p>
            <button 
              className="cta-button primary large"
              onClick={() => navigateToPage('contact')}
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  const renderStatePage = (state) => {
    const stateNames = {
      wisconsin: 'Wisconsin',
      illinois: 'Illinois', 
      minnesota: 'Minnesota',
      colorado: 'Colorado'
    };

    return (
      <div className="App" data-brand={currentBrand}>
        {renderHeader()}
        <div className="state-page">
          <div className={`state-background ${state}-silhouette`}></div>
          <div className="container">
            <div className="state-content">
              <div className="state-header">
                <h1>Service Areas in {stateNames[state]}</h1>
                <p>Professional home services throughout {stateNames[state]}</p>
              </div>
              
              <div className="services-offered">
                <h2>Services Available in {stateNames[state]}</h2>
                <div className="service-list">
                  {stateServices[state].map((service, index) => (
                    <div key={index} className="service-item">
                      <h3>{service}</h3>
                      <button 
                        className="learn-more-btn"
                        onClick={() => {
                          const servicePages = {
                            'Radon Testing': 'radon-testing',
                            'Radon Mitigation': 'radon-mitigation',
                            'Duct Cleaning/AeroSeal': 'duct-cleaning',
                            'Concrete Floor Coatings': 'floor-coatings',
                            'Custom Closets': 'custom-closets',
                            'Smart Home Automation': 'smart-home',
                            'Security Systems': 'security-systems'
                          };
                          navigateToPage(servicePages[service] || 'contact');
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="coverage-areas">
                <h2>Coverage Areas</h2>
                
                <div className="area-codes-section">
                  <h3>Area Codes Served</h3>
                  <div className="area-codes">
                    {areaCodesByState[state].map((code, index) => (
                      <span key={index} className="area-code">{code}</span>
                    ))}
                  </div>
                </div>
                
                <div className="zip-codes-section">
                  <h3>Zip Codes Served</h3>
                  <div className="zip-codes-container">
                    <div className="zip-codes-preview">
                      {stateZipCodes[state].preview.map((code, index) => (
                        <span key={index} className="zip-code">{code}</span>
                      ))}
                    </div>
                    
                    {!showZipCodes[state] && (
                      <button 
                        className="expand-zip-btn"
                        onClick={() => toggleZipCodes(state)}
                      >
                        +{stateZipCodes[state].full.length - stateZipCodes[state].preview.length} more zip codes
                      </button>
                    )}
                    
                    {showZipCodes[state] && (
                      <div className="zip-codes-expanded">
                        {stateZipCodes[state].full.slice(stateZipCodes[state].preview.length).map((code, index) => (
                          <span key={index} className="zip-code">{code}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="state-cta">
                <h2>Ready to Get Started?</h2>
                <p>Contact us today for your free estimate in {stateNames[state]}</p>
                <button 
                  className="cta-button primary large"
                  onClick={() => navigateToPage('contact')}
                >
                  Get Free Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
        {renderFooter()}
      </div>
    );
  };

  const renderRadonTestingPage = () => (
    <div className="App" data-brand={currentBrand}>
      {renderHeader()}
      <div className="radon-education-page">
        <div className="container">
          <div className="education-header">
            <h1>Professional Radon Testing Services</h1>
            <p>EPA-certified radon testing with detailed reporting and expert analysis</p>
          </div>
          
          <div className="education-content">
            <div className="education-section">
              <h2>What is Radon Testing?</h2>
              <p>Radon testing is the only way to determine if your home has elevated radon levels. Our EPA-certified professionals use state-of-the-art equipment to provide accurate, reliable results.</p>
              
              <h3>Our Testing Process</h3>
              <ul>
                <li>Professional placement of EPA-approved testing devices</li>
                <li>48-72 hour testing period for accurate results</li>
                <li>Laboratory analysis and detailed reporting</li>
                <li>Expert interpretation of results and recommendations</li>
              </ul>
            </div>
            
            <div className="education-section">
              <h2>Understanding Radon Levels</h2>
              <p>Radon is measured in picocuries per liter (pCi/L). The EPA recommends taking action if radon levels are 4.0 pCi/L or higher.</p>
              
              <div className="radon-levels">
                <div className="level-card low">
                  <h4>0-2 pCi/L</h4>
                  <p>Low Risk - No action needed</p>
                </div>
                <div className="level-card moderate">
                  <h4>2-4 pCi/L</h4>
                  <p>Moderate Risk - Consider mitigation</p>
                </div>
                <div className="level-card high">
                  <h4>4-8 pCi/L</h4>
                  <p>High Risk - EPA recommends mitigation</p>
                </div>
                <div className="level-card very-high">
                  <h4>8+ pCi/L</h4>
                  <p>Very High Risk - Immediate action recommended</p>
                </div>
              </div>
            </div>
            
            <div className="education-section">
              <h2>Health Risks of Radon</h2>
              <p>Radon is the second leading cause of lung cancer in the United States, responsible for approximately 21,000 deaths annually. Long-term exposure to elevated radon levels significantly increases lung cancer risk.</p>
              
              <h3>Who is at Risk?</h3>
              <ul>
                <li>All homeowners - radon can affect any home</li>
                <li>Smokers have increased risk when combined with radon exposure</li>
                <li>Children and elderly are more susceptible</li>
                <li>People who spend significant time in basements</li>
              </ul>
            </div>
            
            <div className="education-section">
              <h2>When to Test for Radon</h2>
              <ul>
                <li>Before buying or selling a home</li>
                <li>Every 2 years for ongoing monitoring</li>
                <li>After any structural changes to your home</li>
                <li>If you've never tested your home</li>
                <li>After radon mitigation system installation</li>
              </ul>
            </div>
            
            <div className="education-cta">
              <h2>Schedule Your Radon Test Today</h2>
              <p>Protect your family with professional radon testing. Fast, accurate, and affordable.</p>
              <div className="cta-buttons">
                <button 
                  className="cta-button primary large"
                  onClick={() => navigateToPage('contact')}
                >
                  Schedule Free Test
                </button>
                <button 
                  className="cta-button secondary large"
                  onClick={() => navigateToPage('radon-mitigation')}
                >
                  Learn About Mitigation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  const renderRadonMitigationPage = () => (
    <div className="App" data-brand={currentBrand}>
      {renderHeader()}
      <div className="radon-education-page">
        <div className="container">
          <div className="education-header">
            <h1>Professional Radon Mitigation Systems</h1>
            <p>Complete radon mitigation with Festa fans and lifetime warranties</p>
          </div>
          
          <div className="education-content">
            <div className="education-section">
              <h2>What is Radon Mitigation?</h2>
              <p>Radon mitigation is the process of reducing radon concentrations in buildings. Our systems typically reduce radon levels by 80-99%, bringing most homes well below the EPA action level.</p>
              
              <h3>How Mitigation Works</h3>
              <p>Most radon mitigation systems use a fan to continuously draw radon from beneath the house and vent it safely outside, preventing it from entering living spaces.</p>
            </div>
            
            <div className="education-section">
              <h2>Types of Mitigation Systems</h2>
              <div className="system-types">
                <div className="system-type">
                  <h4>Sub-Slab Depressurization</h4>
                  <p>Most common system for homes with basements or slabs. Creates negative pressure beneath the foundation.</p>
                </div>
                <div className="system-type">
                  <h4>Sump Pit System</h4>
                  <p>Utilizes existing sump pit for radon removal. Cost-effective for homes with existing sump pumps.</p>
                </div>
                <div className="system-type">
                  <h4>Drain Tile System</h4>
                  <p>Utilizes existing perimeter drain system for radon removal. Effective for homes with drain tiles.</p>
                </div>
                <div className="system-type">
                  <h4>Crawl Space Encapsulation</h4>
                  <p>Seals and ventilates crawl spaces to prevent radon entry. Includes vapor barriers and ventilation.</p>
                </div>
              </div>
            </div>
            
            <div className="education-section">
              <h2>Festa Radon Fans - Premium Quality</h2>
              <p>We exclusively use Festa Radon Technologies fans, the industry leader in radon mitigation equipment.</p>
              
              <h3>Fan Models We Install</h3>
              <ul>
                <li><strong>Maverick Eagle:</strong> High-performance fan for standard applications</li>
                <li><strong>Eagle Max:</strong> Maximum airflow for challenging installations</li>
                <li><strong>Legends Series:</strong> Ultra-quiet operation for noise-sensitive areas</li>
                <li><strong>All models:</strong> Energy-efficient, long-lasting, and weather-resistant</li>
              </ul>
            </div>
            
            <div className="education-section">
              <h2>Our Installation Process</h2>
              <ol>
                <li><strong>Site Assessment:</strong> Detailed evaluation of your home's structure</li>
                <li><strong>System Design:</strong> Custom system design for optimal performance</li>
                <li><strong>Professional Installation:</strong> Expert installation with minimal disruption</li>
                <li><strong>System Testing:</strong> Comprehensive testing to ensure proper operation</li>
                <li><strong>Post-Installation Testing:</strong> Verification of radon reduction</li>
                <li><strong>Warranty Registration:</strong> Complete warranty documentation</li>
              </ol>
            </div>
            
            <div className="education-section">
              <h2>Lifetime Warranty Coverage</h2>
              <p>We stand behind our work with comprehensive lifetime warranties:</p>
              <ul>
                <li>Lifetime warranty on system performance</li>
                <li>Lifetime warranty on workmanship</li>
                <li>Annual system inspections included</li>
                <li>Fan replacement coverage</li>
                <li>System maintenance and repairs</li>
              </ul>
            </div>
            
            <div className="education-cta">
              <h2>Get Your Radon Mitigation System</h2>
              <p>Protect your family with a professional radon mitigation system. Lifetime warranty included.</p>
              <div className="cta-buttons">
                <button 
                  className="cta-button primary large"
                  onClick={() => navigateToPage('contact')}
                >
                  Get Free Estimate
                </button>
                <button 
                  className="cta-button secondary large"
                  onClick={() => navigateToPage('radon-testing')}
                >
                  Schedule Testing First
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  const renderFloorCoatingsPage = () => (
    <div className="App" data-brand={currentBrand}>
      {renderHeader()}
      <div className="radon-education-page">
        <div className="container">
          <div className="education-header">
            <h1>Premium Concrete Floor Coatings</h1>
            <p>Torginol epoxy systems with polyaspartic topcoats and lifetime warranties</p>
          </div>
          
          <div className="education-content">
            <div className="education-section">
              <h2>Our Premium Torginol System</h2>
              <p>We use only the finest Torginol products for superior durability and appearance. Our multi-layer system provides unmatched protection and beauty for your concrete floors.</p>
              
              <h3>Our Process</h3>
              <ol>
                <li><strong>Floor Preparation:</strong> Diamond grinding and crack repair for optimal adhesion</li>
                <li><strong>Epoxy Base Coat:</strong> Deep-penetrating epoxy base for maximum bond strength</li>
                <li><strong>Torginol Flakes:</strong> Decorative flakes for texture and visual appeal</li>
                <li><strong>Polyaspartic Topcoat:</strong> UV-stable, non-yellowing protective finish</li>
              </ol>
            </div>
            
            <div className="before-after-gallery">
              <h2>See the Transformation</h2>
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="Before1.jpg" alt="Before Floor Coating" />
                  <p>Before - Stained Concrete</p>
                </div>
                <div className="gallery-item">
                  <img src="after1.jpg" alt="After Floor Coating" />
                  <p>After - Beautiful Finish</p>
                </div>
                <div className="gallery-item">
                  <img src="Before2.jpg" alt="Before Floor Coating" />
                  <p>Before - Damaged Floor</p>
                </div>
                <div className="gallery-item">
                  <img src="after2.jpg" alt="After Floor Coating" />
                  <p>After - Like New</p>
                </div>
                <div className="gallery-item">
                  <img src="Working.jpg" alt="Installation Process" />
                  <p>Professional Installation</p>
                </div>
                <div className="gallery-item">
                  <img src="EPTrailer.jpg" alt="Mobile Equipment" />
                  <p>State-of-the-Art Equipment</p>
                </div>
              </div>
            </div>
            
            <div className="education-section">
              <h2>Why Choose Torginol?</h2>
              <div className="torginol-benefits">
                <div className="benefit-card">
                  <h4>Superior Adhesion</h4>
                  <p>Deep penetration into concrete for permanent bond</p>
                </div>
                <div className="benefit-card">
                  <h4>Non-Yellowing</h4>
                  <p>UV-stable polyaspartic topcoat won't yellow over time</p>
                </div>
                <div className="benefit-card">
                  <h4>Chemical Resistant</h4>
                  <p>Resists oil, gas, salt, and household chemicals</p>
                </div>
                <div className="benefit-card">
                  <h4>Easy Maintenance</h4>
                  <p>Simple cleaning with soap and water</p>
                </div>
              </div>
            </div>
            
            <div className="education-section">
              <h2>Color Options</h2>
              <p>Choose from our premium Torginol flake systems for the perfect look:</p>
              <div className="color-options">
                <div className="color-grid">
                  <div className="color-option">
                    <div className="color-sample granite"></div>
                    <p>Granite Blend</p>
                  </div>
                  <div className="color-option">
                    <div className="color-sample earth"></div>
                    <p>Earth Tones</p>
                  </div>
                  <div className="color-option">
                    <div className="color-sample coastal"></div>
                    <p>Coastal Blue</p>
                  </div>
                  <div className="color-option">
                    <div className="color-sample neutral"></div>
                    <p>Neutral Gray</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="education-section">
              <h2>Limited Lifetime Warranty</h2>
              <p>We stand behind our Torginol systems with comprehensive warranty coverage:</p>
              <div className="warranty-coverage">
                <div className="warranty-item">
                  <h4>No Fading</h4>
                  <p>Color stability guaranteed</p>
                </div>
                <div className="warranty-item">
                  <h4>No Yellowing</h4>
                  <p>UV-stable finish won't discolor</p>
                </div>
                <div className="warranty-item">
                  <h4>No Cracking</h4>
                  <p>Flexible system prevents cracking</p>
                </div>
                <div className="warranty-item">
                  <h4>No Peeling</h4>
                  <p>Superior adhesion prevents delamination</p>
                </div>
                <div className="warranty-item">
                  <h4>No Chipping</h4>
                  <p>Durable surface resists impact damage</p>
                </div>
              </div>
            </div>
            
            <div className="education-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-item">
                <h4>How long does installation take?</h4>
                <p>Most residential garages can be completed in 1-2 days, depending on size and condition.</p>
              </div>
              <div className="faq-item">
                <h4>How long before I can use my floor?</h4>
                <p>Light foot traffic after 24 hours, full use including vehicles after 72 hours.</p>
              </div>
              <div className="faq-item">
                <h4>Can you coat over existing coatings?</h4>
                <p>We evaluate each situation individually. Often existing coatings must be removed for proper adhesion.</p>
              </div>
              <div className="faq-item">
                <h4>What maintenance is required?</h4>
                <p>Simple cleaning with soap and water. No waxing or special treatments needed.</p>
              </div>
            </div>
            
            <div className="education-cta">
              <h2>Transform Your Floors Today</h2>
              <p>Get a beautiful, durable floor coating with our lifetime warranty. Free estimates available.</p>
              <div className="cta-buttons">
                <button 
                  className="cta-button primary large"
                  onClick={() => navigateToPage('contact')}
                >
                  Get Free Estimate
                </button>
                <button 
                  className="cta-button secondary large"
                  onClick={() => navigateToPage('financing')}
                >
                  Financing Options
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  const renderCustomClosetsPage = () => (
    <div className="App" data-brand={currentBrand}>
      {renderHeader()}
      <div className="radon-education-page">
        <div className="container">
          <div className="education-header">
            <h1>Custom Closet Solutions</h1>
            <p>Premium storage systems designed and manufactured in Wisconsin</p>
          </div>
          
          <div className="education-content">
            <div className="education-section">
              <h2>USA Manufacturing Excellence</h2>
              <p>As a former California Closets location, we bring decades of experience in premium closet design and manufacturing. All our systems are designed and built right here in Wisconsin using the finest materials and craftsmanship.</p>
              
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="IMG_1518.JPG" alt="Manufacturing Process" />
                  <p>Precision Manufacturing</p>
                </div>
                <div className="gallery-item">
                  <img src="IMG_1521.JPG" alt="Quality Control" />
                  <p>Quality Control</p>
                </div>
                <div className="gallery-item">
                  <img src="IMG_1429.JPG" alt="Custom Components" />
                  <p>Custom Components</p>
                </div>
                <div className="gallery-item">
                  <img src="IMG_1445.JPG" alt="Finishing Process" />
                  <p>Premium Finishes</p>
                </div>
              </div>
            </div>
            
            <div className="education-section">
              <h2>Custom Closet Gallery</h2>
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="Closet5.jpg" alt="Luxury Walk-in Closet" />
                  <p>Luxury Walk-in Closet</p>
                </div>
                <div className="gallery-item">
                  <img src="Closet3.jpg" alt="Master Bedroom Closet" />
                  <p>Master Bedroom Closet</p>
                </div>
                <div className="gallery-item">
                  <img src="ReachinCloset1.jpg" alt="Reach-in Closet" />
                  <p>Reach-in Closet Organization</p>
                </div>
                <div className="gallery-item">
                  <img src="ModelHome1.jpg" alt="Model Home Installation" />
                  <p>Model Home Installation</p>
                </div>
              </div>
            </div>
            
            <div className="education-section">
              <h2>Complete Storage Solutions</h2>
              <p>We design and install storage solutions for every room in your home:</p>
              
              <h3>Specialty Applications</h3>
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="Garage1.jpg" alt="Garage Storage" />
                  <p>Garage Organization</p>
                </div>
                <div className="gallery-item">
                  <img src="HomeOffice4.jpg" alt="Home Office" />
                  <p>Home Office Storage</p>
                </div>
                <div className="gallery-item">
                  <img src="Laundry1.jpg" alt="Laundry Room" />
                  <p>Laundry Room Organization</p>
                </div>
                <div className="gallery-item">
                  <img src="Mudroom1.jpg" alt="Mudroom Storage" />
                  <p>Mudroom Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="education-section">
              <h2>Premium Materials & Finishes</h2>
              <ul>
                <li>Solid wood construction with premium veneers</li>
                <li>Soft-close drawer slides and door hinges</li>
                <li>Adjustable shelving systems</li>
                <li>LED lighting integration available</li>
                <li>Custom hardware and accessories</li>
                <li>Multiple finish options to match your décor</li>
              </ul>
            </div>
            
            <div className="education-section">
              <h2>Design Process</h2>
              <ol>
                <li><strong>Free Consultation:</strong> In-home design consultation and measurements</li>
                <li><strong>3D Design:</strong> Computer-generated 3D renderings of your space</li>
                <li><strong>Material Selection:</strong> Choose finishes, hardware, and accessories</li>
                <li><strong>Manufacturing:</strong> Custom fabrication in our Wisconsin facility</li>
                <li><strong>Professional Installation:</strong> Expert installation by our certified team</li>
                <li><strong>Final Walkthrough:</strong> Ensure complete satisfaction</li>
              </ol>
            </div>
            
            <div className="education-cta">
              <h2>Transform Your Storage Today</h2>
              <p>Experience the difference of custom storage solutions designed and built in Wisconsin.</p>
              <div className="cta-buttons">
                <button 
                  className="cta-button primary large"
                  onClick={() => navigateToPage('contact')}
                >
                  Schedule Free Design Consultation
                </button>
                <button 
                  className="cta-button secondary large"
                  onClick={() => navigateToPage('financing')}
                >
                  Financing Available
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );

  // Additional service pages would be rendered similarly...
  const renderServicePage = (service) => {
    // Simplified service page renderer for other services
    return (
      <div className="App" data-brand={currentBrand}>
        {renderHeader()}
        <div className="radon-education-page">
          <div className="container">
            <div className="education-header">
              <h1>{service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
              <p>Professional {service.replace('-', ' ')} services</p>
            </div>
            
            <div className="education-content">
              <div className="education-section">
                <h2>Service Overview</h2>
                <p>Detailed information about {service.replace('-', ' ')} services will be displayed here.</p>
              </div>
              
              <div className="education-cta">
                <h2>Get Started Today</h2>
                <p>Contact us for more information about our {service.replace('-', ' ')} services.</p>
                <div className="cta-buttons">
                  <button 
                    className="cta-button primary large"
                    onClick={() => navigateToPage('contact')}
                  >
                    Get Free Estimate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {renderFooter()}
      </div>
    );
  };

  const renderFooter = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{brandConfig[currentBrand].name}</h3>
            <p>3485 N. 124th St.</p>
            <p>Brookfield, WI 53005</p>
            <p>Phone: 262-955-5701</p>
            <button 
              className="footer-contact-btn"
              onClick={() => navigateToPage('contact')}
            >
              Get Free Estimate
            </button>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            {brandConfig[currentBrand].services.map((service, index) => (
              <p 
                key={index} 
                className="footer-service-link"
                onClick={() => {
                  const servicePages = {
                    'Radon Testing': 'radon-testing',
                    'Radon Mitigation': 'radon-mitigation',
                    'Duct Cleaning/AeroSeal': 'duct-cleaning',
                    'Concrete Floor Coatings': 'floor-coatings',
                    'Custom Closets': 'custom-closets',
                    'Smart Home Automation': 'smart-home',
                    'Security Systems': 'security-systems',
                    'Control4 Integration': 'control4',
                    'Garage Storage': 'garage-storage',
                    'Home Office Organization': 'home-office',
                    'Pantry Systems': 'pantry-systems'
                  };
                  navigateToPage(servicePages[service] || 'contact');
                }}
              >
                {service}
              </p>
            ))}
          </div>
          
          <div className="footer-section">
            <h4>Service Areas</h4>
            <p className="footer-service-link" onClick={() => navigateToPage('wisconsin')}>Wisconsin</p>
            <p className="footer-service-link" onClick={() => navigateToPage('illinois')}>Illinois</p>
            <p className="footer-service-link" onClick={() => navigateToPage('minnesota')}>Minnesota</p>
            <p className="footer-service-link" onClick={() => navigateToPage('colorado')}>Colorado</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <p className="footer-service-link" onClick={() => navigateToPage('contact')}>Contact Us</p>
            <p className="footer-service-link" onClick={() => navigateToPage('financing')}>Financing</p>
            <p>
              <a 
                href="https://www.google.com/search?q=Lifetime+Home+Services+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Google Reviews
              </a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 {brandConfig[currentBrand].name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  // Main render logic
  if (currentPage === 'home') {
    return renderHomePage();
  } else if (currentPage === 'contact') {
    return renderContactPage();
  } else if (currentPage === 'financing') {
    return renderFinancingPage();
  } else if (['wisconsin', 'illinois', 'minnesota', 'colorado'].includes(currentPage)) {
    return renderStatePage(currentPage);
  } else if (currentPage === 'radon-testing') {
    return renderRadonTestingPage();
  } else if (currentPage === 'radon-mitigation') {
    return renderRadonMitigationPage();
  } else if (currentPage === 'floor-coatings') {
    return renderFloorCoatingsPage();
  } else if (currentPage === 'custom-closets') {
    return renderCustomClosetsPage();
  } else {
    return renderServicePage(currentPage);
  }
}

export default App;

