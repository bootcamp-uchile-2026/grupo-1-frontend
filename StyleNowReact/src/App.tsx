import { MainLayout } from './layout/MainLayout'
import { Route, Routes } from 'react-router'
import { Inicio } from './pages/Inicio'
import { Carrito } from './pages/Carrito'
import { Catalogo } from './pages/Catalogo'
import { Comunidad } from './pages/Comunidad'
import { Cambios_y_Devoluciones } from './pages/Cambios_y_Devoluciones'
import { Cuenta } from './pages/Cuenta'
import { Producto } from './pages/Producto' 
import { NotFound } from './pages/ohoh'
import '/src/assets/css/base.css'
import '/src/assets/css/header-footer.css'


export function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Inicio />} />
          <Route path="inicio" element={<Inicio />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="cuenta" element={<Cuenta />} />
          <Route path="cambios_y_devoluciones" element={<Cambios_y_Devoluciones />} />
          <Route path="comunidad" element={<Comunidad />} />
          <Route path="producto" element={<Producto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
  
}



