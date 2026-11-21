import { useCarritoStore } from '../store/useCarritoStore'
import type { Productos } from '../Types'

export function BotonAgregar({ producto }: { producto: Productos }) {
  const agregar = useCarritoStore((estado) => estado.agregar)

  return (
    <button
      type="button"
      className="btn btn--primary grow"
      onClick={() =>
        agregar({
          id: String(producto.id),
          nombre: producto.nombre,
          precio: producto.precio,
        })
      }
    >
      Agregar al carrito
    </button>
  )
}