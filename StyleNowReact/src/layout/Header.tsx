import { NavLink } from "react-router";


export function Header() {
    return (
        <>
            <header>
                <div className="header-left">
                    <NavLink to="Inicio">
                        <div className="header-logo img-placeholder"></div>
                    </NavLink>
                    <div className="menu">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="bar">
                    <input type="text" placeholder="" />
                </div>
                <div className="header-right">
                    <div className="sing">
                        <strong>Sing up</strong>
                        <strong>Sing in</strong>
                    </div>
                    <NavLink to="/carrito">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </NavLink>
                </div>
            </header>
            <nav>
                <NavLink to="/catalogo" className={({ isActive }) => isActive ? 'mainMenu-link active' : 'mainMenu-link'}>Catálogo
                </NavLink>

                <NavLink to="/looks" className={({ isActive }) => isActive ? 'mainMenu-link active' : 'mainMenu-link'}>Looks
                </NavLink>

                <NavLink to="/comunidad" className={({ isActive }) => isActive ? 'mainMenu-link active' : 'mainMenu-link'}>Comunidad</NavLink>

                <div className="nav-dropdown mainMenu-link">
                    <NavLink to="/ayuda" className={({ isActive }) => isActive ? 'active' : ''}>
                        Ayuda
                    </NavLink>
                    <div className="subnavbar">
                        <NavLink to="/cambios-y-devoluciones" className={({ isActive }) => isActive ? 'mainMenu-link active' : 'mainMenu-link'}>Cambios y devoluciones</NavLink>
                        <NavLink to="/envios" className={({ isActive }) => isActive ? 'mainMenu-link active' : 'mainMenu-link'}>Envíos</NavLink>
                        <NavLink to="/preguntas-frecuentes" className={({ isActive }) => isActive ? 'mainMenu-link active' : 'mainMenu-link'}>Preguntas Frecuentes</NavLink>
                        <NavLink to="/contacto" className={({ isActive }) => isActive ? 'mainMenu-link active' : 'mainMenu-link'}>Contacto</NavLink>
                    </div>
                </div>
            </nav>
        </>

    )
}