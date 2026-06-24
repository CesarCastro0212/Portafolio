    <!-- Navbar -->
    <nav class="fixed w-full z-50 glass transition-all duration-300" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="flex-shrink-0">
                    <a href="index.php#home" class="font-rock text-3xl tracking-widest text-white hover:text-accentOrange transition-colors">Los Robbie</a>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-6 font-semibold text-sm uppercase tracking-wide cursor-pointer">
                        <a href="index.php#home" class="hover:text-accentOrange transition-colors">Home</a>
                        <a href="index.php#releases" class="hover:text-accentOrange transition-colors">Últimos Lanzamientos</a>
                        <a href="discography.php" class="hover:text-accentOrange transition-colors">Discografía</a>
                        <a href="index.php#tour" class="hover:text-accentOrange transition-colors">Fechas de Tour</a>
                        <a href="index.php#about" class="hover:text-accentOrange transition-colors">Acerca de</a>
                        <a href="index.php#store" class="hover:text-accentOrange transition-colors">Tienda</a>
                        <a href="index.php#patreon" class="hover:text-accentOrange transition-colors text-accentOrange"><i class="fab fa-patreon mr-1"></i>Patreon</a>
                        <a href="index.php#contact" class="hover:text-accentOrange transition-colors">Contacto</a>
                    </div>
                </div>
                <!-- Mobile Menu Button -->
                <div class="-mr-2 flex md:hidden">
                    <button type="button" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div class="hidden md:hidden bg-darkBase/95 border-b border-gray-800" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center uppercase font-bold text-sm">
                <a href="index.php#home" class="block px-3 py-2 rounded-md hover:bg-gray-800 hover:text-accentOrange">Home</a>
                <a href="index.php#releases" class="block px-3 py-2 rounded-md hover:bg-gray-800 hover:text-accentOrange">Últimos Lanzamientos</a>
                <a href="index.php#tour" class="block px-3 py-2 rounded-md hover:bg-gray-800 hover:text-accentOrange">Fechas de Tour</a>
                <a href="index.php#members" class="block px-3 py-2 rounded-md hover:bg-gray-800 hover:text-accentOrange">Acerca de</a>
                <a href="index.php#contact" class="block px-3 py-2 rounded-md hover:bg-gray-800 hover:text-accentOrange">Contacto</a>
            </div>
        </div>
    </nav>