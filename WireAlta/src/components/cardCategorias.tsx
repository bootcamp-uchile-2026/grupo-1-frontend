import { useEffect, useState } from 'react'

type Categorias = {
    id: number,
    nombre: string,
    slug: string,
    imagenUrl: string,
    destacada: boolean
}

type Productos = {
    id: number,
    nombre: string,
    precio: number,
    imagenUrl: string,
    categoria: string,
    novedad: boolean,
    oferta: boolean
}

export function CardCategorias() {

    const [cargando, setCargando] = useState(true);
    const [categorias, setCategorias] = useState<Categorias[]>([]);
    const [productos, setProductos] = useState<Productos[]>([]);
    const URL_CATEGORIAS = 'http://13.58.173.192:3000/categorias'
    const URL_PRODUCTOS = 'http://13.58.173.192:3000/productos'

    useEffect(() => {

        const controlador = new AbortController()

        async function cargarDatos() {
            try {
                setCargando(true)

                const [responseCategorias, responseProductos] = await Promise.all([
                    fetch(URL_CATEGORIAS, { signal: controlador.signal }),
                    fetch(URL_PRODUCTOS, { signal: controlador.signal })
                ])

                if (!responseCategorias.ok) { throw new Error(`Error HTTP: ${responseCategorias.status}`) }
                if (!responseProductos.ok) { throw new Error(`Error HTTP: ${responseProductos.status}`) }

                const datosCategorias: Categorias[] = await responseCategorias.json()
                const datosProductos = await responseProductos.json()

                setCategorias(datosCategorias)
                setProductos(datosProductos.productos) // el array viene dentro "productos"

            } catch (errorPeticion) {

                if (controlador.signal.aborted) { return }

                console.log('Error en solicitud http', errorPeticion)
            } finally {
                setCargando(false);
            }
        }

        cargarDatos();
        return () => controlador.abort();
    }, [])


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
                <a className="cat-card" href={`listado/${categoria.slug}`}>
                    <div className="cat-card__bg" >
                        <div className="cat-card__figure" role="img" aria-label={categoria.nombre}>
                            <svg className="icon icon--32" aria-hidden="true">
                                <use href="#i-nopic" />
                            </svg>
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