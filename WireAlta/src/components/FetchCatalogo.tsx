import { useEffect, useState } from 'react'
import { type Productos } from '../Types'

export type Categorias = {
    id: number,
    nombre: string,
    slug: string,
    imagenUrl: string,
    destacada: boolean
}

//const URL_CATEGORIAS = 'http://13.58.173.192:3000/categorias'
//const URL_PRODUCTOS = 'http://13.58.173.192:3000/productos'
const URL_CATEGORIAS = 'http://localhost:3005/categorias'
const URL_PRODUCTOS = 'http://localhost:3006/productos'

export function useFetchCatalogo() {

    const [cargando, setCargando] = useState(true);
    const [categorias, setCategorias] = useState<Categorias[]>([]);
    const [productos, setProductos] = useState<Productos[]>([]);

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
                //setProductos(datosProductos.productos) // el array viene dentro "productos" en backend oficial
                setProductos(datosProductos)

            } catch (errorPeticion) {

                if (controlador.signal.aborted) { return }

                console.log('Error en solicitud http', errorPeticion)
            } finally {
                if (!controlador.signal.aborted) setCargando(false);
            }
        }

        cargarDatos();
        return () => controlador.abort();
    }, [])

    return { cargando, categorias, productos }
}

// Alias con el nombre solicitado
export const FetchCatalogo = useFetchCatalogo
