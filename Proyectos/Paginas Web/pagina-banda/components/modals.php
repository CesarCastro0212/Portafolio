    <!-- Modals for Members -->
    <div id="modal-container" class="fixed inset-0 z-[100] flex items-center justify-center modal bg-black/80 backdrop-blur-sm" onclick="closeModal(event)">
        <!-- Content injected by JS -->
        <div id="modal-content-box" class="modal-content bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full mx-4 overflow-hidden shadow-2xl relative" onclick="event.stopPropagation()">
            <button class="absolute top-4 right-4 text-gray-400 hover:text-accentOrange z-10 text-2xl" onclick="closeModal(event, true)">
                <i class="fas fa-times"></i>
            </button>
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 aspect-square md:aspect-auto h-64 md:h-auto">
                    <img id="modal-img" src="" class="w-full h-full object-cover grayscale">
                </div>
                <div class="p-8 md:w-1/2 flex flex-col justify-center">
                    <h3 id="modal-name" class="font-rock text-4xl mb-1 text-white">Name</h3>
                    <p id="modal-role" class="text-accentOrange font-bold tracking-widest uppercase text-xs mb-6">Role</p>
                    <p id="modal-desc" class="text-gray-300 font-light leading-relaxed text-sm">Description here</p>
                    <div class="mt-8 flex gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accentOrange transition"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accentOrange transition"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
