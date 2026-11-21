import { create } from "zustand";
import { persist } from 'zustand/middleware'

export type ProductoCarrito = {
    id: string
    precio: number
    nombre: string
}

type ItemCarrito = {
    producto: ProductoCarrito,
    cantidad: number
}

type EstadoCarrito = {
    items: ItemCarrito[]
    agregar: (producto: ProductoCarrito) => void
    quitar: (id: string) => void
    eliminar: (id: string) => void
    vaciar: () => void
}


// Keep your existing type definitions here.

export const useCarritoStore = create<EstadoCarrito>()(
  persist(
    (set) => ({
      items: [],

      agregar: (producto) =>
        set((estadoActual) => ({
          items: estadoActual.items.some(
            (item) => item.producto.id === producto.id,
          )
            ? estadoActual.items.map((item) =>
                item.producto.id === producto.id
                  ? { ...item, cantidad: item.cantidad + 1 }
                  : item,
              )
            : [...estadoActual.items, { producto, cantidad: 1 }],
        })),

      quitar: (id) =>
        set((estadoActual) => ({
          items: estadoActual.items
            .map((item) =>
              item.producto.id === id
                ? { ...item, cantidad: item.cantidad - 1 }
                : item,
            )
            .filter((item) => item.cantidad > 0),
        })),

      eliminar: (id) =>
        set((estadoActual) => ({
          items: estadoActual.items.filter((item) => item.producto.id !== id),
        })),

      vaciar: () => set({ items: [] }),
    }),
    {
      name: 'carrito-storage',
      partialize: (estado) => ({ items: estado.items }),
    },
  ),
)