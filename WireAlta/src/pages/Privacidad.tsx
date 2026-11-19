
import '../assets/css/views/cuenta.css'
import '../assets/css/views/ayuda.css'

export default function Privacidad() {
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
                <span aria-current="page">Privacidad y datos</span>
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">Privacidad y datos</h1>
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
                <a href="#/datos-personales">Datos personales</a>
              </li>
              <li>
                <a href="#/datos-personales">Direcciones</a>
              </li>
              <li>
                <a href="#/privacidad" aria-current="page">Privacidad y datos</a>
              </li>
              <li>
                <a href="#/" className="is-muted">Cerrar sesión</a>
              </li>
            </ul>
          </nav>
          <div className="stack gap-lg">
            <section className="stack gap-sm" aria-labelledby="cn-t">
              <h2 className="h5" id="cn-t">Tus consentimientos</h2>
              <p className="body-3 text-secondary">
                Puedes activarlos o retirarlos cuando quieras. Los cambios se guardan al instante.
              </p>
              <ul className="stack gap-sm">
                <li className="consent">
                  <label htmlFor="cs0" className="grow">
                    <strong>Correos de novedades y ofertas</strong>
                    <small>Te escribimos máximo 2 veces por semana.</small>
                  </label>
                  <input id="cs0" type="checkbox" role="switch" className="switch" checked />
                </li>
                <li className="consent">
                  <label htmlFor="cs1" className="grow">
                    <strong>Recomendaciones personalizadas</strong>
                    <small>Usamos tus compras y favoritos para sugerirte prendas.</small>
                  </label>
                  <input id="cs1" type="checkbox" role="switch" className="switch" checked />
                </li>
                <li className="consent">
                  <label htmlFor="cs2" className="grow">
                    <strong>Compartir datos con socios de marketing</strong>
                    <small>Nunca vendemos tus datos. Puedes retirarlo cuando quieras.</small>
                  </label>
                  <input id="cs2" type="checkbox" role="switch" className="switch" />
                </li>
              </ul>
            </section>
            <section className="stack gap-sm" aria-labelledby="rg-t">
              <h2 className="h5" id="rg-t">Tus derechos sobre tus datos</h2>
              <p className="body-3 text-secondary">
                Te responderemos dentro del plazo que establece la Ley 19.628 de protección de datos personales.
              </p>
              <ul className="grid grid-3 grid--stack-m">
                <li className="right-card">
                  <span className="topic__icon">
                    <svg className="icon icon--20" aria-hidden="true">
                      <use href="#i-eye" />
                    </svg>
                  </span>
                  <strong>Acceder a tus datos</strong>
                  <p>Descarga una copia de todo lo que guardamos de ti.</p>
                  <a className="link link--sm" href="#">Solicitar</a>
                </li>
                <li className="right-card">
                  <span className="topic__icon">
                    <svg className="icon icon--20" aria-hidden="true">
                      <use href="#i-edit" />
                    </svg>
                  </span>
                  <strong>Rectificar</strong>
                  <p>Corrige datos incorrectos o incompletos.</p>
                  <a className="link link--sm" href="#">Solicitar</a>
                </li>
                <li className="right-card">
                  <span className="topic__icon">
                    <svg className="icon icon--20" aria-hidden="true">
                      <use href="#i-trash" />
                    </svg>
                  </span>
                  <strong>Eliminar</strong>
                  <p>Pide que borremos tus datos personales.</p>
                  <a className="link link--sm" href="#">Solicitar</a>
                </li>
                <li className="right-card">
                  <span className="topic__icon">
                    <svg className="icon icon--20" aria-hidden="true">
                      <use href="#i-shield" />
                    </svg>
                  </span>
                  <strong>Oponerte</strong>
                  <p>Oponte a un tratamiento específico.</p>
                  <a className="link link--sm" href="#">Solicitar</a>
                </li>
                <li className="right-card">
                  <span className="topic__icon">
                    <svg className="icon icon--20" aria-hidden="true">
                      <use href="#i-download" />
                    </svg>
                  </span>
                  <strong>Portabilidad</strong>
                  <p>Recibe tus datos en un formato reutilizable.</p>
                  <a className="link link--sm" href="#">Solicitar</a>
                </li>
                <li className="right-card">
                  <span className="topic__icon">
                    <svg className="icon icon--20" aria-hidden="true">
                      <use href="#i-lock" />
                    </svg>
                  </span>
                  <strong>Bloquear</strong>
                  <p>Suspende temporalmente el uso de tus datos.</p>
                  <a className="link link--sm" href="#">Solicitar</a>
                </li>
              </ul>
            </section>
            <section className="card card--subtle stack gap-sm" aria-labelledby="pp-t">
              <h2 className="h6" id="pp-t">Política de privacidad</h2>
              <p className="body-3 text-secondary">Revisa cómo tratamos tus datos y cambia tus preferencias de cookies.</p>
              <a className="btn btn--secondary" href="#/preferencias-cookies">Preferencias de cookies</a>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
