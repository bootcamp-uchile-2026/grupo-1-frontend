
import '../assets/css/views/carrito.css'

export default function Carrito() {
  return (
    <>
      <div className="container main">
        <h1 className="h3" style={{ marginBlock: 'var(--space-base) var(--space-lg)' }}>Tu carrito</h1>
        <div className="split">
          <section aria-label="Productos en el carrito">
            <ul style={{ borderTop: '1px solid var(--border-default)' }}>
              <li className="cart-item">
                <div className="ph ph--menta " role="img" aria-label="Vestido Lino" data-label="Vestido Lino">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <div className="stack gap-xs">
                  <a className="mini__name" href="#/producto" style={{ textDecoration: 'none' }}>Vestido Lino</a>
                  <span className="mini__meta">Beige · Talla M</span>
                  <button type="button" className="btn btn--tertiary btn--sm cart-item__remove" style={{ alignSelf: 'flex-start', paddingInline: '0' }}>
                    <svg className="icon icon--16" aria-hidden="true">
                      <use href="#i-trash" />
                    </svg>
                    Eliminar
                  </button>
                </div>
                <div className="cart-item__actions">
                  <div className="qty" role="group" aria-label="Cantidad">
                    <button type="button" aria-label="Quitar uno" disabled>
                      <svg className="icon icon--16" aria-hidden="true">
                        <use href="#i-minus" />
                      </svg>
                    </button>
                    <output aria-live="polite">1</output>
                    <button type="button" aria-label="Agregar uno">
                      <svg className="icon icon--16" aria-hidden="true">
                        <use href="#i-plus" />
                      </svg>
                    </button>
                  </div>
                  <span className="cart-item__price">$29.990</span>
                </div>
              </li>
              <li className="cart-item">
                <div className="ph ph--lavanda " role="img" aria-label="Chaqueta Oversize" data-label="Chaqueta Oversize">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <div className="stack gap-xs">
                  <a className="mini__name" href="#/producto" style={{ textDecoration: 'none' }}>Chaqueta Oversize</a>
                  <span className="mini__meta">Negro · Talla M</span>
                  <button type="button" className="btn btn--tertiary btn--sm cart-item__remove" style={{ alignSelf: 'flex-start', paddingInline: '0' }}>
                    <svg className="icon icon--16" aria-hidden="true">
                      <use href="#i-trash" />
                    </svg>
                    Eliminar
                  </button>
                </div>
                <div className="cart-item__actions">
                  <div className="qty" role="group" aria-label="Cantidad">
                    <button type="button" aria-label="Quitar uno" disabled>
                      <svg className="icon icon--16" aria-hidden="true">
                        <use href="#i-minus" />
                      </svg>
                    </button>
                    <output aria-live="polite">1</output>
                    <button type="button" aria-label="Agregar uno">
                      <svg className="icon icon--16" aria-hidden="true">
                        <use href="#i-plus" />
                      </svg>
                    </button>
                  </div>
                  <span className="cart-item__price">$34.990</span>
                </div>
              </li>
            </ul>
          </section>
          <aside className="summary" aria-labelledby="sum-t">
            <h2 className="h5" id="sum-t">Resumen del pedido</h2>
            <div className="summary__row">
              <span>Subtotal</span>
              <span>$64.980</span>
            </div>
            <div className="summary__row">
              <span>Envío</span>
              <span className="text-success fw-semibold">Gratis</span>
            </div>
            <div className="coupon">
              <div className="field">
                <label className="field__label" htmlFor="cupon">Código de descuento</label>
                <input className="input" id="cupon" type="text" placeholder="Ingresa tu código" />
              </div>
              <button type="button" className="btn btn--secondary" style={{ alignSelf: 'flex-end' }}>Aplicar</button>
            </div>
            <hr className="divider" />
            <div className="summary__total">
              <span>Total</span>
              <strong>$64.980</strong>
            </div>
            <a className="btn btn--primary btn--block" href="#/checkout">Ir a pagar</a>
            <a className="link" style={{ alignSelf: 'center' }} href="#/listado">Seguir comprando</a>
            <p className="summary__note">
              <svg className="icon icon--16" aria-hidden="true">
                <use href="#i-lock" />
              </svg>
              Pago seguro con cifrado SSL
            </p>
          </aside>
        </div>
      </div>
    </>
  )
}
