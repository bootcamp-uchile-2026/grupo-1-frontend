
import '../assets/css/views/cuenta.css'
import '../assets/css/views/ayuda.css'

export default function MisCompras() {
  return (
    <>
      <div className="page-head page-head--plain">
        <div className="container">
          <nav className="crumbs" aria-label="Migas de pan">
            <ol>
              <li>
                <a href="#">Mi cuenta</a>
              </li>
              <li>
                <span aria-current="page">Mis compras</span>
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">Mis compras</h1>
        </div>
      </div>
      <div className="container main">
        <div className="split--sidebar" style={{ display: 'grid' }}>
          <nav className="side-nav" aria-label="Mi cuenta">
            <ul>
              <li>
                <a href="#/mis-compras" aria-current="page">Mis compras</a>
              </li>
              <li>
                <a href="#/mis-looks">Mis looks</a>
              </li>
              <li>
                <a href="#/favoritos">Favoritos</a>
              </li>
              <li>
                <a href="#/datos-personales">Datos personales</a>
              </li>
              <li>
                <a href="#/datos-personales">Direcciones</a>
              </li>
              <li>
                <a href="#/privacidad">Privacidad y datos</a>
              </li>
              <li>
                <a href="#/" className="is-muted">Cerrar sesión</a>
              </li>
            </ul>
          </nav>
          <div className="stack gap-lg">
            <ul className="stack gap-lg">
              <li className="order">
                <div className="order__head">
                  <div>
                    <strong>Pedido #10234</strong>
                    <small>Comprado el 28 de septiembre · $64.980</small>
                  </div>
                  <span className="status status--success">
                    <svg className="icon icon--16" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Entregado
                  </span>
                </div>
                <p className="order__note">
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-calendar" />
                  </svg>
                  Puedes cambiar o devolver hasta el 28 de octubre.
                </p>
                <div className="stack gap-sm">
                  <div className="mini mini--lg">
                    <div className="ph ph--menta " role="img" aria-label="Vestido Lino" data-label="Vestido Lino">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Vestido Lino</span>
                      <span className="mini__meta">Beige · M · 1 unidad</span>
                    </div>
                  </div>
                  <div className="mini mini--lg">
                    <div className="ph ph--menta " role="img" aria-label="Blusa Lino" data-label="Blusa Lino">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Blusa Lino</span>
                      <span className="mini__meta">Blanco · S · 1 unidad</span>
                    </div>
                  </div>
                </div>
                <div className="order__actions">
                  <a className="btn btn--primary" href="#/iniciar-cambio">Cambiar o devolver</a>
                  <a className="btn btn--secondary" href="#/detalle-pedido">Ver detalle del pedido</a>
                </div>
              </li>
              <li className="order">
                <div className="order__head">
                  <div>
                    <strong>Pedido #10234</strong>
                    <small>Comprado el 28 de septiembre · $64.980</small>
                  </div>
                  <span className="status status--info">
                    <svg className="icon icon--16" aria-hidden="true">
                      <use href="#i-truck" />
                    </svg>
                    En camino · llega el 4 de octubre
                  </span>
                </div>
                <div className="stack gap-sm">
                  <div className="mini mini--lg">
                    <div className="ph ph--lavanda " role="img" aria-label="Chaqueta Oversize" data-label="Chaqueta Oversize">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Chaqueta Oversize</span>
                      <span className="mini__meta">Negro · M · 1 unidad</span>
                    </div>
                  </div>
                </div>
                <div className="order__actions">
                  <a className="btn btn--primary" href="#/detalle-pedido">Seguir envío</a>
                  <a className="btn btn--secondary" href="#/detalle-pedido">Ver detalle del pedido</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
