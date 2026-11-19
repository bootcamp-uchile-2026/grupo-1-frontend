
import '../assets/css/views/ayuda.css'

export function AyudaCambios() {
  return (
    <>
      <div className="page-head page-head--plain">
        <div className="container">
          <nav className="crumbs" aria-label="Migas de pan">
            <ol>
              <li>
                <a href="/">Inicio</a>
              </li>
              {/*<li>
                <a href="#">Ayuda</a>
              </li>*/}
              <li>
                <span aria-current="page">Cambios y devoluciones</span>
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">Centro de ayuda</h1>
        </div>
      </div>
      <div className="container main stack gap-lg">
        <nav aria-label="Temas de ayuda">
          <ul className="grid topics" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>
            <li>
              <a className="topic cursorDisable" href="#">
                <span className="topic__icon">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-truck" />
                  </svg>
                </span>
                <strong>Envíos</strong>
                <small>Plazos y costos de despacho</small>
              </a>
            </li>
            <li>
              <a className="topic"  aria-current="page">
                <span className="topic__icon">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-refresh" />
                  </svg>
                </span>
                <strong>Cambios y devoluciones</strong>
                <small>Plazos, costos y cómo hacerlo</small>
              </a>
            </li>
            <li>
              <a className="topic cursorDisable" href="#">
                <span className="topic__icon">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-card" />
                  </svg>
                </span>
                <strong>Pagos</strong>
                <small>Medios de pago y boletas</small>
              </a>
            </li>
            <li>
              <a className="topic cursorDisable" href="#">
                <span className="topic__icon">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-account" />
                  </svg>
                </span>
                <strong>Mi cuenta</strong>
                <small>Datos, contraseña y privacidad</small>
              </a>
            </li>
            <li>
              <a className="topic cursorDisable" href="#">
                <span className="topic__icon">
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-tag" />
                  </svg>
                </span>
                <strong>Tallas y cuidados</strong>
                <small>Guía de tallas y lavado</small>
              </a>
            </li>
          </ul>
        </nav>
        <div className="split--sidebar" style={{ display: 'grid' }}>
          <div className="hide-m">
            <nav className="side-nav" aria-label="Secciones de ayuda">
              <ul>
                <li>
                  <a className="cursorDisable" href="#/ayuda-cambios">Envíos</a>
                </li>
                <li>
                  <a href="/ayudaCambios" aria-current="page">Cambios y devoluciones</a>
                </li>
                <li>
                  <a className="cursorDisable" href="#/ayuda-cambios">Pagos</a>
                </li>
                <li>
                  <a className="cursorDisable" href="#/ayuda-cambios">Mi cuenta</a>
                </li>
                <li>
                  <a className="cursorDisable" href="#/ayuda-cambios">Tallas y cuidados</a>
                </li>
              </ul>
            </nav>
          </div>
          <article className="stack gap-lg">
            <h2 className="h5">Cambios y devoluciones</h2>
            <ul className="policy">
              <li>
                <span className="topic__icon" style={{ margin: '0' }}>
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-calendar" />
                  </svg>
                </span>
                <span>
                  <small>Plazo</small>
                  <strong>30 días desde la entrega</strong>
                </span>
              </li>
              <li>
                <span className="topic__icon" style={{ margin: '0' }}>
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-gift" />
                  </svg>
                </span>
                <span>
                  <small>Primer cambio</small>
                  <strong>Gratis</strong>
                </span>
              </li>
              <li>
                <span className="topic__icon" style={{ margin: '0' }}>
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-card" />
                  </svg>
                </span>
                <span>
                  <small>Reembolso</small>
                  <strong>5 a 10 días hábiles</strong>
                </span>
              </li>
            </ul>
            <h3 className="h6">¿Cómo hacerlo?</h3>
            <ol className="grid grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
              <li className="step">
                <span className="step__n">1</span>
                <div className="stack gap-xs">
                  <strong>Ingresa a Mis compras</strong>
                  <p>Desde tu cuenta, elige el pedido que quieres cambiar o devolver.</p>
                </div>
              </li>
              <li className="step">
                <span className="step__n">2</span>
                <div className="stack gap-xs">
                  <strong>Elige producto y motivo</strong>
                  <p>Selecciona qué quieres cambiar o devolver y por qué.</p>
                </div>
              </li>
              <li className="step">
                <span className="step__n">3</span>
                <div className="stack gap-xs">
                  <strong>Envía o deja en un punto</strong>
                  <p>Retiro a domicilio gratis o en un punto de entrega cercano.</p>
                </div>
              </li>
            </ol>
           {/*} <div className="row gap-sm wrap">
              <a className="btn btn--primary" href="#/iniciar-cambio">Iniciar cambio o devolución</a>
              <button type="button" className="btn btn--secondary">Ver condiciones</button>
            </div>*/}
            <h3 className="h6">Preguntas frecuentes</h3>
            <div>
              <details className="accordion">
                <summary>
                  ¿Qué productos no se pueden cambiar?
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                </summary>
                <div className="accordion__body">Ropa interior, trajes de baño y productos personalizados.</div>
              </details>
              <details className="accordion" open>
                <summary>
                  ¿Cuánto demora el reembolso?
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                </summary>
                <div className="accordion__body">
                  Una vez que recibimos el producto, el reembolso se procesa en 5 a 10 días hábiles en tu mismo medio de pago.
                </div>
              </details>
              <details className="accordion">
                <summary>
                  ¿Puedo cambiar por otra talla o color?
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                </summary>
                <div className="accordion__body">Sí, siempre que haya stock disponible.</div>
              </details>
              <details className="accordion">
                <summary>
                  ¿Tiene costo el envío de la devolución?
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                </summary>
                <div className="accordion__body">El primer cambio es gratis.</div>
              </details>
            </div>
            <div className="contact">
              <div>
                <h3 className="h6" style={{ fontFamily: 'var(--font-primary)' }}>¿Necesitas más ayuda?</h3>
                <p className="body-4 text-secondary">Lunes a viernes de 9:00 a 18:00 h.</p>
              </div>
              <div className="row gap-xs">
               
                <a target='_blank' href='https://wa.me/12345678?text=Este%20es%20un%20whatsapp%20de%20ejemplo.%20No%20es%20real.' className="btn btn--neutral btn--md">
                  <svg  className="icon icon--16" aria-hidden="true">
                    <use href="#i-phone" />
                  </svg>
                  WhatsApp
                </a>
                <a target='_blank' href='mailto:mail@mail.com' className="btn btn--neutral btn--md">
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-mail" />
                  </svg>
                  Correo
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
