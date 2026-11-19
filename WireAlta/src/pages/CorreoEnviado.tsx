
import '../assets/css/views/cuenta.css'
import '../assets/css/views/checkout.css'

export default function CorreoEnviado() {
  return (
    <>
      <div className="container main" style={{ paddingBlock: 'var(--space-xl5)' }}>
        <div className="center-narrow stack gap-base">
          <section className="auth" style={{ textAlign: 'center', alignItems: 'center' }}>
            <div className="confirm__icon">
              <svg className="icon icon--32" aria-hidden="true">
                <use href="#i-mail" />
              </svg>
            </div>
            <h1 className="h4" tabIndex={-1}>Revisa tu correo</h1>
            <p className="body-3 text-secondary">
              Si existe una cuenta con
              <strong>camila@correo.cl</strong>
              , te enviamos un enlace. Vence en 30 minutos.
            </p>
            <div className="msg msg--info" role="status">
              <svg className="icon icon--20" aria-hidden="true">
                <use href="#i-info" />
              </svg>
              <span>¿No te llegó? Revisa tu carpeta de spam.</span>
            </div>
            <button type="button" className="btn btn--secondary btn--block">Reenviar correo</button>
            <a className="link" href="#/login">
              <svg className="icon icon--16" aria-hidden="true">
                <use href="#i-arrow-left" />
              </svg>
              Volver a iniciar sesión
            </a>
          </section>
        </div>
      </div>
    </>
  )
}
