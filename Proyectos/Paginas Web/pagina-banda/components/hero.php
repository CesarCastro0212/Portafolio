    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background Image with Animation -->
        <div class="absolute inset-0 w-full h-full z-0">
            <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&fm=jpg&crop=entropy" alt="Band Playing" class="w-full h-full object-cover animate-photo-flash">
            <div class="absolute inset-0 hero-overlay"></div>
            <!-- Grain overlay to add grit -->
            <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
        </div>
        
        <!-- Hero Content -->
        <div class="relative z-10 text-center px-4 pt-20 max-w-5xl mx-auto">
            <h1 class="font-rock text-6xl md:text-8xl lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 tracking-wider mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fade-in-up">
                Los Robbie
            </h1>
            <p class="text-xl md:text-3xl font-light text-gray-300 tracking-widest mt-4 uppercase animate-fade-in-up" style="animation-delay: 0.2s;">
                Energía pura. Sonido Indomable.
            </p>
        </div>
        
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10" onclick="document.getElementById('about').scrollIntoView({behavior: 'smooth'})">
            <i class="fas fa-chevron-down text-3xl text-accentOrange"></i>
        </div>
    </section>