
import '../assets/css/views/looks.css'

export default function Looks() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <nav className="crumbs" aria-label="Migas de pan">
            <ol>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <span aria-current="page">Looks</span>
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">Looks</h1>
          <p className="page-head__lead">Combinaciones completas listas para comprar, prenda por prenda.</p>
        </div>
      </div>
      <div className="filter-bar">
        <div className="container">
          <div className="chips" role="radiogroup" aria-label="Ocasión">
            <button type="button" className="chip" role="radio" aria-checked="true">
              <svg className="icon icon--16" aria-hidden="true">
                <use href="#i-check" />
              </svg>
              Todos
            </button>
            <button type="button" className="chip" role="radio" aria-checked="false">Casual</button>
            <button type="button" className="chip" role="radio" aria-checked="false">Trabajo</button>
            <button type="button" className="chip" role="radio" aria-checked="false">Noche</button>
            <button type="button" className="chip" role="radio" aria-checked="false">Fiesta</button>
            <button type="button" className="chip" role="radio" aria-checked="false">Playa</button>
          </div>
          <a className="btn btn--secondary btn--md hide-m" href="#/arma-tu-look" style={{ marginLeft: 'auto' }}>
            Arma tu look
          </a>
        </div>
      </div>
      <div className="container main">
        <ul className="grid grid-3 grid--stack-m">
          <li>
            <article className="look-card">
              <div className="look-card__media">
                <div className="ph ph--amarillo ratio-look " role="img" aria-label="Look Verano Lino" data-label="Look Verano Lino">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <span className="badge badge--light">Casual</span>
                <button type="button" className="icon-btn icon-btn--white" aria-pressed="false" aria-label="Guardar look Verano Lino">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <h3>
                <a href="#/detalle-look" style={{ textDecoration: 'none' }}>Look Verano Lino</a>
              </h3>
              <div className="row" style={{ justifyContent: 'space-between' }}>
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
                <span className="body-3 text-secondary">
                  3 prendas ·
                  <strong className="text-primary" style={{ color: 'var(--text-primary)' }}>$86.970</strong>
                </span>
              </div>
            </article>
          </li>
          <li>
            <article className="look-card">
              <div className="look-card__media">
                <div className="ph ph--coral ratio-look " role="img" aria-label="Look Oficina Relajada" data-label="Look Oficina Relajada">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <span className="badge badge--light">Trabajo</span>
                <button type="button" className="icon-btn icon-btn--white" aria-pressed="false" aria-label="Guardar look Oficina Relajada">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <h3>
                <a href="#/detalle-look" style={{ textDecoration: 'none' }}>Look Oficina Relajada</a>
              </h3>
              <div className="row" style={{ justifyContent: 'space-between' }}>
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
                <span className="body-3 text-secondary">
                  3 prendas ·
                  <strong className="text-primary" style={{ color: 'var(--text-primary)' }}>$94.970</strong>
                </span>
              </div>
            </article>
          </li>
          <li>
            <article className="look-card">
              <div className="look-card__media">
                <div className="ph ph--lavanda ratio-look " role="img" aria-label="Look Noche Urbana" data-label="Look Noche Urbana">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <span className="badge badge--light">Noche</span>
                <button type="button" className="icon-btn icon-btn--white" aria-pressed="false" aria-label="Guardar look Noche Urbana">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <h3>
                <a href="#/detalle-look" style={{ textDecoration: 'none' }}>Look Noche Urbana</a>
              </h3>
              <div className="row" style={{ justifyContent: 'space-between' }}>
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
                <span className="body-3 text-secondary">
                  3 prendas ·
                  <strong className="text-primary" style={{ color: 'var(--text-primary)' }}>$64.980</strong>
                </span>
              </div>
            </article>
          </li>
          <li>
            <article className="look-card">
              <div className="look-card__media">
                <div className="ph ph--menta ratio-look " role="img" aria-label="Look Brunch" data-label="Look Brunch">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <span className="badge badge--light">Casual</span>
                <button type="button" className="icon-btn icon-btn--white" aria-pressed="false" aria-label="Guardar look Brunch">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <h3>
                <a href="#/detalle-look" style={{ textDecoration: 'none' }}>Look Brunch</a>
              </h3>
              <div className="row" style={{ justifyContent: 'space-between' }}>
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
                <span className="body-3 text-secondary">
                  3 prendas ·
                  <strong className="text-primary" style={{ color: 'var(--text-primary)' }}>$51.980</strong>
                </span>
              </div>
            </article>
          </li>
          <li>
            <article className="look-card">
              <div className="look-card__media">
                <div className="ph ph--lavanda ratio-look " role="img" aria-label="Look Denim Total" data-label="Look Denim Total">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <span className="badge badge--light">Casual</span>
                <button type="button" className="icon-btn icon-btn--white" aria-pressed="false" aria-label="Guardar look Denim Total">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <h3>
                <a href="#/detalle-look" style={{ textDecoration: 'none' }}>Look Denim Total</a>
              </h3>
              <div className="row" style={{ justifyContent: 'space-between' }}>
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
                <span className="body-3 text-secondary">
                  3 prendas ·
                  <strong className="text-primary" style={{ color: 'var(--text-primary)' }}>$89.970</strong>
                </span>
              </div>
            </article>
          </li>
          <li>
            <article className="look-card">
              <div className="look-card__media">
                <div className="ph ph--coral ratio-look " role="img" aria-label="Look Fin de semana" data-label="Look Fin de semana">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <span className="badge badge--light">Casual</span>
                <button type="button" className="icon-btn icon-btn--white" aria-pressed="false" aria-label="Guardar look Fin de semana">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <h3>
                <a href="#/detalle-look" style={{ textDecoration: 'none' }}>Look Fin de semana</a>
              </h3>
              <div className="row" style={{ justifyContent: 'space-between' }}>
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
                <span className="body-3 text-secondary">
                  3 prendas ·
                  <strong className="text-primary" style={{ color: 'var(--text-primary)' }}>$72.980</strong>
                </span>
              </div>
            </article>
          </li>
        </ul>
        <nav aria-label="Paginación">
          <ul className="pagination">
            <li>
              <a href="#" aria-label="Página anterior">
                <svg className="icon icon--16" aria-hidden="true">
                  <use href="#i-arrow-left" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" aria-current="page" aria-label="Página 1">1</a>
            </li>
            <li>
              <a href="#" aria-label="Página 2">2</a>
            </li>
            <li>
              <a href="#" aria-label="Página 3">3</a>
            </li>
            <li>
              <a href="#" aria-label="Página 4">4</a>
            </li>
            <li>
              <span>…</span>
            </li>
            <li>
              <a href="#" aria-label="Página 10">10</a>
            </li>
            <li>
              <a href="#" aria-label="Página siguiente">
                <svg className="icon icon--16" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
