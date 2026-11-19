
import '../assets/css/views/looks.css'
import '../assets/css/home.css'
import '../assets/css/views/carrito.css'

export default function DetalleLook() {
  return (
    <>
      <div className="container" style={{ paddingTop: 'var(--space-lg)' }}>
        <nav className="crumbs" aria-label="Migas de pan">
          <ol>
            <li>
              <a href="#">Looks</a>
            </li>
            <li>
              <span aria-current="page">Look Verano Lino</span>
            </li>
          </ol>
        </nav>
      </div>
      <div className="container main">
        <div className="split--product" style={{ display: 'grid' }}>
          <div className="look-stage">
            <div className="ph ph--amarillo " role="img" aria-label="Mujer con camisa blanca, pantalón de lino y cartera de paja" data-label="Mujer con camisa blanca, pantalón de lino y cartera de paja">
              <svg className="icon icon--32" aria-hidden="true">
                <use href="#i-nopic" />
              </svg>
            </div>
            <div className="hotspot" style={{ left: '36%', top: '20%' }}>
              <button type="button" className="hotspot__btn" aria-expanded="true" aria-label="Prenda 1: Blusa Lino">
                1
              </button>
              <div className="hotspot__tip" role="tooltip">
                <strong>Blusa Lino</strong>
                <span>$29.990</span>
              </div>
            </div>
            <div className="hotspot" style={{ left: '44%', top: '52%' }}>
              <button type="button" className="hotspot__btn" aria-expanded="false" aria-label="Prenda 2: Pantalón Lino">
                2
              </button>
            </div>
            <div className="hotspot" style={{ left: '30%', top: '86%' }}>
              <button type="button" className="hotspot__btn" aria-expanded="false" aria-label="Prenda 3: Sandalias Trenzadas">
                3
              </button>
            </div>
          </div>
          <section className="look-buy" aria-labelledby="lk-t">
            <div>
              <p className="overline text-secondary">Inspiración</p>
              <h1 className="h3" id="lk-t">Look Verano Lino</h1>
              <p className="body-4 text-secondary">Casual · Ideal para días cálidos</p>
            </div>
            <hr className="divider" />
            <h2 className="label-1">Compra el look · 3 prendas</h2>
            <ol>
              <li className="look-item">
                <span className="look-item__n" aria-hidden="true">1</span>
                <div className="ph ph--menta " role="img" aria-label="Blusa Lino" data-label="Blusa Lino">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <div className="look-item__body">
                  <strong className="label-2 fw-semibold">Blusa Lino</strong>
                  <span className="fw-bold label-2">$29.990</span>
                  <div className="sizes" role="group" aria-label="Talla Blusa Lino">
                    <button type="button" className="size size--sm" aria-pressed="false">S</button>
                    <button type="button" className="size size--sm" aria-pressed="true">M</button>
                    <button type="button" className="size size--sm" aria-pressed="false">L</button>
                  </div>
                  <button type="button" className="btn btn--secondary btn--sm">Agregar prenda</button>
                </div>
              </li>
              <li className="look-item">
                <span className="look-item__n" aria-hidden="true">2</span>
                <div className="ph ph--amarillo " role="img" aria-label="Pantalón Lino" data-label="Pantalón Lino">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <div className="look-item__body">
                  <strong className="label-2 fw-semibold">Pantalón Lino</strong>
                  <span className="fw-bold label-2">$34.990</span>
                  <div className="sizes" role="group" aria-label="Talla Pantalón Lino">
                    <button type="button" className="size size--sm" aria-pressed="false">S</button>
                    <button type="button" className="size size--sm" aria-pressed="true">M</button>
                    <button type="button" className="size size--sm" aria-pressed="false">L</button>
                  </div>
                  <button type="button" className="btn btn--secondary btn--sm">Agregar prenda</button>
                </div>
              </li>
              <li className="look-item">
                <span className="look-item__n" aria-hidden="true">3</span>
                <div className="ph ph--coral " role="img" aria-label="Sandalias Trenzadas" data-label="Sandalias Trenzadas">
                  <svg className="icon icon--32" aria-hidden="true">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <div className="look-item__body">
                  <strong className="label-2 fw-semibold">Sandalias Trenzadas</strong>
                  <span className="fw-bold label-2">$21.990</span>
                  <div className="sizes" role="group" aria-label="Talla Sandalias Trenzadas">
                    <button type="button" className="size size--sm" aria-pressed="false">S</button>
                    <button type="button" className="size size--sm" aria-pressed="true">M</button>
                    <button type="button" className="size size--sm" aria-pressed="false">L</button>
                  </div>
                  <button type="button" className="btn btn--secondary btn--sm">Agregar prenda</button>
                </div>
              </li>
            </ol>
            <hr className="divider" />
            <div className="summary__total">
              <span className="body-3 text-secondary">Total del look</span>
              <strong>$86.970</strong>
            </div>
            <button type="button" className="btn btn--primary btn--block">Agregar look completo al carrito</button>
            <button type="button" className="btn btn--secondary btn--block">Guardar look</button>
            <p className="body-4 text-secondary" style={{ textAlign: 'center' }}>
              También puedes agregar solo las prendas que quieras.
            </p>
          </section>
        </div>
      </div>
      <section className="container section" aria-labelledby="rel-t">
        <h2 className="h5" id="rel-t" style={{ marginBottom: 'var(--space-base)' }}>
          Otros looks que te pueden gustar
        </h2>
        <ul className="grid grid-4">
          <li>
            <a className="look-card" href="#">
              <div className="ph ph--coral ratio-thumb " role="img" aria-label="Look Oficina Relajada" data-label="Look Oficina Relajada">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <strong className="label-2 fw-semibold">Look Oficina Relajada</strong>
              <span className="body-4 text-secondary">$94.970</span>
            </a>
          </li>
          <li>
            <a className="look-card" href="#">
              <div className="ph ph--lavanda ratio-thumb " role="img" aria-label="Look Noche Urbana" data-label="Look Noche Urbana">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <strong className="label-2 fw-semibold">Look Noche Urbana</strong>
              <span className="body-4 text-secondary">$64.980</span>
            </a>
          </li>
          <li>
            <a className="look-card" href="#">
              <div className="ph ph--menta ratio-thumb " role="img" aria-label="Look Brunch" data-label="Look Brunch">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <strong className="label-2 fw-semibold">Look Brunch</strong>
              <span className="body-4 text-secondary">$51.980</span>
            </a>
          </li>
          <li>
            <a className="look-card" href="#">
              <div className="ph ph--lavanda ratio-thumb " role="img" aria-label="Look Denim Total" data-label="Look Denim Total">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-nopic" />
                </svg>
              </div>
              <strong className="label-2 fw-semibold">Look Denim Total</strong>
              <span className="body-4 text-secondary">$89.970</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}
