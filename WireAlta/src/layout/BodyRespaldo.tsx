import { useEffect } from 'react'
import type { ReactNode } from 'react'

/* Sprite de iconos SVG del mockup original (symbols reutilizables con <use>). */
const Sprite = (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <symbol id="i-search" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </symbol>
    <symbol id="i-menu" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </symbol>
    <symbol id="i-account" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
    </symbol>
    <symbol id="i-cart" viewBox="0 0 24 24">
      <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6" />
      <circle cx="10" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </symbol>
    <symbol id="i-heart" viewBox="0 0 24 24">
      <path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9Z" />
    </symbol>
    <symbol id="i-nopic" viewBox="0 0 24 24">
      <path d="M3 3l18 18" />
      <path d="M9 5h6l2 2h2a2 2 0 0 1 2 2v8M21 19H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" />
      <circle cx="12" cy="13" r="3" />
    </symbol>
    <symbol id="i-arrow-right" viewBox="0 0 24 24">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </symbol>
    <symbol id="i-arrow-left" viewBox="0 0 24 24">
      <path d="M19 12H5m6-6-6 6 6 6" />
    </symbol>
    <symbol id="i-arrow-up" viewBox="0 0 24 24">
      <path d="M12 19V5m-6 6 6-6 6 6M5 3h14" />
    </symbol>
    <symbol id="i-chevron-down" viewBox="0 0 24 24">
      <path d="m6 9 6 6 6-6" />
    </symbol>
    <symbol id="i-chevron-right" viewBox="0 0 24 24">
      <path d="m9 6 6 6-6 6" />
    </symbol>
    <symbol id="i-close" viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6 6 18" />
    </symbol>
    <symbol id="i-plus" viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14" />
    </symbol>
    <symbol id="i-minus" viewBox="0 0 24 24">
      <path d="M5 12h14" />
    </symbol>
    <symbol id="i-check" viewBox="0 0 24 24">
      <path d="m5 12 5 5 9-10" />
    </symbol>
    <symbol id="i-eye" viewBox="0 0 24 24">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </symbol>
    <symbol id="i-truck" viewBox="0 0 24 24">
      <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </symbol>
    <symbol id="i-refresh" viewBox="0 0 24 24">
      <path d="M4 12a8 8 0 1 0 2.3-5.6L4 9" />
      <path d="M4 4v5h5" />
    </symbol>
    <symbol id="i-card" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
    </symbol>
    <symbol id="i-lock" viewBox="0 0 24 24">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </symbol>
    <symbol id="i-info" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </symbol>
    <symbol id="i-alert" viewBox="0 0 24 24">
      <path d="M12 3 2 20h20L12 3Z" />
      <path d="M12 10v4M12 17h.01" />
    </symbol>
    <symbol id="i-calendar" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </symbol>
    <symbol id="i-gift" viewBox="0 0 24 24">
      <rect x="3" y="8" width="18" height="13" rx="1" />
      <path d="M12 8v13M3 12h18M12 8s-1-5-4-5-3 5 4 5Zm0 0s1-5 4-5 3 5-4 5Z" />
    </symbol>
    <symbol id="i-tag" viewBox="0 0 24 24">
      <path d="M3 12V3h9l9 9-9 9-9-9Z" />
      <circle cx="8" cy="8" r="1.5" />
    </symbol>
    <symbol id="i-chat" viewBox="0 0 24 24">
      <path d="M4 5h16v11H8l-4 4V5Z" />
    </symbol>
    <symbol id="i-mail" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </symbol>
    <symbol id="i-phone" viewBox="0 0 24 24">
      <path d="M5 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </symbol>
    <symbol id="i-instagram" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </symbol>
    <symbol id="i-tiktok" viewBox="0 0 24 24">
      <path d="M14 3v12a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c.5 3 2.5 5 5.5 5" />
    </symbol>
    <symbol id="i-pinterest" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M11 8.5c3-1 5 1 4 3.5s-3 2.5-4 1.5M11.5 10 9 20" />
    </symbol>
    <symbol id="i-shield" viewBox="0 0 24 24">
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
    </symbol>
    <symbol id="i-download" viewBox="0 0 24 24">
      <path d="M12 4v11m-5-5 5 5 5-5M4 20h16" />
    </symbol>
    <symbol id="i-trash" viewBox="0 0 24 24">
      <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />
    </symbol>
    <symbol id="i-edit" viewBox="0 0 24 24">
      <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
    </symbol>
    <symbol id="i-share" viewBox="0 0 24 24">
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="m8.2 11 7.6-3.8M8.2 13l7.6 3.8" />
    </symbol>
    <symbol id="i-filter" viewBox="0 0 24 24">
      <path d="M4 6h16M7 12h10M10 18h4" />
    </symbol>
    <symbol id="i-ruler" viewBox="0 0 24 24">
      <rect x="2" y="8" width="20" height="8" rx="1" />
      <path d="M6 8v3M10 8v4M14 8v3M18 8v4" />
    </symbol>
    <symbol id="i-star" viewBox="0 0 24 24">
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9L12 3Z" />
    </symbol>
    <symbol id="i-bubble" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8M12 8v8" />
    </symbol>
    <symbol id="i-eye-off" viewBox="0 0 24 24">
      <path d="M3 3l18 18M10.6 6.1A10 10 0 0 1 12 6c6.4 0 10 6 10 6a17 17 0 0 1-3.3 3.9M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a9.6 9.6 0 0 0 4.4-1" />
    </symbol>
  </svg>
)

/**
 * Cuerpo del documento: inyecta el sprite de iconos, el enlace "saltar al
 * contenido" y replica las interacciones mínimas del wireframe original
 * (js/app.js): chips y tallas tipo toggle, pestañas, hotspots, acordeones
 * y mostrar/ocultar contraseña.
 */
export default function Body({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.body.id = 'top'

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      const t = target.closest(
        '.chip[aria-pressed], .size[aria-pressed], .swatch[aria-pressed], .icon-btn[aria-pressed]',
      )
      if (t && !t.closest('[inert]')) {
        const group = t.closest('.sizes, .swatches')
        if (group) {
          group.querySelectorAll('[aria-pressed]').forEach((b) =>
            b.setAttribute('aria-pressed', 'false'),
          )
        }
        t.setAttribute(
          'aria-pressed',
          t.getAttribute('aria-pressed') === 'true' ? 'false' : 'true',
        )
        if (group) t.setAttribute('aria-pressed', 'true')
      }

      const r = target.closest('.chip[role="radio"]') as HTMLElement | null
      if (r && r.parentElement) {
        r.parentElement.querySelectorAll('[role="radio"]').forEach((b) =>
          b.setAttribute('aria-checked', 'false'),
        )
        r.setAttribute('aria-checked', 'true')
      }

      const tab = target.closest('.tab[role="tab"]') as HTMLElement | null
      if (tab && tab.parentElement) {
        tab.parentElement.querySelectorAll('.tab').forEach((b) =>
          b.setAttribute('aria-selected', 'false'),
        )
        tab.setAttribute('aria-selected', 'true')
      }

      const hs = target.closest('.hotspot__btn') as HTMLElement | null
      if (hs) {
        const abierto = hs.getAttribute('aria-expanded') === 'true'
        hs.closest('.hero, .look-stage, .lib-demo__stage')
          ?.querySelectorAll('.hotspot__btn')
          .forEach((b) => b.setAttribute('aria-expanded', 'false'))
        hs.setAttribute('aria-expanded', String(!abierto))
      }

      const la = target.closest('.look-acc') as HTMLElement | null
      if (la && !la.classList.contains('is-open') && la.parentElement) {
        la.parentElement.querySelectorAll('.look-acc').forEach((x) =>
          x.classList.remove('is-open'),
        )
        la.classList.add('is-open')
      }

      const pw = target.closest('.field__btn') as HTMLElement | null
      if (pw && pw.parentElement) {
        const input = pw.parentElement.querySelector('input')
        if (input) {
          const mostrar = input.type === 'password'
          input.type = mostrar ? 'text' : 'password'
          pw.setAttribute('aria-label', mostrar ? 'Ocultar contraseña' : 'Mostrar contraseña')
        }
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        document
          .querySelectorAll('.hotspot__btn[aria-expanded="true"]')
          .forEach((b) => b.setAttribute('aria-expanded', 'false'))
      }
    }

    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKeyDown)
    document
      .querySelectorAll('[data-indeterminate="true"]')
      .forEach((c) => ((c as HTMLInputElement).indeterminate = true))

    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <>
      {Sprite}
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      {children}
    </>
  )
}
