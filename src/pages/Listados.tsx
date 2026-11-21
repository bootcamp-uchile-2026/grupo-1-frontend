import { useFetchCatalogo } from '../components/FetchCatalogo'
import { Link } from 'react-router'
import { resolveAssetImage } from '../jserver/resolveAssetImage';

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
                              src={resolveAssetImage(producto.imagenUrl[0])}
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
                            src={resolveAssetImage(producto.imagenUrl[0])}
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
