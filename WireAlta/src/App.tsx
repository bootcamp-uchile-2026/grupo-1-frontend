import { Route, Routes } from 'react-router'
import { MainLayout } from './layout/MainLayout'
import { Inicio } from './pages/Inicio'
import { Listado } from './pages/Listados_v2'
import {NoEncontrado}  from './pages/NoEncontrado'


export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Inicio />} />
          <Route path="/listados" element={<Listado categoria='Todas' />} />
          <Route path="/listados/Mujer" element={<Listado categoria='Mujer' />} />
          <Route path="/listados/Hombre" element={<Listado categoria='Hombre' />} />
          <Route path="/listados/Accesorios" element={<Listado categoria='Accesorios' />} />
          <Route path="/listados/Calzados" element={<Listado categoria='Calzados' />} />
          <Route path="/listados/Ofertas" element={<Listado categoria='Ofertas' />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </>
  )
}
