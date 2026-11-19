
import '../assets/css/views/cuenta.css'
import '../assets/css/views/ayuda.css'

export default function FavoritosVacio() {
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
                <span aria-current="page">Favoritos</span>
              </li>
            </ol>
          </nav>
          <h1 className="h3 page-head__title">Favoritos</h1>
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
                <a href="#/favoritos" aria-current="page">Favoritos</a>
              </li>
              <li>
                <a href="#/datos-personales">Datos personales</a>
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
            <div className="empty">
              <div className="empty__icon">
                <svg className="icon icon--32" aria-hidden="true">
                  <use href="#i-heart" />
                </svg>
              </div>
              <h2 className="h5">Aún no tienes favoritos</h2>
              <p>Toca el corazón en cualquier producto para guardarlo aquí y comprarlo después.</p>
              <div className="row gap-sm wrap" style={{ justifyContent: 'center' }}>
                <a className="btn btn--primary" href="#/listado">Explorar productos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
