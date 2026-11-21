import { NavLink } from "react-router";
import { useCarritoStore } from '../store/useCarritoStore'
import { useAuthStore } from '../store/useAuthStore';

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

export function LogginStatus() {
  const logged = useAuthStore((state) => state.logged);
  const setLogged = useAuthStore((state) => state.setLogged);

  if (!logged) return (
  <a className="site-header__account" href="/login" aria-label="Ingresar / Registrarme">
    <svg className="icon" aria-hidden="true">
      <use href="#i-account" />
    </svg>
    <span>Ingresar / Registrarme</span>
  </a>
  );

  return (
    <button className="btn btn--primary btn--block" type="button" onClick={() => setLogged(false)}>
      Cerrar sesión
    </button>
  );
}

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
          <input id="q" type="search" name="q" placeholder="Buscar productos, marcas y más" disabled />
        </form>
        
        <LogginStatus/>

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
        <NavLink className={({ isActive }) => isActive ? "chapter-link NavActive" : "chapter-link"} to="/listados/Calzado" >
          Calzados
        </NavLink>
      </nav>

    </header>
  </>
  )
}
