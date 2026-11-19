
import '../assets/css/views/cuenta.css'

export default function Comunidad() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <nav className="crumbs" aria-label="Migas de pan">
            <ol>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <span aria-current="page">Comunidad</span>
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">Comunidad</h1>
          <p className="page-head__lead">Inspírate con los looks de otras personas y comparte los tuyos.</p>
        </div>
      </div>
      <div className="container main stack gap-lg">
        <div className="row gap-base wrap" style={{ justifyContent: 'space-between' }}>
          <div className="chips" role="radiogroup" aria-label="Filtrar publicaciones">
            <button type="button" className="chip" role="radio" aria-checked="true">
              <svg className="icon icon--16" aria-hidden="true">
                <use href="#i-check" />
              </svg>
              Para ti
            </button>
            <button type="button" className="chip" role="radio" aria-checked="false">Recientes</button>
            <button type="button" className="chip" role="radio" aria-checked="false">Casual</button>
            <button type="button" className="chip" role="radio" aria-checked="false">Trabajo</button>
            <button type="button" className="chip" role="radio" aria-checked="false">Noche</button>
          </div>
          <a className="btn btn--primary" href="#/arma-tu-look">
            <svg className="icon icon--20" aria-hidden="true">
              <use href="#i-plus" />
            </svg>
            Publicar look
          </a>
        </div>
        <ul className="grid grid-3">
          <li className="post">
            <div className="ph ph--menta " role="img" aria-label="Foto de la publicación: Mi look de brunch favorito 🌿" data-label="Foto de la publicación: Mi look de brunch favorito 🌿">
              <svg className="icon icon--32" aria-hidden="true">
                <use href="#i-nopic" />
              </svg>
            </div>
            <div className="post__body">
              <div className="post__author">
                <span className="avatar" aria-hidden="true">CR</span>
                @camila.r
              </div>
              <p className="body-3">Mi look de brunch favorito 🌿</p>
              <div className="post__actions">
                <span>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                  128
                </span>
                <span>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-chat" />
                  </svg>
                  14
                </span>
                <button type="button" className="btn btn--tertiary btn--sm">Comprar el look</button>
              </div>
            </div>
          </li>
          <li className="post">
            <div className="ph ph--coral " role="img" aria-label="Foto de la publicación: Oficina pero relajado" data-label="Foto de la publicación: Oficina pero relajado">
              <svg className="icon icon--32" aria-hidden="true">
                <use href="#i-nopic" />
              </svg>
            </div>
            <div className="post__body">
              <div className="post__author">
                <span className="avatar" aria-hidden="true">JS</span>
                @juan.s
              </div>
              <p className="body-3">Oficina pero relajado</p>
              <div className="post__actions">
                <span>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                  96
                </span>
                <span>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-chat" />
                  </svg>
                  8
                </span>
                <button type="button" className="btn btn--tertiary btn--sm">Comprar el look</button>
              </div>
            </div>
          </li>
          <li className="post">
            <div className="ph ph--lavanda " role="img" aria-label="Foto de la publicación: Noche urbana con satén lila" data-label="Foto de la publicación: Noche urbana con satén lila">
              <svg className="icon icon--32" aria-hidden="true">
                <use href="#i-nopic" />
              </svg>
            </div>
            <div className="post__body">
              <div className="post__author">
                <span className="avatar" aria-hidden="true">VM</span>
                @vale.m
              </div>
              <p className="body-3">Noche urbana con satén lila</p>
              <div className="post__actions">
                <span>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                  214
                </span>
                <span>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-chat" />
                  </svg>
                  31
                </span>
                <button type="button" className="btn btn--tertiary btn--sm">Comprar el look</button>
              </div>
            </div>
          </li>
          <li className="post">
            <div className="ph ph--amarillo " role="img" aria-label="Foto de la publicación: Todo lino para el verano" data-label="Foto de la publicación: Todo lino para el verano">
              <svg className="icon icon--32" aria-hidden="true">
                <use href="#i-nopic" />
              </svg>
            </div>
            <div className="post__body">
              <div className="post__author">
                <span className="avatar" aria-hidden="true">AP</span>
                @ana.p
              </div>
              <p className="body-3">Todo lino para el verano</p>
              <div className="post__actions">
                <span>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                  77
                </span>
                <span>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-chat" />
                  </svg>
                  5
                </span>
                <button type="button" className="btn btn--tertiary btn--sm">Comprar el look</button>
              </div>
            </div>
          </li>
          <li className="post">
            <div className="ph ph--lavanda " role="img" aria-label="Foto de la publicación: Denim total, sin miedo" data-label="Foto de la publicación: Denim total, sin miedo">
              <svg className="icon icon--32" aria-hidden="true">
                <use href="#i-nopic" />
              </svg>
            </div>
            <div className="post__body">
              <div className="post__author">
                <span className="avatar" aria-hidden="true">DF</span>
                @dani.f
              </div>
              <p className="body-3">Denim total, sin miedo</p>
              <div className="post__actions">
                <span>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                  143
                </span>
                <span>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-chat" />
                  </svg>
                  22
                </span>
                <button type="button" className="btn btn--tertiary btn--sm">Comprar el look</button>
              </div>
            </div>
          </li>
          <li className="post">
            <div className="ph ph--menta " role="img" aria-label="Foto de la publicación: Fin de semana en la playa" data-label="Foto de la publicación: Fin de semana en la playa">
              <svg className="icon icon--32" aria-hidden="true">
                <use href="#i-nopic" />
              </svg>
            </div>
            <div className="post__body">
              <div className="post__author">
                <span className="avatar" aria-hidden="true">TL</span>
                @tomi.l
              </div>
              <p className="body-3">Fin de semana en la playa</p>
              <div className="post__actions">
                <span>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                  65
                </span>
                <span>
                  <svg className="icon icon--16" aria-hidden="true">
                    <use href="#i-chat" />
                  </svg>
                  3
                </span>
                <button type="button" className="btn btn--tertiary btn--sm">Comprar el look</button>
              </div>
            </div>
          </li>
        </ul>
        <div style={{ textAlign: 'center' }}>
          <button type="button" className="btn btn--secondary">Cargar más</button>
        </div>
        <p className="body-4 text-secondary" style={{ textAlign: 'center' }}>
          Las publicaciones son moderadas. Al publicar aceptas las normas de la comunidad.
        </p>
      </div>
    </>
  )
}
