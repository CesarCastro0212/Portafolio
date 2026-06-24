<?php include __DIR__ . '/components/header.php'; ?>
<?php include __DIR__ . '/components/navbar.php'; ?>

<!-- Main Content -->
<main class="pt-32 pb-24 bg-darkBase min-h-screen relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-black to-transparent z-0"></div>
    <div class="absolute top-20 -left-64 w-96 h-96 bg-accentOrange opacity-10 rounded-full blur-[100px] z-0 pointer-events-none"></div>
    <div class="absolute bottom-20 -right-64 w-96 h-96 bg-softPurple opacity-10 rounded-full blur-[100px] z-0 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <!-- Page Header -->
        <div class="text-center mb-16 animate-fade-in-up">
            <h1 class="font-rock text-5xl md:text-7xl mb-4 uppercase tracking-wider text-white">Nuestra <span class="text-accentOrange">Discografía</span></h1>
            <p class="text-gray-400 font-light max-w-2xl mx-auto">Explora nuestro catálogo musical. Desde la energía pura de nuestros primeros demos hasta nuestro más reciente trabajo de estudio. Escúchanos en tu plataforma favorita.</p>
        </div>

        <!-- Albums Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <!-- Album 1 -->
            <div class="bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl group border border-gray-800 hover:border-accentOrange transition-all duration-300 hover:-translate-y-2">
                <div class="relative overflow-hidden">
                    <img src="https://i.scdn.co/image/ab67616d00001e02460bcd63aac13f8700e673d3" alt="Fragmentos del Proceso Portada" class="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <i class="fas fa-play-circle text-6xl text-accentOrange shadow-[0_0_20px_rgba(249,115,22,0.6)] rounded-full animate-pulse"></i>
                    </div>
                </div>
                <div class="p-6 flex flex-col h-[280px]">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-rock text-2xl uppercase tracking-wide text-white group-hover:text-accentOrange transition-colors">Fragmentos del Proceso</h3>
                    </div>
                    <p class="text-accentOrange font-medium text-sm mb-4">2025 • Sencillo</p>
                    <p class="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">Nuestro más reciente y oscuro trabajo. Un viaje introspectivo a través de guitarras distorsionadas, baterías potentes y sintetizadores envolventes que marcan una nueva era para Los Robbie.</p>
                    
                    <div class="flex space-x-3 mt-auto">
                        <a href="https://open.spotify.com/intl-es/album/1JMYg1sS1Ew17z1fN0iaRE?si=WuECaD7PQuOAEVpbEsGa-Q" target="_blank" class="flex-1 bg-gray-800 hover:bg-[#1DB954] text-white text-center py-2.5 rounded-lg transition-colors font-semibold text-sm flex items-center justify-center group/btn shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            <i class="fab fa-spotify mr-2 text-[#1DB954] group-hover/btn:text-white transition-colors"></i> Spotify
                        </a>
                        <a href="https://music.apple.com/es/album/fragmentos-del-proceso-single/1854989555" target="_blank" class="flex-1 bg-gray-800 hover:bg-[#fa243c] text-white text-center py-2.5 rounded-lg transition-colors font-semibold text-sm flex items-center justify-center group/btn shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            <i class="fab fa-apple mr-2 text-white transition-colors"></i> Apple
                        </a>
                        <a href="https://youtu.be/Ov0TfkIx9qQ?si=M3iVHDrgG8WCW4Rk" target="_blank" class="flex-1 bg-gray-800 hover:bg-[#FF0000] text-white text-center py-2.5 rounded-lg transition-colors font-semibold text-sm flex items-center justify-center group/btn shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            <i class="fab fa-youtube mr-2 text-[#FF0000] group-hover/btn:text-white transition-colors"></i> YouTube
                        </a>
                    </div>
                </div>
            </div>

            <!-- Album 2 -->
            <div class="bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl group border border-gray-800 hover:border-accentOrange transition-all duration-300 hover:-translate-y-2">
                <div class="relative overflow-hidden">
                    <img src="https://i.scdn.co/image/ab67616d00001e02b06a2edd34288b1296d46e75" alt="Órbita sin centro Portada" class="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <i class="fas fa-play-circle text-6xl text-accentOrange shadow-[0_0_20px_rgba(249,115,22,0.6)] rounded-full animate-pulse"></i>
                    </div>
                </div>
                <div class="p-6 flex flex-col h-[280px]">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-rock text-2xl uppercase tracking-wide text-white group-hover:text-accentOrange transition-colors">Órbita sin centro</h3>
                    </div>
                    <p class="text-accentOrange font-medium text-sm mb-4">2025 • Sencillo</p>
                    <p class="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">5 canciones llenas de energía frenética. El sonido que nos definió y nos abrió las puertas en la escena del indie rock local, con himnos inolvidables para la juventud rebelde.</p>
                    
                    <div class="flex space-x-3 mt-auto">
                        <a href="https://open.spotify.com/intl-es/album/7vFMS2PJS2bRDizBpadovF?si=bnWSgnKoQEqnSf4pgwO4cQ" target="_blank" class="flex-1 bg-gray-800 hover:bg-[#1DB954] text-white text-center py-2.5 rounded-lg transition-colors font-semibold text-sm flex items-center justify-center group/btn shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            <i class="fab fa-spotify mr-2 text-[#1DB954] group-hover/btn:text-white transition-colors"></i> Spotify
                        </a>
                        <a href="https://music.apple.com/es/song/órbita-sin-centro/1844113016" target="_blank" class="flex-1 bg-gray-800 hover:bg-[#fa243c] text-white text-center py-2.5 rounded-lg transition-colors font-semibold text-sm flex items-center justify-center group/btn shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            <i class="fab fa-apple mr-2 text-white transition-colors"></i> Apple
                        </a>
                        <a href="https://youtu.be/gq2RPHTd_BY?si=bfJey5rZL4p7Ntb8" target="_blank" class="flex-1 bg-gray-800 hover:bg-[#FF0000] text-white text-center py-2.5 rounded-lg transition-colors font-semibold text-sm flex items-center justify-center group/btn shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            <i class="fab fa-youtube mr-2 text-[#FF0000] group-hover/btn:text-white transition-colors"></i> YouTube
                        </a>
                    </div>
                </div>
            </div>

            <!-- Album 3 -->
            <div class="bg-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl group border border-gray-800 hover:border-accentOrange transition-all duration-300 hover:-translate-y-2">
                <div class="relative overflow-hidden">
                    <img src="https://i.scdn.co/image/ab67616d00001e028e5f1ab3c32585befae058e1" alt="No Somos" class="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500 hover:grayscale-0 grayscale-[50%]">
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <i class="fas fa-play-circle text-6xl text-accentOrange shadow-[0_0_20px_rgba(249,115,22,0.6)] rounded-full animate-pulse"></i>
                    </div>
                </div>
                <div class="p-6 flex flex-col h-[280px]">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-rock text-2xl uppercase tracking-wide text-white group-hover:text-accentOrange transition-colors">No Somos</h3>
                    </div>
                    <p class="text-accentOrange font-medium text-sm mb-4">2022 • Sencillo</p>
                    <p class="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">Grabado de manera independiente en un garage. Un sonido crudo, honesto y directo que capturó la esencia original de la banda antes de los grandes escenarios.</p>
                    
                    <div class="flex space-x-3 mt-auto">
                        <a href="https://open.spotify.com/intl-es/album/4caE2pK3MRp6dXmNuJCTLl?si=Ssb55a-KSii37US29kPlng" target="_blank" class="flex-1 bg-gray-800 hover:bg-[#1DB954] text-white text-center py-2.5 rounded-lg transition-colors font-semibold text-sm flex items-center justify-center group/btn shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            <i class="fab fa-spotify mr-2 text-[#1DB954] group-hover/btn:text-white transition-colors"></i> Spotify
                        </a>
                        <a href="https://music.apple.com/es/song/no-somos/1636855551" target="_blank" class="flex-1 bg-gray-800 hover:bg-[#fa243c] text-white text-center py-2.5 rounded-lg transition-colors font-semibold text-sm flex items-center justify-center group/btn shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            <i class="fab fa-apple mr-2 text-white transition-colors"></i> Apple
                        </a>
                        <a href="https://youtu.be/6MuZF4bLA_U?si=EIClOtc5VtCHJc8P" target="_blank" class="flex-1 bg-gray-800 hover:bg-[#FF0000] text-white text-center py-2.5 rounded-lg transition-colors font-semibold text-sm flex items-center justify-center group/btn shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            <i class="fab fa-youtube mr-2 text-[#FF0000] group-hover/btn:text-white transition-colors"></i> YouTube
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-20 flex justify-center pb-8 animate-fade-in-up" style="animation-delay: 0.3s;">
            <div class="inline-block bg-gradient-to-r from-accentOrange to-softPurple p-[1px] rounded-full hover:scale-105 transition-transform duration-300">
                <a href="index.php#contact" class="inline-flex items-center justify-center px-8 py-4 bg-darkBase rounded-full font-bold uppercase tracking-wider text-sm hover:bg-transparent transition-colors duration-300">
                    <i class="fas fa-compact-disc text-xl mr-3 text-white"></i> 
                    <span>¿Quieres nuestra música física? <span class="text-accentOrange ml-1 border-b border-accentOrange">Contáctanos</span></span>
                </a>
            </div>
        </div>
    </div>
</main>

<?php include __DIR__ . '/components/footer.php'; ?>
<?php include __DIR__ . '/components/scripts.php'; ?>
