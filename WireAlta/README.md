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
   
## Instalación/Ejecución
Para poder probar la aplicación web, es necesario:
* Clonar este repositorio
* Abrir en Visual Studio Code
* Abrir terminal WSL
* Escribir `pnpm run dev`
Y luego, en el navegador se abrirá el proyecto de manera local.

## Desarrollo: 
Arquitectura de Vistas (Navegación)

El desarrollo frontend se basa en la investigación y wireframes del equipo de UX/UI. En este primer hito se construyeron las vistas HTML de baja fidelidad que son las  siguientes: 

**Inicio** :Pantalla principal con banners de colección, secciones de inspiración y accesos a categorías. 

**detalle-producto** : Página de detalle del producto (variantes de talla/color, stock, guía de tallas y botón de compra). 

**Comunidad** : Galería inspiracional tipo *Lookbook* para ver prendas combinadas y aumentar la venta cruzada. 

**Producto** : Página base para la carga de productos. En este momento solo con contenido mock.

**Login** :  Formulario para ingreso de usuarios bajo validación zod. 

```
grupo-1-frontend/
├── css/
├── node_modules/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── views/
│   │   │   ├── base.css
│   │   │   ├── header-footer.css
│   │   │   └── home.css
│   │   ├── img/
│   │   ├── react.svg
│   │   ├── users.json
│   │   └── vite.svg
│   ├── layout/
│   │   ├── Body.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── MainLayout.tsx
│   │   └── Sidebar.tsx
│   ├── pages/
│   │   ├── subcomponents/
│   │   │   ├── CategoriasPopulares.tsx
│   │   │   ├── HomeInfoBar.tsx
│   │   │   └── ProductsForYou.tsx
│   │   ├── Cambios_y_Devoluciones.tsx
│   │   ├── Carrito.tsx
│   │   ├── Catalogo.tsx
│   │   ├── Comunidad.tsx
│   │   ├── Inicio.tsx
│   │   ├── Login.tsx
│   │   ├── ohoh.tsx
│   │   └── Producto.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── test.tsx
├── vanillaHtml/
├── .gitignore
├── .oxlintrc.json
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

## Componentes reutilizables: 
En el hito número 2, se ha transformado el proyecto a React, permitiendo reutilizar virtualmente cualquiera de los componentes que forman el sitio. Los elementos que buscan ser reutilizados están bajo la sub carpeta "subcomponents"

* **CategoriasPopulares :** Componente que carga la imagen y el título de la categoría desde una api rest. Pide como propm un id.
* **HomeInfoBar :** Carga mensajes destacados en el home. Solicita un promp para el encabezado y otro para el paragraph de contenido.
* **ProductsForYou :** Carga una imagen a un producto destacado en base al tipo de usuario que visita el sitio.

Cabe destacar que ambos componentes son llamados de forma dinámica desde sus respectivos archivos hacia las distintas vistas HTML para evitar la duplicación de código en la maquetación.

## Tecnologías Utilizadas en el proceso:
* **HTML5:** Estructura semántica de las vistas.
* **CSS3:** Estilos visuales.
* **Pnpm/npm: ** Librería de componentes
* **Vite:** Empaquetador de proyecto
* **TS:** Llama a los componentes del sitio en las distintas vistas.
* **Figma:** Wireframes y prototipos UX/UI de referencia.
* **Git/GitHub:** Control de versiones y trabajo colaborativo.

# React + TypeScript + Vite

Esta plantilla proporciona una configuración mínima para que React funcione en Vite con HMR (reemplazo de módulos en caliente) y algunas reglas de Oxlint.

Actualmente, hay dos complementos (plugins) oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Compilador de React (React Compiler)

El compilador de React no está habilitado en esta plantilla debido a su impacto en el rendimiento de desarrollo y compilación. Para agregarlo, consulta esta documentación [this documentation](https://react.dev/learn/react-compiler/installation).

## Ampliando la configuración de Oxlint

Si estás desarrollando una aplicación de producción, recomendamos habilitar las reglas de linter conscientes de tipos instalando `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

Consulta la [documentación de reglas de Oxlint](https://oxc.rs/docs/guide/usage/linter/rules) para ver la lista completa de reglas y categorías.

## Cargar el proyecto

Para ver el proyecto, descarga 


