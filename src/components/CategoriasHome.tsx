import { useFetchCatalogo } from './FetchCatalogo';
import { resolveAssetImage } from '../jserver/resolveAssetImage';

export function CategoriasHome() {
    const { cargando, categorias, productos } = useFetchCatalogo();

    const normalizarSlug = (slug: string) => slug.trim().toLowerCase();
    const resolverImagenCategoria = (imagenUrl?: string | string[]) =>
        resolveAssetImage(
            (Array.isArray(imagenUrl) ? imagenUrl[0] : imagenUrl)
                ?.trim()
                .replace(/^(?:\.\/)?src\//, '/src/'),
        );

    const cantidadPorCategoria = new Map<string, number>();

    if (!cargando) {
        for (const producto of productos) {
            const slug = normalizarSlug(producto.categoria);
            cantidadPorCategoria.set(slug, (cantidadPorCategoria.get(slug) ?? 0) + 1);
        }
    }

    const categoriasConImagen = cargando
        ? []
        : categorias.map(categoria => ({
            ...categoria,
            imagenResuelta: resolverImagenCategoria(categoria.imagenUrl),
            cantidadProductos: cantidadPorCategoria.get(normalizarSlug(categoria.slug)) ?? 0,
        }));

    return (
        <>
            {cargando ? (
                <p>Cargando...</p>
            ) : (
                categoriasConImagen.map(categoria => (
                    <li key={categoria.id}>
                        <a className="cat-card" href={`listados/${categoria.slug}`}>
                            <div className="cat-card__bg">
                                <div
                                    className="cat-card__figure"
                                    role="img"
                                    aria-label={categoria.nombre}
                                    style={{
                                        backgroundImage: categoria.imagenResuelta
                                            ? `url("${categoria.imagenResuelta}")`
                                            : undefined,
                                        backgroundSize: '200%',
                                        backgroundPositionX: 'center',
                                        backgroundPositionY: '0',
                                    }}
                                >
                                    {!categoria.imagenResuelta && (
                                        <svg className="icon icon--32" aria-hidden="true">
                                            <use href="#i-nopic" />
                                        </svg>
                                    )}
                                </div>
                                <div className="cat-card__label">
                                    <span>
                                        <strong>{categoria.nombre}</strong>
                                        <p>
                                            {categoria.cantidadProductos}{' '}
                                            {categoria.cantidadProductos === 1 ? 'producto' : 'productos'}
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
                ))
            )}
        </>
    );
}
