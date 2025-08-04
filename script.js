/* ===== PREMIUM JAVASCRIPT - TAJ MAHAL WEBSITE ===== */

// ===== GLOBAL VARIABLES AND CONFIGURATION =====

const CONFIG = {
    // Brand configurations
    brands: {
        lifetime: {
            name: 'Lifetime Home Services',
            tagline: 'Trusted Solutions. Lifetime Results.',
            logo: 'LifetimeHomeServicesLogo.png',
            heroImage: 'lifetime-hero-house.jpg',
            heroType: 'image',
            services: [
                {
                    title: 'Radon Testing',
                    description: 'Professional radon testing to ensure your home\'s safety and peace of mind.',
                    image: 'radon-testing.jpg',
                    features: ['EPA certified testing', 'Detailed reports', 'Quick turnaround', 'Professional analysis']
                },
                {
                    title: 'Radon Mitigation',
                    description: 'Expert radon mitigation systems to reduce dangerous radon levels in your home.',
                    image: 'radon-mitigation.jpg',
                    features: ['Custom system design', 'Professional installation', 'Lifetime warranty', 'Post-installation testing']
                },
                {
                    title: 'Duct Cleaning/AeroSeal',
                    description: 'Advanced duct cleaning and sealing services to improve air quality and efficiency.',
                    image: 'duct-cleaning.jpg',
                    features: ['Complete duct cleaning', 'AeroSeal technology', 'Improved air quality', 'Energy savings']
                },
                {
                    title: 'Concrete Floor Coatings',
                    description: 'Durable Torginol floor coatings with lifetime warranties for garages and basements.',
                    image: 'concrete-floor-coatings.jpg',
                    features: ['Lifetime warranty', 'Slip-resistant finish', 'Easy maintenance', 'Professional installation']
                }
            ],
            reviews: [
                {
                    text: 'Outstanding floor coating service! The Torginol system looks incredible and the lifetime warranty gives us peace of mind. Worth every penny.',
                    author: 'Mike R.',
                    stars: 5
                },
                {
                    text: 'Professional radon mitigation team. They explained everything clearly and the system works perfectly. Highly recommend!',
                    author: 'Sarah K.',
                    stars: 5
                },
                {
                    text: 'Best duct cleaning service in Wisconsin! Our air quality improved dramatically and our energy bills went down.',
                    author: 'David L.',
                    stars: 5
                }
            ]
        },
        aih: {
            name: 'America In-Home',
            tagline: 'Smart Home Technology. Professional Installation. Lifetime Support.',
            logo: 'AmericaIn-HomeLogo.png',
            heroType: 'video',
            heroVideo: 'https://www.youtube.com/embed/NXCMKyYHl-o?autoplay=1&mute=1&loop=1&playlist=NXCMKyYHl-o&controls=0&showinfo=0&rel=0&modestbranding=1',
            leftShowcaseImages: [
                'aih-smart-home-1.jpg',
                'aih-control4-panel.jpg',
                'aih-security-system.jpg',
                'aih-automation-1.jpg',
                'aih-smart-home-2.jpg',
                'aih-control4-setup.jpg'
            ],
            rightShowcaseImages: [
                'aih-home-theater.jpg',
                'aih-lighting-control.jpg',
                'aih-security-cameras.jpg',
                'aih-automation-2.jpg',
                'aih-smart-home-3.jpg',
                'aih-integration.jpg'
            ],
            services: [
                {
                    title: 'Smart Home Automation',
                    description: 'Complete smart home solutions for modern living and convenience.',
                    image: 'smart-home-automation.jpg',
                    features: ['Control4 integration', 'Voice control', 'Mobile app control', 'Custom programming']
                },
                {
                    title: 'Security Systems',
                    description: 'Professional security system installation and monitoring services.',
                    image: 'security-systems.jpg',
                    features: ['24/7 monitoring', 'Mobile alerts', 'Professional installation', 'Smart integration']
                },
                {
                    title: 'Control4 Integration',
                    description: 'Seamless Control4 smart home integration and automation.',
                    image: 'control4-integration.jpg',
                    features: ['Certified dealers', 'Custom programming', 'Ongoing support', 'System updates']
                }
            ],
            reviews: [
                {
                    text: 'America In-Home installed our smart home system perfectly. Everything works flawlessly and the team was incredibly knowledgeable.',
                    author: 'Jennifer M.',
                    stars: 5
                },
                {
                    text: 'Outstanding Control4 installation! Our home automation is exactly what we dreamed of. Professional service from start to finish.',
                    author: 'Robert T.',
                    stars: 5
                },
                {
                    text: 'Best smart home company in Wisconsin! They made our house feel like the future. Highly recommend their services.',
                    author: 'Lisa P.',
                    stars: 5
                }
            ]
        },
        closets: {
            name: 'Closet Concepts',
            tagline: 'Custom Storage Solutions. Premium Quality. Lifetime Organization.',
            logo: 'ClosetConceptsLogo.png',
            heroType: 'video',
            heroVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1',
            leftShowcaseImages: [
                'closets-custom-1.jpg',
                'closets-walk-in.jpg',
                'closets-organization-1.jpg',
                'closets-garage-storage.jpg',
                'closets-custom-2.jpg',
                'closets-pantry-1.jpg'
            ],
            rightShowcaseImages: [
                'closets-bedroom.jpg',
                'closets-office-organization.jpg',
                'closets-garage-systems.jpg',
                'closets-pantry-2.jpg',
                'closets-custom-3.jpg',
                'closets-organization-2.jpg'
            ],
            services: [
                {
                    title: 'Custom Closets',
                    description: 'Custom-designed closet solutions for maximum organization and style.',
                    image: 'custom-closets.jpg',
                    features: ['Custom design', 'Premium materials', 'Professional installation', 'Lifetime warranty']
                },
                {
                    title: 'Garage Storage',
                    description: 'Professional garage organization and storage solutions.',
                    image: 'garage-storage.jpg',
                    features: ['Wall systems', 'Overhead storage', 'Workbenches', 'Custom solutions']
                },
                {
                    title: 'Home Office Organization',
                    description: 'Custom home office organization systems for productivity.',
                    image: 'home-office-organization.jpg',
                    features: ['Built-in desks', 'Storage solutions', 'Cable management', 'Custom design']
                },
                {
                    title: 'Pantry Systems',
                    description: 'Custom pantry organization systems for kitchen efficiency.',
                    image: 'pantry-systems.jpg',
                    features: ['Pull-out shelves', 'Adjustable systems', 'Easy access', 'Maximum storage']
                }
            ],
            reviews: [
                {
                    text: 'The team was professional, on time, and did excellent work on our custom closets. The quality is top-notch and exactly what we wanted.',
                    author: 'Jennifer L.',
                    stars: 5
                },
                {
                    text: 'Amazing garage organization system! They transformed our cluttered garage into an organized space. Professional installation and great quality.',
                    author: 'Mark S.',
                    stars: 5
                },
                {
                    text: 'Best closet company in Wisconsin! Our walk-in closet is now perfectly organized and looks beautiful. Highly recommend!',
                    author: 'Amanda R.',
                    stars: 5
                }
            ]
        }
    },
    
    // State service areas with zip codes
    stateAreas: {
        wisconsin: {
            name: 'Wisconsin',
            regions: [
                {
                    name: 'Milwaukee Metro',
                    zipCodes: ['53001', '53005', '53012', '53018', '53022', '53024', '53029', '53031', '53032', '53033', '53034', '53037', '53040', '53045', '53051', '53056', '53066', '53072', '53074', '53076', '53089', '53092', '53097', '53129', '53130', '53132', '53140', '53141', '53142', '53144', '53146', '53149', '53150', '53151', '53154', '53158', '53168', '53172', '53177', '53186', '53188', '53189', '53190', '53201', '53202', '53203', '53204', '53205', '53206', '53207', '53208', '53209', '53210', '53211', '53212', '53213', '53214', '53215', '53216', '53217', '53218', '53219', '53220', '53221', '53222', '53223', '53224', '53225', '53226', '53227', '53228', '53233', '53234', '53235', '53237', '53244', '53259', '53263', '53274', '53278', '53295'],
                    areaCodes: ['414', '262']
                },
                {
                    name: 'Madison Metro',
                    zipCodes: ['53501', '53502', '53503', '53504', '53505', '53506', '53507', '53508', '53511', '53516', '53517', '53518', '53521', '53523', '53527', '53528', '53529', '53531', '53532', '53533', '53534', '53536', '53537', '53538', '53540', '53541', '53545', '53546', '53548', '53549', '53558', '53559', '53560', '53561', '53562', '53563', '53566', '53569', '53570', '53571', '53572', '53575', '53576', '53577', '53578', '53579', '53581', '53582', '53583', '53584', '53585', '53586', '53588', '53589', '53590', '53593', '53594', '53597', '53598', '53599', '53701', '53702', '53703', '53704', '53705', '53706', '53707', '53708', '53711', '53713', '53714', '53715', '53716', '53717', '53718', '53719', '53726', '53744', '53774', '53777', '53778', '53779', '53782', '53783', '53784', '53785', '53786', '53787', '53788', '53789', '53790', '53791', '53792', '53793', '53794'],
                    areaCodes: ['608']
                },
                {
                    name: 'Green Bay Metro',
                    zipCodes: ['54110', '54111', '54112', '54113', '54114', '54115', '54119', '54120', '54124', '54129', '54130', '54131', '54132', '54133', '54134', '54135', '54136', '54137', '54138', '54139', '54140', '54141', '54142', '54143', '54144', '54145', '54150', '54151', '54152', '54153', '54154', '54155', '54156', '54157', '54158', '54159', '54160', '54161', '54162', '54163', '54164', '54165', '54166', '54167', '54168', '54169', '54170', '54171', '54172', '54173', '54174', '54175', '54176', '54177', '54178', '54179', '54180', '54181', '54182', '54183', '54184', '54185', '54186', '54187', '54188', '54189', '54190', '54191', '54192', '54193', '54194', '54195', '54196', '54197', '54198', '54199', '54301', '54302', '54303', '54304', '54305', '54306', '54307', '54308', '54311', '54313', '54324', '54344'],
                    areaCodes: ['920']
                }
            ]
        },
        illinois: {
            name: 'Illinois',
            regions: [
                {
                    name: 'Chicago Metro North',
                    zipCodes: ['60004', '60005', '60006', '60007', '60008', '60009', '60010', '60011', '60012', '60013', '60014', '60015', '60016', '60017', '60018', '60019', '60020', '60021', '60022', '60025', '60026', '60029', '60030', '60031', '60033', '60034', '60035', '60037', '60038', '60039', '60040', '60041', '60042', '60043', '60044', '60045', '60046', '60047', '60048', '60049', '60050', '60051', '60053', '60055', '60056', '60060', '60061', '60062', '60064', '60065', '60067', '60068', '60069', '60070', '60071', '60072', '60073', '60074', '60075', '60076', '60077', '60078', '60079', '60081', '60082', '60083', '60084', '60085', '60086', '60087', '60088', '60089', '60090', '60091', '60092', '60093', '60094', '60095', '60096', '60097', '60098', '60099'],
                    areaCodes: ['847', '224']
                },
                {
                    name: 'Chicago Metro West',
                    zipCodes: ['60101', '60102', '60103', '60104', '60105', '60106', '60107', '60108', '60109', '60110', '60111', '60112', '60113', '60115', '60116', '60117', '60118', '60119', '60120', '60121', '60122', '60123', '60124', '60125', '60126', '60127', '60128', '60129', '60130', '60131', '60132', '60133', '60134', '60135', '60136', '60137', '60138', '60139', '60140', '60141', '60142', '60143', '60144', '60145', '60146', '60147', '60148', '60149', '60150', '60151', '60152', '60153', '60154', '60155', '60156', '60157', '60159', '60160', '60161', '60162', '60163', '60164', '60165', '60168', '60169', '60170', '60171', '60172', '60173', '60174', '60175', '60176', '60177', '60178', '60179', '60180', '60181', '60182', '60183', '60184', '60185', '60186', '60187', '60188', '60189', '60190', '60191', '60192', '60193', '60194', '60195', '60196', '60197', '60199'],
                    areaCodes: ['630', '331']
                }
            ]
        },
        minnesota: {
            name: 'Minnesota',
            regions: [
                {
                    name: 'Twin Cities Metro',
                    zipCodes: ['55001', '55003', '55009', '55011', '55014', '55016', '55017', '55018', '55019', '55020', '55021', '55024', '55025', '55033', '55038', '55040', '55041', '55042', '55043', '55044', '55045', '55046', '55047', '55055', '55056', '55057', '55068', '55069', '55070', '55071', '55072', '55073', '55074', '55075', '55076', '55077', '55078', '55079', '55082', '55083', '55090', '55092', '55101', '55102', '55103', '55104', '55105', '55106', '55107', '55108', '55109', '55110', '55111', '55112', '55113', '55114', '55115', '55116', '55117', '55118', '55119', '55120', '55121', '55122', '55123', '55124', '55125', '55126', '55127', '55128', '55129', '55130', '55133', '55144', '55150', '55155', '55161', '55164', '55165', '55166', '55168', '55169', '55170', '55171', '55172', '55175', '55177', '55182', '55187', '55188', '55191'],
                    areaCodes: ['651', '612']
                }
            ]
        },
        colorado: {
            name: 'Colorado',
            regions: [
                {
                    name: 'Denver Metro',
                    zipCodes: ['80001', '80002', '80003', '80004', '80005', '80007', '80010', '80011', '80012', '80013', '80014', '80015', '80016', '80017', '80018', '80019', '80020', '80021', '80022', '80023', '80024', '80025', '80026', '80027', '80028', '80030', '80031', '80033', '80034', '80035', '80036', '80037', '80038', '80040', '80041', '80045', '80046', '80047', '80101', '80102', '80103', '80104', '80105', '80106', '80107', '80108', '80109', '80110', '80111', '80112', '80113', '80116', '80117', '80118', '80120', '80121', '80122', '80123', '80124', '80125', '80126', '80127', '80128', '80129', '80130', '80131', '80132', '80133', '80134', '80135', '80136', '80137', '80138', '80202', '80203', '80204', '80205', '80206', '80207', '80208', '80209', '80210', '80211', '80212', '80214', '80215', '80216', '80218', '80219', '80220', '80221', '80222', '80223', '80224', '80225', '80226', '80227', '80228', '80229', '80230', '80231', '80232', '80233', '80234', '80235', '80236', '80237', '80238', '80239', '80246', '80247', '80249', '80264', '80290', '80293', '80294'],
                    areaCodes: ['303', '720']
                }
            ]
        }
    },
    
    // Animation settings
    animations: {
        reviewRotationInterval: 5000,
        showcaseScrollSpeed: 20000,
        transitionDuration: 300
    }
};

// ===== GLOBAL STATE =====

let currentBrand = 'lifetime';
let currentPage = 'home';
let currentReviewIndex = 0;
let reviewInterval = null;
let isMenuOpen = false;

// ===== UTILITY FUNCTIONS =====

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Smooth scroll to top of page
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Generate star rating HTML
 */
function generateStars(rating) {
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            starsHTML += '<i class="fas fa-star" aria-hidden="true"></i>';
        } else {
            starsHTML += '<i class="far fa-star" aria-hidden="true"></i>';
        }
    }
    return starsHTML;
}

/**
 * Format phone number for display
 */
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show notification message
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}" aria-hidden="true"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 5000);
}

// ===== BRAND MANAGEMENT =====

/**
 * Switch between brands (Lifetime, AIH, Closets)
 */
function switchBrand(brandKey) {
    if (!CONFIG.brands[brandKey]) return;
    
    currentBrand = brandKey;
    const brand = CONFIG.brands[brandKey];
    
    // Update brand buttons
    document.querySelectorAll('.brand-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.brand === brandKey) {
            btn.classList.add('active');
        }
    });
    
    // Update logo
    const logoImg = document.getElementById('brand-logo');
    if (logoImg) {
        logoImg.src = brand.logo;
        logoImg.alt = brand.name;
    }
    
    // Update hero section
    updateHeroSection(brand);
    
    // Update services
    updateServicesSection(brand);
    
    // Update reviews
    updateReviewsSection(brand);
    
    // Update services dropdown
    updateServicesDropdown(brand);
    
    // Update page title
    document.title = `${brand.name} | Premium Home Solutions | Wisconsin's Premier Service Provider`;
    
    // Scroll to top
    scrollToTop();
    
    // Close mobile menu if open
    closeMobileMenu();
    
    // Announce brand change for screen readers
    announceToScreenReader(`Switched to ${brand.name}`);
}

/**
 * Update hero section based on brand
 */
function updateHeroSection(brand) {
    const heroSection = document.getElementById('hero-section');
    const standardHero = heroSection.querySelector('.hero-background').parentElement;
    const videoHero = heroSection.querySelector('.hero-video-showcase');
    
    if (brand.heroType === 'video') {
        // Show video hero with showcases
        standardHero.style.display = 'none';
        videoHero.style.display = 'grid';
        
        // Update video
        const videoIframe = document.getElementById('hero-video-iframe');
        if (videoIframe) {
            videoIframe.src = brand.heroVideo;
        }
        
        // Update video hero text
        const videoCompanyName = document.getElementById('hero-company-name-video');
        const videoTagline = document.getElementById('hero-tagline-video');
        const videoServicesText = document.getElementById('hero-services-text');
        
        if (videoCompanyName) videoCompanyName.textContent = brand.name;
        if (videoTagline) videoTagline.textContent = brand.tagline;
        if (videoServicesText) {
            videoServicesText.textContent = brand.name === 'America In-Home' ? 
                'View Our Smart Home Services' : 'View Our Storage Solutions';
        }
        
        // Update showcase images
        updateShowcaseImages(brand);
        
    } else {
        // Show standard hero
        standardHero.style.display = 'flex';
        videoHero.style.display = 'none';
        
        // Update standard hero
        const heroImage = document.getElementById('hero-image');
        const heroCompanyName = document.getElementById('hero-company-name');
        const heroTagline = document.getElementById('hero-tagline');
        
        if (heroImage) {
            heroImage.src = brand.heroImage;
            heroImage.alt = `${brand.name} - Premium home services`;
        }
        if (heroCompanyName) heroCompanyName.textContent = brand.name;
        if (heroTagline) heroTagline.textContent = brand.tagline;
    }
}

/**
 * Update showcase images for video hero
 */
function updateShowcaseImages(brand) {
    if (!brand.leftShowcaseImages || !brand.rightShowcaseImages) return;
    
    const leftShowcase = document.getElementById('left-showcase-images');
    const rightShowcase = document.getElementById('right-showcase-images');
    
    if (leftShowcase) {
        leftShowcase.innerHTML = '';
        // Duplicate images for seamless scrolling
        const allLeftImages = [...brand.leftShowcaseImages, ...brand.leftShowcaseImages];
        allLeftImages.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `${brand.name} showcase`;
            img.className = 'showcase-image';
            leftShowcase.appendChild(img);
        });
    }
    
    if (rightShowcase) {
        rightShowcase.innerHTML = '';
        // Duplicate images for seamless scrolling
        const allRightImages = [...brand.rightShowcaseImages, ...brand.rightShowcaseImages];
        allRightImages.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `${brand.name} showcase`;
            img.className = 'showcase-image';
            rightShowcase.appendChild(img);
        });
    }
}

/**
 * Update services section
 */
function updateServicesSection(brand) {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid || !brand.services) return;
    
    servicesGrid.innerHTML = '';
    
    brand.services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.setAttribute('data-aos', 'fade-up');
        serviceCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        serviceCard.innerHTML = `
            <img src="${service.image}" alt="${service.title}" class="service-image" loading="lazy">
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `
                    <li><i class="fas fa-check" aria-hidden="true"></i> ${feature}</li>
                `).join('')}
            </ul>
            <button class="service-cta" data-page="contact" aria-label="Get estimate for ${service.title}">
                Get Free Estimate
            </button>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
    
    // Refresh AOS for new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

/**
 * Update reviews section
 */
function updateReviewsSection(brand) {
    const reviewsContainer = document.getElementById('reviews-container');
    if (!reviewsContainer || !brand.reviews) return;
    
    reviewsContainer.innerHTML = '';
    currentReviewIndex = 0;
    
    brand.reviews.forEach((review, index) => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.setAttribute('data-aos', 'fade-up');
        reviewCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        reviewCard.innerHTML = `
            <div class="review-stars" aria-label="${review.stars} out of 5 stars">
                ${generateStars(review.stars)}
            </div>
            <p class="review-text">"${review.text}"</p>
            <div class="review-author">- ${review.author}</div>
        `;
        
        reviewsContainer.appendChild(reviewCard);
    });
    
    // Restart review rotation
    startReviewRotation();
    
    // Refresh AOS for new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

/**
 * Update services dropdown
 */
function updateServicesDropdown(brand) {
    const servicesMenu = document.getElementById('services-menu');
    if (!servicesMenu || !brand.services) return;
    
    servicesMenu.innerHTML = '';
    
    brand.services.forEach(service => {
        const menuItem = document.createElement('button');
        menuItem.className = 'dropdown-item';
        menuItem.setAttribute('role', 'menuitem');
        menuItem.textContent = service.title;
        menuItem.addEventListener('click', () => {
            showPage('contact');
            closeAllDropdowns();
        });
        
        servicesMenu.appendChild(menuItem);
    });
}

// ===== NAVIGATION MANAGEMENT =====

/**
 * Show specific page
 */
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageId;
        
        // Update URL without page reload
        const newUrl = pageId === 'home' ? '/' : `/${pageId}`;
        history.pushState({ page: pageId }, '', newUrl);
        
        // Scroll to top
        scrollToTop();
        
        // Close mobile menu
        closeMobileMenu();
        
        // Close all dropdowns
        closeAllDropdowns();
        
        // Update page title
        const brand = CONFIG.brands[currentBrand];
        const pageTitle = pageId === 'home' ? 
            `${brand.name} | Premium Home Solutions` :
            `${pageId.charAt(0).toUpperCase() + pageId.slice(1)} | ${brand.name}`;
        document.title = pageTitle;
        
        // Announce page change for screen readers
        announceToScreenReader(`Navigated to ${pageId} page`);
    }
}

/**
 * Handle browser back/forward buttons
 */
function handlePopState(event) {
    const page = event.state?.page || 'home';
    showPage(page);
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (!navMenu || !menuToggle) return;
    
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        navMenu.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        
        // Animate hamburger lines
        const lines = menuToggle.querySelectorAll('.hamburger-line');
        lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        closeMobileMenu();
    }
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (!navMenu || !menuToggle) return;
    
    isMenuOpen = false;
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    
    // Reset hamburger lines
    const lines = menuToggle.querySelectorAll('.hamburger-line');
    lines[0].style.transform = '';
    lines[1].style.opacity = '';
    lines[2].style.transform = '';
}

/**
 * Toggle dropdown menu
 */
function toggleDropdown(dropdownElement) {
    const isActive = dropdownElement.classList.contains('active');
    
    // Close all dropdowns first
    closeAllDropdowns();
    
    if (!isActive) {
        dropdownElement.classList.add('active');
        const button = dropdownElement.querySelector('.dropdown-btn');
        if (button) {
            button.setAttribute('aria-expanded', 'true');
        }
    }
}

/**
 * Close all dropdown menus
 */
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
        const button = dropdown.querySelector('.dropdown-btn');
        if (button) {
            button.setAttribute('aria-expanded', 'false');
        }
    });
}

// ===== REVIEWS MANAGEMENT =====

/**
 * Start automatic review rotation
 */
function startReviewRotation() {
    if (reviewInterval) {
        clearInterval(reviewInterval);
    }
    
    const brand = CONFIG.brands[currentBrand];
    if (!brand.reviews || brand.reviews.length <= 1) return;
    
    reviewInterval = setInterval(() => {
        rotateReviews('next');
    }, CONFIG.animations.reviewRotationInterval);
}

/**
 * Rotate reviews manually
 */
function rotateReviews(direction) {
    const brand = CONFIG.brands[currentBrand];
    if (!brand.reviews || brand.reviews.length <= 1) return;
    
    const reviewsContainer = document.getElementById('reviews-container');
    if (!reviewsContainer) return;
    
    if (direction === 'next') {
        currentReviewIndex = (currentReviewIndex + 1) % brand.reviews.length;
    } else {
        currentReviewIndex = currentReviewIndex === 0 ? 
            brand.reviews.length - 1 : currentReviewIndex - 1;
    }
    
    // Smooth scroll to current review
    const reviewCards = reviewsContainer.querySelectorAll('.review-card');
    if (reviewCards[currentReviewIndex]) {
        reviewCards[currentReviewIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
    }
}

// ===== FORM MANAGEMENT =====

/**
 * Handle contact form submission
 */
function handleContactFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Basic validation
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const service = formData.get('service');
    
    if (!firstName || !lastName || !email || !service) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    const submitButton = form.querySelector('.form-submit');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Sending...';
    submitButton.disabled = true;
    
    // Add hidden fields for Netlify
    formData.append('form-name', 'contact');
    formData.append('lead-source', 'internet');
    formData.append('brand', CONFIG.brands[currentBrand].name);
    
    // Submit to Netlify
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => {
        showNotification('Thank you! Your request has been submitted successfully. We\'ll contact you soon.');
        form.reset();
        
        // Track form submission
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                event_category: 'Contact',
                event_label: CONFIG.brands[currentBrand].name
            });
        }
    })
    .catch(() => {
        showNotification('Sorry, there was an error submitting your request. Please try again or call us directly.', 'error');
    })
    .finally(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    });
}

// ===== STATE PAGES MANAGEMENT =====

/**
 * Show state service area page
 */
function showStatePage(stateKey) {
    const stateData = CONFIG.stateAreas[stateKey];
    if (!stateData) return;
    
    // Create state page content dynamically
    const statePageHTML = generateStatePageHTML(stateData);
    
    // Insert into DOM or show existing page
    let statePage = document.getElementById(`${stateKey}-page`);
    if (!statePage) {
        statePage = document.createElement('div');
        statePage.id = `${stateKey}-page`;
        statePage.className = 'page-content';
        statePage.innerHTML = statePageHTML;
        document.querySelector('main').appendChild(statePage);
    }
    
    showPage(stateKey);
}

/**
 * Generate state page HTML
 */
function generateStatePageHTML(stateData) {
    return `
        <section class="state-hero-section">
            <div class="container">
                <div class="state-hero-content" data-aos="fade-up">
                    <h1 class="page-title">${stateData.name} Service Areas</h1>
                    <p class="page-subtitle">Professional home services throughout ${stateData.name}</p>
                </div>
            </div>
        </section>
        
        <section class="state-content-section">
            <div class="container">
                <div class="state-regions-grid">
                    ${stateData.regions.map(region => `
                        <div class="region-card" data-aos="fade-up">
                            <h3>${region.name}</h3>
                            <div class="region-info">
                                <div class="area-codes">
                                    <h4>Area Codes</h4>
                                    <div class="codes-list">
                                        ${region.areaCodes.map(code => `<span class="code-badge">${code}</span>`).join('')}
                                    </div>
                                </div>
                                <div class="zip-codes">
                                    <h4>Zip Codes</h4>
                                    <div class="zip-codes-container">
                                        <div class="zip-codes-preview">
                                            ${region.zipCodes.slice(0, 10).map(zip => `<span class="zip-badge">${zip}</span>`).join('')}
                                            ${region.zipCodes.length > 10 ? `<button class="show-more-zips" data-region="${region.name}">+${region.zipCodes.length - 10} more</button>` : ''}
                                        </div>
                                        <div class="zip-codes-full" style="display: none;">
                                            ${region.zipCodes.map(zip => `<span class="zip-badge">${zip}</span>`).join('')}
                                            <button class="show-less-zips" data-region="${region.name}">Show less</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

// ===== ACCESSIBILITY FUNCTIONS =====

/**
 * Announce message to screen readers
 */
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

/**
 * Handle keyboard navigation
 */
function handleKeyboardNavigation(event) {
    // Escape key closes dropdowns and mobile menu
    if (event.key === 'Escape') {
        closeAllDropdowns();
        if (isMenuOpen) {
            closeMobileMenu();
        }
    }
    
    // Enter and Space activate buttons
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('button, [role="button"]')) {
        event.preventDefault();
        event.target.click();
    }
}

// ===== EVENT LISTENERS =====

/**
 * Initialize all event listeners
 */
function initializeEventListeners() {
    // Brand switching
    document.addEventListener('click', (event) => {
        if (event.target.matches('[data-brand]')) {
            event.preventDefault();
            const brandKey = event.target.dataset.brand;
            switchBrand(brandKey);
        }
    });
    
    // Page navigation
    document.addEventListener('click', (event) => {
        if (event.target.matches('[data-page]')) {
            event.preventDefault();
            const pageId = event.target.dataset.page;
            
            if (CONFIG.stateAreas[pageId]) {
                showStatePage(pageId);
            } else {
                showPage(pageId);
            }
        }
    });
    
    // Mobile menu toggle
    document.addEventListener('click', (event) => {
        if (event.target.closest('.mobile-menu-toggle')) {
            event.preventDefault();
            toggleMobileMenu();
        }
    });
    
    // Dropdown toggles
    document.addEventListener('click', (event) => {
        if (event.target.closest('.dropdown-btn')) {
            event.preventDefault();
            const dropdown = event.target.closest('.dropdown');
            toggleDropdown(dropdown);
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });
    
    // Review navigation
    document.addEventListener('click', (event) => {
        if (event.target.closest('.review-nav-btn.prev')) {
            event.preventDefault();
            rotateReviews('prev');
        } else if (event.target.closest('.review-nav-btn.next')) {
            event.preventDefault();
            rotateReviews('next');
        }
    });
    
    // Contact form submission
    document.addEventListener('submit', (event) => {
        if (event.target.matches('#contact-form')) {
            handleContactFormSubmission(event);
        }
    });
    
    // Hero services button
    document.addEventListener('click', (event) => {
        if (event.target.matches('#hero-services-btn, #hero-services-btn-video')) {
            event.preventDefault();
            const servicesSection = document.querySelector('.services-section');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
    
    // Logo click - go to home
    document.addEventListener('click', (event) => {
        if (event.target.closest('.brand-logo-link')) {
            event.preventDefault();
            showPage('home');
        }
    });
    
    // Zip codes expand/collapse
    document.addEventListener('click', (event) => {
        if (event.target.matches('.show-more-zips')) {
            event.preventDefault();
            const container = event.target.closest('.zip-codes-container');
            container.querySelector('.zip-codes-preview').style.display = 'none';
            container.querySelector('.zip-codes-full').style.display = 'block';
        } else if (event.target.matches('.show-less-zips')) {
            event.preventDefault();
            const container = event.target.closest('.zip-codes-container');
            container.querySelector('.zip-codes-preview').style.display = 'block';
            container.querySelector('.zip-codes-full').style.display = 'none';
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Browser back/forward
    window.addEventListener('popstate', handlePopState);
    
    // Resize handler for responsive adjustments
    window.addEventListener('resize', debounce(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768 && isMenuOpen) {
            closeMobileMenu();
        }
        
        // Refresh AOS on resize
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 250));
    
    // Scroll handler for header effects
    window.addEventListener('scroll', debounce(() => {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '';
            }
        }
    }, 10));
}

// ===== INITIALIZATION =====

/**
 * Initialize the website
 */
function initializeWebsite() {
    // Set initial brand based on URL or default
    const urlPath = window.location.pathname;
    let initialBrand = 'lifetime';
    let initialPage = 'home';
    
    // Check for brand-specific URLs
    if (urlPath.includes('america-in-home') || urlPath.includes('aih')) {
        initialBrand = 'aih';
    } else if (urlPath.includes('closet-concepts') || urlPath.includes('closets')) {
        initialBrand = 'closets';
    }
    
    // Check for page-specific URLs
    if (urlPath.includes('contact')) {
        initialPage = 'contact';
    } else if (urlPath.includes('financing')) {
        initialPage = 'financing';
    } else if (urlPath.includes('wisconsin')) {
        initialPage = 'wisconsin';
    } else if (urlPath.includes('illinois')) {
        initialPage = 'illinois';
    } else if (urlPath.includes('minnesota')) {
        initialPage = 'minnesota';
    } else if (urlPath.includes('colorado')) {
        initialPage = 'colorado';
    }
    
    // Initialize brand
    switchBrand(initialBrand);
    
    // Show initial page
    if (CONFIG.stateAreas[initialPage]) {
        showStatePage(initialPage);
    } else {
        showPage(initialPage);
    }
    
    // Start review rotation
    startReviewRotation();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Set up phone number formatting
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('input', (event) => {
            const value = event.target.value.replace(/\D/g, '');
            event.target.value = formatPhoneNumber(value);
        });
    });
    
    // Announce website ready for screen readers
    setTimeout(() => {
        announceToScreenReader('Website loaded and ready for navigation');
    }, 1000);
    
    console.log('🎉 Premium website initialized successfully!');
}

// ===== DOMAIN REDIRECT HANDLING =====

/**
 * Handle legacy domain redirects
 */
function handleLegacyDomains() {
    const hostname = window.location.hostname;
    
    if (hostname.includes('americainhome')) {
        // Redirect to America In-Home brand
        switchBrand('aih');
        history.replaceState({ brand: 'aih', page: 'home' }, '', '/america-in-home');
    } else if (hostname.includes('closetconcepts')) {
        // Redirect to Closet Concepts brand
        switchBrand('closets');
        history.replaceState({ brand: 'closets', page: 'home' }, '', '/closet-concepts');
    }
}

// ===== START THE APPLICATION =====

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        handleLegacyDomains();
        initializeWebsite();
    });
} else {
    handleLegacyDomains();
    initializeWebsite();
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        switchBrand,
        showPage,
        formatPhoneNumber,
        isValidEmail,
        CONFIG
    };
}

