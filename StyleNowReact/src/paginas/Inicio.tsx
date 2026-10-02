import '../assets/css/home.css'

export function Inicio() {
    return (
        <>
            <main>
                {/* Slider */}
                <section id="slider-home">
                    <div className="container">
                        <div className="img-placeholder"></div>

                        <div className="slider-text">
                            <p className="sub-text">nueva colección</p>
                            <h1 className="main-title">Tu estilo, tu<br /> momento</h1>
                            <p className="description">Descubre lo nuevo en ropa y accesorios para cada ocasión.</p>
                            <button type="button" className="call-to-action">Compra ahora</button>
                        </div>
                    </div>
                </section>

                {/* Info Bar */}
                <section id="highlights-bar">
                    <div className="container">
                        <div className="element">
                            <div className="img-placeholder"></div>
                            <div>
                                <h3>Envíos a todo chile</h3>
                                <p>Envíos rápidos y seguros</p>
                            </div>
                        </div>

                        <div className="element">
                            <div className="img-placeholder"></div>
                            <div>
                                <h3>Cambios fáciles</h3>
                                <p>Hasta 30 días</p>
                            </div>
                        </div>

                        <div className="element">
                            <div className="img-placeholder"></div>
                            <div>
                                <h3>Paga como prefieras</h3>
                                <p>Tarjeta, transferencia y más</p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Pop Categories */}
                <section id="block-popular">
                    <h2>Categoría populares</h2>

                    <div className="container">
                        <div className="element">
                            <div className="img-placeholder"></div>
                            <div>
                                <h3>Mujer</h3>
                            </div>
                        </div>

                        <div className="element">
                            <div className="img-placeholder"></div>
                            <div>
                                <h3>Hombre</h3>
                            </div>
                        </div>

                        <div className="element">
                            <div className="img-placeholder"></div>
                            <div>
                                <h3>Accesorios</h3>
                            </div>
                        </div>

                        <div className="element">
                            <div className="img-placeholder"></div>
                            <div>
                                <h3>Ofertas</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* For you */}
                <section id="block-for-you">
                    <h2>Inspiración para ti</h2>

                    <div className="container">
                        <div className="element">
                            <div className="img-placeholder"></div>
                        </div>

                        <div className="element">
                            <div className="img-placeholder"></div>
                        </div>

                        <div className="element">
                            <div className="img-placeholder"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}