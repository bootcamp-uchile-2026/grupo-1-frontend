import '../assets/css/views/detalle-producto.css';

export function Producto() {
    return (
        <>
            <main className="container">
                {/* Galería de Imágenes */}
                <div className="gallery-container">
                    <div className="main-image img-placeholder"></div>
                    <div className="pics">
                        <div className="minipics img-placeholder"></div>
                        <div className="minipics img-placeholder"></div>
                        <div className="minipics img-placeholder"></div>
                        <div className="minipics img-placeholder"></div>
                    </div>
                </div>

                {/* Información del producto */}
                <div className="product-details">
                    <p className="texto">Nuevo</p>
                    <h2>Vestido Lino</h2>
                    <h2>$29.990</h2>
                    <div className="rating">
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>

                    <p className="texto">Vestido de lino ideal para días cálidos.</p>
                    <div className="color">
                        <p className="texto">Color: Beige</p>
                        <div className="color-swatches">
                            <div className="swatch"></div>
                            <div className="swatch"></div>
                            <div className="swatch"></div>
                            <div className="swatch"></div>
                        </div>
                    </div>

                    <p className="texto">Talla: M</p>
                    <div className="size-options">
                        <div className="size-btn">XS</div>
                        <div className="size-btn">S</div>
                        <div className="size-btn">M</div>
                        <div className="size-btn">L</div>
                        <div className="size-btn">XL</div>
                    </div>
                    <p className="texto">Guía de Tallas</p>

                    <div className="actions">
                        <button className="btn">AGREGAR AL CARRITO</button>
                        <button className="btn btn-secondary">
                            <i className="fa-regular fa-heart"></i> AGREGAR A FAVORITOS
                        </button>
                    </div>

                    <div className="extra-info">
                        <div className="info-item">
                            <div className="icon-box">ícono</div>
                            <span>Envío a todo Chile</span>
                        </div>
                        <div className="info-item">
                            <div className="icon-box">ícono</div>
                            <span>Cambios fáciles hasta 30 días</span>
                        </div>
                        <div className="info-item">
                            <div className="icon-box">ícono</div>
                            <span>Pago seguro</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}