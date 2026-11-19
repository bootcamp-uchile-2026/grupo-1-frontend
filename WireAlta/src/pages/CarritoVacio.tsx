
import '../assets/css/views/carrito.css'

export default function CarritoVacio() {
  return (
    <>
      <div className="container main">
        <h1 className="h3" style={{ marginBlock: 'var(--space-base) var(--space-lg)' }}>Tu carrito</h1>
        <div className="empty">
          <div className="empty__icon">
            <svg className="icon icon--32" aria-hidden="true">
              <use href="#i-cart" />
            </svg>
          </div>
          <h2 className="h5">Tu carrito está vacío</h2>
          <p>Explora la nueva colección o retoma lo que guardaste en favoritos.</p>
          <div className="row gap-sm wrap" style={{ justifyContent: 'center' }}>
            <a className="btn btn--primary" href="#/listado">Ver novedades</a>
            <a className="btn btn--secondary" href="#/favoritos">Ver mis favoritos</a>
          </div>
        </div>
        <h2 className="h5 mt-xl3" style={{ marginBottom: 'var(--space-lg)' }}>Te podría gustar</h2>
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
