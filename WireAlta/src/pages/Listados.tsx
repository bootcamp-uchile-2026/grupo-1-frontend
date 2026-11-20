import { useFetchCatalogo } from '../components/FetchCatalogo'
import { Link } from 'react-router'

import '../assets/css/views/listado.css'

const formatearPrecio = (precio: number) =>
  precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })

type CategoriaBuscadaProp = {
  categoria: string
}

export function Listado({ categoria }: CategoriaBuscadaProp) {

  const { cargando, productos } = useFetchCatalogo()

  // Filtra los productos cuya "categoria" coincide con la prop (sin importar mayúsculas/espacios)
  const productosFiltrados = productos.filter(
    (producto) => producto.categoria?.trim().toLowerCase() === categoria.trim().toLowerCase()
  )

  const todosLosProductos = productos

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
          {(categoria == 'Hombre' || categoria == 'Mujer') && (<p className="page-head__lead">Toda la ropa de {categoria.trim().toLowerCase()} que buscas en un solo lugar.</p>)}
          {categoria == 'Ofertas' && (<p className="page-head__lead">No te pierdas nuestras grandes. {categoria.trim().toLowerCase()}</p>)}
          {(categoria == 'Calzado' || categoria == 'vestido') && (<p className="page-head__lead">Encuentra el {categoria.trim().toLowerCase()} que siempre quisiste.</p>)}
          {categoria == 'Accesorios' && (<p className="page-head__lead">Encuentra los {categoria.trim().toLowerCase()} que siempre quisiste.</p>)}
        </div>
      </div>
      <div className="container main">
        <div className="split--filters--" style={{ display: 'grid' }}>
          {/* <aside aria-label="Filtros" className="hide-m">
            
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
          </aside>*/}
          <section aria-label="Productos">
            <ul className="grid grid-3">
              {cargando && <li>Cargando productos...</li>}

              {!cargando && categoria !== 'Todas' && productosFiltrados.length === 0 && (
                <li>No hay productos en esta categoría.</li>
              )}

              {!cargando && categoria === 'Todas' && (
                todosLosProductos.map((producto) =>
                (
                  <li key={producto.id}>
                    <article className="product-card">
                      <div className="product-card__media">
                        {producto.imagenUrl?.[0] ? (
                          <Link to={`/listados/${encodeURIComponent(categoria.trim().toLowerCase())}/${producto.id}`}>
                            <img
                              className="ratio-product"
                              src={producto.imagenUrl[0]}
                              alt={`${producto.nombre}, foto de producto`}
                              loading="lazy"
                            />
                          </Link>
                        ) : (
                          <div className="ph ph--menta ratio-product" role="img" aria-label={`${producto.nombre}, foto de producto`} data-label={`${producto.nombre}, foto de producto`}>
                            <svg className="icon icon--32" aria-hidden="true">
                              <use href="#i-nopic" />
                            </svg>
                          </div>
                        )}
                        {/* <button type="button" className="icon-btn icon-btn--white product-card__fav" aria-pressed="false" aria-label={`Agregar ${producto.nombre} a favoritos`}>
                        <svg className="icon icon--20" aria-hidden="true">
                          <use href="#i-heart" />
                        </svg>
                      </button> */}
                      </div>
                      <div className="stack" style={{ gap: 'var(--space-xxs)' }}>
                        {/*<a className="product-card__name" href={`${categoria.toLowerCase()}/producto/${producto.id}`}>{producto.nombre}</a>*/}
                        <Link to={`/listados/${encodeURIComponent(categoria.trim().toLowerCase())}/${producto.id}`}>
                          {producto.nombre}
                        </Link>
                        <p className="price">
                          <span className="price__now">{formatearPrecio(producto.precio)}</span>
                        </p>
                      </div>
                    </article>
                  </li>
                ))
              )
              }

              {!cargando && productosFiltrados.map((producto) => (
                <li key={producto.id}>
                  <article className="product-card">
                    <div className="product-card__media">
                      {producto.imagenUrl?.[0] ? (
                        <Link to={`/listados/${encodeURIComponent(categoria.trim().toLowerCase())}/${producto.id}`}>
                          <img
                            className="ratio-product"
                            src={producto.imagenUrl[0]}
                            alt={`${producto.nombre}, foto de producto`}
                            loading="lazy"
                          />
                        </Link>
                      ) : (
                        <div className="ph ph--menta ratio-product" role="img" aria-label={`${producto.nombre}, foto de producto`} data-label={`${producto.nombre}, foto de producto`}>
                          <svg className="icon icon--32" aria-hidden="true">
                            <use href="#i-nopic" />
                          </svg>
                        </div>
                      )}
                      {/* <button type="button" className="icon-btn icon-btn--white product-card__fav" aria-pressed="false" aria-label={`Agregar ${producto.nombre} a favoritos`}>
                        <svg className="icon icon--20" aria-hidden="true">
                          <use href="#i-heart" />
                        </svg>
                      </button> */}
                    </div>
                    <div className="stack" style={{ gap: 'var(--space-xxs)' }}>
                      {/*<a className="product-card__name" href={`${categoria.toLowerCase()}/producto/${producto.id}`}>{producto.nombre}</a>*/}
                      <Link to={`/listados/${encodeURIComponent(categoria.trim().toLowerCase())}/${producto.id}`}>
                        {producto.nombre}
                      </Link>
                      <p className="price">
                        <span className="price__now">{formatearPrecio(producto.precio)}</span>
                      </p>
                    </div>
                  </article>
                </li>
              ))}

            </ul>
          </section>
        </div>

      </div>
    </>
  )
}
