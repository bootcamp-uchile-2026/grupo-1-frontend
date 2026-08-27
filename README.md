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
   
 Respecto a GitHub Flow usado en cada repositorio, básicamente la estrategia a utilizar es:
1. Rama Main como versión estable.
2. Rama Develop como rama permanente de integración.
3. Ramas temporales de trabajo y componentes: feature/*, fix/*, docs/* y chore/*.
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

   3.2. Develop: Representa la versión actual de integración dentro de cada repositorio.
   Reglas:
				* No se desarrolla directamente sobre develop.
				* Todo cambio entra mediante Pull Request.
				* Las nuevas ramas parten normalmente desde develop.
				* Debe mantenerse ejecutable y razonablemente estable.

	 3.3 Feature/: Se utilizan para implementar nuevas funcionalidades. Cada rama debe representar una funcionalidad concreta, preferentemente relacionada con una Historia de Usuario o tarea del Backlog.
   Formato: feature/<HU>-<descripcion>

## Descripción del Proyecto:
Plataforma de comercio electrónico especializada en moda y accesorios. Diseñada bajo un enfoque **Mobile-First**, esta solución resuelve el principal reto del sector: generar la confianza necesaria para que el usuario compre prendas sin probarlas previamente, reduciendo la tasa de devoluciones y optimizando la conversión.

## Objetivo general:
 Permitir que el ecommerce venda ropa por talla y color, mostrando el stock disponible por
variante y ofrecer una experiencia de compra confiable desde el primer vistazo.

## Objetivos específicos:
• Confianza visual: Generar confianza para que el usuario compre ropa sin poder tocarla ni probarla.

• Gestión de variantes de producto:  Permitir la elección de talla y color con stock independiente por variante.

• Reducción de devoluciones: Diseñar una guía de tallas clara y accesible que reduzca las devoluciones.

• Enfoque Mobile-First: Crear una experiencia mobile que sea el canal principal de compra (los usuarios de
moda compran desde el celular).

• Aumento del ticket promedio: Construir una sección de 'Looks' o colecciones que inspire y aumente el ticket
promedio.

## Desarrollo: 
Arquitectura de Vistas (Navegación)

El desarrollo frontend se basa en la investigación y wireframes del equipo de UX/UI. En este primer hito se construyeron las vistas HTML de baja fidelidad que son las  siguientes: 

**Home** :Pantalla principal con banners de colección, secciones de inspiración y accesos a categorías. 

**PDP** : Página de detalle del producto (variantes de talla/color, stock, guía de tallas y botón de compra). 

**Comunidad** : Galería inspiracional tipo *Lookbook* para ver prendas combinadas y aumentar la venta cruzada. 

**Cambios y Devoluciones** : Contenido informativo estratégico enfocado en brindar certeza y seguridad al cliente. 

**Carrito de Compras**  :Resumen del pedido, desglose de precios, variantes seleccionadas y checkout inicial. 

## Componentes reutilizables: 
Componentes Reutilizables

Para mantener la modularidad y facilitar el mantenimiento del código, se implementó una arquitectura basada en componentes que en este primer hito son:

* **Header Genérico :** Incluye la barra de navegación principal, buscador y acceso rápido al carrito.
* **Footer Genérico :** Contiene enlace de la tienda, redes sociales y ayuda.
![Vista previa de header y footer ](assets/img/HeaderFooter.png)

 Cabe destacar que ambos componentes son llamados de forma dinámica desde sus respectivos archivos hacia las distintas vistas HTML para evitar la duplicación de código en la maquetación.

## Tecnologías Utilizadas en el proceso:
* **HTML5:** Estructura semántica de las vistas.
* **CSS3:** Estilos visuales.
* **Figma:** Wireframes y prototipos UX/UI de referencia.
* **Git/GitHub:** Control de versiones y trabajo colaborativo.
