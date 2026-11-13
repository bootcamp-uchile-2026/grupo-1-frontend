import '../assets/css/views/producto.css';

export function Producto() {
    return (
        <>
            <div className="breadcrumbs">
                <div aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <a href="#">Mujer</a>
                        </li>
                        <li>
                            <a href="#">Vestidos</a>
                        </li>
                        <li aria-current="page">
                            Vestido Lino
                        </li>
                    </ul>
                </div>
            </div>
            <main id="producto">

                <div className="container">
                    {/* Galería de Imágenes */}
                    <div className="gallery-container">
                        <div className="main-image img-placeholder"></div>
                        <div className="pics">
                            <div id="pic1" className="minipics img-placeholder"></div>
                            <div className="minipics img-placeholder"></div>
                            <div className="minipics img-placeholder"></div>
                            <div className="minipics img-placeholder"></div>
                        </div>
                    </div>

                    {/* Información del producto */}
                    <div className="product-details">
                        <p id="nuevo" className="texto">NUEVO</p>
                        <h2>Vestido Lino</h2>
                        <h2>$29.990</h2>
                        <div className="review">
                            <div className="rating">
                                <i className="fa-solid fa-star estrella"></i>
                                <i className="fa-solid fa-star estrella"></i>
                                <i className="fa-solid fa-star estrella"></i>
                                <i className="fa-solid fa-star estrella"></i>
                                <i className="fa-solid fa-star estrella"></i>
                            </div>
                            <p>(32 reseñas) &middot;</p>
                            <a href="#"> Ver que dicen del calce</a>
                        </div>
                        <div className="descripcion">
                            <p>Vestido de lino ideal para días cálidos.</p>
                            <p>Cómodo, fresco y versátil.</p>
                            <hr />
                        </div>
                        <div className="color">
                            <h4>Color: Beige</h4>
                            <div className="color-swatches">
                                <div id="beige" className="swatch"></div>
                                <div id="grey" className="swatch"></div>
                                <div id="black" className="swatch"></div>
                            </div>
                        </div>
                        <div className="size">
                            <h4>Selecciona tu talla: M</h4>
                            <div className="size-options">
                                <div className="size-btn">XS</div>
                                <div className="size-btn">S</div>
                                <div id="black" className="size-btn font-white">M</div>
                                <div className="size-btn">L</div>
                                <div id="grey" className="size-btn font-grey">XL</div>
                                <p className="texto">XL agotada &middot;</p>
                                <p className="texto">Quedan pocas en L</p>
                            </div>
                        </div>
                        <div className="talla">
                            <h4>¿No sabes cuál elegir? <a href="#">Consulta tu talla</a></h4>
                            <p> Modelo: 1,68 m &middot; usa talla S</p>
                            <p> Calce regular &middot; ¿Entre dos tallas? Te recomendamos la mayor</p>
                        </div>
                        <div className="actions">
                            <button id="black" className="btn font-white">AGREGAR AL CARRITO</button>
                            <button className="btn btn-secondary">GUARDADO EN TU LISTA</button>
                        </div>
                        <div className="talla info-item">
                            <div className="info01">
                                <h4>¿Quieres saber cuándo baje de precio?</h4>
                                <p> Te avisamos por correo si baja</p>
                            </div>
                            <div className="info02">
                                <button id="black" className="btn font-white">ACTIVAR ALERTA</button>
                            </div>
                        </div>
                        <div className="extra-info">
                            <div className="icon-item">
                                <div className="icon-box"></div>
                                <p>Envíos a todo Chile &middot; <a href="#"> Calcula tu envío</a>  </p>
                            </div>
                            <div className="icon-item">
                                <div className="icon-box"></div>
                                <h4>Cambio gratuito dentro de 30 días &middot; <a href="#"> Ver condiciones</a></h4>
                            </div>
                            <div className="icon-item">
                                <div className="icon-box"></div>
                                <p>Pago seguro</p>
                            </div>
                        </div>
                        <div className="ultima-info">
                            <div className="final-info">
                                <p>Descripción  </p>
                                <span> v</span>
                            </div>
                            <div className="final-info">
                                <p>Envíos y cabios </p>
                                <span> v</span>
                            </div>
                            <div className="final-info">
                                <p>Pago seguro</p>
                                <span> v</span>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}