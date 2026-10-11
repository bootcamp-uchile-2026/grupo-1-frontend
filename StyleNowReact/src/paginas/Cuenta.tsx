import '../assets/css/views/cuenta.css';

export function Cuenta() {
    return (
        <>
            <main id="cuenta">
                <div className="container">
                    <div className="card">
                        <h2 >Iniciar sesión</h2>
                        <hr/>
                            <p>STYLENOW MEMBER </p>
                            <h1>Bienvenido</h1>
                            <form action="#" method="post">
                                <div className="form-group">
                                    <label ><strong>Correo electrónico</strong>  </label>
                                    <input type="email" id="mail" name="correo" placeholder="nombre@correo.cl" required/>
                                </div>
                                <div className="form-group">
                                    <label ><strong>Contraseña</strong> </label>
                                    <input type="password" id="clave" name="clave" placeholder="********" required/>
                                </div>
                                <div className="form-group">
                                    <span> <a href="#">¿Olvidaste tu contraseña?</a> </span>
                                    <button className="btn" type="submit"><strong>Ingresar</strong></button>
                                </div>
                            </form>
                    </div>
                </div>
            </main>
        </>
    )
}