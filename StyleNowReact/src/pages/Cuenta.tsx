import '../assets/css/views/cuenta.css';
import { useState } from 'react';
import { z } from 'zod';
import userMock from '../assets/users.json'
import { redirect } from 'react-router';


type FormularioSingIn = {
    correo: string;
    clave: string;
}

type ResultadosValidacion = ReturnType<typeof esquemaFormularioSingIn.safeParse>;

const esquemaFormularioSingIn = z.object({
    correo: z.email({ message: "Correo electrónico inválido" }),
    clave: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
});

export function Cuenta() {

    const [formularioSignIn, setFormularioSignIn] = useState<FormularioSingIn>({
        correo: "",
        clave: ""
    });

    const [capturarResultadoValidacion, setCapturarResultadoValidacion] = useState<ResultadosValidacion | null>(null);

    const errores = capturarResultadoValidacion && !capturarResultadoValidacion.success ? z.flattenError(capturarResultadoValidacion.error).fieldErrors : {}

    function enviarFormulario() {
        const resultadoForm = esquemaFormularioSingIn.safeParse(formularioSignIn);

        setCapturarResultadoValidacion(resultadoForm);

        if (!resultadoForm) {
            console.log("Errores de validación:");
            return;
        }

        const usuarioEncontrado = userMock.find(
            (user) =>
                user.correo === formularioSignIn.correo &&
                user.clave === formularioSignIn.clave
        );

        if (usuarioEncontrado) {
            window.alert("¡Inicio de sesión exitoso! Bienvenido " + usuarioEncontrado.nombre);
            redirect("/");
            // Aquí colocar el token en localStorage o redirigir
        } else {
            window.alert("Usuario Incorrecto");
        }
    }

    function cambioInput(evento: React.ChangeEvent<HTMLInputElement>) {

        const { value, name } = evento.target;

        setFormularioSignIn({
            ...formularioSignIn,
            [name]: value,
        }
        )

        console.log("cambioInput", formularioSignIn);
    }


    return (
        <>
            <main id="cuenta">
                <div className="container">
                    <div className="card">
                        <h2 >Iniciar sesión</h2>
                        <hr />
                        <p>STYLENOW MEMBER </p>
                        <h1>Bienvenido</h1>
                        <form action="#" >
                            <div className="form-group">
                                <label >
                                    <strong>Correo electrónico</strong><br />
                                    <input type="email" id="mail" name="correo" onChange={cambioInput} placeholder="nombre@correo.cl" required />
                                    {errores.correo?.map((e) => <p className="mensaje-error" key={e}>{e}</p>)}
                                </label>


                            </div>
                            <div className="form-group">
                                <label >
                                    <strong>Contraseña</strong>
                                    <input type="password" id="clave" name="clave" onChange={cambioInput} placeholder="********" required />
                                    {errores.clave?.map((e) => <p className="mensaje-error" key={e}>{e}</p>)}
                                </label>

                            </div>
                            <div className="form-group">
                                {/*<span> <a href="#">¿Olvidaste tu contraseña?</a> </span>*/}
                                <button className={!capturarResultadoValidacion ? "btn" : "btn disabled"} type="button" onClick={enviarFormulario}><strong>Ingresar</strong></button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}