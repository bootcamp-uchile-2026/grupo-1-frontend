import '../assets/css/views/catalogo.css';

export function Catalogo() {
    return (
        <>
            <main className="page-container">
                <div className="breadcrumb">
                    <nav aria-label="breadcrumb">
                        <a href="index.html">Inicio</a>
                        <span>/</span>
                        <a href="#">Mujer</a>
                        <span>/</span>
                        <span aria-current="page">Vestidos</span>
                    </nav>
                </div>

                <div className="catalogo-header">
                    <h1>Vestidos</h1>
                    <p>Encuentra el vestido perfecto para cada ocasión</p>
                </div>

                <div className="filtros-bar">
                    <button className="filtro-btn ordenar-btn">Filtros</button>
                    <button className="filtro-btn ">Talla</button>
                    <button className="filtro-btn filtro-btn--activo">Color</button>
                    <button className="filtro-btn">Precio</button>
                    <button className="filtro-btn">Ordenar por</button>
                </div>

                <div className="catalogo-content">
                    <aside className="filtros-sidebar">
                        <div className="filtro-grupo">
                            <h3>Categoría</h3>
                            <label><input type="checkbox" /> Vestidos</label>
                            <label><input type="checkbox" /> Poleras</label>
                            <label><input type="checkbox" /> Pantalones</label>
                            <label><input type="checkbox" /> Faldas</label>
                            <label><input type="checkbox" /> Jeans</label>
                            <label><input type="checkbox" /> Blazer</label>
                        </div>

                        <div className="filtro-grupo">
                            <h3>Tallas</h3>
                            <label><input type="checkbox" /> XS</label>
                            <label><input type="checkbox" /> S</label>
                            <label><input type="checkbox" /> M</label>
                            <label><input type="checkbox" /> L</label>
                            <label><input type="checkbox" /> XL</label>
                        </div>

                        <div className="filtro-grupo">
                            <h3>Color</h3>
                            <label><input type="checkbox" /> Rojo</label>
                            <label><input type="checkbox" /> Rosa</label>
                            <label><input type="checkbox" /> Azul</label>
                            <label><input type="checkbox" /> Amarillo</label>
                            <label><input type="checkbox" /> Café</label>
                            <label><input type="checkbox" /> Negro</label>
                        </div>

                        <div className="filtro-grupo">
                            <h3>Precio</h3>
                            <input type="range" min="0" max="100000" className="precio-slider" />
                        </div>
                    </aside>

                    <div className="catalogo-main">
                        <section className="product-list">

                            <article className="product-item">
                                <a href="detalle-producto.html">
                                    <div className="img-placeholder product-image"></div>
                                    <h2>Vestidos</h2>
                                    <span className="price">$29.990</span>
                                </a>
                            </article>

                            <article className="product-item">
                                <a href="detalle-producto.html">
                                    <div className="img-placeholder product-image"></div>
                                    <h2>Vestidos</h2>
                                    <span className="price">$29.990</span>
                                </a>
                            </article>
                            <article className="product-item">
                                <a href="detalle-producto.html">
                                    <div className="img-placeholder product-image"></div>
                                    <h2>Vestidos</h2>
                                    <span className="price">$29.990</span>
                                </a>
                            </article>
                            <article className="product-item">
                                <a href="detalle-producto.html">
                                    <div className="img-placeholder product-image"></div>
                                    <h2>Vestidos</h2>
                                    <span className="price">$29.990</span>
                                </a>
                            </article>
                            <article className="product-item">
                                <a href="detalle-producto.html">
                                    <div className="img-placeholder product-image"></div>
                                    <h2>Vestidos</h2>
                                    <span className="price">$29.990</span>
                                </a>
                            </article>
                            <article className="product-item">
                                <a href="detalle-producto.html">
                                    <div className="img-placeholder product-image"></div>
                                    <h2>Vestidos</h2>
                                    <span className="price">$29.990</span>
                                </a>
                            </article>
                        </section>

                        <nav className="pagination" aria-label="Paginación">
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <span>...</span>
                            <a href="#">10</a>
                        </nav>
                    </div>
                </div>
            </main>
        </>
    )
}