import '../assets/css/home.css'
/*import { CardCategorias } from '../components/cardCategorias'*/
import { CategoriasHome } from '../components/CategoriasHome'
import { Hero }  from '../components/Hero'

export function Inicio() {
  return (
    <>
    <Hero />
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
          </div>
          <ul className="grid grid-4 cat-scroll">
            <CategoriasHome />

          </ul>
        </div>
      </section>
    </>
  )
}
