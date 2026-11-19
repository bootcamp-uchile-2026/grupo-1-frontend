
import '../assets/css/views/cuenta.css'
import '../assets/css/views/checkout.css'

export default function Registro() {
  return (
    <>
      <div className="container main" style={{ paddingBlock: 'var(--space-xl5)' }}>
        <div className="center-narrow stack gap-base">
          <form className="auth" noValidate>
            <h1 className="h4">Crear cuenta</h1>
            <p className="body-3 text-secondary">Guarda tus looks, sigue tus pedidos y compra más rápido.</p>
            <div className="form-row">
              <div className="field">
                <label className="field__label" htmlFor="f-nombre">Nombre *</label>
                <input className="input" id="f-nombre" type="text" placeholder="Camila" autoComplete="given-name" required />
              </div>
              <div className="field">
                <label className="field__label" htmlFor="f-apellido">Apellido *</label>
                <input className="input" id="f-apellido" type="text" placeholder="Rojas" autoComplete="family-name" required />
              </div>
            </div>
            <div className="field">
              <label className="field__label" htmlFor="f-correoelectrónico">Correo electrónico *</label>
              <input className="input" id="f-correoelectrónico" type="email" placeholder="nombre@correo.cl" autoComplete="email" required />
            </div>
            <div className="field">
              <label className="field__label" htmlFor="f-contraseña">Contraseña *</label>
              <div className="field__control">
                <input className="input input--with-btn" id="f-contraseña" type="password" placeholder="Crea una contraseña" autoComplete="new-password" required />
                <button type="button" className="icon-btn field__btn" aria-label="Mostrar contraseña">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-eye" />
                  </svg>
                </button>
              </div>
            </div>
            <ul className="pw-rules">
              <li className="is-ok">Al menos 8 caracteres</li>
              <li className="is-ok">Una mayúscula</li>
              <li>Un número</li>
            </ul>
            <div className="field">
              <label className="field__label" htmlFor="nac">Fecha de nacimiento</label>
              <input className="input" id="nac" type="text" placeholder="DD/MM/AAAA" aria-describedby="nac-help" />
              <p className="field__help" id="nac-help">Opcional. Te enviaremos un regalo en tu cumpleaños.</p>
            </div>
            <label className="check">
              <input type="checkbox" name="c" checked />
              Acepto los
              <a className="link link--sm" href="#">términos y condiciones</a>
              y la
              <a className="link link--sm" href="#/privacidad">política de privacidad</a>
              *
            </label>
            <label className="check">
              <input type="checkbox" name="c" />
              Quiero recibir novedades y ofertas por correo (opcional)
            </label>
            <button type="button" className="btn btn--primary btn--block">Crear cuenta</button>
            <p className="body-3" style={{ textAlign: 'center' }}>
              ¿Ya tienes cuenta?
              <a className="link" href="#/login">Inicia sesión</a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
