
import '../assets/css/views/cuenta.css'

export default function RecuperarContrasena() {
  return (
    <>
      <div className="container main" style={{ paddingBlock: 'var(--space-xl5)' }}>
        <div className="center-narrow stack gap-base">
          <form className="auth">
            <h1 className="h4">Recupera tu contraseña</h1>
            <p className="body-3 text-secondary">
              Escribe el correo de tu cuenta y te enviaremos un enlace para crear una nueva.
            </p>
            <div className="field">
              <label className="field__label" htmlFor="f-correoelectrónico">Correo electrónico *</label>
              <input className="input" id="f-correoelectrónico" type="email" placeholder="nombre@correo.cl" autoComplete="email" required />
            </div>
            <a className="btn btn--primary btn--block" href="#/correo-enviado">Enviar enlace</a>
            <a className="link" style={{ alignSelf: 'center' }} href="#/login">
              <svg className="icon icon--16" aria-hidden="true">
                <use href="#i-arrow-left" />
              </svg>
              Volver a iniciar sesión
            </a>
          </form>
        </div>
      </div>
    </>
  )
}
