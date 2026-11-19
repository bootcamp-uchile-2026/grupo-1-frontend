
import '../assets/css/views/arma-tu-look.css'
import '../assets/css/views/looks.css'
import '../assets/css/home.css'

export default function ArmaTuLook() {
  return (
    <>
      <div className="page-head page-head--plain">
        <div className="container">
          <nav className="crumbs" aria-label="Migas de pan">
            <ol>
              <li>
                <a href="#">Looks</a>
              </li>
              <li>
                <span aria-current="page">Arma tu look</span>
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">Arma tu look</h1>
          <p className="page-head__lead">
            Combina prendas a tu gusto: elige una por categoría o parte desde un look recomendado.
          </p>
        </div>
      </div>
      <div className="container main stack gap-lg">
        <div className="chips" role="radiogroup" aria-label="Modo">
          <button type="button" className="chip" role="radio" aria-checked="true">
            <svg className="icon icon--16" aria-hidden="true">
              <use href="#i-check" />
            </svg>
            Desde cero
          </button>
          <button type="button" className="chip" role="radio" aria-checked="false">
            Partir de un look recomendado
          </button>
        </div>
        <div className="builder-grid">
          <ul className="grid grid-2 grid--stack-m" aria-label="Espacios del look">
            <li className="slot">
              <span className="slot__label">Parte superior</span>
              <div className="ph ph--menta " role="img" aria-label="Blusa Lino" data-label="Blusa Lino">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <div className="stack grow">
                <strong className="label-2 fw-semibold">Blusa Lino</strong>
                <span className="body-4 text-secondary">$29.990</span>
              </div>
              <button type="button" className="btn btn--secondary btn--md btn--block">Cambiar</button>
            </li>
            <li className="slot is-empty">
              <span className="slot__label">Parte inferior</span>
              <div className="ph ph--empty " role="img" aria-label="Sin prenda" data-label="Sin prenda">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <span className="body-4 text-secondary grow">Aún no eliges</span>
              <button type="button" className="btn btn--primary btn--md btn--block">+ Elegir</button>
            </li>
            <li className="slot">
              <span className="slot__label">Calzado</span>
              <div className="ph ph--coral " role="img" aria-label="Sandalias Trenzadas" data-label="Sandalias Trenzadas">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <div className="stack grow">
                <strong className="label-2 fw-semibold">Sandalias Trenzadas</strong>
                <span className="body-4 text-secondary">$14.990</span>
              </div>
              <button type="button" className="btn btn--secondary btn--md btn--block">Cambiar</button>
            </li>
            <li className="slot is-empty">
              <span className="slot__label">Accesorio (opcional)</span>
              <div className="ph ph--empty " role="img" aria-label="Sin prenda" data-label="Sin prenda">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <span className="body-4 text-secondary grow">Aún no eliges</span>
              <button type="button" className="btn btn--primary btn--md btn--block">+ Elegir</button>
            </li>
          </ul>
          <div className="hide-m">
            <section className="picker" aria-labelledby="pk-t">
              <div className="row" style={{ justifyContent: 'space-between' }}>
                <h2 className="h5" id="pk-t">Elige tu parte inferior</h2>
              </div>
              <div className="chips">
                <button type="button" className="chip" aria-pressed="true">
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  Todos
                </button>
                <button type="button" className="chip" aria-pressed="false">De mis favoritos</button>
              </div>
              <div className="chips">
                <button type="button" className="chip chip--square" aria-haspopup="listbox">
                  Talla
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                </button>
                <button type="button" className="chip chip--square" aria-haspopup="listbox">
                  Color
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                </button>
                <button type="button" className="chip chip--square" aria-haspopup="listbox">
                  Precio
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-chevron-down" />
                  </svg>
                </button>
              </div>
              <ul className="grid grid-3">
                <li className="pick">
                  <div className="ph ph--menta " role="img" aria-label="Pantalón Recto" data-label="Pantalón Recto">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <strong className="label-2 fw-semibold">Pantalón Recto</strong>
                  <span className="body-4 text-secondary">$19.990</span>
                  <button type="button" className="btn btn--secondary btn--md btn--block">+ Añadir</button>
                </li>
                <li className="pick">
                  <div className="ph ph--amarillo " role="img" aria-label="Falda Midi" data-label="Falda Midi">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <strong className="label-2 fw-semibold">Falda Midi</strong>
                  <span className="body-4 text-secondary">$24.990</span>
                  <button type="button" className="btn btn--secondary btn--md btn--block">+ Añadir</button>
                </li>
                <li className="pick">
                  <div className="ph ph--lavanda " role="img" aria-label="Jeans Mom" data-label="Jeans Mom">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <strong className="label-2 fw-semibold">Jeans Mom</strong>
                  <span className="body-4 text-secondary">$31.990</span>
                  <button type="button" className="btn btn--secondary btn--md btn--block">+ Añadir</button>
                </li>
                <li className="pick">
                  <div className="ph ph--amarillo " role="img" aria-label="Short Lino" data-label="Short Lino">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <strong className="label-2 fw-semibold">Short Lino</strong>
                  <span className="body-4 text-secondary">$17.990</span>
                  <button type="button" className="btn btn--secondary btn--md btn--block">+ Añadir</button>
                </li>
                <li className="pick">
                  <div className="ph ph--menta " role="img" aria-label="Pantalón Palazzo" data-label="Pantalón Palazzo">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <strong className="label-2 fw-semibold">Pantalón Palazzo</strong>
                  <span className="body-4 text-secondary">$31.990</span>
                  <button type="button" className="btn btn--secondary btn--md btn--block">+ Añadir</button>
                </li>
                <li className="pick">
                  <div className="ph ph--lavanda " role="img" aria-label="Falda Plisada" data-label="Falda Plisada">
                    <svg className="icon icon--32" aria-hidden="true">
                      <use href="#i-nopic" />
                    </svg>
                  </div>
                  <strong className="label-2 fw-semibold">Falda Plisada</strong>
                  <span className="body-4 text-secondary">$26.990</span>
                  <button type="button" className="btn btn--secondary btn--md btn--block">+ Añadir</button>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="builder-bar">
          <div className="builder-bar__thumbs" aria-hidden="true">
            <div className="ph ph--menta " role="img" aria-label="" data-label="">
              <svg className="icon icon--32" aria-hidden="true">
                <use href="#i-nopic" />
              </svg>
            </div>
            <div className="ph ph--coral " role="img" aria-label="" data-label="">
              <svg className="icon icon--32" aria-hidden="true">
                <use href="#i-nopic" />
              </svg>
            </div>
            <div className="ph ph--empty " role="img" aria-label="" data-label="">
              <svg className="icon icon--32" aria-hidden="true">
                <use href="#i-nopic" />
              </svg>
            </div>
            <div className="ph ph--empty " role="img" aria-label="" data-label="">
              <svg className="icon icon--32" aria-hidden="true">
                <use href="#i-nopic" />
              </svg>
            </div>
          </div>
          <div className="grow">
            <span className="body-4">Tu look · 2 de 4 prendas</span>
            <p className="h6 fw-bold">$44.980</p>
          </div>
          <label className="check">
            <input type="checkbox" name="c" />
            Publicar mi look en Comunidad
          </label>
          <button type="button" className="btn btn--secondary">Guardar en mis looks</button>
          <button type="button" className="btn btn--primary">Agregar al carrito</button>
        </div>
      </div>
</>    
  )
}
