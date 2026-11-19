
import '../assets/css/views/cuenta.css'

export default function Login() {
  return (
    <>
      <div className="container main" style={{ paddingBlock: 'var(--space-xl5)' }}>
        <div className="center-narrow stack gap-base">
          <form className="auth" noValidate>
            <h1 className="h4">Iniciar sesión</h1>
            <p className="body-3 text-secondary">Ingresa para ver tus compras, looks y favoritos.</p>
            <div className="field">
              <label className="field__label" htmlFor="f-correoelectrónico">Correo electrónico *</label>
              <input className="input" id="f-correoelectrónico" type="email" placeholder="nombre@correo.cl" autoComplete="email" required />
            </div>
            <div className="field">
              <label className="field__label" htmlFor="f-contraseña">Contraseña *</label>
              <div className="field__control">
                <input className="input input--with-btn" id="f-contraseña" type="password" placeholder="Tu contraseña" autoComplete="current-password" required />
                <button type="button" className="icon-btn field__btn" aria-label="Mostrar contraseña">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-eye" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <label className="check">
                <input type="checkbox" name="c" />
                Recordarme
              </label>
              <a className="link link--sm" href="#/recuperar-contrasena">¿Olvidaste tu contraseña?</a>
            </div>
            <button type="button" className="btn btn--primary btn--block">Ingresar</button>
            <p className="auth__or">o</p>
            <button type="button" className="btn btn--neutral btn--block">Continuar con Google</button>
            <p className="body-3" style={{ textAlign: 'center' }}>
              ¿No tienes cuenta?
              <a className="link" href="#/registro">Regístrate</a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
