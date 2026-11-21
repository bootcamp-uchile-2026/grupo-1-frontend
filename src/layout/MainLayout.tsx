import { Outlet } from 'react-router'
import { Body } from './Body'
import { Header } from './Header'
import { Footer } from './Footer'



/**
 * Estructura común de las pantallas: sprite + skip link + header, contenido
 * principal y footer. Si se recibe `overlay`, la página se envuelve en
 * `.inert-bg` (fondo inerte) igual que las pantallas con modal del mockup.
 */
export function MainLayout() {
  return (<>
    <Body>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </Body>
  </>
  )
}
