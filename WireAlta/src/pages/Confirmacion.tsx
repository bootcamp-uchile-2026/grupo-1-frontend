
import '../assets/css/views/checkout.css'
import '../assets/css/views/cuenta.css'

export default function Confirmacion() {
  return (
    <>
      <div className="container">
        <section className="confirm" aria-labelledby="ok-t">
          <div className="confirm__icon">
            <svg className="icon icon--32" aria-hidden="true">
              <use href="#i-check" />
            </svg>
          </div>
          <h1 className="h3" id="ok-t" tabIndex={-1}>¡Gracias, Camila! Recibimos tu pedido</h1>
          <p className="text-secondary">
            Pedido
            <strong>#10234</strong>
            · Te enviamos la confirmación a camila@correo.cl
          </p>
          <div className="card confirm__box stack gap-base">
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
            <dl className="dl">
              <dt>Entrega estimada</dt>
              <dd>Jueves 4 de octubre</dd>
              <dt>Dirección</dt>
              <dd>Av. Providencia 1234, Providencia</dd>
              <dt>Total pagado</dt>
              <dd className="fw-bold">$64.980</dd>
            </dl>
          </div>
          <div className="row gap-sm wrap" style={{ justifyContent: 'center' }}>
            <a className="btn btn--primary" href="#/detalle-pedido">Seguir mi pedido</a>
            <a className="btn btn--secondary" href="#/listado">Seguir comprando</a>
          </div>
        </section>
      </div>
    </>
  )
}
