import type { CSSProperties } from 'react'

import '../assets/css/views/cuenta.css'
import '../assets/css/views/carrito.css'

export default function IniciarCambio() {
  return (
    <>
      <div className="page-head page-head--plain">
        <div className="container">
          <nav className="crumbs" aria-label="Migas de pan">
            <ol>
              <li>
                <a href="#">Mi cuenta</a>
              </li>
              <li>
                <a href="#">Mis compras</a>
              </li>
              <li>
                <span aria-current="page">Cambio o devolución</span>
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">Cambio o devolución</h1>
          <p className="page-head__lead">Pedido #10234 · Entregado el 28 de septiembre</p>
        </div>
      </div>
      <div className="container main">
        <div className="split split--wide">
          <form className="stack gap-lg">
            <fieldset className="stack gap-base">
              <legend className="h6">1. ¿Qué productos quieres cambiar o devolver?</legend>
              <div className="stack gap-xs">
                <p className="body-4 text-secondary">
                  Puedes elegir más de uno. Cada producto puede ser cambio o devolución.
                </p>
                <p className="row gap-sm">
                  <span className="counter-chip">2 productos elegidos</span>
                  <span className="body-4 text-secondary">1 cambio · 1 devolución</span>
                </p>
              </div>
              <div className="option-product is-selected">
                <label className="check">
                  <input type="checkbox" name="c" checked />
                  <div className="mini mini--lg">
                    <div className="ph ph--menta " role="img" aria-label="Vestido Lino" data-label="Vestido Lino">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Vestido Lino</span>
                      <span className="mini__meta">Beige · Talla M · $29.990</span>
                    </div>
                  </div>
                </label>
                <div className="option-product__inner">
                  <div className="chips" role="radiogroup" aria-label="Acción">
                    <button type="button" className="chip" role="radio" aria-checked="true">
                      <svg className="icon icon--16" aria-hidden="true">
                        <use href="#i-check" />
                      </svg>
                      Cambio
                    </button>
                    <button type="button" className="chip" role="radio" aria-checked="false">Devolución</button>
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="s-motivo">Motivo *</label>
                    <select className="select" id="s-motivo">
                      <option value="" disabled>Selecciona una opción</option>
                      <option>Me queda grande</option>
                      <option selected>Me queda chico</option>
                      <option>No es lo que esperaba</option>
                      <option>Llegó dañado</option>
                    </select>
                  </div>
                  <div className="stack gap-xs">
                    <span className="field__label">Nueva talla</span>
                    <div className="sizes" role="group" aria-label="Talla">
                      <button type="button" className="size" aria-pressed="false">XS</button>
                      <button type="button" className="size" aria-pressed="false">S</button>
                      <button type="button" className="size" aria-pressed="false">M</button>
                      <button type="button" className="size" aria-pressed="true">L</button>
                      <button type="button" className="size" aria-disabled="true" aria-label="XL, agotada">XL</button>
                    </div>
                  </div>
                  <div className="stack gap-xs">
                    <span className="field__label">Color</span>
                    <div className="swatches" role="group" aria-label="Color">
                      <button type="button" className="swatch" style={{ '--sw': 'var(--warning-100)' } as CSSProperties} aria-label="Beige" aria-pressed="true" />
                      <button type="button" className="swatch" style={{ '--sw': 'var(--neutral-500)' } as CSSProperties} aria-label="Negro" aria-pressed="false" />
                      <button type="button" className="swatch" style={{ '--sw': 'var(--secondary-400)' } as CSSProperties} aria-label="Lila" aria-pressed="false" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="option-product is-selected">
                <label className="check">
                  <input type="checkbox" name="c" checked />
                  <div className="mini mini--lg">
                    <div className="ph ph--menta " role="img" aria-label="Blusa Lino" data-label="Blusa Lino">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Blusa Lino</span>
                      <span className="mini__meta">Blanco · Talla S · $24.990</span>
                    </div>
                  </div>
                </label>
                <div className="option-product__inner">
                  <div className="chips" role="radiogroup" aria-label="Acción">
                    <button type="button" className="chip" role="radio" aria-checked="false">Cambio</button>
                    <button type="button" className="chip" role="radio" aria-checked="true">
                      <svg className="icon icon--16" aria-hidden="true">
                        <use href="#i-check" />
                      </svg>
                      Devolución
                    </button>
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="s-motivo">Motivo *</label>
                    <select className="select" id="s-motivo">
                      <option value="" disabled>Selecciona una opción</option>
                      <option>Me queda grande</option>
                      <option>Me queda chico</option>
                      <option selected>No es lo que esperaba</option>
                      <option>Llegó dañado</option>
                    </select>
                  </div>
                  <p className="body-4 text-secondary">
                    Reembolso estimado:
                    <strong>$24.990</strong>
                    a tu tarjeta terminada en 4417.
                  </p>
                </div>
              </div>
            </fieldset>
            <fieldset className="stack gap-sm">
              <legend className="h6" style={{ marginBottom: 'var(--space-sm)' }}>2. ¿Cómo nos los envías?</legend>
              <label className="option check">
                <input type="radio" name="envio" checked />
                <span>
                  <strong>Retiro a domicilio</strong>
                  <small>Pasamos a buscarlo en 2 a 3 días hábiles.</small>
                </span>
                <span className="option__extra text-success">Gratis</span>
              </label>
              <label className="option check">
                <input type="radio" name="envio" />
                <span>
                  <strong>Dejarlo en un punto de entrega</strong>
                  <small>Más de 300 puntos en todo Chile.</small>
                </span>
                <span className="option__extra text-success">Gratis</span>
              </label>
            </fieldset>
          </form>
          <aside className="summary" aria-labelledby="rs-t">
            <h2 className="h5" id="rs-t">Resumen de la solicitud</h2>
            <div className="mini">
              <div className="ph ph--menta " role="img" aria-label="Vestido Lino" data-label="Vestido Lino">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <div className="mini__info">
                <span className="mini__name">Vestido Lino</span>
                <span className="mini__meta">Cambio de talla: M → L · Beige</span>
              </div>
            </div>
            <div className="mini">
              <div className="ph ph--menta " role="img" aria-label="Blusa Lino" data-label="Blusa Lino">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <div className="mini__info">
                <span className="mini__name">Blusa Lino</span>
                <span className="mini__meta">Devolución · Reembolso $24.990</span>
              </div>
            </div>
            <div className="summary__row">
              <span>Envío</span>
              <span>Retiro a domicilio · Gratis</span>
            </div>
            <div className="summary__row">
              <span>Costo del cambio</span>
              <span>$0</span>
            </div>
            <div className="summary__row">
              <span>Reembolso estimado</span>
              <span className="fw-semibold" style={{ color: 'var(--text-primary)' }}>$24.990</span>
            </div>
            <a className="btn btn--primary btn--block" href="#/solicitud-recibida">Confirmar solicitud</a>
            <p className="body-4 text-secondary">Te enviaremos la etiqueta y las instrucciones por correo.</p>
          </aside>
        </div>
      </div>
    </>
  )
}
