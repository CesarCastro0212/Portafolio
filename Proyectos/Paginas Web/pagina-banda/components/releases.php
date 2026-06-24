    <!-- Music Player (Últimos Lanzamientos) -->
    <section id="releases" class="py-24 bg-gradient-to-b from-darkBase to-blueGray relative overflow-hidden">
        <!-- Decorational blur dots -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-accentOrange opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-softPurple opacity-20 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="max-w-5xl mx-auto px-6 relative z-10">
            <h2 class="font-rock text-4xl md:text-5xl text-center mb-16 tracking-wide">Últimos <span class="text-accentOrange">Lanzamientos</span></h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <!-- Spotify type container -->
                <div class="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 shadow-2xl">
                    <div class="flex items-center justify-between mb-6">
                        <span class="text-xs font-bold tracking-widest text-gray-400 uppercase">Reproduciendo ahora</span>
                        <i class="fab fa-spotify text-green-500 text-2xl"></i>
                    </div>
                    
                    <div class="flex items-center gap-6 mb-8">
                        <div class="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.3)] flex-shrink-0">
                            <img src="https://i.scdn.co/image/ab67616d00001e02460bcd63aac13f8700e673d3" alt="Album Cover" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-white mb-1">Fragmentos del Proceso</h3>
                            <p class="text-gray-400 mb-3">Los Robbie</p>
                            <span class="px-3 py-1 bg-gray-800 text-xs rounded-full border border-gray-700">Nuevo Sencillo</span>
                        </div>
                    </div>
                    
                    <!-- Player Controls -->
                    <div class="space-y-4">
                        <input type="range" value="30" class="w-full">
                        <div class="flex justify-between text-xs text-gray-500 font-mono">
                            <span>1:24</span>
                            <span>3:45</span>
                        </div>
                        <div class="flex justify-center items-center gap-8">
                            <button class="text-gray-400 hover:text-white transition"><i class="fas fa-random"></i></button>
                            <button class="text-gray-400 hover:text-white transition text-xl"><i class="fas fa-step-backward"></i></button>
                            <button class="w-14 h-14 rounded-full bg-accentOrange text-white hover:scale-110 transition-transform shadow-[0_0_15px_rgba(249,115,22,0.5)] flex items-center justify-center text-xl">
                                <i class="fas fa-play ml-1"></i>
                            </button>
                            <button class="text-gray-400 hover:text-white transition text-xl"><i class="fas fa-step-forward"></i></button>
                            <button class="text-gray-400 hover:text-white transition"><i class="fas fa-redo"></i></button>
                        </div>
                    </div>
                </div>

                <!-- Platform Buttons -->
                <div class="flex flex-col gap-5">
                    <p class="text-xl text-gray-300 font-light mb-4">Escucha nuestra música en tu plataforma favorita.</p>
                    <a href="https://open.spotify.com/intl-es/artist/5NK4ibZdNjcayl7J3lO12e" class="flex items-center gap-4 bg-[#1DB954]/10 hover:bg-[#1DB954]/20 border border-[#1DB954]/50 group transition duration-300 rounded-xl p-4">
                        <i class="fab fa-spotify text-3xl text-[#1DB954] group-hover:scale-110 transition"></i>
                        <div class="text-left flex-grow">
                            <span class="block text-sm text-gray-400">Escuchar en</span>
                            <span class="block font-bold text-lg">Spotify</span>
                        </div>
                        <i class="fas fa-chevron-right text-gray-500 group-hover:text-white transition"></i>
                    </a>
                    <a href="https://music.apple.com/mx/artist/los-robbie/1569134262" class="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/20 group transition duration-300 rounded-xl p-4">
                        <i class="fab fa-apple text-3xl text-white group-hover:scale-110 transition"></i>
                        <div class="text-left flex-grow">
                            <span class="block text-sm text-gray-400">Escuchar en</span>
                            <span class="block font-bold text-lg">Apple Music</span>
                        </div>
                        <i class="fas fa-chevron-right text-gray-500 group-hover:text-white transition"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCxCFKxn93QeZmw402YI0D_A" class="flex items-center gap-4 bg-[#FF0000]/10 hover:bg-[#FF0000]/20 border border-[#FF0000]/50 group transition duration-300 rounded-xl p-4">
                        <i class="fab fa-youtube text-3xl text-[#FF0000] group-hover:scale-110 transition"></i>
                        <div class="text-left flex-grow">
                            <span class="block text-sm text-gray-400">Ver en</span>
                            <span class="block font-bold text-lg">YouTube</span>
                        </div>
                        <i class="fas fa-chevron-right text-gray-500 group-hover:text-white transition"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>