async function cargarHeaderFooter(url, contenedorId) {
    const response = await fetch(url);
    const contenido = await response.text();
    document.getElementById(contenedorId).innerHTML = contenido;
}

async function init() {
    await cargarHeaderFooter('header.html', 'header-component');
    await cargarHeaderFooter('footer.html', 'footer-component');

    // Recién aquí el header ya existe en el DOM
    const navAyuda = document.querySelector('.nav-ayuda');
    const navDropdown = document.querySelector('.nav-dropdown');
    const subnavbar = document.querySelector('.subnavbar');


// evento para mostrar/ocultar el subnavbar al hacer click en Ayuda
navAyuda.addEventListener('click', (evento) => {
    evento.preventDefault();
    subnavbar.classList.toggle('activo');
});

//al pasar el mouse por encima de Ayuda, se muestra el subnavbar
navDropdown.addEventListener('mouseenter', () => {
    subnavbar.classList.add('activo');
});

//al quitar el mouse de Ayuda, se oculta el subnavbar
navDropdown.addEventListener('mouseleave', () => {
    subnavbar.classList.remove('activo');
});
}
init();
