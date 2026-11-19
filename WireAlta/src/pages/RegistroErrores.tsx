
import '../assets/css/views/cuenta.css'
import '../assets/css/views/checkout.css'

export default function RegistroErrores() {
  return (
    <>
      <div className="container main" style={{ paddingBlock: 'var(--space-xl5)' }}>
        <div className="center-narrow stack gap-base">
          <div className="alert alert--error" role="alert" tabIndex={-1}>
            <svg className="icon icon--20" aria-hidden="true">
              <use href="#i-alert" />
            </svg>
            <div>
              <strong>Revisa 4 campos para crear tu cuenta</strong>
              Apellido, correo electrónico, contraseña y aceptar los términos.
            </div>
          </div>
          <form className="auth" noValidate>
            <h1 className="h4">Crear cuenta</h1>
            <p className="body-3 text-secondary">Guarda tus looks, sigue tus pedidos y compra más rápido.</p>
            <div className="form-row">
              <div className="field">
                <label className="field__label" htmlFor="f-nombre">Nombre *</label>
                <input className="input" id="f-nombre" type="text" placeholder="Camila" value="Camila" autoComplete="given-name" required />
              </div>
              <div className="field is-error">
                <label className="field__label" htmlFor="f-apellido">Apellido *</label>
                <input className="input" id="f-apellido" type="text" placeholder="Rojas" aria-invalid="true" aria-describedby="f-apellido-help" autoComplete="family-name" required />
                <p className="field__help" id="f-apellido-help">Ingresa tu apellido</p>
              </div>
            </div>
            <div className="field is-error">
              <label className="field__label" htmlFor="f-correoelectrónico">Correo electrónico *</label>
              <input className="input" id="f-correoelectrónico" type="email" placeholder="nombre@correo.cl" value="camila@correo" aria-invalid="true" aria-describedby="f-correoelectrónico-help" autoComplete="email" required />
              <p className="field__help" id="f-correoelectrónico-help">
                El correo debe tener un dominio, por ejemplo @correo.cl
              </p>
            </div>
            <div className="field is-error">
              <label className="field__label" htmlFor="f-contraseña">Contraseña *</label>
              <div className="field__control">
                <input className="input input--with-btn" id="f-contraseña" type="password" placeholder="Crea una contraseña" value="abcdefgh" aria-invalid="true" aria-describedby="f-contraseña-help" autoComplete="new-password" required />
                <button type="button" className="icon-btn field__btn" aria-label="Mostrar contraseña">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-eye" />
                  </svg>
                </button>
              </div>
              <p className="field__help" id="f-contraseña-help">Tu contraseña debe tener un número</p>
            </div>
            <ul className="pw-rules">
              <li className="is-ok">Al menos 8 caracteres</li>
              <li className="">Una mayúscula</li>
              <li>Un número</li>
            </ul>
            <div className="field">
              <label className="field__label" htmlFor="nac">Fecha de nacimiento</label>
              <input className="input" id="nac" type="text" placeholder="DD/MM/AAAA" aria-describedby="nac-help" />
              <p className="field__help" id="nac-help">Opcional. Te enviaremos un regalo en tu cumpleaños.</p>
            </div>
            <label className="check">
              <input type="checkbox" name="c" />
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
