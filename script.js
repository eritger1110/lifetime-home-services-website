document.addEventListener("DOMContentLoaded", () => {
    // State management
    const state = {
        currentBrand: "lifetime",
        currentPage: "home",
        reviews: [],
        services: {
            lifetime: [
                { id: "radon-testing", name: "Radon Testing", icon: "fa-radiation-alt" },
                { id: "radon-mitigation", name: "Radon Mitigation", icon: "fa-house-damage" },
                { id: "duct-cleaning", name: "Duct Cleaning/AeroSeal", icon: "fa-wind" },
                { id: "floor-coatings", name: "Floor Coatings", icon: "fa-layer-group" },
            ],
            aih: [
                { id: "smart-home", name: "Smart Home Automation", icon: "fa-robot" },
                { id: "security-systems", name: "Security Systems", icon: "fa-shield-alt" },
                { id: "home-theater", name: "Home Theater", icon: "fa-film" },
                { id: "whole-home-wifi", name: "Whole-Home Wi-Fi", icon: "fa-wifi" },
            ],
            closets: [
                { id: "custom-closets", name: "Custom Closets", icon: "fa-person-booth" },
                { id: "garage-storage", name: "Garage Storage", icon: "fa-warehouse" },
                { id: "pantry-organization", name: "Pantry Organization", icon: "fa-utensils" },
                { id: "home-office", name: "Home Office Solutions", icon: "fa-briefcase" },
            ],
        },
    };

    // DOM elements
    const brandLinks = document.querySelectorAll(".brand-link");
    const brandLogo = document.getElementById("brand-logo");
    const heroDefault = document.getElementById("hero-default");
    const heroVideoAih = document.getElementById("hero-video-aih");
    const heroVideoClosets = document.getElementById("hero-video-closets");
    const servicesGrid = document.getElementById("services-grid");
    const reviewTrack = document.getElementById("review-track");
    const reviewIndicators = document.getElementById("review-indicators");
    const prevReviewBtn = document.querySelector(".review-btn.prev");
    const nextReviewBtn = document.querySelector(".review-btn.next");
    const mainContent = document.getElementById("main-content");
    const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const mainNav = document.querySelector(".main-nav");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    const footerSeoText = document.getElementById("footer-seo-text");

    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        once: true,
    });

    // Brand switching logic
    const updateBrand = (brand) => {
        state.currentBrand = brand;

        // Update brand links
        brandLinks.forEach((link) => {
            link.classList.toggle("active", link.dataset.brand === brand);
            link.setAttribute("aria-pressed", link.dataset.brand === brand);
        });

        // Update logo
        const logoSrc = {
            lifetime: "LifetimeHomeServicesLogo.png",
            aih: "AmericaIn-HomeLogo.jpg",
            closets: "NewClosetConceptsLogo.png",
        }[brand];
        brandLogo.src = logoSrc;
        brandLogo.alt = `${brand} Logo`;

        // Update hero section
        heroDefault.style.display = brand === "lifetime" ? "flex" : "none";
        heroVideoAih.style.display = brand === "aih" ? "flex" : "none";
        heroVideoClosets.style.display = brand === "closets" ? "flex" : "none";

        // Update services
        renderServices();

        // Update footer SEO text
        const seoText = {
            lifetime: "",
            aih: "America In-Home, formerly americainhome.com",
            closets: "Closet Concepts, formerly closetconcepts.com",
        }[brand];
        footerSeoText.textContent = seoText;
    };

    brandLinks.forEach((link) => {
        link.addEventListener("click", () => {
            updateBrand(link.dataset.brand);
            navigateTo("home");
        });
    });

    // Services rendering
    const renderServices = () => {
        const services = state.services[state.currentBrand];
        servicesGrid.innerHTML = services
            .map(
                (service) => `
                <div class="service-card" data-aos="fade-up">
                    <div class="service-icon"><i class="fas ${service.icon}"></i></div>
                    <h3>${service.name}</h3>
                    <p>Learn more about our professional ${service.name.toLowerCase()} services.</p>
                    <button class="cta-button secondary" data-page="${service.id}">Learn More</button>
                </div>
            `
            )
            .join("");
    };

    // Reviews logic
    const fetchReviews = async () => {
        // In a real application, this would fetch from a Google Reviews API
        // For now, we'll use a static list of reviews
        state.reviews = [
            {
                stars: 5,
                text: "Lifetime Home Services did an amazing job with our radon mitigation system. Professional, courteous, and efficient. Highly recommend!",
                author: "John D., Milwaukee, WI",
            },
            {
                stars: 5,
                text: "The America In-Home team transformed our house into a smart home. The Control4 system is incredible, and the installation was seamless.",
                author: "Jane S., Chicago, IL",
            },
            {
                stars: 5,
                text: "Closet Concepts designed and installed the most beautiful walk-in closet for us. The quality is outstanding, and the process was so easy.",
                author: "Emily R., Denver, CO",
            },
            {
                stars: 5,
                text: "Our garage floor looks amazing thanks to the epoxy coating from Lifetime. It's durable, easy to clean, and looks fantastic.",
                author: "Michael B., Minneapolis, MN",
            },
            {
                stars: 5,
                text: "The AeroSeal process made a huge difference in our home's comfort. The team was professional and explained everything clearly.",
                author: "Sarah L., Madison, WI",
            },
        ];
        renderReviews();
    };

    const renderReviews = () => {
        reviewTrack.innerHTML = state.reviews
            .map(
                (review) => `
                <div class="review-card">
                    <div class="review-stars">${'<i class="fas fa-star"></i>'.repeat(review.stars)}</div>
                    <p class="review-text">"${review.text}"</p>
                    <p class="review-author">- ${review.author}</p>
                </div>
            `
            )
            .join("");

        reviewIndicators.innerHTML = state.reviews
            .map((_, index) => `<button class="review-indicator" data-index="${index}"></button>`)
            .join("");

        updateReviewCarousel(0);
    };

    let currentReviewIndex = 0;
    const updateReviewCarousel = (index) => {
        currentReviewIndex = index;
        const trackWidth = reviewTrack.scrollWidth;
        const cardWidth = reviewTrack.querySelector(".review-card").offsetWidth;
        const offset = -index * (cardWidth + 32); // 32px gap
        reviewTrack.style.transform = `translateX(${offset}px)`;

        document.querySelectorAll(".review-indicator").forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });
    };

    prevReviewBtn.addEventListener("click", () => {
        const newIndex = (currentReviewIndex - 1 + state.reviews.length) % state.reviews.length;
        updateReviewCarousel(newIndex);
    });

    nextReviewBtn.addEventListener("click", () => {
        const newIndex = (currentReviewIndex + 1) % state.reviews.length;
        updateReviewCarousel(newIndex);
    });

    reviewIndicators.addEventListener("click", (e) => {
        if (e.target.classList.contains("review-indicator")) {
            updateReviewCarousel(parseInt(e.target.dataset.index));
        }
    });

    setInterval(() => {
        const newIndex = (currentReviewIndex + 1) % state.reviews.length;
        updateReviewCarousel(newIndex);
    }, 5000);

    // Page navigation
    const navigateTo = (pageId) => {
        state.currentPage = pageId;

        // Hide all pages
        document.querySelectorAll(".service-page").forEach((page) => (page.style.display = "none"));
        heroDefault.style.display = "none";
        heroVideoAih.style.display = "none";
        heroVideoClosets.style.display = "none";
        document.getElementById("services-section").style.display = "none";
        document.querySelector(".reviews-section").style.display = "none";
        document.querySelector(".contact-section").style.display = "none";

        if (pageId === "home") {
            updateBrand(state.currentBrand);
            document.getElementById("services-section").style.display = "block";
            document.querySelector(".reviews-section").style.display = "block";
            document.querySelector(".contact-section").style.display = "block";
        } else {
            const page = document.getElementById(pageId);
            if (page) {
                page.style.display = "block";
            } else {
                // Handle 404 or redirect to home
                updateBrand(state.currentBrand);
                document.getElementById("services-section").style.display = "block";
                document.querySelector(".reviews-section").style.display = "block";
                document.querySelector(".contact-section").style.display = "block";
            }
        }

        window.scrollTo(0, 0);
        closeMobileMenu();
    };

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navigateTo(link.dataset.page);
        });
    });

    // Mobile menu
    const closeMobileMenu = () => {
        mainNav.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
    };

    mobileMenuBtn.addEventListener("click", () => {
        mainNav.classList.toggle("active");
        const isActive = mainNav.classList.contains("active");
        mobileMenuBtn.setAttribute("aria-expanded", isActive);
    });

    // Dropdowns
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const dropdown = toggle.parentElement;
            dropdown.classList.toggle("active");
            const isExpanded = dropdown.classList.contains("active");
            toggle.setAttribute("aria-expanded", isExpanded);
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown.active").forEach((dropdown) => {
                dropdown.classList.remove("active");
                dropdown.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
            });
        }
    });

    // Scroll to top button
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // Financing link
    const financingLink = document.querySelector('a[data-page="financing"]');
    financingLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.open("https://www.synchrony.com/mmc/S6229146200?sitecode=acaqri0c1", "_blank");
    });

    // Initial load
    updateBrand("lifetime");
    fetchReviews();
});

