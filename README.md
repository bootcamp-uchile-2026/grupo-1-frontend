# Grupo 1 equipo Frontend, proyecto: StyleNow
Ecommerce de Moda y Accesorios

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

 Cabe destacar que ambos componentes son llamados de forma dinámica desde sus respectivos archivos hacia las distintas vistas HTML para evitar la duplicación de código en la maquetación.

## Tecnologías Utilizadas en el proceso:
* **HTML5:** Estructura semántica de las vistas.
* **CSS3:** Estilos visuales.
* **Figma:** Wireframes y prototipos UX/UI de referencia.
* **Git/GitHub:** Control de versiones y trabajo colaborativo.
