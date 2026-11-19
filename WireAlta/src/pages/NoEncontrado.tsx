

export function NoEncontrado() {
  return (
    <>
      <div className="container main stack gap-lg">
        <h1 className="sr-only">Error 404</h1>
        <div className="empty">
          <div className="empty__icon">
            <svg className="icon icon--32" aria-hidden="true">
              <use href="#i-search" />
            </svg>
          </div>
          <h2 className="h5">No encontramos esta página</h2>
          <p>Puede que el enlace haya cambiado o ya no exista. Prueba buscando o vuelve al inicio.</p>
          <div className="row gap-sm wrap" style={{ justifyContent: 'center' }}>
            <a className="btn btn--primary" href="/">Volver al inicio</a>
            <a className="btn btn--secondary" href="/ayudaCambios">Ir a la ayuda</a>
          </div>
        </div>
        <h2 className="h5">Busca por categoría</h2>
        <div className="chips">
          <a className="chip" href="/listado/Mujer">Mujer</a>
          <a className="chip" href="/listado/Hombre">Hombre</a>
          <a className="chip" href="/listado/Accesorios">Accesorios</a>
          <a className="chip" href="/listado/Calzados">Calzados</a>
        </div>
        {/*
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
        </ul>*/}
      </div>
    </>
  )
}
