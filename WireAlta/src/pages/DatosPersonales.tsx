
import '../assets/css/views/checkout.css'
import '../assets/css/views/ayuda.css'
import '../assets/css/views/cuenta.css'

export default function DatosPersonales() {
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
                <span aria-current="page">Datos personales</span>
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">Datos personales</h1>
        </div>
      </div>
      <div className="container main">
        <div className="split--sidebar" style={{ display: 'grid' }}>
          <nav className="side-nav" aria-label="Mi cuenta">
            <ul>
              <li>
                <a href="#/mis-compras">Mis compras</a>
              </li>
              <li>
                <a href="#/mis-looks">Mis looks</a>
              </li>
              <li>
                <a href="#/favoritos">Favoritos</a>
              </li>
              <li>
                <a href="#/datos-personales" aria-current="page">Datos personales</a>
              </li>
              <li>
                <a href="#/datos-personales">Direcciones</a>
              </li>
              <li>
                <a href="#/privacidad">Privacidad y datos</a>
              </li>
              <li>
                <a href="#/" className="is-muted">Cerrar sesión</a>
              </li>
            </ul>
          </nav>
          <div className="stack gap-lg">
            <div className="msg msg--success" role="status">
              <svg className="icon icon--20" aria-hidden="true">
                <use href="#i-check" />
              </svg>
              <span>Tus datos se guardaron correctamente.</span>
            </div>
            <form className="stack gap-lg">
              <fieldset className="form-section">
                <legend>Información personal</legend>
                <div className="form-row">
                  <div className="field">
                    <label className="field__label" htmlFor="f-nombre">Nombre</label>
                    <input className="input" id="f-nombre" type="text" placeholder="" value="Camila" autoComplete="given-name" />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="f-apellido">Apellido</label>
                    <input className="input" id="f-apellido" type="text" placeholder="" value="Rojas" autoComplete="family-name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label className="field__label" htmlFor="f-correoelectrónico">Correo electrónico</label>
                    <input className="input" id="f-correoelectrónico" type="email" placeholder="" value="camila@correo.cl" autoComplete="email" />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="f-teléfono">Teléfono</label>
                    <input className="input" id="f-teléfono" type="tel" placeholder="" value="+56 9 1234 5678" autoComplete="tel" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label className="field__label" htmlFor="fn">Fecha de nacimiento</label>
                    <input className="input" id="fn" type="text" placeholder="" value="12/04/1995" />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="s-tallahabitual">Talla habitual</label>
                    <select className="select" id="s-tallahabitual">
                      <option value="" disabled>Selecciona una opción</option>
                      <option>XS</option>
                      <option selected>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                </div>
              </fieldset>
              <section className="form-section row gap-base wrap" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h2 className="h6">Contraseña</h2>
                  <p className="body-3 text-secondary">Última actualización: hace 3 meses</p>
                </div>
                <button type="button" className="btn btn--secondary">Cambiar contraseña</button>
              </section>
              <div className="row gap-sm wrap">
                <button type="button" className="btn btn--primary">Guardar cambios</button>
                <button type="button" className="btn btn--secondary">Cancelar</button>
              </div>
              <div>
                <button type="button" className="btn btn--tertiary" style={{ color: 'var(--text-error)', paddingInline: '0' }} aria-haspopup="dialog">
                  Eliminar mi cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
