import '../assets/css/views/cuenta.css';
import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import usuarios from '../jserver/users.json';
import { useAuthStore } from '../store/useAuthStore';

type ResultadoLogin = 'inicial' | 'error' | 'correcto';

const esquemaLogin = z.object({
  correo: z.email('Correo electrónico inválido'),
  clave: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

type FormularioLogin = z.infer<typeof esquemaLogin>;

export function Login() {
  const navigate = useNavigate();
  const setLogged = useAuthStore((state) => state.setLogged);
  const [resultado, setResultado] = useState<ResultadoLogin>('inicial');
  const [mostrarClave, setMostrarClave] = useState(false);
  const [formulario, setFormulario] = useState<FormularioLogin>({ correo: '', clave: '' });
  const [camposEditados, setCamposEditados] = useState({ correo: false, clave: false });
  const validacion = esquemaLogin.safeParse(formulario);
  const errores = validacion.success ? {} : z.flattenError(validacion.error).fieldErrors;
  const errorCorreo = camposEditados.correo ? errores.correo?.[0] : undefined;
  const errorClave = camposEditados.clave ? errores.clave?.[0] : undefined;
  const loginCorrecto = resultado === 'correcto';

  useEffect(() => {
    if (!loginCorrecto) return;

    const temporizador = window.setTimeout(() => {
      void navigate('/', { replace: true });
    }, 2000);

    return () => window.clearTimeout(temporizador);
  }, [loginCorrecto, navigate]);

  function enviarFormulario(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (loginCorrecto || !validacion.success) return;

    const { correo, clave } = validacion.data;
    const coincide = usuarios.some(
      (usuario) => usuario.email === correo && usuario.password === clave,
    );

    if (!coincide) {
      setResultado('error');
      return;
    }

    setLogged(true);
    setResultado('correcto');
  }

  function cambiarCampo(campo: keyof FormularioLogin, valor: string) {
    setFormulario((actual) => ({ ...actual, [campo]: valor }));
    setCamposEditados((actual) => ({ ...actual, [campo]: true }));
    if (resultado === 'error') setResultado('inicial');
  }

  return (
    <div className="container main" style={{ paddingBlock: 'var(--space-xl5)' }}>
      <div className="center-narrow stack gap-base">
        <form className="auth" onSubmit={enviarFormulario} noValidate>
          <h1 className="h4">Iniciar sesión</h1>
          <p className="body-3 text-secondary">Ingresa para ver tus compras, looks y favoritos.</p>

          <div className="field">
            <label className="field__label" htmlFor="f-correoelectrónico">Correo electrónico *</label>
            <input
              className="input"
              id="f-correoelectrónico"
              type="email"
              name="correo"
              value={formulario.correo}
              onChange={(evento) => cambiarCampo('correo', evento.currentTarget.value)}
              placeholder="nombre@correo.cl"
              autoComplete="email"
              aria-invalid={Boolean(errorCorreo)}
              aria-describedby={errorCorreo ? 'login-error-correo' : undefined}
              readOnly={loginCorrecto}
              required
            />
            {errorCorreo && <p className="msg--error" id="login-error-correo">{errorCorreo}</p>}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="f-contraseña">Contraseña *</label>
            <div className="field__control">
              <input
                className="input input--with-btn"
                id="f-contraseña"
                type={mostrarClave ? 'text' : 'password'}
                name="clave"
                value={formulario.clave}
                onChange={(evento) => cambiarCampo('clave', evento.currentTarget.value)}
                placeholder="Tu contraseña"
                autoComplete="current-password"
                aria-invalid={Boolean(errorClave)}
                aria-describedby={errorClave ? 'login-error-clave' : undefined}
                readOnly={loginCorrecto}
                required
              />
              <button
                type="button"
                className="icon-btn field__btn"
                aria-label={mostrarClave ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                onClick={() => setMostrarClave((visible) => !visible)}
              >
                <svg className="icon icon--20" aria-hidden="true">
                  <use href="#i-eye" />
                </svg>
              </button>
            </div>
            {errorClave && <p className="msg--error" id="login-error-clave">{errorClave}</p>}
          </div>

          <button
            type="submit"
            className={`btn btn--primary btn--block${validacion.success ? '' : ' is-disabled'}`}
            disabled={!validacion.success || loginCorrecto}
          >
            Ingresar
          </button>

          {resultado === 'error' && (
            <p
              className="msg--error"
              role="alert"
              style={{ margin: 0, padding: '0.75rem', borderRadius: '0.375rem', backgroundColor: '#fee2e2', color: '#991b1b' }}
            >
              Correo electrónico y/o contraseña incorrrecto/s
            </p>
          )}

          {loginCorrecto && (
            <p
              className="msg--error"
              role="status"
              style={{ margin: 0, padding: '0.75rem', borderRadius: '0.375rem', backgroundColor: '#dcfce7', color: '#166534' }}
            >
              Datos correctos
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
