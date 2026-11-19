
import '../assets/css/views/listado.css'

export default function SinResultados() {
  return (
    <>
      <div className="page-head page-head--plain">
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
          <h1 className="h3 page-head__title">Resultados para “vestdo lnio”</h1>
        </div>
      </div>
      <div className="container main stack gap-lg">
        <div className="empty">
          <div className="empty__icon">
            <svg className="icon icon--32" aria-hidden="true">
              <use href="#i-search" />
            </svg>
          </div>
          <h2 className="h5">No encontramos resultados para “vestdo lnio”</h2>
          <p>
            ¿Quisiste decir
            <a className="link" href="#/resultados">vestido lino</a>
            ?
            <ul className="body-3 text-secondary" style={{ listStyle: 'disc', textAlign: 'left', paddingLeft: '20px' }}>
              <li>Revisa la ortografía</li>
              <li>Usa palabras más generales, como “vestido”</li>
              <li>Prueba con otra categoría</li>
            </ul>
          </p>
          <div className="row gap-sm wrap" style={{ justifyContent: 'center' }} />
        </div>
        <h2 className="h5">Busca por categoría</h2>
        <div className="chips">
          <a className="chip" href="#/listado">Vestidos</a>
          <a className="chip" href="#/listado">Blusas</a>
          <a className="chip" href="#/listado">Pantalones</a>
          <a className="chip" href="#/listado">Chaquetas</a>
          <a className="chip" href="#/listado">Ofertas</a>
        </div>
        <h2 className="h5">Te podría gustar</h2>
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
        </ul>
      </div>
</>    
  )
}
