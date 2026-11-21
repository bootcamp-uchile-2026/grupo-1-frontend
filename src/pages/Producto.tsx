import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { useCarritoStore } from '../store/useCarritoStore'
import { resolveAssetImage } from '../jserver/resolveAssetImage';

import '../assets/css/views/producto.css'

const URL_PRODUCTOS = 'http://localhost:3006/productos'
const formatoPrecio = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' })
const normalizarCategoria = (valor: string) => valor.trim().toLowerCase()

type ProductoApi = {
  nombre: string
  precio: number
  categoria: string
  imagenUrl?: string[]
  novedad?: boolean
}

type EstadoProducto =
  | { tipo: 'cargando' | 'no-encontrado' | 'error' }
  | { tipo: 'listo'; producto: ProductoApi }

export function Producto() {
  const { categoria, id } = useParams<'categoria' | 'id'>()

  if (!categoria || !id) {
    return <p className="container">Producto no encontrado.</p>
  }

  return <ProductoDetalle key={JSON.stringify([categoria, id])} categoria={categoria} id={id} />
}

function ProductoDetalle({ categoria, id }: { categoria: string; id: string }) {

  const agregar = useCarritoStore((estado) => estado.agregar)

  const [estado, setEstado] = useState<EstadoProducto>({ tipo: 'cargando' })

  useEffect(() => {
    const controlador = new AbortController()

    async function cargarProducto() {
      try {
        const respuesta = await fetch(`${URL_PRODUCTOS}/${encodeURIComponent(id)}`, {
          signal: controlador.signal,
        })

        if (controlador.signal.aborted) return

        if (respuesta.status === 404) {
          setEstado({ tipo: 'no-encontrado' })
          return
        }

        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`)

        const producto: ProductoApi = await respuesta.json()
        if (controlador.signal.aborted) return

        if (normalizarCategoria(producto.categoria) !== normalizarCategoria(categoria)) {
          setEstado({ tipo: 'no-encontrado' })
          return
        }

        setEstado({ tipo: 'listo', producto })
      } catch {
        if (!controlador.signal.aborted) setEstado({ tipo: 'error' })
      }
    }

    void cargarProducto()
    return () => controlador.abort()
  }, [categoria, id])

  const producto = estado.tipo === 'listo' ? estado.producto : null
  const imagenPrincipal = resolveAssetImage(producto?.imagenUrl?.[0]?.trim())

  return (
    <>
      <div className="container" style={{ paddingTop: 'var(--space-lg)' }}>
        <nav className="crumbs" aria-label="Migas de pan">
          <ol>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <Link to={`/listados/${encodeURIComponent(categoria)}`}> {categoria.charAt(0).toUpperCase() + categoria.slice(1)}</Link>
            </li>
            {producto && (
              <li>
                <span aria-current="page">{producto.nombre}</span>
              </li>
            )}
          </ol>
        </nav>
      </div>
      <div className="container main">
        {estado.tipo === 'cargando' && <p role="status">Cargando producto...</p>}
        {estado.tipo === 'no-encontrado' && <p role="status">Producto no encontrado.</p>}
        {estado.tipo === 'error' && <p role="alert">No se pudo cargar el producto.</p>}
        {producto && (
          <div className="split--product" style={{ display: 'grid' }}>
            <section className="gallery" aria-label="Galería de fotos">
              <div className="gallery__main">
                <div
                  className="ph ph--menta"
                  role="img"
                  aria-label={producto.nombre}
                  style={imagenPrincipal ? {
                    backgroundImage: `url("${imagenPrincipal}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  } : undefined}
                >
                  {!imagenPrincipal && (
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  )}
                </div>
              </div>
            </section>
            <section className="buy" aria-labelledby="p-name">
              {producto.novedad && (
                <span className="badge badge--brand" style={{ alignSelf: 'flex-start' }}>Nuevo</span>
              )}
              <h1 className="h3" id="p-name">{producto.nombre}</h1>
              <p className="buy__price">{formatoPrecio.format(producto.precio)}</p>
              <div className="buy__ctas">
                <button
                  type="button"
                  className="btn btn--primary grow"
                  onClick={() =>
                    agregar({
                      id,
                      nombre: producto.nombre,
                      precio: producto.precio,
                    })
                  }
                >
                  Agregar al carrito
                </button>
              </div>

              <ul className="buy__perks">
                <li>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-refresh" />
                  </svg>
                  Cambio gratuito dentro de 30 días ·
                </li>
                <li>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-truck" />
                  </svg>
                  Envíos a todo Chile · Calcula tu envío
                </li>
              </ul>
              <div>
                <details className="accordion" open>
                  <summary>
                    Envíos y cambios
                    <svg className="icon icon--20" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <div className="accordion__body">Envío gratis sobre $40.000. Cambios gratis dentro de 30 días.</div>
                </details>
                <details className="accordion">
                  <summary>
                    Pago seguro
                    <svg className="icon icon--20" aria-hidden="true">
                      <use href="#i-chevron-down" />
                    </svg>
                  </summary>
                  <div className="accordion__body">Aceptamos tarjetas de crédito, débito y transferencia.</div>
                </details>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  )
}
