
import '../assets/css/views/listado.css'

export default function Resultados() {
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
                <span aria-current="page">Búsqueda</span>
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">Resultados para “vestido”</h1>
          <p className="page-head__lead">48 productos encontrados</p>
        </div>
      </div>
      <div className="filter-bar">
        <div className="container">
          <button type="button" className="chip chip--square hide-d">
            <svg className="icon icon--16" aria-hidden="true">
              <use href="#i-filter" />
            </svg>
            Filtros (2)
          </button>
          <div className="chips hide-m">
            <button type="button" className="chip chip--square" aria-haspopup="listbox">
              Talla
              <svg className="icon icon--16" aria-hidden="true">
                <use href="#i-chevron-down" />
              </svg>
            </button>
            <button type="button" className="chip chip--square" aria-haspopup="listbox">
              Color
              <svg className="icon icon--16" aria-hidden="true">
                <use href="#i-chevron-down" />
              </svg>
            </button>
            <button type="button" className="chip chip--square" aria-haspopup="listbox">
              Precio
              <svg className="icon icon--16" aria-hidden="true">
                <use href="#i-chevron-down" />
              </svg>
            </button>
            <button type="button" className="chip chip--square" aria-haspopup="listbox">
              Ocasión
              <svg className="icon icon--16" aria-hidden="true">
                <use href="#i-chevron-down" />
              </svg>
            </button>
          </div>
          <span className="filter-bar__count" role="status">48 productos</span>
          <button type="button" className="chip chip--square" aria-haspopup="listbox">
            Ordenar: Relevancia
            <svg className="icon icon--16" aria-hidden="true">
              <use href="#i-chevron-down" />
            </svg>
          </button>
        </div>
      </div>
      <div className="container main">
        <div className="chips" style={{ marginBottom: 'var(--space-lg)' }}>
          <span className="body-3 text-secondary">También buscaron:</span>
          <button type="button" className="chip" aria-pressed="false">vestido lino</button>
          <button type="button" className="chip" aria-pressed="false">midi</button>
          <button type="button" className="chip" aria-pressed="false">vestido fiesta</button>
        </div>
        <ul className="grid grid-4">
          <li>
            <article className="product-card">
              <div className="product-card__media">
                <div className="ph ph--menta ratio-product " role="img" aria-label="Vestido Lino, foto de producto" data-label="Vestido Lino, foto de producto">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <button type="button" className="icon-btn icon-btn--white product-card__fav" aria-pressed="false" aria-label="Agregar Vestido Lino a favoritos">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <div className="stack" style={{ gap: 'var(--space-xxs)' }}>
                <a className="product-card__name" href="#/producto">Vestido Lino</a>
                <p className="price">
                  <span className="price__now">$29.990</span>
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className="product-card">
              <div className="product-card__media">
                <div className="ph ph--lavanda ratio-product " role="img" aria-label="Vestido Midi, foto de producto" data-label="Vestido Midi, foto de producto">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <span className="badge badge--sale product-card__badge">-20%</span>
                <button type="button" className="icon-btn icon-btn--white product-card__fav" aria-pressed="false" aria-label="Agregar Vestido Midi a favoritos">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <div className="stack" style={{ gap: 'var(--space-xxs)' }}>
                <a className="product-card__name" href="#/producto">Vestido Midi</a>
                <p className="price">
                  <span className="price__now is-sale">
                    <span className="sr-only">Ahora</span>
                    $23.990
                  </span>
                  <span className="price__before">
                    <span className="sr-only">Antes</span>
                    $29.990
                  </span>
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className="product-card">
              <div className="product-card__media">
                <div className="ph ph--coral ratio-product " role="img" aria-label="Vestido Satén, foto de producto" data-label="Vestido Satén, foto de producto">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <button type="button" className="icon-btn icon-btn--white product-card__fav" aria-pressed="false" aria-label="Agregar Vestido Satén a favoritos">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <div className="stack" style={{ gap: 'var(--space-xxs)' }}>
                <a className="product-card__name" href="#/producto">Vestido Satén</a>
                <p className="price">
                  <span className="price__now">$29.990</span>
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className="product-card">
              <div className="product-card__media">
                <div className="ph ph--amarillo ratio-product " role="img" aria-label="Vestido Floral, foto de producto" data-label="Vestido Floral, foto de producto">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <button type="button" className="icon-btn icon-btn--white product-card__fav" aria-pressed="false" aria-label="Agregar Vestido Floral a favoritos">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <div className="stack" style={{ gap: 'var(--space-xxs)' }}>
                <a className="product-card__name" href="#/producto">Vestido Floral</a>
                <p className="price">
                  <span className="price__now">$29.990</span>
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className="product-card is-soldout">
              <div className="product-card__media">
                <div className="ph ph--lavanda ratio-product " role="img" aria-label="Vestido Cruzado, foto de producto" data-label="Vestido Cruzado, foto de producto">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <span className="badge badge--dark product-card__badge">Agotado</span>
                <button type="button" className="icon-btn icon-btn--white product-card__fav" aria-pressed="false" aria-label="Agregar Vestido Cruzado a favoritos">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <div className="stack" style={{ gap: 'var(--space-xxs)' }}>
                <a className="product-card__name" href="#/producto">Vestido Cruzado</a>
                <p className="price">
                  <span className="price__now">$29.990</span>
                </p>
                <a className="link link--sm" href="#">Avísame si vuelve</a>
              </div>
            </article>
          </li>
          <li>
            <article className="product-card">
              <div className="product-card__media">
                <div className="ph ph--menta ratio-product " role="img" aria-label="Vestido Escote, foto de producto" data-label="Vestido Escote, foto de producto">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <button type="button" className="icon-btn icon-btn--white product-card__fav" aria-pressed="false" aria-label="Agregar Vestido Escote a favoritos">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <div className="stack" style={{ gap: 'var(--space-xxs)' }}>
                <a className="product-card__name" href="#/producto">Vestido Escote</a>
                <p className="price">
                  <span className="price__now">$29.990</span>
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className="product-card">
              <div className="product-card__media">
                <div className="ph ph--lavanda ratio-product " role="img" aria-label="Chaqueta Oversize, foto de producto" data-label="Chaqueta Oversize, foto de producto">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <button type="button" className="icon-btn icon-btn--white product-card__fav" aria-pressed="false" aria-label="Agregar Chaqueta Oversize a favoritos">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <div className="stack" style={{ gap: 'var(--space-xxs)' }}>
                <a className="product-card__name" href="#/producto">Chaqueta Oversize</a>
                <p className="price">
                  <span className="price__now">$34.990</span>
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className="product-card">
              <div className="product-card__media">
                <div className="ph ph--menta ratio-product " role="img" aria-label="Blusa Lino, foto de producto" data-label="Blusa Lino, foto de producto">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <button type="button" className="icon-btn icon-btn--white product-card__fav" aria-pressed="false" aria-label="Agregar Blusa Lino a favoritos">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </button>
              </div>
              <div className="stack" style={{ gap: 'var(--space-xxs)' }}>
                <a className="product-card__name" href="#/producto">Blusa Lino</a>
                <p className="price">
                  <span className="price__now">$29.990</span>
                </p>
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
