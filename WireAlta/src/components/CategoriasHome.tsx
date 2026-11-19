import { useFetchCatalogo } from './FetchCatalogo'

export function CategoriasHome() {

    const { cargando, categorias, productos } = useFetchCatalogo()

    // Conteo de productos por categoría como string (comparando por slug)
    const contar = (categoriaParaContar: string): string =>
        String(
            productos.filter(p => p.categoria.toLowerCase() === categoriaParaContar.toLowerCase()).length
        );

    const cantidadProductos = {
        mujer: contar('mujer'),
        hombre: contar('hombre'),
        accesorios: contar('accesorios'),
        calzado: contar('calzado'),
    };


    return (<>

        {cargando ? <p>Cargando...</p> : categorias.map((categoria) => (
            <li key={categoria.id}>
                <a className="cat-card" href={`listados/${categoria.slug}`}>
                    <div className="cat-card__bg" >
                        <div className="cat-card__figure" role="img" aria-label={categoria.nombre} style={{ backgroundImage: `url(${categoria.imagenUrl})`, backgroundSize:'200%', backgroundPositionX: 'center', backgroundPositionY:'0'}}>
                           { !categoria.imagenUrl && <svg className="icon icon--32" aria-hidden="true">
                                <use href="#i-nopic" />
                            </svg> }
                        </div>
                        <div className="cat-card__label">
                            <span>
                                <strong>{categoria.nombre}</strong>
                                <p>
                                    {cantidadProductos[categoria.slug as keyof typeof cantidadProductos] ?? '0'} productos
                                </p>
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
        ))}

    </>)
}

export default CategoriasHome
