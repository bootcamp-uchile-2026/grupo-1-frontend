import type { CSSProperties } from 'react'
import '../assets/css/views/listado.css'

type CategoriaBuscadaProp = {
  categoria: string
}


export function Listado( {categoria}: CategoriaBuscadaProp ) {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <nav className="crumbs" aria-label="Migas de pan">
            <ol>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                {categoria}
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">{categoria}</h1>
          <p className="page-head__lead">Encuentra el vestido perfecto para cada ocasión.</p>
        </div>
      </div>
      <div className="container main">
        <div className="split--filters" style={{ display: 'grid' }}>
          <aside aria-label="Filtros" className="hide-m">
            <div className="filter-group">
              <h3>Categoría</h3>
              <label className="check">
                <input type="checkbox" name="c" checked />
                Casual
              </label>
              <label className="check">
                <input type="checkbox" name="c" />
                Fiesta
              </label>
              <label className="check">
                <input type="checkbox" name="c" checked />
                Oficina
              </label>
              <label className="check">
                <input type="checkbox" name="c" />
                Playa
              </label>
            </div>
            <div className="filter-group">
              <h3>Talla</h3>
              <div className="sizes" role="group" aria-label="Talla">
                <button type="button" className="size" aria-pressed="false">XS</button>
                <button type="button" className="size" aria-pressed="false">S</button>
                <button type="button" className="size" aria-pressed="true">M</button>
                <button type="button" className="size" aria-pressed="false">L</button>
                <button type="button" className="size" aria-disabled="true" aria-label="XL, agotada">XL</button>
              </div>
            </div>
            <div className="filter-group">
              <h3>Color</h3>
              <label className="check">
                <input type="checkbox" />
                <span className="swatch swatch--sm" style={{ '--sw': 'var(--warning-100)' } as CSSProperties} />
                Beige
              </label>
              <label className="check">
                <input type="checkbox" />
                <span className="swatch swatch--sm" style={{ '--sw': 'var(--neutral-500)' } as CSSProperties} />
                Negro
              </label>
              <label className="check">
                <input type="checkbox" />
                <span className="swatch swatch--sm" style={{ '--sw': 'var(--secondary-400)' } as CSSProperties} />
                Lila
              </label>
            </div>
            <div className="filter-group">
              <h3>Precio</h3>
              <label className="check">
                <input type="checkbox" name="c" />
                Hasta $20.000
              </label>
              <label className="check">
                <input type="checkbox" name="c" checked />
                $20.000 - $40.000
              </label>
              <label className="check">
                <input type="checkbox" name="c" />
                Más de $40.000
              </label>
            </div>
          </aside>
          <section aria-label="Productos">
            <ul className="grid grid-3">
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
            </ul>
          </section>
        </div>
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
