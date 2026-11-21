import { useEffect, useId, useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { z } from 'zod'
import { useCarritoStore } from '../store/useCarritoStore'
import '../assets/css/views/carrito.css'
import '../assets/css/views/checkout.css'

const comunas = ['Santiago', 'Providencia', 'Ñuñoa', 'Las Condes', 'La Reina'] as const
const metodosPago = ['tarjeta', 'transferencia'] as const
const etiquetasPago: Record<(typeof metodosPago)[number], string> = {
  tarjeta: 'Tarjeta de crédito o débito',
  transferencia: 'Transferencia bancaria',
}

const esquemaCheckout = z.object({
  nombre: z.string().trim().min(1, 'Ingresa tu nombre completo.'),
  correo: z.string().trim().min(1, 'Ingresa tu correo electrónico.')
    .email('Ingresa un correo electrónico válido.'),
  telefono: z.string().trim().min(1, 'Ingresa tu teléfono.')
    .refine((valor) => /^\+?[\d\s().-]+$/.test(valor) && /^\d{8,15}$/.test(valor.replace(/\D/g, '')),
      'Ingresa un teléfono válido, de 8 a 15 dígitos.'),
  direccion: z.string().trim().min(1, 'Ingresa tu dirección.'),
  comuna: z.enum(comunas, { message: 'Selecciona tu comuna.' }),
  codigoPostal: z.string().trim().regex(/^(?:[0-9]{7})?$/, 'Ingresa un código postal de 7 dígitos.').optional(),
  pago: z.enum(metodosPago, { message: 'Selecciona un método de pago.' }),
})

type Campo = keyof z.input<typeof esquemaCheckout>
type ValoresFormulario = Record<Campo, string>
type LineaResumen = { id: string | number; nombre: string; cantidad: number; importe: number }

const valoresIniciales: ValoresFormulario = {
  nombre: '',
  correo: '',
  telefono: '',
  direccion: '',
  comuna: '',
  codigoPostal: '',
  pago: '',
}

const formatoCLP = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
})

export function Checkout() {
  const items = useCarritoStore((estado) => estado.items)
  const vaciar = useCarritoStore((estado) => estado.vaciar)
  const [valores, setValores] = useState(valoresIniciales)
  const [interactuados, setInteractuados] = useState<Partial<Record<Campo, boolean>>>({})
  const [pedido, setPedido] = useState<LineaResumen[] | null>(null)
  const tituloExito = useRef<HTMLHeadingElement>(null)
  const id = useId()
  const formId = `${id}-checkout`

  // Recalculate validation on every edit; only show errors for interacted fields.
  const validacion = esquemaCheckout.safeParse(valores)
  const errores = validacion.success ? {} : validacion.error.flatten().fieldErrors
  const pedidoRealizado = pedido !== null
  const carritoVacio = items.length === 0
  const lineasResumen: LineaResumen[] = pedido ?? items.map(({ producto, cantidad }) => ({
    id: producto.id,
    nombre: producto.nombre,
    cantidad,
    importe: producto.precio * cantidad,
  }))
  const subtotal = lineasResumen.reduce((suma, { importe }) => suma + importe, 0)
  const puedePagar = validacion.success && !carritoVacio && !pedidoRealizado

  useEffect(() => {
    if (pedidoRealizado) tituloExito.current?.focus()
  }, [pedidoRealizado])

  function marcarInteractuado(campo: Campo) {
    setInteractuados((actual) => actual[campo] ? actual : { ...actual, [campo]: true })
  }

  function cambiarCampo(campo: Campo, valor: string) {
    setValores((actual) => ({ ...actual, [campo]: valor }))
    marcarInteractuado(campo)
  }

  function errorDe(campo: Campo) {
    return interactuados[campo] ? errores[campo]?.[0] : undefined
  }

  function atributosCampo(campo: Campo) {
    const error = errorDe(campo)
    return {
      id: `${id}-${campo}`,
      name: campo,
      value: valores[campo],
      onChange: (evento: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        cambiarCampo(campo, evento.currentTarget.value)
      },
      onBlur: () => marcarInteractuado(campo),
      'aria-invalid': error ? true : undefined,
      'aria-describedby': error ? `${id}-${campo}-error` : undefined,
    }
  }

  function mensajeError(campo: Campo) {
    const error = errorDe(campo)
    return (
      <div aria-live="polite">
        {error && (
          <small id={`${id}-${campo}-error`} style={{ color: 'var(--text-danger, #a11b1b)' }}>
            {error}
          </small>
        )}
      </div>
    )
  }

  function enviarPedido(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    if (pedidoRealizado || carritoVacio || !esquemaCheckout.safeParse(valores).success) return

    // When integrating a backend, run these steps only after it confirms the order.
    setPedido(lineasResumen)
    vaciar()
  }

  return (
    <div className="container main">
      <h1 className="h3" style={{ marginBlock: 'var(--space-base) var(--space-lg)' }}>
        Finalizar compra
      </h1>
      <div className="split">
        {pedidoRealizado ? (
          <section
            className="form-section"
            aria-labelledby={`${id}-exito`}
            style={{ display: 'grid', justifyItems: 'center', gap: 'var(--space-base, 1rem)', paddingBlock: 'var(--space-lg, 2rem)', textAlign: 'center' }}
          >
            <svg
              className="text-success"
              width="96"
              height="96"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="m8 12 2.7 2.7L16 9.5" />
            </svg>
            <h2 className="h4" id={`${id}-exito`} tabIndex={-1} ref={tituloExito}>
              ¡Tu pedido ha sido realizado con éxito!
            </h2>
            <div>
            <a className="btn btn--primary" href='/listados'>Seguir comprando</a>
          </div>
          </section>
        ) : (
          <form id={formId} className="stack gap-lg" noValidate onSubmit={enviarPedido}>
            <p className="req-note">Los campos con * son obligatorios.</p>
            <fieldset className="form-section">
              <legend>1. Datos de contacto</legend>
              <div className="field">
                <label className="field__label" htmlFor={`${id}-nombre`}>Nombre completo *</label>
                <input {...atributosCampo('nombre')} className="input" type="text" placeholder="Ej: Camila Rojas" autoComplete="name" required />
                {mensajeError('nombre')}
              </div>
              <div className="form-row">
                <div className="field">
                  <label className="field__label" htmlFor={`${id}-correo`}>Correo electrónico *</label>
                  <input {...atributosCampo('correo')} className="input" type="email" placeholder="nombre@correo.cl" autoComplete="email" required />
                  {mensajeError('correo')}
                </div>
                <div className="field">
                  <label className="field__label" htmlFor={`${id}-telefono`}>Teléfono *</label>
                  <input {...atributosCampo('telefono')} className="input" type="tel" placeholder="+56 9 1234 5678" autoComplete="tel" required />
                  {mensajeError('telefono')}
                </div>
              </div>
            </fieldset>
            <fieldset className="form-section">
              <legend>2. Dirección de envío</legend>
              <div className="field">
                <label className="field__label" htmlFor={`${id}-direccion`}>Dirección *</label>
                <input {...atributosCampo('direccion')} className="input" type="text" placeholder="Calle, número, depto." autoComplete="street-address" required />
                {mensajeError('direccion')}
              </div>
              <div className="form-row">
                <div className="field">
                  <label className="field__label" htmlFor={`${id}-comuna`}>Comuna *</label>
                  <select {...atributosCampo('comuna')} className="select" autoComplete="address-level2" required>
                    <option value="" disabled>Selecciona tu comuna</option>
                    {comunas.map((comuna) => <option key={comuna} value={comuna}>{comuna}</option>)}
                  </select>
                  {mensajeError('comuna')}
                </div>
                <div className="field">
                  <label className="field__label" htmlFor={`${id}-codigoPostal`}>Código postal</label>
                  <input {...atributosCampo('codigoPostal')} className="input" type="text" inputMode="numeric" placeholder="Opcional" autoComplete="postal-code" />
                  {mensajeError('codigoPostal')}
                </div>
              </div>
            </fieldset>
            <fieldset className="form-section">
              <legend>3. Método de pago *</legend>
              {metodosPago.map((metodo) => (
                <label className="check" key={metodo}>
                  <input
                    type="radio"
                    name="pago"
                    value={metodo}
                    checked={valores.pago === metodo}
                    onChange={(evento) => cambiarCampo('pago', evento.currentTarget.value)}
                    required
                  />
                  {etiquetasPago[metodo]}
                </label>
              ))}
            </fieldset>
          </form>
        )}

        <aside className="summary" aria-labelledby={`${id}-resumen`}>
          <h2 className="h5" id={`${id}-resumen`}>Resumen del pedido</h2>
          {lineasResumen.length === 0 ? (
            <p role="status">Tu carrito está vacío.</p>
          ) : (
            lineasResumen.map(({ id: productoId, nombre, cantidad, importe }) => (
              <div className="mini" key={productoId}>
                <div className="ph ph--menta" aria-hidden="true">
                  <svg className="icon icon--32" focusable="false">
                    <use href="#i-nopic" />
                  </svg>
                </div>
                <div className="mini__info">
                  <span className="mini__name">{nombre}</span>
                  <span className="mini__meta">{cantidad} {cantidad === 1 ? 'unidad' : 'unidades'}</span>
                </div>
                <span className="mini__price">{formatoCLP.format(importe)}</span>
              </div>
            ))
          )}
          <hr className="divider" />
          <div className="summary__row">
            <span>Subtotal</span>
            <span>{formatoCLP.format(subtotal)}</span>
          </div>
          <div className="summary__row">
            <span>Envío</span>
            <span className="text-success fw-semibold">Gratis</span>
          </div>
          <hr className="divider" />
          <div className="summary__total" aria-live="polite" aria-atomic="true">
            <span>Total</span>
            <strong>{formatoCLP.format(subtotal)}</strong>
          </div>
          {!pedidoRealizado && (
            <button
              type="submit"
              form={formId}
              className="btn btn--primary btn--block"
              disabled={!puedePagar}
              style={puedePagar ? undefined : { opacity: 0.6, cursor: 'not-allowed' }}
            >
              Pagar {formatoCLP.format(subtotal)}
            </button>
          )}
        </aside>
      </div>
    </div>
  )
}
