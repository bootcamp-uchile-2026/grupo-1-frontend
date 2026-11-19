# stylenow · React + Vite

Reconstrucción del mockup HTML **StyleNow** (wireframes de una tienda de ropa:
26 pantallas + librería de componentes) como proyecto **React + TypeScript + Vite**.

El mockup original en HTML/CSS/JS vanilla se conserva en `vanillaHtml/` y su CSS
en `css/`, para poder comparar ambos entregables lado a lado.

## Estructura

```
├── css/                  → CSS del mockup vanilla original (referencia)
├── public/
│   ├── favicon.svg
│   └── icons.svg         → sprite de iconos
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── views/    → CSS específico de cada vista (listado, carrito…)
│   │   │   ├── base.css        → design tokens + componentes compartidos
│   │   │   ├── header-footer.css
│   │   │   └── home.css
│   │   ├── img/
│   │   ├── users.json    → usuarios de ejemplo (json-server)
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── layout/
│   │   ├── Body.tsx      → sprite de iconos + interacciones del wireframe
│   │   ├── Footer.tsx
│   │   ├── Header.tsx    → props: carrito, actual, sesion
│   │   └── MainLayout.tsx→ header + main + footer (+ overlays inertes)
│   ├── pages/            → una página por pantalla del mockup
│   ├── App.tsx           → enrutador por hash
│   ├── index.css
│   └── main.tsx
└── vanillaHtml/          → mockup original completo
```

## Scripts

```bash
npm install
npm run dev        # servidor de desarrollo
npm run build      # tsc -b && vite build
npm run preview    # vista previa del build
npm run lint       # oxlint
npm run jServer    # json-server src/assets/users.json --port 3001
```

## Rutas

Enrutamiento por hash, sin dependencias extra: cada pantalla del mockup es una
ruta (`#/listado`, `#/carrito`, `#/checkout`, …). La ruta desconocida cae en la
pantalla 404.

| Pantalla | Ruta |
| --- | --- |
| 01 Home | `#/` |
| 02 Listado | `#/listado` |
| 03 Producto / 03b Agregado | `#/producto`, `#/producto-agregado` |
| 04 Carrito / 04b Vacío | `#/carrito`, `#/carrito-vacio` |
| 05 Checkout (+ errores, pago rechazado) | `#/checkout`, `#/checkout-errores`, `#/checkout-pago-rechazado` |
| 06 Confirmación | `#/confirmacion` |
| 07 Looks / 07b Detalle | `#/looks`, `#/detalle-look` |
| 08 Arma tu look / 08b Selector | `#/arma-tu-look`, `#/arma-tu-look-selector` |
| 09 Ayuda · cambios | `#/ayuda-cambios` |
| 10 Mis compras | `#/mis-compras` |
| 11 Iniciar cambio | `#/iniciar-cambio` |
| 12 Login / registro / errores | `#/login`, `#/registro`, `#/registro-errores` |
| 13 Privacidad | `#/privacidad` |
| 14 Banner cookies | `#/banner-cookies` |
| 15 Mega menú / cajón / submenú | `#/mega-menu`, `#/menu-cajon`, `#/submenu-mujer` |
| 16 Resultados / sin resultados | `#/resultados`, `#/sin-resultados` |
| 17 Guía de tallas | `#/guia-tallas` |
| 18 Preferencias cookies | `#/preferencias-cookies` |
| 19 Recuperar contraseña / correo | `#/recuperar-contrasena`, `#/correo-enviado` |
| 20 Detalle pedido | `#/detalle-pedido` |
| 21 Solicitud recibida | `#/solicitud-recibida` |
| 22 Favoritos (+ vacío) | `#/favoritos`, `#/favoritos-vacio` |
| 23 Mis looks | `#/mis-looks` |
| 24 Datos personales | `#/datos-personales` |
| 25 Comunidad | `#/comunidad` |
| 26 404 | `#/404` |
| Librería de componentes | `#/componentes` |
| Índice de pantallas | `#/indice` |

## Notas de la conversión

- **Layout compartido**: `Header` y `Footer` son componentes únicos; sus
  variaciones del mockup (contador de carrito, `aria-current`, sesión iniciada)
  se controlan con props (`carrito`, `actual`, `sesion`).
- **Overlays**: las pantallas con modal (03b, 08b, 15, 15b, 15c, 17, 18) reciben
  la prop `overlay` de `MainLayout`, que envuelve la página en `.inert-bg`
  igual que el mockup.
- **Interacciones**: el comportamiento de `js/app.js` (chips, tallas, pestañas,
  hotspots, acordeones, mostrar contraseña) vive en `Body.tsx` como
  delegación de eventos sobre el documento.
- **Iconos**: el sprite SVG del mockup se inyecta una sola vez desde `Body.tsx`;
  los `<use href="#i-…">` del HTML funcionan igual en JSX.
