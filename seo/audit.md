# Auditoría final on-site — Step 5

Rama `seo-onsite-optimization` · 29 agosto 2026
Alcance acordado: 20 páginas (6 core + 14 de servicio) de las 34 totales.

Verificado contra el **HTML generado en `dist/`**, no contra el código fuente:
es lo que ve realmente un rastreador.

---

## Checklist

| # | Criterio | Estado |
|--:|---|---|
| 1 | Keywords documentadas en `seo/keywords.md` | ✅ |
| 2 | Top 10 keywords colocadas en headers y cuerpo | ✅ |
| 2a | Un solo H1 por página, H2 de sección, H3–H5 de apoyo | ✅ |
| 2b | Keyword en la primera frase tras cada header | ⚠️ parcial |
| 3 | Enlaces internos con anchor de keyword | ✅ |
| 4 | Imágenes: nombres, alt, metadatos | ✅ |
| 4a | Geotags EXIF | ⛔ requiere acción tuya |
| 4b | Subida a Google Business Profile | ⛔ requiere acción tuya |
| 5 | NAP visible en texto, idéntico al de GMB | ⚠️ bloqueado |
| 6 | Prueba social / captación de reseñas | ⚠️ parcial |
| 7 | Teléfono y CTA por encima del pliegue | ✅ |
| 8 | Title y meta description únicos en cada página | ✅ 34/34 |
| 9 | Texto natural, sin keyword stuffing | ✅ |

---

## Lo verificado

### Estructura de headers — ✅

Las 34 páginas generadas tienen **exactamente un `<h1>`**, un `<title>`, una
`<meta name="description">` y un `<link rel="canonical">`. Ni duplicados ni
ausencias.

### Títulos y descripciones únicos — ✅ 34/34

```
títulos únicos:        34 de 34
descripciones únicas:  34 de 34
```

Reescritos según el mapeo de keywords en home, servicios, nosotros, contacto,
reservar y entrenadores. Las 14 páginas de servicio los derivan de la plantilla,
por lo que son únicos por construcción.

### Enlaces internos — ✅

Dos fallos reales corregidos:

1. **Footer**: los cinco servicios destacados mostraban su nombre como texto de
   enlace pero **los cinco apuntaban a `/servicios`**. Ahora cada uno enlaza a su
   propia página, con el nombre del servicio + «en Medellín» como anchor.
2. **Páginas de servicio**: las 14 eran callejones sin salida, sin ningún enlace
   entre ellas. Se añadió un bloque de servicios relacionados: **84 enlaces
   internos nuevos**, todos con anchor descriptivo.

También se retiraron `/privacy` y `/terms`, que estaban enlazados en el footer
de las 34 páginas **sin existir como rutas** — dos enlaces rotos globales.

### Teléfono accesible — ✅

**El sitio no tenía ni un solo enlace `tel:`.** El número era texto plano en el
pie, y con `format-detection: telephone=no` en el `<head>` tampoco lo detectaba
iOS: en iPhone no había forma de pulsar para llamar. Ahora:

- Navbar de escritorio: número visible y pulsable
- Navbar móvil: botón de llamada junto a «Reservar Sesión»
- Pie: teléfono con `tel:` y email con `mailto:`

Verificado: 2 enlaces `tel:` y 1 `mailto:` en el HTML de la home.

### Imágenes — ✅ (lo que depende del código)

- Los 5 webp locales llevan la ciudad en el nombre: `pilates-medellin.webp`
- Alt reescrito donde no decía nada: `Director 1` y
  `Entrenadores de ejercicio físico 1` pasan a describir la imagen con variantes
  de keyword **rotadas por índice**, para no repetir la misma en toda la galería
- `withMetadata()` añadido a sharp

> **Por qué importa `withMetadata()`:** sharp descarta el EXIF por defecto. Sin
> esa línea, geoetiquetar las fotos con GeoImgr y luego ejecutar
> `npm run optimize:images` habría borrado los geotags en silencio.

---

## Lo que queda abierto

### ⛔ Geotags EXIF — necesita tus fotos

Ninguna imagen del sitio lleva geotags porque **la mayoría son de Unsplash**, no
fotos propias. Geoetiquetar fotos de stock no aporta señal local: hay que
hacerlo con fotos reales de sesiones.

Cuando las tengas:
1. Pásalas por [GeoImgr](https://geoimgr.com) con coordenadas dentro del área de
   servicio.
2. Etiqueta algunas en la **periferia** (Envigado, Itagüí, Sabaneta, Bello), no
   todas en el centro: refuerza el ranking en las zonas donde el map pack es más
   débil. Identifica esas zonas con [LocalFalcon](https://localfalcon.com).
3. Colócalas en `public/images/` y ejecuta `npm run optimize:images`.
4. Súbelas también a Google Business Profile.

### ⛔ NAP — bloqueado por una pregunta sin responder

El NAP es visible como texto en el pie de las 34 páginas:

```
+57 314 400 8592
info@newpersonaltraining.com
Medellín, Antioquia, Colombia
```

El requisito del skill es que coincida **carácter por carácter** con la ficha de
Google Business Profile. No lo puedo verificar sin saber cómo está dada de alta:

- **Si es negocio con área de servicio** (lo que sugiere todo el copy: los
  entrenadores van al domicilio del cliente), lo actual es **correcto** y no hay
  que añadir dirección. Google recomienda expresamente no publicarla.
- **Si la ficha muestra dirección física**, hay que replicarla literalmente aquí.

Dime cuál es y lo ajusto en un minuto.

### ⚠️ Prueba social — parcial

Hay tres testimonios con nombre y profesión, y una franja de garantías en cada
página de servicio. Faltan dos cosas del Step 4:

- **Los testimonios usan retratos de stock de Unsplash.** Ya lo señalé en la
  auditoría anterior y sigue igual: una búsqueda inversa de imagen los desmiente
  en segundos, justo en el bloque diseñado para generar confianza.
- **No hay widget de captación de reseñas.** Las reseñas pesan en el map pack, y
  ahora mismo el sitio no pide ninguna. Un enlace directo a «escribir reseña» de
  la ficha de Google sería lo más rentable.

### ⚠️ Keyword en la primera frase tras cada header — parcial

Se aplicó en los headers reescritos (home, servicios, entrenadores, nosotros y
el bloque de servicios relacionados). No se aplicó en todos los H2/H3 heredados
—MISIÓN, VISIÓN 2030, NUESTROS VALORES, GARANTÍAS— porque el texto que va debajo
es contenido institucional que ya lee bien. **Forzar la keyword ahí habría
sonado artificial**, y la regla 9 del propio skill manda priorizar la
legibilidad. Preferible dejarlo así.

---

## Fuera del alcance acordado

Los 13 artículos del blog no se tocaron (alcance: core + servicio). Ahí queda el
mayor enlace interno sin aprovechar: **cada artículo enlaza a `/servicios` en
genérico** en lugar de a la página del servicio del que habla. El artículo de
boxeo debería enlazar a `/servicios/boxeo`, el de pilates al suyo, etc. Es
contenido informativo empujando a la página transaccional correspondiente, que
es exactamente el patrón que el Step 2.5 busca.

---

## Verificación

```bash
npm run build     # 34 rutas + 404.html + sitemap de 34 URLs
npx tsc --noEmit  # sin errores
```

Ambos en verde. No se ha ejecutado el sitio en navegador: la fidelidad visual de
los cambios de header y del bloque de servicios relacionados conviene revisarla
con `npm run dev` antes de fusionar.
