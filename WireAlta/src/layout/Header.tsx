import { NavLink } from "react-router";
import { useCarritoStore } from '../store/useCarritoStore'

export function CarritoIcono() {
  const cantidadProductos = useCarritoStore((estado) =>
    estado.items.reduce((total, item) => total + item.cantidad, 0)
  )

  return cantidadProductos >= 100 ? (
    <span className="badge-count" aria-hidden="true">
      +99
    </span>
  ) : (
    <span className="badge-count" aria-hidden="true">
      {cantidadProductos}
    </span>
  )
}

/** Cabecera del sitio (ver pantallas 01, 02, 15, 15b y 15c del mockup). */
export function Header() {

  return (<>
    <header className="site-header">

      <div className="site-header__top">
        <button
          type="button"
          className="icon-btn hide-d"
          aria-label="Abrir menú"
          aria-expanded="false"
        >
          <svg className="icon" aria-hidden="true">
            <use href="#i-menu" />
          </svg>
        </button>
        <a className="logo" href="/" aria-label="stylenow, ir al inicio">
          stylenow<span aria-hidden="true">.</span>
        </a>
        {/*<button
          type="button"
          className="icon-btn hide-m"
          aria-label="Abrir menú de categorías"
          aria-expanded="false"
        >
          <svg className="icon" aria-hidden="true">
            <use href="#i-menu" />
          </svg>
        </button>*/}
        <form className="search site-header__search" role="search" action="#/resultados">
          <svg className="icon icon--20" aria-hidden="true">
            <use href="#i-search" />
          </svg>
          <label className="sr-only" htmlFor="q">
            Buscar
          </label>
          <input
            id="q"
            type="search"
            name="q"
            placeholder="Buscar productos, marcas y más"
          />
        </form>
        <a className="icon-btn" href="/carrito" aria-label="Carrito">
          <svg className="icon" aria-hidden="true">
            <use href="#i-cart" />
          </svg>

          < CarritoIcono />

        </a>
      </div>

      <nav className="site-nav" aria-label="Principal">
        <NavLink className={({ isActive }) => isActive ? "chapter-link NavActive" : "chapter-link"} to="/" >
         Inicio
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "chapter-link NavActive" : "chapter-link"} to="/listados/Mujer" >
          Mujer
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "chapter-link NavActive" : "chapter-link"} to="/listados/Hombre" >
          Hombre
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "chapter-link NavActive" : "chapter-link"} to="/listados/Accesorios" >
          Accesorios
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "chapter-link NavActive" : "chapter-link"} to="/listados/Calzados" >
          Calzados
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "chapter-link NavActive" : "chapter-link"} to="/listados/Ofertas" >
          Ofertas
        </NavLink>
      </nav>

    </header>
  </>
  )
}
