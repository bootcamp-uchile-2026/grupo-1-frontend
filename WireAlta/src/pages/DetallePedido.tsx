
import '../assets/css/views/cuenta.css'
import '../assets/css/views/ayuda.css'

export default function DetallePedido() {
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
                <a href="#">Mis compras</a>
              </li>
              <li>
                <span aria-current="page">Pedido #10235</span>
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">Pedido #10235</h1>
          <p className="page-head__lead">Comprado el 28 de septiembre</p>
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
            <section className="track" aria-labelledby="tr-t">
              <div className="order__head">
                <div>
                  <h2 className="label-1 fw-semibold" id="tr-t">Seguimiento</h2>
                  <small className="body-4 text-secondary">Código de seguimiento: STN-88412</small>
                </div>
                <span className="status status--info">
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-truck" />
                  </svg>
                  En camino
                </span>
              </div>
              <ol>
                <li className="is-done">
                  Pedido recibido
                  <small>28 sep</small>
                </li>
                <li className="is-done">
                  Preparando
                  <small>29 sep</small>
                </li>
                <li className="is-current" aria-current="step">
                  En camino
                  <small>30 sep</small>
                </li>
                <li className="">
                  Entregado
                  <small>Llega el 4 oct</small>
                </li>
              </ol>
            </section>
            <div className="split split--detail" style={{ gridTemplateColumns: 'minmax(0,1fr) 420px' }}>
              <section className="card stack gap-base" aria-labelledby="pr-t">
                <h2 className="label-1 fw-semibold" id="pr-t">Productos</h2>
                <div className="mini mini--lg">
                  <div className="ph ph--lavanda " role="img" aria-label="Chaqueta Oversize" data-label="Chaqueta Oversize">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <div className="mini__info">
                    <span className="mini__name">Chaqueta Oversize</span>
                    <span className="mini__meta">Negro · Talla M · 1 unidad</span>
                  </div>
                  <span className="mini__price">$34.990</span>
                </div>
              </section>
              <section className="card stack gap-base" aria-labelledby="ep-t">
                <h2 className="label-1 fw-semibold" id="ep-t">Envío y pago</h2>
                <dl className="dl">
                  <dt>Dirección</dt>
                  <dd>Av. Providencia 1234, depto 56, Providencia</dd>
                  <dt>Recibe</dt>
                  <dd>Camila Rojas</dd>
                  <dt>Método de pago</dt>
                  <dd>Visa terminada en 4417</dd>
                  <dt>Subtotal</dt>
                  <dd>$34.990</dd>
                  <dt>Envío</dt>
                  <dd className="text-success">Gratis</dd>
                  <dt className="fw-semibold" style={{ color: 'var(--text-primary)' }}>Total</dt>
                  <dd className="fw-bold">$34.990</dd>
                </dl>
                <a className="link link--sm" href="#">
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-download" />
                  </svg>
                  Descargar boleta
                </a>
              </section>
            </div>
            <div>
              <a className="btn btn--secondary" href="#/ayuda-cambios">Necesito ayuda con este pedido</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
