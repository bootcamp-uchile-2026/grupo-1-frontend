import '../assets/css/home.css'
import { CardCategorias } from '../components/cardCategorias'
import { Hero }  from '../components/Hero'

export function Inicio() {
  return (
    <>
    <Hero />
      <section className="hero" aria-roledescription="carrusel" aria-label="Looks destacados">
        <h1 className="hero__title">
          <span>Tu estilo,</span>
          <span className="outline">tu momento.</span>
        </h1>
        <div className="hero__models">
          <div className="ph ph--dark " role="img" aria-label="Mujer con abrigo violeta y pantalón verde" data-label="Mujer con abrigo violeta y pantalón verde">
            <svg className="icon icon--32" aria-hidden="true">
              <use href="#i-nopic" />
            </svg>
          </div>
          <div className="ph ph--dark " role="img" aria-label="Mujer con abrigo verde y short violeta" data-label="Mujer con abrigo verde y short violeta">
            <svg className="icon icon--32" aria-hidden="true">
              <use href="#i-nopic" />
            </svg>
          </div>
          <div className="ph ph--dark " role="img" aria-label="Persona con traje verde y camisa lavanda" data-label="Persona con traje verde y camisa lavanda">
            <svg className="icon icon--32" aria-hidden="true">
              <use href="#i-nopic" />
            </svg>
          </div>
        </div>
        <div className="hero__inner">
          <p className="hero__overline overline">Nueva colección · Otoño 26</p>
          <div className="hotspot" style={{ left: '30%', top: '48%' }}>
            <button type="button" className="hotspot__btn" aria-expanded="true" aria-label="Prenda 1: Abrigo Violeta">
              1
            </button>
            <div className="hotspot__tip" role="tooltip">
              <strong>Abrigo Violeta</strong>
              <span>$59.990</span>
            </div>
          </div>
          <div className="hotspot" style={{ left: '60%', top: '66%' }}>
            <button type="button" className="hotspot__btn" aria-expanded="false" aria-label="Prenda 2: Short Violeta">
              2
            </button>
            <div className="hotspot__tip" role="tooltip">
              <strong>Short Violeta</strong>
              <span>$19.990</span>
            </div>
          </div>
          <div className="hotspot" style={{ left: '68%', top: '56%' }}>
            <button type="button" className="hotspot__btn" aria-expanded="false" aria-label="Prenda 3: Traje Verde">
              3
            </button>
            <div className="hotspot__tip" role="tooltip">
              <strong>Traje Verde</strong>
              <span>$69.990</span>
            </div>
          </div>
          <div className="hero__copy">
            <p>Descubre lo nuevo en ropa y accesorios para cada ocasión. Toca cada prenda para verla en detalle.</p>
            <a className="btn btn--highlight" href="#/listado">Comprar la colección</a>
            <a className="link" href="#/detalle-look">Ver las prendas del look</a>
          </div>
          <div className="hero__dots">
            <span aria-live="polite">Look 01 / 03</span>
            <div className="progress">
              <i className="is-active" />
              <i />
              <i />
            </div>
            <small>Toca un punto para ver la prenda</small>
          </div>
        </div>
      </section>
      <section className="perks" aria-label="Beneficios">
        <ul className="container">
          <li>
            <span className="perks__icon">
              <svg className="icon icon--20" aria-hidden="true">
                <use href="#i-truck" />
              </svg>
            </span>
            <span>
              <strong>Envíos a todo Chile</strong>
              <small>Rápidos y seguros</small>
            </span>
          </li>
          <li>
            <span className="perks__icon">
              <svg className="icon icon--20" aria-hidden="true">
                <use href="#i-refresh" />
              </svg>
            </span>
            <span>
              <strong>Cambios fáciles</strong>
              <small>Hasta 30 días</small>
            </span>
          </li>
          <li>
            <span className="perks__icon">
              <svg className="icon icon--20" aria-hidden="true">
                <use href="#i-card" />
              </svg>
            </span>
            <span>
              <strong>Paga como prefieras</strong>
              <small>Tarjetas y transferencias</small>
            </span>
          </li>
        </ul>
      </section>
      <section className="section" aria-labelledby="cat-t">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="h3" id="cat-t">Categorías populares</h2>
              <p>Elige por dónde empezar. Lo nuevo de la temporada, ordenado para ti.</p>
            </div>
            <a className="link" href="#/listado">Ver todas las categorías</a>
          </div>
          <ul className="grid grid-4 cat-scroll">
            <CardCategorias />

            <li>
              <a className="cat-card" href="#/listado">
                <div className="cat-card__bg ph--lavanda" style={{ background: 'var(--media-lavanda)' }}>
                  <div className="cat-card__figure" role="img" aria-label="Modelo categoría Mujer">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <div className="cat-card__label">
                    <span>
                      <strong>Mujer</strong>
                      <small>1.240 productos</small>
                    </span>
                    <span className="icon-btn" aria-hidden="true">
                      <svg className="icon icon--20" aria-hidden="true">
                        <use href="#i-arrow-right" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className="cat-card" href="#/listado">
                <div className="cat-card__bg ph--amarillo" style={{ background: 'var(--media-amarillo)' }}>
                  <div className="cat-card__figure" role="img" aria-label="Modelo categoría Hombre">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <div className="cat-card__label">
                    <span>
                      <strong>Hombre</strong>
                      <small>860 productos</small>
                    </span>
                    <span className="icon-btn" aria-hidden="true">
                      <svg className="icon icon--20" aria-hidden="true">
                        <use href="#i-arrow-right" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className="cat-card" href="#/listado">
                <div className="cat-card__bg ph--coral" style={{ background: 'var(--media-coral)' }}>
                  <div className="cat-card__figure" role="img" aria-label="Modelo categoría Accesorios">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <div className="cat-card__label">
                    <span>
                      <strong>Accesorios</strong>
                      <small>420 productos</small>
                    </span>
                    <span className="icon-btn" aria-hidden="true">
                      <svg className="icon icon--20" aria-hidden="true">
                        <use href="#i-arrow-right" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className="cat-card" href="#/listado">
                <span className="cat-card__sale" aria-hidden="true">
                  HASTA
                  <strong>40%</strong>
                </span>
                <div className="cat-card__bg ph--menta" style={{ background: 'var(--media-menta)' }}>
                  <div className="cat-card__figure" role="img" aria-label="Modelo categoría Ofertas">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <div className="cat-card__label">
                    <span>
                      <strong>Ofertas</strong>
                      <small>312 productos</small>
                    </span>
                    <span className="icon-btn" aria-hidden="true">
                      <svg className="icon icon--20" aria-hidden="true">
                        <use href="#i-arrow-right" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="section inspo" aria-labelledby="ins-t">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="overline text-link">Looks de la semana</p>
              <h2 className="h3" id="ins-t">Inspiración para ti</h2>
              <p>Looks completos armados por nuestro equipo. Ábrelos para ver cada prenda.</p>
            </div>
            <div className="row gap-sm">
              <a className="link" href="#/looks">Ver todos los looks</a>
              <button type="button" className="icon-btn icon-btn--white hide-m" aria-label="Look anterior" disabled>
                <svg className="icon icon--20" aria-hidden="true">
                  <use href="#i-arrow-left" />
                </svg>
              </button>
              <button type="button" className="icon-btn icon-btn--white hide-m" aria-label="Look siguiente">
                <svg className="icon icon--20" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
              </button>
            </div>
          </div>
          <ul className="inspo__track">
            <li className="look-acc is-open">
              <div className="ph ph--amarillo " role="img" aria-label="Look Verano Lino" data-label="Look Verano Lino">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <div className="look-acc__shade" />
              <span className="badge badge--light look-acc__tag">Temporada</span>
              <span className="look-acc__vtitle" aria-hidden="true">Verano Lino</span>
              <div className="look-acc__foot">
                <span>3 prendas</span>
                <button type="button" className="icon-btn icon-btn--white" aria-expanded="true" aria-label="Abrir look Verano Lino" style={{ color: 'var(--icon-primary)' }}>
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-plus" />
                  </svg>
                </button>
              </div>
              <div className="look-acc__body">
                <h3 className="h3" style={{ color: 'var(--text-inverse)' }}>Look Verano Lino</h3>
                <p className="body-4" style={{ color: 'var(--text-inverse-secondary)' }}>3 prendas · desde $77.970</p>
                <div className="look-acc__items">
                  <div className="mini">
                    <div className="ph ph--menta " role="img" aria-label="Camisa Lino" data-label="Camisa Lino">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Camisa Lino</span>
                      <span className="mini__meta">$24.990</span>
                    </div>
                  </div>
                  <div className="mini">
                    <div className="ph ph--amarillo " role="img" aria-label="Pantalón Lino" data-label="Pantalón Lino">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Pantalón Lino</span>
                      <span className="mini__meta">$29.990</span>
                    </div>
                  </div>
                  <div className="mini">
                    <div className="ph ph--coral " role="img" aria-label="Cartera de Paja" data-label="Cartera de Paja">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Cartera de Paja</span>
                      <span className="mini__meta">$22.990</span>
                    </div>
                  </div>
                </div>
                <a className="btn btn--highlight btn--md" href="#/detalle-look">Comprar el look completo</a>
              </div>
            </li>
            <li className="look-acc">
              <div className="ph ph--coral " role="img" aria-label="Look Oficina Relajada" data-label="Look Oficina Relajada">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <div className="look-acc__shade" />
              <span className="badge badge--light look-acc__tag">Trabajo</span>
              <span className="look-acc__vtitle" aria-hidden="true">Oficina Relajada</span>
              <div className="look-acc__foot">
                <span>3 prendas</span>
                <button type="button" className="icon-btn icon-btn--white" aria-expanded="false" aria-label="Abrir look Oficina Relajada" style={{ color: 'var(--icon-primary)' }}>
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-plus" />
                  </svg>
                </button>
              </div>
              <div className="look-acc__body">
                <h3 className="h3" style={{ color: 'var(--text-inverse)' }}>Look Oficina Relajada</h3>
                <p className="body-4" style={{ color: 'var(--text-inverse-secondary)' }}>3 prendas · desde $77.970</p>
                <div className="look-acc__items">
                  <div className="mini">
                    <div className="ph ph--menta " role="img" aria-label="Camisa Lino" data-label="Camisa Lino">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Camisa Lino</span>
                      <span className="mini__meta">$24.990</span>
                    </div>
                  </div>
                  <div className="mini">
                    <div className="ph ph--amarillo " role="img" aria-label="Pantalón Lino" data-label="Pantalón Lino">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Pantalón Lino</span>
                      <span className="mini__meta">$29.990</span>
                    </div>
                  </div>
                  <div className="mini">
                    <div className="ph ph--coral " role="img" aria-label="Cartera de Paja" data-label="Cartera de Paja">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Cartera de Paja</span>
                      <span className="mini__meta">$22.990</span>
                    </div>
                  </div>
                </div>
                <a className="btn btn--highlight btn--md" href="#/detalle-look">Comprar el look completo</a>
              </div>
            </li>
            <li className="look-acc">
              <div className="ph ph--lavanda " role="img" aria-label="Look Noche Urbana" data-label="Look Noche Urbana">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <div className="look-acc__shade" />
              <span className="badge badge--light look-acc__tag">Noche</span>
              <span className="look-acc__vtitle" aria-hidden="true">Noche Urbana</span>
              <div className="look-acc__foot">
                <span>3 prendas</span>
                <button type="button" className="icon-btn icon-btn--white" aria-expanded="false" aria-label="Abrir look Noche Urbana" style={{ color: 'var(--icon-primary)' }}>
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-plus" />
                  </svg>
                </button>
              </div>
              <div className="look-acc__body">
                <h3 className="h3" style={{ color: 'var(--text-inverse)' }}>Look Noche Urbana</h3>
                <p className="body-4" style={{ color: 'var(--text-inverse-secondary)' }}>3 prendas · desde $77.970</p>
                <div className="look-acc__items">
                  <div className="mini">
                    <div className="ph ph--menta " role="img" aria-label="Camisa Lino" data-label="Camisa Lino">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Camisa Lino</span>
                      <span className="mini__meta">$24.990</span>
                    </div>
                  </div>
                  <div className="mini">
                    <div className="ph ph--amarillo " role="img" aria-label="Pantalón Lino" data-label="Pantalón Lino">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Pantalón Lino</span>
                      <span className="mini__meta">$29.990</span>
                    </div>
                  </div>
                  <div className="mini">
                    <div className="ph ph--coral " role="img" aria-label="Cartera de Paja" data-label="Cartera de Paja">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Cartera de Paja</span>
                      <span className="mini__meta">$22.990</span>
                    </div>
                  </div>
                </div>
                <a className="btn btn--highlight btn--md" href="#/detalle-look">Comprar el look completo</a>
              </div>
            </li>
            <li className="look-acc">
              <div className="ph ph--menta " role="img" aria-label="Look Fin de semana" data-label="Look Fin de semana">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <div className="look-acc__shade" />
              <span className="badge badge--light look-acc__tag">Casual</span>
              <span className="look-acc__vtitle" aria-hidden="true">Fin de semana</span>
              <div className="look-acc__foot">
                <span>3 prendas</span>
                <button type="button" className="icon-btn icon-btn--white" aria-expanded="false" aria-label="Abrir look Fin de semana" style={{ color: 'var(--icon-primary)' }}>
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-plus" />
                  </svg>
                </button>
              </div>
              <div className="look-acc__body">
                <h3 className="h3" style={{ color: 'var(--text-inverse)' }}>Look Fin de semana</h3>
                <p className="body-4" style={{ color: 'var(--text-inverse-secondary)' }}>3 prendas · desde $77.970</p>
                <div className="look-acc__items">
                  <div className="mini">
                    <div className="ph ph--menta " role="img" aria-label="Camisa Lino" data-label="Camisa Lino">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Camisa Lino</span>
                      <span className="mini__meta">$24.990</span>
                    </div>
                  </div>
                  <div className="mini">
                    <div className="ph ph--amarillo " role="img" aria-label="Pantalón Lino" data-label="Pantalón Lino">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Pantalón Lino</span>
                      <span className="mini__meta">$29.990</span>
                    </div>
                  </div>
                  <div className="mini">
                    <div className="ph ph--coral " role="img" aria-label="Cartera de Paja" data-label="Cartera de Paja">
                      <svg className="icon icon--32" aria-hidden="true">
                        <use href="#i-nopic" />
                      </svg>
                    </div>
                    <div className="mini__info">
                      <span className="mini__name">Cartera de Paja</span>
                      <span className="mini__meta">$22.990</span>
                    </div>
                  </div>
                </div>
                <a className="btn btn--highlight btn--md" href="#/detalle-look">Comprar el look completo</a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
