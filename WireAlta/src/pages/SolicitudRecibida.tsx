
import '../assets/css/views/checkout.css'
import '../assets/css/views/ayuda.css'
import '../assets/css/views/cuenta.css'

export default function SolicitudRecibida() {
  return (
    <>
      <div className="container">
        <section className="confirm" aria-labelledby="sr-t">
          <div className="confirm__icon">
            <svg className="icon icon--32" aria-hidden="true">
              <use href="#i-check" />
            </svg>
          </div>
          <h1 className="h3" id="sr-t" tabIndex={-1}>Recibimos tu solicitud</h1>
          <p className="text-secondary">
            Solicitud
            <strong>#C-2041</strong>
            · Pedido #10234
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
            <hr className="divider" />
            <dl className="dl">
              <dt>Envío</dt>
              <dd>Retiro a domicilio · Gratis</dd>
              <dt>Reembolso estimado</dt>
              <dd className="fw-bold">$24.990 en 5 a 10 días hábiles</dd>
            </dl>
          </div>
          <div className="confirm__box">
            <h2 className="h6" style={{ marginBottom: 'var(--space-base)' }}>Próximos pasos</h2>
            <ol className="stack gap-sm">
              <li className="step">
                <span className="step__n">1</span>
                <div className="stack gap-xs">
                  <strong>Revisa tu correo</strong>
                  <p>Te enviamos la etiqueta de envío y las instrucciones.</p>
                </div>
              </li>
              <li className="step">
                <span className="step__n">2</span>
                <div className="stack gap-xs">
                  <strong>Prepara el paquete</strong>
                  <p>Usa la bolsa original o cualquier caja cerrada.</p>
                </div>
              </li>
              <li className="step">
                <span className="step__n">3</span>
                <div className="stack gap-xs">
                  <strong>Lo retiramos</strong>
                  <p>Pasamos a buscarlo entre el 6 y 8 de octubre.</p>
                </div>
              </li>
            </ol>
          </div>
          <div className="row gap-sm wrap" style={{ justifyContent: 'center' }}>
            <a className="btn btn--primary" href="#/mis-compras">Ver mis compras</a>
            <a className="btn btn--secondary" href="#/listado">Seguir comprando</a>
          </div>
        </section>
      </div>
    </>
  )
}
