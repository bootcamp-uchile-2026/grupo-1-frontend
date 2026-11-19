import '../assets/css/views/libreria.css'
import { CardCategorias } from '../components/cardCategorias'

export default function Indice() {
  return (
    <>
      <main className="lib-index container" id="main">
        <a className="logo" href="#">
          stylenow
          <span>.</span>
        </a>


< CardCategorias />


        <h1 className="h2" style={{ marginTop: 'var(--space-xl2)' }}>Wireframes HTML · alta fidelidad</h1>
        <p className="body-2 text-secondary">
          Entregable Cátedra N°3 · Consultora Fast Solutions. Cada pantalla es responsive: abre en escritorio para la versión Desktop (1440) o achica la ventana / usa el modo dispositivo para la versión Mobile (375).
        </p>
        <p style={{ marginTop: 'var(--space-base)' }}>
          <a className="btn btn--primary" href="#/componentes">Ver librería de componentes</a>
        </p>
        <ul className="lib-index__list">
          <li>
            <a href="#/">
              <span className="lib-index__n">1</span>
              <span>
                <strong>Home</strong>
                <small>pantallas/01-home.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/listado">
              <span className="lib-index__n">2</span>
              <span>
                <strong>Listado de productos</strong>
                <small>pantallas/02-listado.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/producto">
              <span className="lib-index__n">3</span>
              <span>
                <strong>Página de producto</strong>
                <small>pantallas/03-producto.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/producto-agregado">
              <span className="lib-index__n">3</span>
              <span>
                <strong>Producto · Agregado al carrito</strong>
                <small>pantallas/03b-producto-agregado.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/carrito">
              <span className="lib-index__n">4</span>
              <span>
                <strong>Carrito de compras</strong>
                <small>pantallas/04-carrito.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/carrito-vacio">
              <span className="lib-index__n">4</span>
              <span>
                <strong>Carrito · Vacío</strong>
                <small>pantallas/04b-carrito-vacio.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/checkout">
              <span className="lib-index__n">5</span>
              <span>
                <strong>Checkout</strong>
                <small>pantallas/05-checkout.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/checkout-errores">
              <span className="lib-index__n">5</span>
              <span>
                <strong>Checkout · Errores de validación</strong>
                <small>pantallas/05b-checkout-errores.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/checkout-pago-rechazado">
              <span className="lib-index__n">5</span>
              <span>
                <strong>Checkout · Pago rechazado</strong>
                <small>pantallas/05c-checkout-pago-rechazado.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/confirmacion">
              <span className="lib-index__n">6</span>
              <span>
                <strong>Confirmación</strong>
                <small>pantallas/06-confirmacion.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/looks">
              <span className="lib-index__n">7</span>
              <span>
                <strong>Looks</strong>
                <small>pantallas/07-looks.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/detalle-look">
              <span className="lib-index__n">7</span>
              <span>
                <strong>Looks · Detalle de look</strong>
                <small>pantallas/07b-detalle-look.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/arma-tu-look">
              <span className="lib-index__n">8</span>
              <span>
                <strong>Arma tu look</strong>
                <small>pantallas/08-arma-tu-look.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/arma-tu-look-selector">
              <span className="lib-index__n">8</span>
              <span>
                <strong>Arma tu look · Selector de prenda (Mobile)</strong>
                <small>pantallas/08b-arma-tu-look-selector.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/ayuda-cambios">
              <span className="lib-index__n">9</span>
              <span>
                <strong>Ayuda · Cambios y devoluciones</strong>
                <small>pantallas/09-ayuda-cambios.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/mis-compras">
              <span className="lib-index__n">10</span>
              <span>
                <strong>Mi cuenta · Mis compras</strong>
                <small>pantallas/10-mis-compras.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/iniciar-cambio">
              <span className="lib-index__n">11</span>
              <span>
                <strong>Iniciar cambio o devolución</strong>
                <small>pantallas/11-iniciar-cambio.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/login">
              <span className="lib-index__n">12</span>
              <span>
                <strong>Cuenta · Iniciar sesión</strong>
                <small>pantallas/12-login.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/registro">
              <span className="lib-index__n">12</span>
              <span>
                <strong>Cuenta · Registrarme</strong>
                <small>pantallas/12b-registro.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/registro-errores">
              <span className="lib-index__n">12</span>
              <span>
                <strong>Cuenta · Registrarme · Errores de validación</strong>
                <small>pantallas/12c-registro-errores.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/privacidad">
              <span className="lib-index__n">13</span>
              <span>
                <strong>Mi cuenta · Privacidad y datos</strong>
                <small>pantallas/13-privacidad.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/banner-cookies">
              <span className="lib-index__n">14</span>
              <span>
                <strong>Banner de cookies</strong>
                <small>pantallas/14-banner-cookies.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/mega-menu">
              <span className="lib-index__n">15</span>
              <span>
                <strong>Menú · Mega menú (Desktop)</strong>
                <small>pantallas/15-mega-menu.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/menu-cajon">
              <span className="lib-index__n">15</span>
              <span>
                <strong>Menú · Cajón (Mobile)</strong>
                <small>pantallas/15b-menu-cajon.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/submenu-mujer">
              <span className="lib-index__n">15</span>
              <span>
                <strong>Menú · Submenú Mujer (Mobile)</strong>
                <small>pantallas/15c-submenu-mujer.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/resultados">
              <span className="lib-index__n">16</span>
              <span>
                <strong>Resultados de búsqueda</strong>
                <small>pantallas/16-resultados.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/sin-resultados">
              <span className="lib-index__n">16</span>
              <span>
                <strong>Búsqueda sin resultados</strong>
                <small>pantallas/16b-sin-resultados.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/guia-tallas">
              <span className="lib-index__n">17</span>
              <span>
                <strong>Guía de tallas</strong>
                <small>pantallas/17-guia-tallas.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/preferencias-cookies">
              <span className="lib-index__n">18</span>
              <span>
                <strong>Preferencias de cookies</strong>
                <small>pantallas/18-preferencias-cookies.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/recuperar-contrasena">
              <span className="lib-index__n">19</span>
              <span>
                <strong>Recuperar contraseña · Formulario</strong>
                <small>pantallas/19-recuperar-contrasena.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/correo-enviado">
              <span className="lib-index__n">19</span>
              <span>
                <strong>Recuperar contraseña · Correo enviado</strong>
                <small>pantallas/19b-correo-enviado.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/detalle-pedido">
              <span className="lib-index__n">20</span>
              <span>
                <strong>Mi cuenta · Detalle del pedido</strong>
                <small>pantallas/20-detalle-pedido.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/solicitud-recibida">
              <span className="lib-index__n">21</span>
              <span>
                <strong>Cambio o devolución · Solicitud recibida</strong>
                <small>pantallas/21-solicitud-recibida.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/favoritos">
              <span className="lib-index__n">22</span>
              <span>
                <strong>Mi cuenta · Favoritos · Con productos</strong>
                <small>pantallas/22-favoritos.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/favoritos-vacio">
              <span className="lib-index__n">22</span>
              <span>
                <strong>Mi cuenta · Favoritos · Vacío</strong>
                <small>pantallas/22b-favoritos-vacio.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/mis-looks">
              <span className="lib-index__n">23</span>
              <span>
                <strong>Mi cuenta · Mis looks</strong>
                <small>pantallas/23-mis-looks.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/datos-personales">
              <span className="lib-index__n">24</span>
              <span>
                <strong>Mi cuenta · Datos personales</strong>
                <small>pantallas/24-datos-personales.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/comunidad">
              <span className="lib-index__n">25</span>
              <span>
                <strong>Comunidad</strong>
                <small>pantallas/25-comunidad.html</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#/404">
              <span className="lib-index__n">26</span>
              <span>
                <strong>Página no encontrada (404)</strong>
                <small>pantallas/26-404.html</small>
              </span>
            </a>
          </li>
        </ul>
      </main>
    </>
  )
}
