# Mapa de enlaces internos

Regla aplicada (Step 2.5): **ningún enlace interno usa texto genérico**. El
anchor describe siempre el destino y lleva la keyword de la página a la que
apunta. Nada de «click aquí», «ver más» o «explorar» a secas.

---

## Globales — presentes en las 34 páginas

### Navbar

| Anchor | Destino |
|---|---|
| Inicio | `/` |
| Servicios | `/servicios` |
| Entrenadores | `/entrenadores` |
| Nosotros | `/nosotros` |
| Contacto | `/contacto` |
| Blog | `/blog` |
| Reservar Sesión | `/reservar` |

### Footer

| Anchor | Destino | Nota |
|---|---|---|
| *(logo)* | `/` | |
| Inicio · Servicios · Entrenadores · Nosotros · Blog · Contacto | rutas correspondientes | |
| **Entrenamiento Personalizado en Medellín** | `/servicios/entrenamiento-personalizado` | **corregido** |
| **Entrenamiento Semipersonalizado en Medellín** | `/servicios/entrenamiento-semi-personalizado` | **corregido** |
| **Cita, Plan y Valoración con Nutricionista en Medellín** | `/servicios/nutricionista` | **corregido** |
| **Clase Grupal Entrenamiento Funcional en Medellín** | `/servicios/clase-grupal-funcional` | **corregido** |
| **Clase Grupal Rítmica en Medellín** | `/servicios/clase-grupal-ritmica` | **corregido** |
| Sobre Nosotros | `/nosotros` | reemplaza enlace roto |
| Contacto | `/contacto` | reemplaza enlace roto |

**Qué estaba mal.** Los cinco servicios destacados mostraban su nombre como
texto de enlace pero **los cinco apuntaban a `/servicios`**. El anchor prometía
una página concreta y llevaba al listado genérico: mal para el usuario y
desperdicia el anchor text más valioso del footer, que se repite en 34 páginas.

**Enlaces rotos retirados.** `/privacy` y `/terms` estaban enlazados en el
footer pero **no existen como rutas** en `App.tsx`. Desde que las URLs
desconocidas devuelven un 404 real, eran dos enlaces rotos en todas las páginas.

> **Pendiente para ti:** si el sitio necesita política de privacidad y términos
> —la Ley 1581 de 2012 la exige si se recogen datos personales—, hay que
> escribirlas y crear las rutas. No las he redactado: es contenido legal y no me
> corresponde inventarlo. Mientras tanto los enlaces apuntan a páginas que sí
> existen.

---

## Home `/`

| Anchor | Destino |
|---|---|
| Empezar Ahora | `/reservar` |
| Ver Programas | `/servicios` |
| *(tarjeta de servicio ×N)* nombre del servicio + «en Medellín» | `/servicios/{slug}` |
| *(tarjeta de artículo ×3)* título del artículo | `/blog/{slug}` |
| Ver todo el blog | `/blog` |

---

## Servicios `/servicios`

| Anchor | Destino |
|---|---|
| *(tarjeta ×14)* nombre del servicio + «en Medellín» | `/servicios/{slug}` |
| Agenda tu evaluación gratuita | `/reservar` |

---

## Páginas de servicio `/servicios/{slug}` — ×14

Antes eran **callejones sin salida**: solo enlazaban de vuelta a `/servicios` o
salían a WhatsApp. No se enlazaban entre sí, así que el rastreo lateral entre
las 14 páginas de servicio era nulo.

| Anchor | Destino |
|---|---|
| Volver a servicios | `/servicios` |
| *(relacionado ×3)* nombre del servicio + «en Medellín» | `/servicios/{otro-slug}` |
| Ver los 14 servicios de entrenamiento en Medellín | `/servicios` |
| Entrenador personal en Medellín a domicilio | `/` |
| Conoce a los entrenadores personales en Medellín | `/entrenadores` |

**Efecto:** 14 páginas × 6 enlaces internos = **84 enlaces nuevos**, todos con
anchor descriptivo. Cada página de servicio ahora enlaza a la home, al listado,
a entrenadores y a tres servicios hermanos.

---

## Blog `/blog` y `/blog/{slug}` — ×14

| Anchor | Destino |
|---|---|
| *(tarjeta)* título del artículo | `/blog/{slug}` |
| Reservar Sesión Gratis | `/reservar` |
| **{Servicio} en Medellín** | `/servicios/{slug-del-servicio}` |
| *(relacionado ×3)* título del artículo | `/blog/{otro-slug}` |
| Volver al Blog | `/blog` |

Cada artículo declara en `blogs.ts` de qué servicios trata (`relatedServices`),
y la plantilla enlaza a sus páginas. Antes los 13 apuntaban a `/servicios` en
genérico con el anchor «Ver Servicios».

| Artículo | Servicio destino |
|---|---|
| guia-entrenador-personal-medellin-2026 | entrenamiento-personalizado, entrenamiento-semi-personalizado |
| clases-boxeo-medellin | boxeo |
| entrenamiento-domicilio-medellin | entrenamiento-personalizado, entrenamiento-semi-personalizado |
| pilates-medellin-beneficios-clases | pilates |
| mejores-gimnasios-medellin-2026 | entrenamiento-personalizado, clase-grupal-funcional |
| entrenamiento-funcional-medellin | clase-grupal-funcional, clase-grupal-ritmica |
| nutricionista-medellin-valoracion-plan | nutricionista |
| yoga-medellin-guia-completa | yoga |
| fisioterapia-medellin-recuperacion-domicilio | fisioterapia, masaje |
| entrenamiento-para-bajar-de-peso-medellin | entrenamiento-personalizado, nutricionista |
| bienestar-empresarial-medellin-pausas-activas | clase-grupal-funcional, clase-grupal-ritmica |
| clases-natacion-medellin-personalizada | natacion-personalizada, natacion-semi-personalizada |
| equipos-gym-medellin-venta-servicio-tecnico | **sin mapear** — no existe página de servicio |

El artículo de equipos se deja deliberadamente sin mapear: esa línea de negocio
no tiene página propia, así que la plantilla cae al enlace general con el anchor
«Ver los 14 servicios en Medellín». Es el hueco que sigue abierto.

---

## Cómo queda el grafo

```
                    ┌──────────────┐
              ┌────►│     Home     │◄────┐
              │     └──────┬───────┘     │
              │            │             │
      ┌───────┴──────┐     │      ┌──────┴────────┐
      │  /servicios  │◄────┼─────►│ /entrenadores │
      └───────┬──────┘     │      └───────────────┘
              │            │
       ┌──────▼──────────┐ │      ┌───────────────┐
       │ /servicios/{14} │◄┘      │  /blog + {13} │
       │   ↕ entre sí    │        │   ↕ entre sí  │
       └─────────────────┘        └───────────────┘
```

Verificado en el HTML prerenderizado: `dist/servicios/boxeo/index.html` contiene
enlaces a `/`, `/servicios`, `/nosotros`, `/entrenadores`, `/contacto`,
`/reservar`, `/blog` y a cinco páginas de servicio hermanas.

---

## Lo que aún falta

- **`/reservar` y `/contacto` reciben enlaces pero emiten pocos.** Son el final
  del embudo, así que es defendible, pero un enlace de vuelta a `/servicios`
  ayudaría a quien llega ahí desde una búsqueda y quiere comparar.
- **Sin página para «equipos de gym»**, pese a tener sección en `/servicios`,
  un artículo en el blog y cinco keywords con volumen. Es el único artículo que
  no puede enlazar a una página de servicio porque no existe.
