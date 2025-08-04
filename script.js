// Static Website JavaScript for Lifetime Home Services Group
// Converted from React to vanilla JavaScript with complete state pages

// Global state
let currentBrand = 'lifetime';
let currentPage = 'home';
let showServicesDropdown = false;
let showAreasDropdown = false;
let showZipCodes = {};
let currentReviewIndex = 0;

// Data configurations
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

// Complete state service areas with zip codes
const stateServiceAreas = {
    wisconsin: {
        "Milwaukee Metro": {
            description: "Complete home services throughout Greater Milwaukee",
            zipCodes: ["53201", "53202", "53203", "53204", "53205", "53206", "53207", "53208", "53209", "53210", "53211", "53212", "53213", "53214", "53215", "53216", "53217", "53218", "53219", "53220", "53221", "53222", "53223", "53224", "53225", "53226", "53227", "53228", "53233", "53234", "53235"],
            areaCodes: ["414", "262"]
        },
        "Madison Metro": {
            description: "Professional services in Wisconsin's capital region",
            zipCodes: ["53701", "53702", "53703", "53704", "53705", "53706", "53707", "53708", "53711", "53713", "53714", "53715", "53716", "53717", "53718", "53719", "53726", "53744", "53777", "53778", "53779", "53782", "53783", "53784", "53785", "53786", "53787", "53788", "53789", "53790", "53791", "53792", "53793", "53794"],
            areaCodes: ["608"]
        },
        "Green Bay Metro": {
            description: "Serving Northeast Wisconsin's largest metropolitan area",
            zipCodes: ["54301", "54302", "54303", "54304", "54305", "54306", "54307", "54308", "54311", "54313", "54324", "54344"],
            areaCodes: ["920"]
        },
        "Kenosha-Racine": {
            description: "Southeast Wisconsin corridor services",
            zipCodes: ["53140", "53141", "53142", "53143", "53144", "53158", "53177", "53179", "53181", "53182", "53183", "53184", "53185", "53186", "53187", "53188", "53189", "53190", "53191", "53192", "53193", "53194", "53402", "53403", "53404", "53405", "53406", "53407", "53408"],
            areaCodes: ["262"]
        },
        "Fox Cities": {
            description: "Appleton, Neenah, Menasha, and surrounding communities",
            zipCodes: ["54911", "54912", "54913", "54914", "54915", "54919", "54952", "54956", "54957", "54986", "54990"],
            areaCodes: ["920"]
        },
        "Eau Claire Region": {
            description: "Western Wisconsin's hub for professional home services",
            zipCodes: ["54701", "54702", "54703", "54729", "54751", "54757", "54767", "54770"],
            areaCodes: ["715"]
        },
        "Wausau-Stevens Point": {
            description: "Central Wisconsin professional services",
            zipCodes: ["54401", "54403", "54481", "54482", "54494", "54495", "54449", "54467", "54474"],
            areaCodes: ["715"]
        },
        "La Crosse Region": {
            description: "Mississippi River valley professional services",
            zipCodes: ["54601", "54602", "54603", "54650", "54656", "54660", "54664", "54666"],
            areaCodes: ["608"]
        }
    },
    illinois: {
        "Chicago Metro North": {
            description: "HVAC and AeroSeal services throughout North Chicago suburbs",
            zipCodes: ["60004", "60005", "60006", "60007", "60008", "60009", "60010", "60011", "60012", "60013", "60014", "60015", "60016", "60017", "60018", "60019", "60020", "60021", "60022", "60025", "60026", "60029", "60030", "60031", "60033", "60034", "60035", "60037", "60038", "60039", "60040", "60041", "60042", "60043", "60044", "60045", "60046", "60047", "60048", "60049", "60050", "60051", "60053", "60055", "60056", "60060", "60061", "60062", "60064", "60065", "60067", "60068", "60069", "60070", "60071", "60072", "60073", "60074", "60075", "60076", "60077", "60078", "60081", "60082", "60083", "60084", "60085", "60087", "60088", "60089", "60090", "60091", "60092", "60093", "60094", "60095", "60096", "60097", "60098", "60099"],
            areaCodes: ["847", "224"]
        },
        "Chicago Metro West": {
            description: "Professional HVAC services in Western Chicago suburbs",
            zipCodes: ["60101", "60102", "60103", "60104", "60105", "60106", "60107", "60108", "60109", "60110", "60111", "60112", "60113", "60115", "60116", "60117", "60118", "60119", "60120", "60121", "60122", "60123", "60124", "60125", "60126", "60127", "60128", "60129", "60130", "60131", "60132", "60133", "60134", "60135", "60136", "60137", "60138", "60139", "60140", "60141", "60142", "60143", "60144", "60145", "60146", "60147", "60148", "60149", "60150", "60151", "60152", "60153", "60154", "60155", "60156", "60157", "60159", "60160", "60161", "60162", "60163", "60164", "60165", "60168", "60169", "60170", "60171", "60172", "60173", "60174", "60175", "60176", "60177", "60178", "60179", "60180", "60181", "60182", "60183", "60184", "60185", "60186", "60187", "60188", "60189", "60190", "60191", "60192", "60193", "60194", "60195", "60196", "60197", "60199"],
            areaCodes: ["630", "331"]
        },
        "Chicago Metro South": {
            description: "HVAC and duct sealing services in South Chicago suburbs",
            zipCodes: ["60401", "60402", "60403", "60404", "60406", "60407", "60408", "60409", "60410", "60411", "60412", "60415", "60416", "60417", "60418", "60419", "60420", "60421", "60422", "60423", "60424", "60425", "60426", "60428", "60429", "60430", "60431", "60432", "60433", "60434", "60435", "60436", "60437", "60438", "60439", "60440", "60441", "60442", "60443", "60444", "60445", "60446", "60447", "60448", "60449", "60450", "60451", "60452", "60453", "60454", "60455", "60456", "60457", "60458", "60459", "60461", "60462", "60463", "60464", "60465", "60466", "60467", "60468", "60469", "60470", "60471", "60472", "60473", "60474", "60475", "60476", "60477", "60478", "60479", "60480", "60481", "60482", "60484", "60487", "60490", "60491"],
            areaCodes: ["708", "630", "331"]
        },
        "Rockford Region": {
            description: "Northern Illinois HVAC services",
            zipCodes: ["61001", "61006", "61007", "61008", "61010", "61011", "61012", "61013", "61014", "61015", "61016", "61018", "61019", "61020", "61021", "61024", "61025", "61027", "61028", "61030", "61031", "61032", "61036", "61037", "61038", "61039", "61041", "61042", "61043"],
            areaCodes: ["815", "779"]
        }
    },
    minnesota: {
        "Twin Cities Metro": {
            description: "Minneapolis-St. Paul metropolitan area radon services",
            zipCodes: ["55001", "55002", "55003", "55009", "55011", "55014", "55016", "55017", "55018", "55019", "55020", "55021", "55024", "55025", "55027", "55031", "55033", "55038", "55041", "55042", "55043", "55044", "55045", "55046", "55047", "55051", "55052", "55053", "55054", "55055", "55056", "55057", "55060", "55063", "55066", "55068", "55069", "55070", "55071", "55072", "55073", "55075", "55076", "55077", "55079", "55080", "55082", "55083", "55084", "55085", "55090", "55092", "55101", "55102", "55103", "55104", "55105", "55106", "55107", "55108", "55109", "55110", "55111", "55112", "55113", "55114", "55115", "55116", "55117", "55118", "55119", "55120", "55121", "55122", "55123", "55124", "55125", "55126", "55127", "55128", "55129", "55130", "55133", "55144", "55150", "55155", "55161", "55164", "55165", "55166", "55168", "55169", "55170", "55171", "55172", "55175", "55177", "55182", "55187", "55188", "55191", "55199"],
            areaCodes: ["612", "651", "763", "952"]
        },
        "Rochester Region": {
            description: "Southeast Minnesota radon testing and mitigation",
            zipCodes: ["55901", "55902", "55903", "55904", "55905", "55906", "55909"],
            areaCodes: ["507"]
        },
        "Duluth Region": {
            description: "Northeast Minnesota radon services",
            zipCodes: ["55801", "55802", "55803", "55804", "55805", "55806", "55807", "55808", "55810", "55811", "55812", "55814", "55815", "55816"],
            areaCodes: ["218"]
        }
    },
    colorado: {
        "Denver Metro": {
            description: "Denver metropolitan area radon testing and mitigation",
            zipCodes: ["80001", "80002", "80003", "80004", "80005", "80007", "80010", "80011", "80012", "80013", "80014", "80015", "80016", "80017", "80018", "80019", "80020", "80021", "80022", "80023", "80024", "80025", "80026", "80027", "80030", "80031", "80033", "80034", "80035", "80036", "80037", "80038", "80040", "80041", "80045", "80046", "80047", "80101", "80102", "80103", "80104", "80105", "80106", "80107", "80108", "80109", "80110", "80111", "80112", "80113", "80116", "80117", "80118", "80120", "80121", "80122", "80123", "80124", "80125", "80126", "80127", "80128", "80129", "80130", "80131", "80132", "80133", "80134", "80135", "80136", "80137", "80138", "80202", "80203", "80204", "80205", "80206", "80207", "80208", "80209", "80210", "80211", "80212", "80214", "80215", "80216", "80218", "80219", "80220", "80221", "80222", "80223", "80224", "80225", "80226", "80227", "80228", "80229", "80230", "80231", "80232", "80233", "80234", "80235", "80236", "80237", "80238", "80239", "80246", "80247", "80249", "80264", "80290", "80293", "80294"],
            areaCodes: ["303", "720", "970"]
        },
        "Colorado Springs": {
            description: "Colorado Springs area radon services",
            zipCodes: ["80901", "80902", "80903", "80904", "80905", "80906", "80907", "80908", "80909", "80910", "80911", "80912", "80913", "80914", "80915", "80916", "80917", "80918", "80919", "80920", "80921", "80922", "80923", "80924", "80925", "80926", "80927", "80928", "80929", "80930", "80931", "80932", "80933", "80934", "80935", "80936", "80937", "80938", "80939", "80951"],
            areaCodes: ["719"]
        },
        "Fort Collins Region": {
            description: "Northern Colorado radon testing and mitigation",
            zipCodes: ["80521", "80522", "80523", "80524", "80525", "80526", "80527", "80528", "80553", "80601", "80602", "80603", "80610", "80611", "80612", "80615", "80620", "80621", "80624", "80631", "80634", "80638", "80639", "80640", "80642", "80643", "80644", "80645", "80646", "80648", "80649", "80650", "80651", "80652", "80653", "80654"],
            areaCodes: ["970"]
        }
    }
};

// Utility functions
function navigateToPage(page) {
    currentPage = page;
    showServicesDropdown = false;
    showAreasDropdown = false;
    updatePageDisplay();
    window.scrollTo(0, 0);
}

function navigateToBrand(brand) {
    currentBrand = brand;
    currentPage = 'home';
    showServicesDropdown = false;
    showAreasDropdown = false;
    updateBrandDisplay();
    updatePageDisplay();
    window.scrollTo(0, 0);
}

function updateBrandDisplay() {
    const config = brandConfig[currentBrand];
    
    // Update logo
    const logo = document.getElementById('brand-logo');
    if (logo) {
        logo.src = config.logo;
        logo.alt = config.name;
    }
    
    // Update hero content
    const heroCompanyName = document.getElementById('hero-company-name');
    const heroTagline = document.getElementById('hero-tagline');
    const heroImage = document.getElementById('hero-image');
    
    if (heroCompanyName) heroCompanyName.textContent = config.name;
    if (heroTagline) heroTagline.textContent = config.tagline;
    
    // Update hero section for video brands
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
        if ((currentBrand === 'aih' || currentBrand === 'closets') && config.heroVideo) {
            heroSection.className = 'hero-section-video';
            heroSection.innerHTML = `
                <div class="hero-video-container">
                    <iframe
                        src="${config.heroVideo}"
                        title="${config.name}"
                        class="hero-video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen>
                    </iframe>
                    <div class="hero-content-overlay">
                        <div class="hero-text-content">
                            <h1 class="hero-company-name">${config.name}</h1>
                            <h2 class="hero-tagline-special">${config.tagline}</h2>
                            <p class="hero-subtitle-new">Expert care for the spaces beneath, around, and within your home</p>
                            <div class="hero-cta-buttons">
                                <button class="cta-button primary large with-border" data-page="contact">
                                    Get Free Estimate
                                </button>
                                <button class="cta-button secondary large" id="hero-services-btn">
                                    ${currentBrand === 'closets' ? 'View Our Work' : 'Learn About Our Services'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            heroSection.className = 'hero-section-fullscreen';
            heroSection.innerHTML = `
                <div class="hero-background">
                    <img id="hero-image" src="${config.heroImage}" alt="${config.name}" class="hero-image-fullscreen">
                </div>
                <div class="hero-content-overlay">
                    <div class="hero-text-content">
                        <h1 class="hero-company-name" id="hero-company-name">${config.name}</h1>
                        <h2 class="hero-tagline-special" id="hero-tagline">${config.tagline}</h2>
                        <p class="hero-subtitle-new">Expert care for the spaces beneath, around, and within your home</p>
                        <div class="hero-cta-buttons">
                            <button class="cta-button primary large with-border" data-page="contact">
                                Get Free Estimate
                            </button>
                            <button class="cta-button secondary large" id="hero-services-btn">
                                Learn About Our Services
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    // Update brand link active states
    document.querySelectorAll('.brand-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.brand === currentBrand) {
            link.classList.add('active');
        }
    });
    
    // Update services dropdown
    updateServicesDropdown();
    
    // Update services grid
    updateServicesGrid();
}

function updateServicesDropdown() {
    const servicesMenu = document.getElementById('services-menu');
    if (!servicesMenu) return;
    
    const config = brandConfig[currentBrand];
    servicesMenu.innerHTML = '';
    
    config.services.forEach(service => {
        const button = document.createElement('button');
        button.className = 'dropdown-item';
        button.textContent = service;
        button.dataset.page = service.toLowerCase().replace(/[^a-z0-9]/g, '-');
        servicesMenu.appendChild(button);
    });
}

function updateServicesGrid() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;
    
    const config = brandConfig[currentBrand];
    servicesGrid.innerHTML = '';
    
    config.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon">
                <img src="${getServiceImage(service)}" alt="${service}">
            </div>
            <h3>${service}</h3>
            <p>${getServiceDescription(service)}</p>
            <button class="cta-button secondary" data-page="${service.toLowerCase().replace(/[^a-z0-9]/g, '-')}">
                Learn More
            </button>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

function getServiceImage(service) {
    const imageMap = {
        'Radon Testing': 'radon-testing-device.jpg',
        'Radon Mitigation': 'radon-mitigation-system.jpg',
        'Duct Cleaning/AeroSeal': 'aeroseal-logo.png',
        'Concrete Floor Coatings': 'torginol-flake-samples.jpg',
        'Smart Home Automation': 'control4-smart-home.jpg',
        'Security Systems': 'america-security-hero.jpg',
        'Control4 Integration': 'control4-smart-home.jpg',
        'Custom Closets': 'closets-luxury-hero.jpg',
        'Garage Storage': 'organized-garage-storage.jpg',
        'Home Office Organization': 'home-office-organization.jpg',
        'Pantry Systems': 'closets-pantry-hero.jpg'
    };
    return imageMap[service] || 'service-placeholder.jpg';
}

function getServiceDescription(service) {
    const descriptions = {
        'Radon Testing': 'Professional radon testing to ensure your home\'s safety and peace of mind.',
        'Radon Mitigation': 'Expert radon mitigation systems to reduce dangerous radon levels in your home.',
        'Duct Cleaning/AeroSeal': 'Advanced duct cleaning and sealing services to improve air quality and efficiency.',
        'Concrete Floor Coatings': 'Durable Torginol floor coatings with lifetime warranties for garages and basements.',
        'Smart Home Automation': 'Complete smart home solutions for modern living and convenience.',
        'Security Systems': 'Professional security system installation and monitoring services.',
        'Control4 Integration': 'Seamless Control4 smart home integration and automation.',
        'Custom Closets': 'Custom-designed closet solutions for maximum organization and style.',
        'Garage Storage': 'Professional garage organization and storage solutions.',
        'Home Office Organization': 'Custom home office organization systems for productivity.',
        'Pantry Systems': 'Custom pantry organization systems for kitchen efficiency.'
    };
    return descriptions[service] || 'Professional service with expert installation and support.';
}

function createStatePage(state) {
    const stateData = stateServiceAreas[state];
    const services = stateServices[state];
    const stateName = state.charAt(0).toUpperCase() + state.slice(1);
    
    return `
        <div class="state-page">
            <section class="state-page-hero">
                <div class="container">
                    <h1>Professional Home Services Throughout ${stateName}</h1>
                    <p>${getStateDescription(state)}</p>
                    
                    <div class="state-services">
                        <h2>Services Available in ${stateName}</h2>
                        <div class="service-grid">
                            ${services.map(service => `
                                <div class="service-item">
                                    <h3>${service}</h3>
                                    <p>${getServiceDescription(service)}</p>
                                    <button class="cta-button secondary" data-page="${service.toLowerCase().replace(/[^a-z0-9]/g, '-')}">
                                        Learn More
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="cta-section">
                        <h2>Ready to Get Started in ${stateName}?</h2>
                        <p>Contact ${stateName}'s premier home services company for professional solutions</p>
                        <div class="cta-buttons">
                            <button class="cta-button primary large" onclick="window.location.href='tel:+12629555701'">
                                Call (262) 955-5701
                            </button>
                            <button class="cta-button secondary large" data-page="contact">
                                Get Free Estimate
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="service-areas-section">
                <div class="container">
                    <h2>Our ${stateName} Service Areas</h2>
                    <p>We proudly serve communities throughout ${stateName} with professional home services.</p>
                    
                    <div class="areas-grid">
                        ${Object.entries(stateData).map(([region, data]) => `
                            <div class="area-item">
                                <h4>${region}</h4>
                                <p>${data.description}</p>
                                <div class="area-codes-section">
                                    <strong>Area Codes:</strong>
                                    <div class="area-codes">
                                        ${data.areaCodes.map(code => `<span class="area-code">(${code})</span>`).join('')}
                                    </div>
                                </div>
                                <div class="zip-codes-section">
                                    <strong>Zip Codes Served:</strong>
                                    <div class="zip-codes">
                                        ${data.zipCodes.slice(0, 20).map(zip => `<span class="zip-code">${zip}</span>`).join('')}
                                        ${data.zipCodes.length > 20 ? `<span class="zip-more">+${data.zipCodes.length - 20} more</span>` : ''}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        </div>
    `;
}

function getStateDescription(state) {
    const descriptions = {
        wisconsin: "Wisconsin's premier home services provider offering complete solutions from Milwaukee to Madison, Green Bay to La Crosse. We serve over 200 communities across Wisconsin with professional radon testing & mitigation, premium concrete floor coatings, HVAC services, AeroSeal duct sealing, and more.",
        illinois: "Professional HVAC and AeroSeal services throughout Illinois. Serving the Chicago metropolitan area and surrounding regions with expert duct cleaning, sealing, and HVAC maintenance services.",
        minnesota: "Minnesota's trusted radon testing and mitigation specialists. Serving the Twin Cities metro area and surrounding regions with professional radon services to keep your family safe.",
        colorado: "Colorado's premier radon testing and mitigation company. Serving Denver, Colorado Springs, Fort Collins, and surrounding areas with professional radon services and peace of mind."
    };
    return descriptions[state] || `Professional home services throughout ${state}.`;
}

function updatePageDisplay() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    
    // Hide all page content
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show current page
    if (currentPage === 'home') {
        document.getElementById('home-page').classList.add('active');
    } else if (['wisconsin', 'illinois', 'minnesota', 'colorado'].includes(currentPage)) {
        // Create and show state page
        let statePage = document.getElementById(`${currentPage}-page`);
        if (!statePage) {
            statePage = document.createElement('div');
            statePage.id = `${currentPage}-page`;
            statePage.className = 'page-content';
            statePage.innerHTML = createStatePage(currentPage);
            mainContent.appendChild(statePage);
        }
        statePage.classList.add('active');
    } else {
        // Show other pages
        const currentPageElement = document.getElementById(`${currentPage}-page`);
        if (currentPageElement) {
            currentPageElement.classList.add('active');
        }
    }
}

function getCurrentReviews() {
    const reviews = [];
    for (let i = 0; i < 3; i++) {
        const index = (currentReviewIndex + i) % googleReviews.length;
        reviews.push(googleReviews[index]);
    }
    return reviews;
}

function updateReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    if (!reviewsContainer) return;
    
    const reviews = getCurrentReviews();
    reviewsContainer.innerHTML = '';
    
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <div class="review-stars">
                ${'★'.repeat(review.stars)}
            </div>
            <p class="review-text">"${review.text}"</p>
            <p class="review-author">- ${review.author}</p>
        `;
        reviewsContainer.appendChild(reviewCard);
    });
}

// Event listeners
function setupEventListeners() {
    // Brand navigation
    document.addEventListener('click', (e) => {
        if (e.target.dataset.brand) {
            e.preventDefault();
            navigateToBrand(e.target.dataset.brand);
        }
        
        if (e.target.dataset.page) {
            e.preventDefault();
            navigateToPage(e.target.dataset.page);
        }
    });
    
    // Dropdown toggles
    const servicesDropdown = document.getElementById('services-dropdown');
    const areasDropdown = document.getElementById('areas-dropdown');
    const servicesMenu = document.getElementById('services-menu');
    const areasMenu = document.getElementById('areas-menu');
    
    if (servicesDropdown && servicesMenu) {
        servicesDropdown.addEventListener('click', (e) => {
            e.preventDefault();
            showServicesDropdown = !showServicesDropdown;
            servicesMenu.style.display = showServicesDropdown ? 'block' : 'none';
            if (areasMenu) areasMenu.style.display = 'none';
            showAreasDropdown = false;
        });
    }
    
    if (areasDropdown && areasMenu) {
        areasDropdown.addEventListener('click', (e) => {
            e.preventDefault();
            showAreasDropdown = !showAreasDropdown;
            areasMenu.style.display = showAreasDropdown ? 'block' : 'none';
            if (servicesMenu) servicesMenu.style.display = 'none';
            showServicesDropdown = false;
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            if (servicesMenu) servicesMenu.style.display = 'none';
            if (areasMenu) areasMenu.style.display = 'none';
            showServicesDropdown = false;
            showAreasDropdown = false;
        }
    });
    
    // Form submissions
    document.addEventListener('submit', (e) => {
        if (e.target.tagName === 'FORM') {
            e.preventDefault();
            alert('Thank you for your request! We will contact you soon.');
            e.target.reset();
        }
    });
}

// Auto-rotate reviews
function startReviewRotation() {
    setInterval(() => {
        currentReviewIndex = (currentReviewIndex + 1) % googleReviews.length;
        updateReviews();
    }, 5000);
}

// Initialize the website
function init() {
    updateBrandDisplay();
    updatePageDisplay();
    updateReviews();
    setupEventListeners();
    startReviewRotation();
}

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

