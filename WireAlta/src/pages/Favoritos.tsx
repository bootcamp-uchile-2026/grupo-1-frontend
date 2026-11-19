
import '../assets/css/views/cuenta.css'
import '../assets/css/views/ayuda.css'

export default function Favoritos() {
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
                <span aria-current="page">Favoritos</span>
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">Favoritos</h1>
          <p className="page-head__lead">4 productos guardados</p>
        </div>
      </div>
      <div className="container main">
        <div className="split--sidebar" style={{ display: 'grid' }}>
          <nav className="side-nav" aria-label="Mi cuenta">
            <ul>
              <li>
                <a href="#/mis-compras">Mis compras</a>
              </li>
              <li>
                <a href="#/mis-looks">Mis looks</a>
              </li>
              <li>
                <a href="#/favoritos" aria-current="page">Favoritos</a>
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
            <ul className="grid grid-4">
              <li>
                <article className="fav-card">
                  <div className="ph ph--menta " role="img" aria-label="Vestido Lino" data-label="Vestido Lino">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <button type="button" className="icon-btn icon-btn--white" aria-pressed="true" aria-label="Quitar Vestido Lino de favoritos">
                    <svg className="icon icon--20" aria-hidden="true">
                      <use href="#i-heart" />
                    </svg>
                  </button>
                  <strong className="label-2 fw-semibold">Vestido Lino</strong>
                  <span className="fw-bold label-2">$29.990</span>
                  <button type="button" className="btn btn--primary btn--md btn--block">Agregar al carrito</button>
                </article>
              </li>
              <li>
                <article className="fav-card is-soldout">
                  <div className="ph ph--lavanda " role="img" aria-label="Vestido Cruzado" data-label="Vestido Cruzado">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <span className="badge badge--dark" style={{ position: 'absolute', top: '8px', left: '8px' }}>Agotado</span>
                  <button type="button" className="icon-btn icon-btn--white" aria-pressed="true" aria-label="Quitar Vestido Cruzado de favoritos">
                    <svg className="icon icon--20" aria-hidden="true">
                      <use href="#i-heart" />
                    </svg>
                  </button>
                  <strong className="label-2 fw-semibold">Vestido Cruzado</strong>
                  <span className="fw-bold label-2 text-secondary">$29.990</span>
                  <button type="button" className="btn btn--secondary btn--md btn--block">Avísame si vuelve</button>
                </article>
              </li>
              <li>
                <article className="fav-card">
                  <div className="ph ph--lavanda " role="img" aria-label="Chaqueta Oversize" data-label="Chaqueta Oversize">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <button type="button" className="icon-btn icon-btn--white" aria-pressed="true" aria-label="Quitar Chaqueta Oversize de favoritos">
                    <svg className="icon icon--20" aria-hidden="true">
                      <use href="#i-heart" />
                    </svg>
                  </button>
                  <strong className="label-2 fw-semibold">Chaqueta Oversize</strong>
                  <span className="fw-bold label-2">$34.990</span>
                  <button type="button" className="btn btn--primary btn--md btn--block">Agregar al carrito</button>
                </article>
              </li>
              <li>
                <article className="fav-card">
                  <div className="ph ph--amarillo " role="img" aria-label="Falda Midi" data-label="Falda Midi">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <button type="button" className="icon-btn icon-btn--white" aria-pressed="true" aria-label="Quitar Falda Midi de favoritos">
                    <svg className="icon icon--20" aria-hidden="true">
                      <use href="#i-heart" />
                    </svg>
                  </button>
                  <strong className="label-2 fw-semibold">Falda Midi</strong>
                  <span className="fw-bold label-2">$24.990</span>
                  <button type="button" className="btn btn--primary btn--md btn--block">Agregar al carrito</button>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
