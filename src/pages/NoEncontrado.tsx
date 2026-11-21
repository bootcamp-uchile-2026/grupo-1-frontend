

export function NoEncontrado() {
  return (
    <>
      <div className="container main stack gap-lg">
        <h1 className="sr-only">Error 404</h1>
        <div className="empty">
          <div className="empty__icon">
            <svg className="icon icon--32" aria-hidden="true">
              <use href="#i-search" />
            </svg>
          </div>
          <h2 className="h5">No encontramos esta página</h2>
          <p>Puede que el enlace haya cambiado o ya no exista. Prueba buscando o vuelve al inicio.</p>
          <div className="row gap-sm wrap" style={{ justifyContent: 'center' }}>
            <a className="btn btn--primary" href="/">Volver al inicio</a>
            <a className="btn btn--secondary" href="/ayudaCambios">Ir a la ayuda</a>
          </div>
        </div>
        <h2 className="h5">Busca por categoría</h2>
        <div className="chips">
          <a className="chip" href="/listado/Mujer">Mujer</a>
          <a className="chip" href="/listado/Hombre">Hombre</a>
          <a className="chip" href="/listado/Accesorios">Accesorios</a>
          <a className="chip" href="/listado/Calzados">Calzados</a>
        </div>
      </div>
    </>
  )
}
