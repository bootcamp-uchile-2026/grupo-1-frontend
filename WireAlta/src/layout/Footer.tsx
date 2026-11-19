export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__grid">
          <div>
            <a className="logo logo--inverse" href="#/" aria-label="stylenow, ir al inicio">
              stylenow
              <span aria-hidden="true">.</span>
            </a>
            <p>Moda para cada momento. Envíos a todo Chile.</p>
          </div>
          <div>
            <h2>Síguenos</h2>
            <div className="site-footer__social">
              <a className="icon-btn icon-btn--inverse" href="#" aria-label="Instagram de stylenow">
                <svg className="icon icon--20" aria-hidden="true">
                  <use href="#i-instagram" />
                </svg>
              </a>
              <a className="icon-btn icon-btn--inverse" href="#" aria-label="TikTok de stylenow">
                <svg className="icon icon--20" aria-hidden="true">
                  <use href="#i-tiktok" />
                </svg>
              </a>
              <a className="icon-btn icon-btn--inverse" href="#" aria-label="Pinterest de stylenow">
                <svg className="icon icon--20" aria-hidden="true">
                  <use href="#i-pinterest" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h2>Ayuda</h2>
            <ul>
              <li>
                <a href="#/ayuda-cambios">Envíos</a>
              </li>
              <li>
                <a href="#/ayuda-cambios">Cambios y devoluciones</a>
              </li>
              <li>
                <a href="#/ayuda-cambios">Pagos</a>
              </li>
              <li>
                <a href="#/privacidad">Privacidad y datos</a>
              </li>
              <li>
                <a href="#/preferencias-cookies">Política de cookies</a>
              </li>
            </ul>
          </div>
          <a className="icon-btn icon-btn--white site-footer__top-btn" href="#top" aria-label="Volver arriba" style={{ color: 'var(--icon-brand)' }}>
            <svg className="icon icon--20" aria-hidden="true">
              <use href="#i-arrow-up" />
            </svg>
          </a>
        </div>
        <p className="site-footer__legal">© 2026 stylenow. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}
