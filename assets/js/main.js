document.addEventListener('DOMContentLoaded', () => {
    // ────────── DOM Elements ──────────
    const header = document.getElementById('main-header');
    const headerContainer = document.getElementById('header-container');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBackdrop = document.getElementById('menu-backdrop');
    const closeMenu = document.getElementById('close-menu');
    
    const hamburgerTop = document.getElementById('hamburger-top');
    const hamburgerMiddle = document.getElementById('hamburger-middle');
    const hamburgerBottom = document.getElementById('hamburger-bottom');

    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // ────────── Mobile Menu Control ──────────
    const openMobileMenu = () => {
        // Toggle mobile drawer slide-in
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        
        // Show backdrop blur and dim
        menuBackdrop.classList.remove('opacity-0', 'pointer-events-none');
        menuBackdrop.classList.add('opacity-100', 'pointer-events-auto');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Animate hamburger to 'X'
        hamburgerTop.classList.add('rotate-45', 'translate-y-[8px]');
        hamburgerMiddle.classList.add('opacity-0', 'scale-x-0');
        hamburgerBottom.classList.add('-rotate-45', '-translate-y-[8px]');
    };

    const closeMobileMenu = () => {
        // Toggle mobile drawer slide-out
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        
        // Hide backdrop blur and dim
        menuBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
        menuBackdrop.classList.add('opacity-0', 'pointer-events-none');
        
        // Re-enable body scroll
        document.body.style.overflow = '';

        // Animate hamburger back to original lines
        hamburgerTop.classList.remove('rotate-45', 'translate-y-[8px]');
        hamburgerMiddle.classList.remove('opacity-0', 'scale-x-0');
        hamburgerBottom.classList.remove('-rotate-45', '-translate-y-[8px]');
    };

    // Event Listeners for menu
    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('translate-x-0');
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    closeMenu.addEventListener('click', closeMobileMenu);
    menuBackdrop.addEventListener('click', closeMobileMenu);

    // Close menu when clicking links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // ────────── Scroll Navbar Effect ──────────
    const handleScroll = () => {
        if (window.scrollY > 20) {
            // Shrink header
            headerContainer.classList.remove('h-16', 'sm:h-20');
            headerContainer.classList.add('h-14', 'sm:h-16');
            
            // Add darker glassmorphism background and stronger border
            header.classList.remove('bg-slate-900/80');
            header.classList.add('bg-slate-950/95', 'shadow-lg', 'border-slate-800/80');
        } else {
            // Expand header
            headerContainer.classList.remove('h-14', 'sm:h-16');
            headerContainer.classList.add('h-16', 'sm:h-20');
            
            // Restore default colors
            header.classList.remove('bg-slate-950/95', 'shadow-lg', 'border-slate-800/80');
            header.classList.add('bg-slate-900/80');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    // ────────── Active Section Highlighter (Scroll Spy) ──────────
    const sections = document.querySelectorAll('section[id]');
    
    const highlightActiveLink = (activeSectionId) => {
        // Desktop nav link update
        navLinks.forEach(link => {
            const sectionId = link.getAttribute('data-section');
            if (sectionId === activeSectionId) {
                link.classList.remove('text-slate-300', 'hover:bg-slate-800/40');
                link.classList.add('text-white', 'bg-slate-800/90', 'border', 'border-slate-700/50', 'shadow-sm');
            } else {
                link.classList.remove('text-white', 'bg-slate-800/90', 'border', 'border-slate-700/50', 'shadow-sm');
                link.classList.add('text-slate-300', 'hover:bg-slate-800/40');
            }
        });

        // Mobile nav link update
        mobileNavLinks.forEach(link => {
            const sectionId = link.getAttribute('data-section');
            if (sectionId === activeSectionId) {
                link.classList.remove('text-slate-300', 'hover:bg-slate-800/50');
                link.classList.add('text-white', 'bg-slate-800/80', 'border', 'border-slate-700/50', 'shadow-inner');
            } else {
                link.classList.remove('text-white', 'bg-slate-800/80', 'border', 'border-slate-700/50', 'shadow-inner');
                link.classList.add('text-slate-300', 'hover:bg-slate-800/50');
            }
        });
    };

    // Use Intersection Observer for section detection
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the upper-middle region
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                highlightActiveLink(activeId);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    // ────────── Smooth Scroll Navigation ──────────
    const smoothScrollTo = (targetId) => {
        const target = document.getElementById(targetId);
        if (!target) return;

        // Get the current header height to offset scroll position
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;

        window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        });
    };

    // Intercept all anchor links that point to page sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            // Skip empty or lone "#" links (e.g. logo)
            if (!href || href === '#') return;

            const targetId = href.slice(1); // Remove leading "#"
            const target = document.getElementById(targetId);
            if (!target) return;

            e.preventDefault();
            smoothScrollTo(targetId);

            // Close mobile menu if open when a link is clicked
            if (!mobileMenu.classList.contains('translate-x-full')) {
                closeMobileMenu();
            }
        });
    });
});