import '../assets/css/home.css'
import { CategoriasPopulares } from './subcomponents/CategoriasPopulares'
import { HomeInfoBar } from './subcomponents/HomeInfoBar'
import { ProductForyou } from './subcomponents/ProductsForYou'

export function Inicio() {
    return (
        <>
            <main id="home">
                {/* Slider */}
                <section id="slider-home">
                    <div className="container home">

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
                    <div className="container home">

                        <HomeInfoBar infoH3="Envíos a todo Chile" infoP="Envíos rápidos y seguros" />

                        <HomeInfoBar infoH3="Cambios fáciles" infoP="Hasta 30 días" />

                        <HomeInfoBar infoH3="Paga como prefieras" infoP="Tarjeta, transferencia y más" />

                    </div>
                </section>

                {/* Pop Categories */}
                <section id="block-popular">
                    <h2>Categoría populares</h2>

                    <div className="container">
                        <CategoriasPopulares categoryName="Mujer" />

                        <CategoriasPopulares categoryName="Hombre" />

                        <CategoriasPopulares categoryName="Accesorios" />

                        <CategoriasPopulares categoryName="Ofertas" />
                    </div>
                </section>

                {/* For you */}
                <section id="block-for-you">
                    <h2>Inspiración para ti</h2>

                    <div className="container">

                        <ProductForyou />
                        <ProductForyou />
                        <ProductForyou />

                    </div>
                </section>
            </main>
        </>
    )
}