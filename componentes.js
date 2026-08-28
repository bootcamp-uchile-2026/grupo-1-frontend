// carga un archivo HTML (url) y lo inyecta dentro del elemento con id = contenedorId
async function cargarHeaderFooter(url, contenedorId) {
    const response = await fetch(url); // pide el archivo HTML al servidor
    const contenido = await response.text(); // convierte la respuesta a texto plano (HTML)
    document.getElementById(contenedorId).innerHTML = contenido; // inserta el HTML en el contenedor
}

async function init() {
    // carga el header y el footer esperando a que cada uno termine antes de seguir
    await cargarHeaderFooter('header.html', 'header-component');
    await cargarHeaderFooter('footer.html', 'footer-component');


    const navAyuda = document.querySelector('.nav-ayuda'); // botón/link "Ayuda" del navbar
    const navDropdown = document.querySelector('.nav-dropdown'); // contenedor del dropdown de Ayuda
    const subnavbar = document.querySelector('.subnavbar'); // menú desplegable que se muestra/oculta

    // evento para mostrar/ocultar el subnavbar al hacer click en Ayuda
    navAyuda.addEventListener('click', (evento) => {
        evento.preventDefault(); // evita que el link navegue a otra página
        evento.stopPropagation(); // evita que el click también dispare el listener del document (línea 24)
        subnavbar.classList.toggle('activo'); // agrega o quita la clase 'activo' para mostrar/ocultar
    });

    // al hacer click fuera del subnavbar, se cierra
    document.addEventListener('click', (evento) => {
        if (!navDropdown.contains(evento.target)) { // si el click fue fuera del dropdown de Ayuda
            subnavbar.classList.remove('activo'); // se oculta el subnavbar
        }
    });
}
init(); // ejecuta todo apenas se carga el script
