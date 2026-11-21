import { useState } from 'react'
import { useCarritoStore } from '../store/useCarritoStore'
import '../assets/css/views/carrito.css'

type ProductoCatalogo = {
  id: number | string
  imagenUrl?: readonly string[]
}

type CarritoProps = {
  catalogo?: readonly ProductoCatalogo[]
  checkoutHref?: string
  listadoHref?: string
}

const formatoCLP = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
})

function MiniaturaProducto({ src }: { src?: string }) {
  const [falloCarga, setFalloCarga] = useState(false)

  return (
    <div className="ph ph--menta" aria-hidden="true">
      {src && !falloCarga ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          onError={() => setFalloCarga(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <svg className="icon icon--32" focusable="false">
          {/*<use href="#i-nopic" />*/}
        </svg>
      )}
    </div>
  )
}

export function Carrito({
  catalogo = [],
  checkoutHref = '/finalizarCompra',
  listadoHref = '/listados',
}: CarritoProps) {
  const items = useCarritoStore((estado) => estado.items)
  const agregar = useCarritoStore((estado) => estado.agregar)
  const quitar = useCarritoStore((estado) => estado.quitar)
  const eliminar = useCarritoStore((estado) => estado.eliminar)
  const vaciar = useCarritoStore((estado) => estado.vaciar)

  const subtotal = items.reduce(
    (suma, { producto, cantidad }) => suma + producto.precio * cantidad,
    0,
  )
  const imagenPorId = new Map(
    catalogo.map(({ id, imagenUrl }) => [String(id), imagenUrl?.[0]] as const)
  )

  return (
    <div className="container main">
      <h1 className="h3" style={{ marginBlock: 'var(--space-base) var(--space-lg)' }}>
        Tu carrito
      </h1>

      {items.length === 0 ? (
        <section className="stack gap-xs" aria-label="Carrito vacío">
          <p role="status">Tu carrito está vacío.</p>
          <div>
            <a className="btn btn--primary" href={listadoHref}>Seguir comprando</a>
          </div>
        </section>
      ) : (
        <div className="split">
          <section aria-label="Productos en el carrito">
            <ul style={{ borderTop: '1px solid var(--border-default)' }}>
              {items.map(({ producto, cantidad }) => {
                const imagen = imagenPorId.get(String(producto.id)) || "/img/sin-imagen.jpg";

                return (
                  <li className="cart-item" key={producto.id}>
                    <MiniaturaProducto key={imagen ?? ''} src={imagen} />
                    <div className="stack gap-xs">
                      <span className="mini__name">{producto.nombre}</span>
                      <span className="mini__meta">
                        {formatoCLP.format(producto.precio)} c/u
                      </span>
                      <button
                        type="button"
                        className="btn btn--tertiary btn--sm cart-item__remove"
                        style={{ alignSelf: 'flex-start', paddingInline: 0 }}
                        aria-label={`Eliminar ${producto.nombre}`}
                        onClick={() => eliminar(producto.id)}
                      >
                        <svg className="icon icon--16" aria-hidden="true">
                          <use href="#i-trash" />
                        </svg>
                        Eliminar
                      </button>
                    </div>

                    <div className="cart-item__actions">
                      <div className="qty" role="group" aria-label={`Cantidad de ${producto.nombre}`}>
                        <button
                          type="button"
                          aria-label={`Quitar una unidad de ${producto.nombre}`}
                          disabled={cantidad <= 1}
                          onClick={() => quitar(producto.id)}
                        >
                          −
                        </button>
                        <output aria-live="polite">{cantidad}</output>
                        <button
                          type="button"
                          aria-label={`Agregar una unidad de ${producto.nombre}`}
                          onClick={() => agregar(producto)}
                        >
                          +
                        </button>
                      </div>
                      <span className="cart-item__price" style={{paddingLeft:'10px'}}>
                        {formatoCLP.format(producto.precio * cantidad)}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>

            <button
              type="button"
              className="btn btn--tertiary btn--sm"
              onClick={() => {
                if (window.confirm('¿Quieres quitar todos los productos del carrito?')) {
                  vaciar()
                }
              }}
            >
              Vaciar carrito
            </button>
          </section>

          <aside className="summary" aria-labelledby="resumen-carrito">
            <h2 className="h5" id="resumen-carrito">Resumen del pedido</h2>
            <div className="summary__row">
              <span>Subtotal</span>
              <span>{formatoCLP.format(subtotal)}</span>
            </div>
            <div className="summary__row">
              <span>Envío</span>
              <span className="text-success fw-semibold">Gratis</span>
            </div>
            <hr className="divider" />
            <div className="summary__total" aria-live="polite" aria-atomic="true">
              <span>Total</span>
              <strong>{formatoCLP.format(subtotal)}</strong>
            </div>
            <a className="btn btn--primary btn--block" href={checkoutHref}>Ir a pagar</a>
            <a className="link" style={{ alignSelf: 'center' }} href={listadoHref}>
              Seguir comprando
            </a>
          </aside>
        </div>
      )}
    </div>
  )
}
