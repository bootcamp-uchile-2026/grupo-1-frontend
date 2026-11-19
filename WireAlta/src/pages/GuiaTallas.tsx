import type { CSSProperties } from 'react'

import '../assets/css/views/cuenta.css'
import '../assets/css/views/producto.css'

export default function GuiaTallas() {
  return (
    <>
      <div className="overlay">
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="gt-t">
          <div className="modal__head">
            <h2 className="h5" id="gt-t">Guía de tallas · Vestidos</h2>
            <button type="button" className="icon-btn" aria-label="Cerrar guía de tallas">
              <svg className="icon" aria-hidden="true">
                <use href="#i-close" />
              </svg>
            </button>
          </div>
          <div className="modal__body">
            <div className="tabs" role="tablist">
              <button className="tab" role="tab" aria-selected="true">Centímetros</button>
              <button className="tab" role="tab" aria-selected="false">Pulgadas</button>
            </div>
            <div className="table-wrap">
              <table className="table">
                <caption className="sr-only">Medidas en centímetros</caption>
                <thead>
                  <tr>
                    <th scope="col">Talla</th>
                    <th scope="col">Busto</th>
                    <th scope="col">Cintura</th>
                    <th scope="col">Cadera</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>XS</td>
                    <td>78-82</td>
                    <td>60-64</td>
                    <td>86-90</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>83-87</td>
                    <td>65-69</td>
                    <td>91-95</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>88-92</td>
                    <td>70-74</td>
                    <td>96-100</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>93-97</td>
                    <td>75-79</td>
                    <td>101-105</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>98-102</td>
                    <td>80-84</td>
                    <td>106-110</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row gap-base" style={{ alignItems: 'flex-start' }}>
              <div style={{ width: '140px', flex: 'none' }} className="ph ph--lavanda ratio-square " role="img" aria-label="Ilustración: cómo medirte" data-label="Ilustración: cómo medirte">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <div className="stack gap-xs body-3">
                <strong className="label-1">Cómo medirte</strong>
                <p className="text-secondary">
                  <b>Busto:</b>
                  mide la parte más ancha del pecho.
                </p>
                <p className="text-secondary">
                  <b>Cintura:</b>
                  mide la parte más angosta.
                </p>
                <p className="text-secondary">
                  <b>Cadera:</b>
                  mide la parte más ancha.
                </p>
              </div>
            </div>
            <div className="msg msg--info" role="status">
              <svg className="icon icon--20" aria-hidden="true">
                <use href="#i-info" />
              </svg>
              <span>¿Entre dos tallas? Te recomendamos elegir la mayor.</span>
            </div>
          </div>
          <div className="modal__foot">
            <button type="button" className="btn btn--primary">Entendido</button>
          </div>
        </section>
      </div>

      <div className="container" style={{ paddingTop: 'var(--space-lg)' }}>
        <nav className="crumbs" aria-label="Migas de pan">
          <ol>
            <li>
              <a href="#">Mujer</a>
            </li>
            <li>
              <a href="#">Vestidos</a>
            </li>
            <li>
              <span aria-current="page">Vestido Lino</span>
            </li>
          </ol>
        </nav>
      </div>
      <div className="container main">
        <div className="split--product" style={{ display: 'grid' }}>
          <section className="gallery" aria-label="Galería de fotos">
            <div className="gallery__main">
              <div className="ph ph--menta " role="img" aria-label="Vestido Lino beige, vista frontal" data-label="Vestido Lino beige, vista frontal">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <button type="button" className="icon-btn icon-btn--white gallery__nav gallery__nav--prev" aria-label="Foto anterior">
                <svg className="icon icon--20" aria-hidden="true">
                  <use href="#i-arrow-left" />
                </svg>
              </button>
              <button type="button" className="icon-btn icon-btn--white gallery__nav gallery__nav--next" aria-label="Foto siguiente">
                <svg className="icon icon--20" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
              </button>
            </div>
            <div className="gallery__thumbs">
              <button type="button" aria-current="true" aria-label="Ver foto 1">
                <div className="ph ph--menta " role="img" aria-label="Frente" data-label="Frente">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
              </button>
              <button type="button" aria-current="false" aria-label="Ver foto 2">
                <div className="ph ph--menta " role="img" aria-label="Espalda" data-label="Espalda">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
              </button>
              <button type="button" aria-current="false" aria-label="Ver foto 3">
                <div className="ph ph--menta " role="img" aria-label="Detalle" data-label="Detalle">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
              </button>
              <button type="button" aria-current="false" aria-label="Ver foto 4">
                <div className="ph ph--menta " role="img" aria-label="Lateral" data-label="Lateral">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
              </button>
            </div>
          </section>
          <section className="buy" aria-labelledby="p-name">
            <span className="badge badge--brand" style={{ alignSelf: 'flex-start' }}>Nuevo</span>
            <h1 className="h3" id="p-name">Vestido Lino</h1>
            <div className="buy__rating">
              <span className="stars" aria-hidden="true">★★★★★</span>
              <span>4,8 (32 reseñas)</span>
              <a className="link" href="#">Ver qué dicen del calce</a>
            </div>
            <p className="buy__price">$29.990</p>
            <div className="stack gap-sm">
              <p className="buy__label">Color: Beige</p>
              <div className="swatches" role="group" aria-label="Color">
                <button type="button" className="swatch" style={{ '--sw': 'var(--warning-100)' } as CSSProperties} aria-label="Beige" aria-pressed="true" />
                <button type="button" className="swatch" style={{ '--sw': 'var(--neutral-500)' } as CSSProperties} aria-label="Negro" aria-pressed="false" />
                <button type="button" className="swatch" style={{ '--sw': 'var(--secondary-400)' } as CSSProperties} aria-label="Lila" aria-pressed="false" />
              </div>
            </div>
            <div className="stack gap-sm">
              <p className="buy__label">
                <span>Selecciona tu talla: M</span>
                <a className="link" href="#/guia-tallas">Guía de tallas</a>
              </p>
              <div className="sizes" role="group" aria-label="Talla">
                <button type="button" className="size" aria-pressed="false">XS</button>
                <button type="button" className="size" aria-pressed="false">S</button>
                <button type="button" className="size" aria-pressed="true">M</button>
                <button type="button" className="size" aria-pressed="false">L</button>
                <button type="button" className="size" aria-disabled="true" aria-label="XL, agotada">XL</button>
              </div>
              <p className="buy__hint">
                <svg className="icon icon--16" aria-hidden="true">
                  <use href="#i-info" />
                </svg>
                XL agotada · Quedan pocas en L
              </p>
            </div>
            <div className="info-fit">
              <strong>
                ¿No sabes cuál elegir?
                <a className="link" href="#/guia-tallas">Consulta tu talla</a>
              </strong>
              <span>Modelo: 1,68 m · usa talla S</span>
              <span>Calce: regular · ¿Entre dos tallas? Elige la mayor</span>
            </div>
            <div className="buy__ctas">
              <button type="button" className="btn btn--primary grow">Agregar al carrito</button>
              <button type="button" className="icon-btn icon-btn--outline" aria-pressed="false" aria-label="Agregar Vestido Lino a favoritos">
                <svg className="icon" aria-hidden="true">
                  <use href="#i-heart" />
                </svg>
              </button>
            </div>
            <div className="price-alert">
              <div>
                <strong>¿Quieres saber cuándo baje de precio?</strong>
                <p>Te avisamos por correo si baja.</p>
              </div>
              <button type="button" className="btn btn--primary btn--sm btn--block">Activar alerta</button>
            </div>
            <ul className="buy__perks">
              <li>
                <svg className="icon icon--16" aria-hidden="true">
                  <use href="#i-refresh" />
                </svg>
                Cambio gratuito dentro de 30 días ·
                <a href="#/ayuda-cambios">Ver condiciones</a>
              </li>
              <li>
                <svg className="icon icon--16" aria-hidden="true">
                  <use href="#i-truck" />
                </svg>
                Envíos a todo Chile · Calcula tu envío
              </li>
            </ul>
            <div>
              <details className="accordion" open>
                <summary>
                  Descripción
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                </summary>
                <div className="accordion__body">
                  Vestido midi de lino 100%, tirantes finos y bolsillos laterales. Lavar a mano en agua fría.
                </div>
              </details>
              <details className="accordion">
                <summary>
                  Envíos y cambios
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                </summary>
                <div className="accordion__body">Envío gratis sobre $40.000. Cambios gratis dentro de 30 días.</div>
              </details>
              <details className="accordion">
                <summary>
                  Pago seguro
                  <svg className="icon icon--20" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                </summary>
                <div className="accordion__body">Aceptamos tarjetas de crédito, débito y transferencia.</div>
              </details>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
