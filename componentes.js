async function cargarHeaderFooter(url, contenedorId) {
    const response = await fetch(url);
    const contenido = await response.text();
    document.getElementById(contenedorId).innerHTML = contenido;
}

cargarHeaderFooter('header.html', 'header-component');
cargarHeaderFooter('footer.html', 'footer-component');