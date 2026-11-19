import { Route, Routes } from 'react-router'
import { MainLayout } from './layout/MainLayout'
import { Inicio } from './pages/Inicio'
import { Listado } from './pages/Listados'
import { Producto } from './pages/Producto'
import { Carrito } from './pages/Carrito'
import { Checkout } from './pages/Checkout'
import { AyudaCambios } from './pages/AyudaCambios'
import {NoEncontrado}  from './pages/NoEncontrado'


export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Inicio />} />
          <Route path="/listados" element={<Inicio />} />
          <Route path="/listados/Mujer" element={<Listado categoria='Mujer' />} />
          <Route path="/listados/Hombre" element={<Listado categoria='Hombre' />} />
          <Route path="/listados/Accesorios" element={<Listado categoria='Accesorios' />} />
          <Route path="/listados/Calzados" element={<Listado categoria='Calzados' />} />
          <Route path="/listados/Ofertas" element={<Listado categoria='Ofertas' />} />
          <Route path="/listados/:categoria/:id" element={<Producto />} />
          <Route path="/ayudaCambios" element={<AyudaCambios />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/finalizarCompra" element={<Checkout />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </>
  )
}
