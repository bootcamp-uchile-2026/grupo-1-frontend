/* =========================================================
   Stylenow · Home/Hero editorial (slider con hotspots)
   Componente React + TypeScript, sin dependencias externas.

   Uso:
     import { Hero } from './src/components/hero'
     <Hero />
   ========================================================= */
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import type {
  CSSProperties,
  FocusEvent as ReactFocusEvent,
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
} from 'react';
import '../assets/css/hero.css';

import hombreAbrigoVerdeBufandaVioleta from '../assets/img/sliders/hombre-abrigo-verde-bufanda-violeta.webp';
import hombreTrajeVerdeAbrigoVioletaAlBrazo from '../assets/img/sliders/hombre-traje-verde-abrigo-violeta-al-brazo.webp';
import hombreTrajeVerdeCamisaVioleta from '../assets/img/sliders/hombre-traje-verde-camisa-violeta.webp';
import mujerAbrigoVerdeShortVioleta from '../assets/img/sliders/mujer-abrigo-verde-short-violeta.webp';
import mujerAbrigoVioletaPantalonVerde from '../assets/img/sliders/mujer-abrigo-violeta-pantalon-verde.webp';
import mujerTrajeVerdeCarteraLila from '../assets/img/sliders/mujer-traje-verde-cartera-lila.webp';
import personaTrajeVerdeCamisaLavanda from '../assets/img/sliders/persona-traje-verde-camisa-lavanda.webp';

/* ---------- Tipos ---------- */

export interface HeroImagen {
  src: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
  apoyo?: boolean;
}

export interface HeroPrenda {
  nombre: string;
  precio: string | null;
  url: string;
  x: number;
  y: number;
}

export interface HeroSet {
  titulo2X: number;
  imagenes: HeroImagen[];
  prendas: HeroPrenda[];
}

export interface HeroLook {
  titulo: [string, string];
  url: string;
  desktop?: HeroSet;
  mobile?: HeroSet;
}

export interface HeroData {
  abrirPrimeraPrenda: boolean;
  looks: HeroLook[];
}

export interface HeroProps {
  /** Opcional: permite inyectar los looks desde fuera (CMS/API). */
  data?: HeroData;
}

type Breakpoint = 'desktop' | 'mobile';
type CSSVars = CSSProperties & Record<`--${string}`, string | number>;
interface OpenHotspot {
  key: string;
  pinned: boolean;
}

/* ---------- Constantes ---------- */

const SWIPE_MIN = 50; // px mínimos para considerar un swipe
const TITLE_SWAP_MS = 260; // debe coincidir con la transición del titular en CSS
const TIP_GAP = 8; // separación botón/etiqueta (--space-xs)
const MQ_MOBILE = '(max-width: 767.98px)';
const MQ_REDUCED = '(prefers-reduced-motion: reduce)';

const pad = (n: number): string => (n < 10 ? '0' : '') + n;
const hsKey = (look: number, bp: Breakpoint, n: number): string => `${look}-${bp}-${n}`;
const matches = (q: string): boolean =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia(q).matches;
const isFocusVisible = (el: Element): boolean => {
  try {
    return el.matches(':focus-visible');
  } catch {
    return true;
  }
};

/* ---------- Datos por defecto ----------
   Coordenadas en px tal cual Figma: desktop sobre 1440×760 y mobile sobre 375×760.
   - imagenes: x, y, w, h del recorte (orden de apilado: la última queda adelante).
   - prendas: x, y = esquina superior izquierda del hotspot de 44×44.
   - precio: null cuando el diseño no lo define. */
export const HERO_DATA: HeroData = {
  abrirPrimeraPrenda: true,
  looks: [
    {
      titulo: ['Tu estilo,', 'tu momento.'],
      url: '/looks/tu-estilo-tu-momento',
      desktop: {
        titulo2X: 332,
        imagenes: [
          { src: mujerAbrigoVioletaPantalonVerde, alt: 'Mujer con abrigo violeta y pantalón verde', x: 250, y: 120, w: 512, h: 640 },
          { src: mujerAbrigoVerdeShortVioleta, alt: 'Mujer con abrigo verde y short violeta', x: 700, y: 110, w: 433, h: 650 },
          { src: personaTrajeVerdeCamisaLavanda, alt: 'Persona con traje verde y camisa lavanda', x: 860, y: 120, w: 426, h: 640 },
        ],
        prendas: [
          { nombre: 'Abrigo Violeta', precio: '$59.990', url: '/producto/abrigo-violeta', x: 443.04, y: 361.8 },
          { nombre: 'Short Violeta', precio: null, url: '/producto/short-violeta', x: 881.51, y: 505 },
          { nombre: 'Traje Verde', precio: '$89.990', url: '/producto/traje-verde', x: 991.36, y: 430.8 },
        ],
      },
      mobile: {
        titulo2X: 56,
        imagenes: [
          { src: personaTrajeVerdeCamisaLavanda, alt: 'Persona con traje verde y camisa lavanda', x: -2, y: 110, w: 399, h: 600 },
        ],
        prendas: [
          { nombre: 'Traje Verde', precio: '$89.990', url: '/producto/traje-verde', x: 119.64, y: 383 },
          { nombre: 'Camisa Lavanda', precio: null, url: '/producto/camisa-lavanda', x: 183.48, y: 232 },
        ],
      },
    },
    {
      titulo: ['Verde que', 'se impone.'],
      url: '/looks/verde-que-se-impone',
      desktop: {
        titulo2X: 489,
        imagenes: [
          { src: hombreTrajeVerdeCamisaVioleta, alt: 'Hombre con traje verde y camisa violeta', x: 291, y: 130, w: 474, h: 632 },
          { src: mujerTrajeVerdeCarteraLila, alt: 'Mujer con traje verde y cartera lila', x: 708, y: 67, w: 492, h: 738 },
          { src: mujerAbrigoVerdeShortVioleta, alt: 'Mujer con abrigo verde y short violeta', x: 490, y: 19, w: 519, h: 778 },
        ],
        prendas: [
          { nombre: 'Abrigo Verde', precio: '$64.990', url: '/producto/abrigo-verde', x: 653.37, y: 379 },
          { nombre: 'Camisa Violeta', precio: null, url: '/producto/camisa-violeta', x: 497.61, y: 276 },
          { nombre: 'Cartera Lila', precio: null, url: '/producto/cartera-lila', x: 945.01, y: 468.2 },
        ],
      },
      mobile: {
        titulo2X: 102,
        imagenes: [
          { src: mujerTrajeVerdeCarteraLila, alt: 'Mujer con traje verde y cartera lila', x: 146, y: 212, w: 350, h: 525, apoyo: true },
          { src: mujerAbrigoVerdeShortVioleta, alt: 'Mujer con abrigo verde y short violeta', x: -12, y: 110, w: 400, h: 600 },
        ],
        prendas: [
          { nombre: 'Abrigo Verde', precio: '$64.990', url: '/producto/abrigo-verde', x: 86, y: 371 },
          { nombre: 'Short Violeta', precio: null, url: '/producto/short-violeta', x: 158, y: 460 },
        ],
      },
    },
    {
      titulo: ['Capas con', 'carácter.'],
      url: '/looks/capas-con-caracter',
      desktop: {
        titulo2X: 662,
        imagenes: [
          { src: hombreTrajeVerdeAbrigoVioletaAlBrazo, alt: 'Hombre con traje verde y abrigo violeta al brazo', x: 291, y: 122, w: 432, h: 648 },
          { src: hombreAbrigoVerdeBufandaVioleta, alt: 'Hombre con abrigo verde, bufanda violeta y pantalón ciruela', x: 757, y: 58, w: 514, h: 770 },
          { src: mujerAbrigoVioletaPantalonVerde, alt: 'Mujer con abrigo violeta y pantalón verde', x: 434, y: 132, w: 502, h: 628 },
        ],
        prendas: [
          { nombre: 'Abrigo Violeta', precio: '$59.990', url: '/producto/abrigo-violeta', x: 666.29, y: 349 },
          { nombre: 'Sobretodo Violeta', precio: null, url: '/producto/sobretodo-violeta', x: 404.57, y: 539 },
          { nombre: 'Bufanda Violeta', precio: null, url: '/producto/bufanda-violeta', x: 917.39, y: 303.6 },
        ],
      },
      mobile: {
        titulo2X: 151,
        imagenes: [
          { src: hombreTrajeVerdeAbrigoVioletaAlBrazo, alt: 'Hombre con traje verde y abrigo violeta al brazo', x: -117, y: 252, w: 308, h: 462, apoyo: true },
          { src: mujerAbrigoVioletaPantalonVerde, alt: 'Mujer con abrigo violeta y pantalón verde', x: -62, y: 110, w: 480, h: 600 },
        ],
        prendas: [
          { nombre: 'Abrigo Violeta', precio: '$59.990', url: '/producto/abrigo-violeta', x: 117.6, y: 323 },
          { nombre: 'Pantalón Verde', precio: null, url: '/producto/pantalon-verde', x: 194.4, y: 496 },
        ],
      },
    },
  ],
};

/* =========================================================
   Componente
   ========================================================= */
export function Hero({ data = HERO_DATA }: HeroProps) {
  const looks = data.looks;
  const total = looks.length;
  const uid = 'sn' + useId().replace(/[^a-zA-Z0-9_-]/g, '');

  const rootRef = useRef<HTMLElement>(null);
  const lookRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dotRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const hotspotRefs = useRef(new Map<string, HTMLDivElement>());
  const dismissed = useRef(new Set<string>());
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const firstRender = useRef(true);

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(() => matches(MQ_MOBILE));
  const [openHs, setOpenHs] = useState<OpenHotspot | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [titleIdx, setTitleIdx] = useState(0);
  const [titleChanging, setTitleChanging] = useState(false);
  const [liveText, setLiveText] = useState('');

  const bp: Breakpoint = isMobile ? 'mobile' : 'desktop';

  // Ref espejo del hotspot abierto (para listeners globales sin closures obsoletos)
  const openRef = useRef<OpenHotspot | null>(openHs);
  useLayoutEffect(() => {
    openRef.current = openHs;
  }, [openHs]);

  /* ---------- Navegación ---------- */

  const normalize = useCallback((i: number) => ((i % total) + total) % total, [total]);

  const goTo = useCallback(
    (i: number) => {
      if (!total) return;
      setIndex(normalize(i));
    },
    [total, normalize],
  );

  const next = useCallback(() => setIndex((i) => normalize(i + 1)), [normalize]);
  const prev = useCallback(() => setIndex((i) => normalize(i - 1)), [normalize]);

  // Slide activo: inert en los demás (compatible con React 18 y 19)
  useEffect(() => {
    lookRefs.current.forEach((el, k) => {
      if (!el) return;
      if (k === index) el.removeAttribute('inert');
      else el.setAttribute('inert', '');
    });
  }, [index, total]);

  // Anuncio para lectores de pantalla (no en el primer render)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const look = looks[index];
    if (look) setLiveText(`Look ${index + 1} de ${total}: ${look.titulo.join(' ')}`);
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  // Cambio de titular con transición
  useEffect(() => {
    if (index === titleIdx) {
      setTitleChanging(false);
      return;
    }
    if (matches(MQ_REDUCED)) {
      setTitleIdx(index);
      setTitleChanging(false);
      return;
    }
    setTitleChanging(true);
    let raf1 = 0;
    let raf2 = 0;
    const t = window.setTimeout(() => {
      setTitleIdx(index);
      // doble rAF para que el navegador pinte el estado oculto antes de volver a mostrar
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setTitleChanging(false));
      });
    }, TITLE_SWAP_MS);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  // Al cambiar de look o de breakpoint: cierra todo y abre la primera prenda
  useEffect(() => {
    dismissed.current.clear();
    const set = looks[index]?.[bp];
    setOpenHs(data.abrirPrimeraPrenda && set && set.prendas.length ? { key: hsKey(index, bp, 0), pinned: true } : null);
  }, [index, bp, data.abrirPrimeraPrenda, looks]);

  /* ---------- Posición de la etiqueta ---------- */

  // Si la etiqueta se sale por la derecha del hero, se muestra a la izquierda
  const measureFlip = useCallback(() => {
    const cur = openRef.current;
    const root = rootRef.current;
    const hs = cur ? hotspotRefs.current.get(cur.key) : undefined;
    const tip = hs?.querySelector<HTMLElement>('.sn-hotspot__tip');
    if (!root || !hs || !tip || !hs.offsetParent) {
      setFlipped(false);
      return;
    }
    const heroRect = root.getBoundingClientRect();
    const hsRect = hs.getBoundingClientRect();
    setFlipped(hsRect.right + TIP_GAP + tip.offsetWidth > heroRect.right - 8);
  }, []);

  useLayoutEffect(() => {
    measureFlip();
  }, [openHs, measureFlip]);

  /* ---------- Eventos globales ---------- */

  useEffect(() => {
    const mq = window.matchMedia(MQ_MOBILE);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(() => measureFlip());
      ro.observe(root);
      return () => ro.disconnect();
    }
    const win: Window = window;
    win.addEventListener('resize', measureFlip);
    return () => win.removeEventListener('resize', measureFlip);
  }, [measureFlip]);

  useEffect(() => {
    // Esc cierra la etiqueta (WCAG 1.4.13) y devuelve el foco al botón
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      const cur = openRef.current;
      if (!cur) return;
      const hs = hotspotRefs.current.get(cur.key);
      const hadFocus = !!hs && hs.contains(document.activeElement);
      setOpenHs(null);
      if (hs?.matches(':hover')) dismissed.current.add(cur.key);
      if (hadFocus) hs?.querySelector<HTMLButtonElement>('.sn-hotspot__btn')?.focus();
    };

    // Clic/toque fuera de un hotspot cierra la etiqueta abierta
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target || typeof target.closest !== 'function') return;
      if (target.closest('.sn-hotspot')) return;
      if (rootRef.current?.contains(target) && target.closest('.sn-dot')) return;
      if (openRef.current) setOpenHs(null);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  /* ---------- Hotspots ---------- */

  const toggleHotspot = (key: string) => {
    const cur = openRef.current;
    setOpenHs(cur && cur.key === key && cur.pinned ? null : { key, pinned: true });
  };

  const onHsPointerEnter = (key: string) => (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    if (openRef.current?.key === key || dismissed.current.has(key)) return;
    setOpenHs({ key, pinned: false });
  };

  const onHsPointerLeave = (key: string) => (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    dismissed.current.delete(key);
    const cur = openRef.current;
    if (cur?.key === key && !cur.pinned && !e.currentTarget.contains(document.activeElement)) setOpenHs(null);
  };

  const onHsFocus = (key: string) => (e: ReactFocusEvent<HTMLDivElement>) => {
    if (openRef.current?.key === key) return;
    if (isFocusVisible(e.target)) setOpenHs({ key, pinned: false });
  };

  const onHsBlur = (key: string) => (e: ReactFocusEvent<HTMLDivElement>) => {
    const hs = e.currentTarget;
    if (e.relatedTarget instanceof Node && hs.contains(e.relatedTarget)) return;
    const cur = openRef.current;
    if (cur?.key === key && !cur.pinned && !hs.matches(':hover')) setOpenHs(null);
  };

  /* ---------- Indicador ---------- */

  const onDotsKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    let target: number;
    switch (e.key) {
      case 'ArrowRight': target = index + 1; break;
      case 'ArrowLeft': target = index - 1; break;
      case 'Home': target = 0; break;
      case 'End': target = total - 1; break;
      default: return;
    }
    e.preventDefault();
    const n = normalize(target);
    goTo(n);
    dotRefs.current[n]?.focus();
  };

  /* ---------- Swipe (táctil / lápiz) ---------- */

  const onArtPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' || (e.target as Element).closest('.sn-hotspot')) return;
    swipeStart.current = { x: e.clientX, y: e.clientY };
  };

  const onArtPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const start = swipeStart.current;
    if (!start) return;
    swipeStart.current = null;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) > SWIPE_MIN && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    }
  };

  /* ---------- Render ---------- */

  const renderSet = (set: HeroSet | undefined, setBp: Breakpoint, lookIndex: number) => (
    <div className={`sn-look__set sn-look__set--${setBp}`}>
      {set?.imagenes.map((img, k) => (
        <img
          key={`img-${k}`}
          className={'sn-pos sn-look__img' + (img.apoyo ? ' sn-look__img--apoyo' : '')}
          src={img.src}
          alt={img.alt || ''}
          loading={lookIndex === 0 ? 'eager' : 'lazy'}
          decoding="async"
          draggable={false}
          style={{ '--x': img.x, '--y': img.y, '--w': img.w, '--h': img.h } as CSSVars}
        />
      ))}

      {set?.prendas.map((p, j) => {
        const n = j + 1;
        const key = hsKey(lookIndex, setBp, j);
        const tipId = `${uid}-tip-${lookIndex}-${setBp}-${n}`;
        const isOpen = openHs?.key === key;
        const classes = ['sn-pos', 'sn-hotspot'];
        if (isOpen && flipped) classes.push('is-flipped');

        return (
          <div
            key={key}
            ref={(el) => {
              if (el) hotspotRefs.current.set(key, el);
              else hotspotRefs.current.delete(key);
            }}
            className={classes.join(' ')}
            style={{ '--x': p.x, '--y': p.y } as CSSVars}
            data-open={isOpen ? '' : undefined}
            data-pinned={isOpen && openHs?.pinned ? '' : undefined}
            onPointerEnter={onHsPointerEnter(key)}
            onPointerLeave={onHsPointerLeave(key)}
            onFocus={onHsFocus(key)}
            onBlur={onHsBlur(key)}
          >
            <button
              type="button"
              className="sn-hotspot__btn"
              aria-expanded={isOpen}
              aria-controls={tipId}
              aria-label={`Prenda ${n}: ${p.nombre}`}
              onClick={() => toggleHotspot(key)}
            >
              {n}
            </button>
            <a id={tipId} className="sn-hotspot__tip" href={p.url || '#'}>
              <span className="sn-hotspot__name">{p.nombre}</span>
              {p.precio ? <span className="sn-hotspot__price">{p.precio}</span> : null}
            </a>
          </div>
        );
      })}
    </div>
  );

  if (!total) return null;

  const activeLook = looks[index];
  const titleLook = looks[titleIdx] ?? activeLook;
  const titleStyle: CSSVars = {};
  if (titleLook.desktop) titleStyle['--l2x-d'] = titleLook.desktop.titulo2X;
  if (titleLook.mobile) titleStyle['--l2x-m'] = titleLook.mobile.titulo2X;

  return (
    <section
      ref={rootRef}
      className="sn-hero"
      aria-roledescription="carrusel"
      aria-label="Looks destacados de la nueva colección"
    >
      <div
        className="sn-hero__art"
        style={{ touchAction: 'pan-y' }}
        onPointerDown={onArtPointerDown}
        onPointerUp={onArtPointerUp}
        onPointerCancel={() => (swipeStart.current = null)}
      >
        <h1 className={'sn-hero__title' + (titleChanging ? ' is-changing' : '')} style={titleStyle}>
          <span className="sn-hero__title-l1">{titleLook.titulo[0]}</span>{' '}
          <span className="sn-hero__title-l2">{titleLook.titulo[1]}</span>
        </h1>

        <div className="sn-hero__looks">
          {looks.map((look, i) => (
            <div
              key={look.url || i}
              ref={(el) => {
                lookRefs.current[i] = el;
              }}
              className={'sn-look' + (i === index ? ' is-active' : '')}
              role="group"
              aria-roledescription="slide"
              aria-label={`Look ${i + 1} de ${total}: ${look.titulo.join(' ')}`}
            >
              {renderSet(look.desktop, 'desktop', i)}
              {renderSet(look.mobile, 'mobile', i)}
            </div>
          ))}
        </div>
      </div>

      <div className="sn-hero__veil" aria-hidden="true" />

      <p className="sn-hero__eyebrow">NUEVA COLECCIÓN · OTOÑO 26</p>

      <div className="sn-hero__copy">
        <p className="sn-hero__lead">
          <span className="sn-only-desktop">
            Descubre lo nuevo en ropa y accesorios para cada ocasión. Toca cada prenda para verla en detalle.
          </span>
          <span className="sn-only-mobile">
            Descubre lo nuevo en ropa y accesorios. Toca cada prenda para verla en detalle.
          </span>
        </p>
        <a className="sn-btn sn-btn--highlight" href="/coleccion/otono-26">
          Comprar la colección
        </a>
        <a className="sn-hero__link" href={activeLook.url || '#'}>
          Ver las prendas del look
        </a>
      </div>

      <div className="sn-hero__pager">
        <p className="sn-hero__counter" aria-hidden="true">
          Look {pad(index + 1)} / {pad(total)}
        </p>
        <div className="sn-hero__dots" role="group" aria-label="Elegir look" onKeyDown={onDotsKeyDown}>
          {looks.map((look, i) => (
            <button
              key={look.url || i}
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              type="button"
              className="sn-dot"
              aria-label={`Ver look ${i + 1}: ${look.titulo.join(' ')}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <p className="sn-hero__hint">Toca un punto para ver la prenda</p>
      </div>

      <p className="sn-visually-hidden" aria-live="polite">
        {liveText}
      </p>
    </section>
  );
}

