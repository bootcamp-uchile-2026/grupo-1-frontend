# Grupo 1 equipo Frontend, proyecto: StyleNow
Ecommerce de Moda y Accesorios
## Introducción:
Para comenzar el trabajo colaborativo se estableció una estrategia común de desarrollo para el proyecto StyleNow, aplicable desde el Hito 1 hasta la entrega final del e-commerce.
El equipo se compone de ocho integrantes distribuidos en cuatro disciplinas: UX/UI, Frontend, Mobile y Backend.
Cabe destacar que Frontend, Mobile y Backend poseen repositorios Git independientes, en cada uno de ellos se aplicará la misma política de ramas, commits, Pull Requests, documentación y releases. Esta estrategia busca asegurar que:
1. Se realice trabajo paralelo sin comprometer las versiones estables.
2. Mantener la trazabilidad desde las Historias de Usuario hasta el código.
3. Realizar revisión y pruebas antes de integrar cambios.
4. Mantener la coordinación permanente entre UX/UI, Frontend, Mobile y Backend;
5. Mantener documentación técnica actualizada.
6. Tener la identificación inequívoca de la versión entregada en cada Hito.
7. Propiciar la continuidad de una misma metodología durante todo el desarrollo del e-commerce.
   
 Respecto a GitHub Flow usado en cada repositorio, básicamente la estrategia a utilizar fue:
1. Rama Main como versión estable.
2. Rama Release que representa la versión  del hito a entregar.
3. Rama Develop como rama permanente de integración.
4. Ramas temporales de trabajo y componentes: feature/*, fix/*, docs/* y chore/*.
   La estructura general será:
   
` main <-- develop <-- feature/* <- fix/* docs/* chore/ `

   Ramas y acuerdos:
   
   3.1. Main: Representa la versión estable y oficial de cada aplicación.
			Reglas:
			* No se desarrolla directamente sobre main.
			* No se permiten commits directos.
			* No se permite push directo.
			* No se permite force push.
			* Los cambios ingresan mediante Pull Request.
			* Debe contener solamente código previamente integrado y probado.
			* Cada entrega oficial debe quedar identificada mediante un tag.
   
   3.2.Develop: Representa la versión actual de integración dentro de cada repositorio.
   Reglas:
				* No se desarrolla directamente sobre develop.
				* Todo cambio entra mediante Pull Request.
				* Las nuevas ramas parten normalmente desde develop.
				* Debe mantenerse ejecutable y razonablemente estable.

3.3 Feature: Se utilizan para implementar nuevas funcionalidades. Cada rama debe representar una funcionalidad concreta, preferentemente relacionada con una Historia de Usuario o tarea del Backlog. 
   Formato: feature/<HU>-<descripcion>

# StyleNow | Frontend

Tienda web de moda y accesorios desarrollada por el equipo Frontend del Grupo 1 del Bootcamp DCC 2026. La rama `develop` permite recorrer una compra de demostración: explorar el catálogo, abrir un producto, agregarlo al carrito y completar el checkout.

## Inicio rápido

**Requisitos:** Git, Node.js **22.22.0 o superior** y pnpm. Usa pnpm para instalar las dependencias: `pnpm-lock.yaml` coincide con `package.json`, mientras que `package-lock.json` está desactualizado. No necesitas configurar un archivo `.env`.

```bash
git clone --branch develop [https://github.com/bootcamp-uchile-2026/grupo-1-frontend.git](https://github.com/bootcamp-uchile-2026/grupo-1-frontend.git)
cd grupo-1-frontend
pnpm install --frozen-lockfile
```

Desde la raíz del repositorio, ejecuta cada comando en una terminal distinta y deja los tres procesos activos:

| Terminal | Comando | URL |
| --- | --- | --- |
| 1 | `pnpm jCategorias` | [API de categorías](http://localhost:3005/categorias) |
| 2 | `pnpm jProductos` | [API de productos](http://localhost:3006/productos) |
| 3 | `pnpm dev` | [Tienda en Vite](http://localhost:5173) |

Abre la URL que indique Vite si el puerto `5173` está ocupado. Si el catálogo aparece vacío, comprueba que ambos endpoints respondan en los puertos `3005` y `3006`: el frontend usa esas direcciones directamente en [`FetchCatalogo.tsx`](src/components/FetchCatalogo.tsx) y [`Producto.tsx`](src/pages/Producto.tsx).

## Cómo probar la tienda

1. En Inicio, abre la categoría **Hombre** y selecciona **Camisa oxford** (`/listados/hombre/2`).
2. Agrega la camisa al carrito. En `/carrito`, modifica la cantidad y recarga la página para comprobar que el carrito persiste en el navegador.
3. En `/finalizarCompra`, completa los datos de prueba, selecciona una comuna y elige un método de pago. El código postal es opcional. Al enviar el formulario válido, aparece una confirmación y se vacía el carrito.
4. Para probar el inicio de sesión por separado, usa una cuenta de demostración de [`users.json`](src/jserver/users.json) en `/login`. La comparación ocurre en el navegador y no requiere un servidor de usuarios.

El catálogo se sirve con JSON Server a partir de [categorías](src/jserver/categorias.json) y [productos](src/jserver/productos.json) de prueba. El login no implementa autenticación real y el checkout no realiza cobros ni envía pedidos a un backend. No uses datos personales ni credenciales reales.

## Rutas

| Ruta | Vista |
| --- | --- |
| `/` | Inicio con banners y accesos a categorías |
| `/listados/Mujer`, `/listados/Hombre`, `/listados/Accesorios`, `/listados/Calzado`, `/listados/Ofertas` | Listados filtrados por categoría u oferta |
| `/listados/:categoria/:id` | Ficha de producto; el detalle se consulta por ID |
| `/carrito` | Carrito, cantidades y eliminación de productos |
| `/finalizarCompra` | Checkout simulado con validación de formulario |
| `/login` | Inicio de sesión de demostración |
| `/ayudaCambios` | Ayuda sobre cambios y devoluciones |

Las rutas se definen en [`src/App.tsx`](src/App.tsx). `/listados` renderiza Inicio y las rutas no reconocidas muestran una página de error.

## Tecnologías y estructura

El frontend usa React y TypeScript, Vite para desarrollo y compilación, y React Router para navegación. Zustand maneja el estado del carrito y del login; solo el carrito se persiste en `localStorage`. Zod valida los formularios y Oxlint analiza el código.

| Ruta | Contenido |
| --- | --- |
| [`src/pages/`](src/pages/) | Vistas de la tienda |
| [`src/layout/`](src/layout/) | Estructura compartida, encabezado y pie de página |
| [`src/components/`](src/components/) | Componentes reutilizables y hook del catálogo |
| [`src/store/`](src/store/) | Estado del carrito y del login |
| [`src/jserver/`](src/jserver/) | Datos de prueba y resolución de imágenes del catálogo |
| [`src/assets/`](src/assets/) · [`public/`](public/) | Estilos, imágenes y recursos públicos |

## Comandos de desarrollo

| Comando | Uso |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo de Vite. |
| `pnpm jCategorias` | Sirve las categorías de prueba en el puerto `3005`. |
| `pnpm jProductos` | Sirve los productos de prueba en el puerto `3006`. |
| `pnpm lint` | Analiza el código con Oxlint. |
| `pnpm build` | Ejecuta TypeScript y genera el build en `dist/`. |
| `pnpm preview` | Sirve el build localmente después de compilar. Para ver el catálogo, mantén activas las dos API de prueba. |

El script `jServer` apunta a `src/assets/users.json`, una ruta que ya no existe. No es necesario ejecutarlo: el formulario de login importa su archivo de prueba directamente desde `src/jserver/`.
