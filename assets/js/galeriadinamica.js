const proyectos = {
    E1: {
        titulo: "Laptop Lenovo",
        descripcion: "Limpieza interna y cambio de pasta térmica",
        imagenes: [
            "imgs/Mantenimiento/E1/1.jpeg",
            "imgs/Mantenimiento/E1/2.jpeg",
            "imgs/Mantenimiento/E1/3.jpeg",
        ]
    },

    E2: {
        titulo: "Laptop Acer",
        descripcion: "Mantenimiento preventivo",
        imagenes: [
            "imgs/Mantenimiento/E2/1.jpeg",
            "imgs/Mantenimiento/E2/2.jpeg"
        ]
    },

    E3: {
        titulo: "Equipo de Escritorio",
        descripcion: "Mantenimiento preventivo",
        imagenes: [
            "imgs/Mantenimiento/E3/1.jpeg",
            "imgs/Mantenimiento/E3/2.jpeg"
        ]
    },

    E4: {
        titulo: "PC Mini de Escritorio",
        descripcion: "Mantenimiento preventivo",
        imagenes: [
            "imgs/Mantenimiento/E4/1.jpeg",
            "imgs/Mantenimiento/E4/2.jpeg",
            "imgs/Mantenimiento/E4/3.jpeg",
            "imgs/Mantenimiento/E4/4.jpeg"
        ]
    }
}

function abrirGaleria(idProyecto) {

    const proyecto = proyectos[idProyecto];

    if (!proyecto) {
        console.error("No existe:", idProyecto);
        return;
    }

    const contenedor = document.getElementById("contenedorImagenes");

    contenedor.innerHTML = proyecto.imagenes.map(img => `
        <img src="${img}"
             class="rounded-lg w-full object-cover">
    `).join("");

    const modal = document.getElementById("modalGaleria");

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function cerrarModal() {
    const modal = document.getElementById("modalGaleria");

    modal.classList.add("hidden");
    modal.classList.remove("flex");
}