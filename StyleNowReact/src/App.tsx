import { MainLayout } from './layout/MainLayout'
import { Route, Routes } from 'react-router'
import { Inicio } from './paginas/Inicio'
import { Carrito } from './paginas/Carrito'
import { Catalogo } from './paginas/Catalogo'
import { Comunidad } from './paginas/Comunidad'
import { Cambios_y_Devoluciones } from './paginas/CambioS_y_Devoluciones'
import { Producto } from './paginas/Producto'
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
          <Route path="cambios_y_devoluciones" element={<Cambios_y_Devoluciones />} />
          <Route path="comunidad" element={<Comunidad />} />
          <Route path="producto" element={<Producto />} />

          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Route>
      </Routes>
    </>
  )
}



