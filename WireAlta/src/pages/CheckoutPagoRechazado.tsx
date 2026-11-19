
import '../assets/css/views/carrito.css'
import '../assets/css/views/checkout.css'

export default function CheckoutPagoRechazado() {
  return (
    <>
      <div className="container main">
        <h1 className="h3" style={{ marginBlock: 'var(--space-base) var(--space-lg)' }}>Finalizar compra</h1>
        <div style={{ marginBottom: 'var(--space-lg)' }}>
          <div className="alert alert--error" role="alert" tabIndex={-1}>
            <svg className="icon icon--20" aria-hidden="true">
              <use href="#i-alert" />
            </svg>
            <div>
              <strong>Tu pago fue rechazado</strong>
              No se hizo ningún cargo. Revisa los datos de tu tarjeta o prueba con otro medio de pago. Tu carrito sigue guardado.
            </div>
          </div>
        </div>
        <div className="split">
          <form className="stack gap-lg" noValidate>
            <p className="req-note">Los campos con * son obligatorios.</p>
            <fieldset className="form-section">
              <legend>1. Datos de contacto</legend>
              <div className="field">
                <label className="field__label" htmlFor="f-nombrecompleto">Nombre completo *</label>
                <input className="input" id="f-nombrecompleto" type="text" placeholder="Ej: Camila Rojas" autoComplete="name" required />
              </div>
              <div className="form-row">
                <div className="field">
                  <label className="field__label" htmlFor="f-correoelectrónico">Correo electrónico *</label>
                  <input className="input" id="f-correoelectrónico" type="email" placeholder="nombre@correo.cl" autoComplete="email" required />
                </div>
                <div className="field">
                  <label className="field__label" htmlFor="f-teléfono">Teléfono *</label>
                  <input className="input" id="f-teléfono" type="tel" placeholder="+56 9 1234 5678" autoComplete="tel" required />
                </div>
              </div>
            </fieldset>
            <fieldset className="form-section">
              <legend>2. Dirección de envío</legend>
              <div className="field">
                <label className="field__label" htmlFor="f-dirección">Dirección *</label>
                <input className="input" id="f-dirección" type="text" placeholder="Calle, número, depto." autoComplete="street-address" required />
              </div>
              <div className="form-row">
                <div className="field">
                  <label className="field__label" htmlFor="s-comuna">Comuna *</label>
                  <select className="select" id="s-comuna">
                    <option value="" selected disabled>Selecciona tu comuna</option>
                    <option>Santiago</option>
                    <option>Providencia</option>
                    <option>Ñuñoa</option>
                    <option>Las Condes</option>
                    <option>La Reina</option>
                  </select>
                </div>
                <div className="field">
                  <label className="field__label" htmlFor="f-códigopostal">Código postal</label>
                  <input className="input" id="f-códigopostal" type="text" placeholder="Opcional" autoComplete="postal-code" />
                </div>
              </div>
            </fieldset>
            <fieldset className="form-section">
              <legend>3. Método de pago</legend>
              <label className="check">
                <input type="radio" name="pago" checked />
                Tarjeta de crédito o débito
              </label>
              <label className="check">
                <input type="radio" name="pago" />
                Transferencia bancaria
              </label>
            </fieldset>
          </form>
          <aside className="summary" aria-labelledby="sum-t">
            <h2 className="h5" id="sum-t">Resumen del pedido</h2>
            <div className="mini">
              <div className="ph ph--menta " role="img" aria-label="Vestido Lino" data-label="Vestido Lino">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <div className="mini__info">
                <span className="mini__name">Vestido Lino</span>
                <span className="mini__meta">Beige / M · 1 unidad</span>
              </div>
              <span className="mini__price">$29.990</span>
            </div>
            <div className="mini">
              <div className="ph ph--lavanda " role="img" aria-label="Chaqueta Oversize" data-label="Chaqueta Oversize">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <div className="mini__info">
                <span className="mini__name">Chaqueta Oversize</span>
                <span className="mini__meta">Negro / M · 1 unidad</span>
              </div>
              <span className="mini__price">$34.990</span>
            </div>
            <hr className="divider" />
            <div className="summary__row">
              <span>Subtotal</span>
              <span>$64.980</span>
            </div>
            <div className="summary__row">
              <span>Envío</span>
              <span className="text-success fw-semibold">Gratis</span>
            </div>
            <hr className="divider" />
            <div className="summary__total">
              <span>Total</span>
              <strong>$64.980</strong>
            </div>
            <button type="button" className="btn btn--primary btn--block">Pagar $64.980</button>
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
