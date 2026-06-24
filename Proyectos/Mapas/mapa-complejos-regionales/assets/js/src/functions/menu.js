document.addEventListener("DOMContentLoaded", () => {

    const botones = document.querySelectorAll("[data-btn]");
    const menus = document.querySelectorAll("[data-menu]");

    const equivalencias = {
        uni: "universidades",
        prepa: "preparatorias",
        campus: "campus"
    };

    botones.forEach((btn) => {
        btn.addEventListener("click", () => {

            const key = btn.dataset.btn; // uni / prepa / campus
            const menu = document.querySelector(`[data-menu="${key}"]`);

            // Cerrar otros menús
            menus.forEach(m => {
                if (m !== menu) {
                    m.style.maxHeight = "0px";
                }
            });

            // Alternar menú
            const abierto = menu.style.maxHeight && menu.style.maxHeight !== "0px";

            if (abierto) {
                menu.style.maxHeight = "0px";
                return;
            }

            // Abrir
            menu.style.maxHeight = menu.scrollHeight + "px";

            // CARGAR DATOS DEL MUNICIPIO PARA ESTE BOTÓN
            const municipio = document.getElementById("nombre-municipio").textContent.trim().toUpperCase();
            const data = institucionesPorMunicipio[municipio];

            if (!data) {
                menu.innerHTML = "<p class='px-4 py-2 text-gray-500'>Sin información</p>";
                return;
            }

            const clave = equivalencias[key]; // universidades / preparatorias / campus
            const lista = data[clave];

            if (!lista || lista.length === 0) {
                menu.innerHTML = "<p class='px-4 py-2 text-gray-500'>Sin información</p>";
                return;
            }

            menu.innerHTML = lista.map(item => `
                <a href="${item.web}"class="block px-4 py-2 hover:bg-gray-100">
                    ${item.nombre}
                </a>
            `).join("");

            // Ajustar altura tras insertar elementos
            requestAnimationFrame(() => {
                menu.style.maxHeight = menu.scrollHeight + "px";
            });

        });
    });
});
