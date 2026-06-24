    <!-- JavaScript for interactivity -->
    <script>
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg', 'bg-darkBase/95');
                nav.classList.remove('bg-transparent');
            } else {
                nav.classList.remove('shadow-lg', 'bg-darkBase/95');
                nav.classList.add('bg-transparent');
            }
        });

        // Member Data for Modals
        const members = {
            member1: {
                name: "Gabo", role: "Guitarra Principal", img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=600&fm=jpg",
                desc: "El mero pollo de Los Robbie. Gabo escribe las letras desde sus experiencias más oscuras, transformándolas en himnos energéticos que conectan con miles de jóvenes."
            },
            member2: {
                name: "Sofia", role: "Voz Principal", img: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?q=80&w=600&fm=jpg",
                desc: "La voz de Los Robbie. Sofia escribe las letras desde sus experiencias más oscuras, transformándolas en himnos energéticos que conectan con miles de jóvenes."
            },
            member3: {
                name: "Mike", role: "Bajista", img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=600&fm=jpg",
                desc: "El cerebro detrás de los riffs memorables de Los Robbie. Maestro de los pedales de efectos, creando atmósferas envolventes en cada pista."
            },
            member4: {
                name: "Paulo", role: "Baterista", img: "https://i.pinimg.com/736x/fe/a2/be/fea2be44f3443173e13808e2e7e14753.jpg",
                desc: "La base sólida que amarra todo el sonido. Su presencia en el escenario es imponente. Aporta las armonías vocales que le dan el toque nostálgico a la banda."
            }
        };

        const modal = document.getElementById('modal-container');
        const mImg = document.getElementById('modal-img');
        const mName = document.getElementById('modal-name');
        const mRole = document.getElementById('modal-role');
        const mDesc = document.getElementById('modal-desc');

        function openModal(id) {
            const data = members[id];
            mImg.src = data.img;
            mName.innerText = data.name;
            mRole.innerText = data.role;
            mDesc.innerText = data.desc;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // prevent scrolling
        }

        function closeModal(e, force = false) {
            if (force || e.target.id === 'modal-container') {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    </script>
</body>
</html>
