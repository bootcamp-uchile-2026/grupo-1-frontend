export function Header() {
    return (
        <>
            <header>
                <div class-name="header-left">
                    <a href="index.html">
                        <div class-name="logo img-placeholder"></div>
                    </a>
                    <div class-name="menu">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class-name="bar">
                    <input type="text" placeholder=""/>
                </div>
                <div class-name="header-right">
                    <div class-name="sing">
                        <strong>Sing up</strong>
                        <strong>Sing in</strong>
                    </div>
                    <a href="carrito.html">
                        <i class-name="fa-solid fa-cart-shopping"></i>
                    </a>
                </div>
            </header>
            <nav>
                <a href="catalogo.html">Catálogo</a>
                <a href="#">Looks</a>
                <a href="comunidad.html">Comunidad</a>
                <div class-name="nav-dropdown">
                    <a href="#" class-name="nav-ayuda">Ayuda</a>
                    <div class-name="subnavbar">
                        <a href="cambios-y-devoluciones.html">Cambios y devoluciones</a>
                        <a href="#">Envíos</a>
                        <a href="#">Preguntas Frecuentes</a>
                        <a href="#">Contacto</a>
                    </div>
                </div>
            </nav>
        </>

    )
}