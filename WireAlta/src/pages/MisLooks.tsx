
import '../assets/css/views/cuenta.css'
import '../assets/css/views/ayuda.css'
import '../assets/css/views/looks.css'

export default function MisLooks() {
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
                <span aria-current="page">Mis looks</span>
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">Mis looks</h1>
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
                <a href="#/mis-looks" aria-current="page">Mis looks</a>
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
            <div className="tabs" role="tablist">
              <button className="tab" role="tab" aria-selected="true">Creados por mí (3)</button>
              <button className="tab" role="tab" aria-selected="false">Guardados (5)</button>
            </div>
            <ul className="grid grid-3">
              <li className="look-card">
                <div className="ph ph--menta ratio-look " role="img" aria-label="Look Mi look brunch" data-label="Look Mi look brunch">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <h3>Mi look brunch</h3>
                  <span className="status status--success">
                    <svg className="icon icon--16" aria-hidden="true">
                      <use href="#i-share" />
                    </svg>
                    Publicado
                  </span>
                </div>
                <div className="look-card__thumbs" aria-hidden="true">
                  <div className="ph ph--menta " role="img" aria-label="Prenda" data-label="Prenda">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <div className="ph ph--amarillo " role="img" aria-label="Prenda" data-label="Prenda">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <div className="ph ph--coral " role="img" aria-label="Prenda" data-label="Prenda">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                </div>
                <span className="body-3 text-secondary">3 prendas · $51.980</span>
                <div className="stack gap-xs">
                  <button type="button" className="btn btn--secondary btn--md btn--block">Editar</button>
                  <button type="button" className="btn btn--primary btn--md btn--block">Agregar al carrito</button>
                </div>
              </li>
              <li className="look-card">
                <div className="ph ph--coral ratio-look " role="img" aria-label="Look Oficina lunes" data-label="Look Oficina lunes">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <h3>Oficina lunes</h3>
                  <span className="status status--info">Privado</span>
                </div>
                <div className="look-card__thumbs" aria-hidden="true">
                  <div className="ph ph--menta " role="img" aria-label="Prenda" data-label="Prenda">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <div className="ph ph--amarillo " role="img" aria-label="Prenda" data-label="Prenda">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <div className="ph ph--coral " role="img" aria-label="Prenda" data-label="Prenda">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                </div>
                <span className="body-3 text-secondary">3 prendas · $94.970</span>
                <div className="stack gap-xs">
                  <button type="button" className="btn btn--secondary btn--md btn--block">Editar</button>
                  <button type="button" className="btn btn--primary btn--md btn--block">Agregar al carrito</button>
                </div>
              </li>
              <li className="look-card">
                <div className="ph ph--amarillo ratio-look " role="img" aria-label="Look Viaje playa" data-label="Look Viaje playa">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <h3>Viaje playa</h3>
                  <span className="status status--info">Privado</span>
                </div>
                <div className="look-card__thumbs" aria-hidden="true">
                  <div className="ph ph--menta " role="img" aria-label="Prenda" data-label="Prenda">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <div className="ph ph--amarillo " role="img" aria-label="Prenda" data-label="Prenda">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <div className="ph ph--coral " role="img" aria-label="Prenda" data-label="Prenda">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                </div>
                <span className="body-3 text-secondary">3 prendas · $72.980</span>
                <div className="stack gap-xs">
                  <button type="button" className="btn btn--secondary btn--md btn--block">Editar</button>
                  <button type="button" className="btn btn--primary btn--md btn--block">Agregar al carrito</button>
                </div>
              </li>
            </ul>
            <div className="card card--subtle row gap-base wrap" style={{ justifyContent: 'space-between' }}>
              <div>
                <strong className="label-1">¿Quieres armar uno nuevo?</strong>
                <p className="body-3 text-secondary">Combina prendas por categoría y guárdalo para después.</p>
              </div>
              <a className="btn btn--secondary" href="#/arma-tu-look">Arma tu look</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
