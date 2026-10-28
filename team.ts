import { TeamSection } from './types';

/**
 * Equipo de New Personal Training.
 *
 * Los nombres, cargos y especialidades estaban unicamente dentro de las
 * imagenes de las fichas tecnicas: texto renderizado como pixeles, invisible
 * para los buscadores. La pagina /entrenadores tenia 998 caracteres de texto
 * para 47 profesionales. Aqui ese contenido pasa a ser texto real e indexable,
 * que es lo que sostiene la senal E-E-A-T del sitio.
 *
 * Transcrito de las fichas originales. Criterios aplicados:
 * - Tildes restituidas segun grafia estandar (las fichas estan en mayusculas
 *   sin acentuar). "Haminton" se deja tal cual aparece: no se corrige el
 *   nombre de una persona por suposicion.
 * - Erratas de la ficha normalizadas solo en el texto ("Streching" ->
 *   "Stretching", "aumentode" -> "aumento de", "futbol" -> "futbol" con
 *   tilde, "Hidroerobicos" -> "Hidroaerobicos"). Las imagenes no se tocan.
 * - Los telefonos y correos personales que aparecen en cinco fichas NO se
 *   transcriben: son datos personales y cinco numeros distintos compitiendo
 *   con el telefono principal danan la consistencia NAP que Google usa para
 *   el mapa local.
 * - Cuatro personas aparecen en dos secciones porque desempenan ambos roles.
 *   En pantalla salen en las dos; en el schema se emite una sola entidad por
 *   persona (43 unicas de 47 fichas).
 */
export const TEAM: TeamSection[] = [
  {
    title: "Profesionales del ejercicio",
    members: [
      {
        name: "David Gallón Ospina",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-01.webp",
        specialties: ["Reacondicionamiento corporal", "Entrenamiento funcional y bienestar", "Reducción de tejido graso", "Clases grupales (funcional, GAP, RTG, Cross Training)", "Entrenamiento de fuerza", "Entrenamiento en adulto mayor", "Entrenamiento de fútbol", "Entrenamiento de boxeo"]
      },
      {
        name: "Henry Ortega García",
        role: "Profesional en Deporte",
        image: "/images/equipo/entrenador-personal-medellin-02.webp",
        specialties: ["Entrenamiento funcional", "Aumento de la masa muscular", "Aceleración metabólica", "HIIT", "Entrenamiento por suspensión (TRX)", "Entrenamiento prenatal y posparto", "Entrenamiento con adulto mayor", "Masoterapia", "Prevención y recuperación de lesiones deportivas"]
      },
      {
        name: "Jhon Edwin Suárez Carmona",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-03.webp",
        specialties: ["Entrenamiento funcional", "Entrenamiento de fuerza e hipertrofia", "Disminución de tejido adiposo", "Entrenamiento por suspensión (TRX)", "Aumento de masa muscular", "Iniciación deportiva con énfasis en fútbol", "Entrenador de fútbol de todas las divisiones", "Técnico certificado de fútbol"]
      },
      {
        name: "Jader E. Gutiérrez Duque",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-04.webp",
        specialties: ["Aumento de masa muscular (hipertrofia)", "Entrenamiento funcional", "CrossFit", "Entrenamiento por suspensión (TRX)", "Spinning", "Yoga", "Stretching", "Clases grupales (funcional, GAP, RTG, Cross Training)"]
      },
      {
        name: "David Barrera Betancourth",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-05.webp",
        specialties: ["Entrenamiento funcional", "Entrenamiento por suspensión (TRX)", "Reducción de tejido graso", "Clases grupales (GAP, RTG, Cross Training)", "HIIT", "Entrenamiento en deportes específicos: fútbol y tenis de mesa", "Entrenamiento de fuerza y aumento de masa muscular", "Masajes deportivos y relajación muscular"]
      },
      {
        name: "Blanca Nelly Rincón Álvarez",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-06.webp",
        specialties: ["Masoterapia", "Instructora de Hatha Yoga", "Stretching"]
      },
      {
        name: "Anlly Caterine Areiza Morales",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-07.webp",
        specialties: ["Entrenamiento funcional", "Reducción de tejido graso", "HIIT", "Hidroaeróbicos e hidroterapia", "Clases grupales (funcional, GAP, RTG, Cross Training)", "Entrenamiento por suspensión (TRX)", "Entrenamiento de fuerza y aumento de masa muscular", "Entrenadora de deporte específico de Ultimate"]
      },
      {
        name: "Daniel Carmona M.",
        role: "Profesional en Deporte",
        image: "/images/equipo/entrenador-personal-medellin-08.webp",
        specialties: ["Entrenamiento funcional", "Entrenamiento de fuerza e hipertrofia", "Clases grupales: abdomen glúteo y pierna (GAP), reducción de tejido graso (RTG), funcional", "Entrenamiento por suspensión (TRX)", "Entrenador deportivo: fútbol, tenis de mesa y natación", "Preparador físico: voleibol y tenis de campo"]
      },
      {
        name: "Juan Esteban Ramírez O.",
        role: "Profesional en Deporte",
        image: "/images/equipo/entrenador-personal-medellin-09.webp",
        specialties: ["Entrenamiento funcional", "Entrenamiento por suspensión (TRX)", "Reducción de tejido graso", "Clases grupales (funcional, GAP, RTG, Cross Training)", "Masoterapia", "Entrenamiento de rehabilitación funcional"]
      },
      {
        name: "Haminton Mazo Muñoz",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-10.webp",
        specialties: ["Entrenamiento funcional", "Entrenamiento por suspensión (TRX)", "Entrenamiento de fuerza y aumento de masa muscular", "Reducción de tejido graso", "HIIT", "Crosstraining", "Clases grupales (funcional, GAP, RTG, Cross Training)"]
      },
      {
        name: "Brahian Gómez Noreña",
        role: "Profesional en Deporte",
        image: "/images/equipo/entrenador-personal-medellin-11.webp",
        specialties: ["Entrenamiento funcional", "Entrenamiento de fuerza e hipertrofia", "Disminución de tejido adiposo", "Entrenamiento por suspensión (TRX)", "Aumento de masa muscular"]
      },
      {
        name: "Julián Cardona Botero",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-12.webp",
        specialties: ["Entrenamiento personal", "Entrenamiento funcional", "Entrenamiento de fuerza y aumento de masa muscular", "Reducción de tejido graso", "Kick Boxing", "Entrenamiento en suspensión TRX"]
      },
      {
        name: "Carmen C. Sánchez Casas",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-13.webp",
        specialties: ["Entrenamiento funcional", "Reducción de tejido graso", "Formadora en actividades acuáticas (natación e hidroterapia)", "Entrenamiento prenatal y posparto", "Clases grupales (funcional, GAP, RTG, Cross Training)", "Entrenamiento por suspensión (TRX)", "Entrenamiento de fuerza y aumento de masa muscular"]
      },
      {
        name: "Juan Felipe Agudelo",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-14.webp",
        specialties: ["Entrenamiento funcional", "Entrenamiento por suspensión (TRX)", "Reducción de tejido graso", "Clases grupales (GAP, RTG, Cross Training)", "HIIT", "Entrenamiento de fuerza y aumento de masa muscular"]
      },
      {
        name: "Katherine Ferraro Montes",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-15.webp",
        specialties: ["Entrenamiento funcional", "Reducción de tejido graso", "Clases grupales (Rumba, Stretching, funcional, hidroaeróbicos, GAP, RTG, Cross Training)", "Entrenamiento por suspensión (TRX)", "HIIT", "Entrenamiento de fuerza y aumento de masa muscular", "Entrenadora en iniciación, formación y especialización", "Entrenadora de vóley playa y balonmano"]
      },
      {
        name: "Kevin Andrés Colorado",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-16.webp",
        specialties: ["Entrenamiento funcional", "Entrenamiento de fuerza e hipertrofia", "Actividad física para adultos mayores", "Disminución de tejido adiposo", "Entrenamiento por suspensión (TRX)", "Aumento de masa muscular"]
      },
      {
        name: "Juan Camilo Muñoz Rodríguez",
        role: "Profesional en Deporte",
        image: "/images/equipo/entrenador-personal-medellin-17.webp",
        specialties: ["Entrenamiento funcional", "Entrenamiento por suspensión (TRX)", "Entrenamiento de fuerza y aumento de masa muscular", "Reducción de tejido graso", "HIIT", "Crosstraining", "Clases grupales (funcional, GAP, RTG, Cross Training)"]
      },
      {
        name: "Daniel Gómez",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-18.webp",
        specialties: ["Entrenador de squash", "Entrenador de deportes de raqueta"]
      },
      {
        name: "Mateo Guzmán Gallego",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-19.webp",
        specialties: ["Entrenamiento personal", "Entrenamiento funcional", "Entrenamiento de fuerza y aumento de masa muscular", "Reducción de tejido graso", "Kick Boxing", "Entrenamiento en suspensión TRX"]
      },
      {
        name: "Luis Javier Estrada Vasco",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-20.webp",
        specialties: ["Reacondicionamiento corporal", "Programas de entrenamiento de fuerza e hipertrofia", "Entrenador de squash", "Entrenamiento funcional", "Reducción de tejido graso", "Clases grupales (funcional, GAP, RTG, Cross Training)"]
      },
      {
        name: "Juan Camilo Salazar Ruiz",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-21.webp",
        specialties: ["Entrenamiento tradicional", "Entrenamiento funcional", "Entrenamiento para el aumento de masa muscular", "Clases grupales (funcional, GAP, RTG)", "Entrenamiento por suspensión (TRX)"]
      },
      {
        name: "Danilo Jaramillo",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-22.webp",
        specialties: ["Entrenador de clases grupales"]
      },
      {
        name: "Mauricio Gómez Maya",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-23.webp",
        specialties: ["Entrenamiento funcional", "Entrenamiento por suspensión (TRX)", "Reducción de tejido graso", "Clases grupales (GAP, RTG, Cross Training)", "HIIT", "Entrenamiento de fuerza y aumento de masa muscular", "Preparación física en fútbol"]
      },
      {
        name: "Santiago Terán Zapata",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-24.webp",
        specialties: ["Entrenamiento funcional", "Entrenamiento por suspensión (TRX)", "Reducción de tejido graso", "Clases grupales (Fit Combat, GAP, RTG, Cross Training, Stretching)", "HIIT", "Entrenamiento de fuerza y aumento de masa muscular", "Manejo de metodología EXOS para deportistas y rendimiento"]
      },
      {
        name: "Mariana Arenas",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-25.webp",
        specialties: ["Reacondicionamiento corporal", "Programas de entrenamiento de fuerza e hipertrofia", "Entrenamiento funcional y bienestar", "Entrenadora de gimnasia", "Reducción de tejido graso", "Clases grupales (funcional, GAP, RTG, Cross Training)", "Entrenadora de yoga"]
      },
      {
        name: "Karen Montoya Polo",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-26.webp",
        specialties: ["Entrenadora de natación", "Entrenadora de voleibol", "Entrenamiento funcional", "Aumento de masa muscular", "Entrenadora de patinaje", "Clases grupales (funcional, GAP, RTG, Cross Training)"]
      },
      {
        name: "Tatiana Castañeda Colorado",
        role: "Profesional del Ejercicio",
        credential: "Licenciada en Educación Física, Recreación y Deporte",
        image: "/images/equipo/entrenador-personal-medellin-27.webp",
        specialties: ["Instructora de actividades acuáticas, experta en edades infantiles (natación, hidroaeróbicos, hidroterapia)", "Experta en iniciación y formación deportiva en edades tempranas", "Reducción de tejido graso (RTG)", "Entrenamiento funcional", "Entrenamiento de fuerza y aumento de masa muscular", "Clases grupales (GAP, Stretching, Indoor Cycling, Rumba Aeróbica, Hidroaeróbicos)", "Experta en actividad física y ejercicio en el adulto mayor"]
      },
      {
        name: "Natalia Quintero Londoño",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-28.webp",
        specialties: ["Yoga", "Stretching", "Aumento de rangos articulares"]
      },
      {
        name: "Valentina Rincón Garcés",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-29.webp",
        specialties: ["Entrenamiento funcional", "Reducción de tejido graso", "HIIT", "Hidroaeróbicos e hidroterapia", "Entrenamiento prenatal y posparto", "Clases grupales (funcional, GAP, RTG, Cross Training)", "Entrenamiento por suspensión (TRX)", "Entrenamiento de fuerza y aumento de masa muscular"]
      },
      {
        name: "Pablo Rentería",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-30.webp",
        specialties: ["Entrenamiento funcional", "Entrenamiento en deportes de combate con énfasis en boxeo y defensa personal", "Reducción de tejido graso", "Clases grupales (GAP, RTG, Cross Training)", "Entrenamiento de fuerza y aumento de masa muscular"]
      },
      {
        name: "Sebastián Alarcón Trujillo",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-31.webp",
        specialties: ["Entrenamiento funcional", "Entrenamiento por suspensión (TRX)", "Reducción de tejido graso", "Clases grupales (GAP, RTG, Cross Training)", "HIIT", "Entrenamiento de fuerza y aumento de masa muscular"]
      },
      {
        name: "Andrés Mauricio Waitoto",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-32.webp",
        specialties: ["Aumento de masa muscular (hipertrofia)", "Entrenamiento funcional", "CrossFit", "Entrenamiento por suspensión (TRX)", "Spinning", "Yoga", "Stretching", "Clases grupales (funcional, GAP, RTG, Cross Training)"]
      },
      {
        name: "Deisy Katherine Orozco",
        role: "Profesional del Ejercicio",
        credential: "Licenciada en Educación Física",
        image: "/images/equipo/entrenador-personal-medellin-33.webp",
        specialties: ["Entrenamiento funcional", "Reducción de tejido graso", "Clases grupales (Rumba, Yoga, Pilates, Stretching, funcional, hidroaeróbicos, Tae-bo, GAP, RTG, CrossTraining)", "Entrenamiento por suspensión (TRX)", "HIIT", "Entrenamiento de fuerza y aumento de masa muscular", "Entrenamiento prenatal y posparto", "Prevención y recuperación de lesiones deportivas"]
      },
      {
        name: "Alejandro Medina",
        role: "Profesional del Ejercicio",
        image: "/images/equipo/entrenador-personal-medellin-34.webp",
        specialties: ["Entrenador de clases grupales"]
      }
    ]
  },
  {
    title: "Valoradores",
    members: [
      {
        name: "Juan Camilo Salazar Ruiz",
        role: "Valorador",
        image: "/images/equipo/valorador-fisico-medellin-01.webp",
        specialties: ["Líder logístico", "Valoraciones antropométricas por la técnica de bioimpedancia", "Valoración físico-atlética"]
      },
      {
        name: "Andrés Mauricio Waitoto",
        role: "Valorador",
        image: "/images/equipo/valorador-fisico-medellin-02.webp",
        specialties: ["Valoraciones antropométricas por la técnica de bioimpedancia", "Valoración físico-atlética"]
      }
    ]
  },
  {
    title: "Fisioterapeutas",
    members: [
      {
        name: "José Loaiza Escobar",
        role: "Fisioterapeuta",
        image: "/images/equipo/fisioterapeuta-medellin-01.webp",
        specialties: ["Valoraciones corporales y funcionales", "Recuperación de lesiones deportivas", "Recuperación de lesiones laborales", "Cuidado y manejo de pacientes con lesiones crónicas", "Prácticas clínicas en consulta externa, salud ocupacional y hospitalización: evaluación, diagnóstico, tratamiento y apoyo en cuidado crítico"]
      },
      {
        name: "Mauricio Jaramillo",
        role: "Fisioterapeuta",
        image: "/images/equipo/fisioterapeuta-medellin-02.webp",
        specialties: ["Valoraciones corporales y funcionales", "Recuperación de lesiones deportivas", "Recuperación de lesiones laborales", "Cuidado y manejo de pacientes con lesiones crónicas", "Profesional en Pilates Reformer y Mat"]
      },
      {
        name: "Luisa López García",
        role: "Fisioterapeuta",
        image: "/images/equipo/fisioterapeuta-medellin-03.webp",
        specialties: ["Valoraciones corporales y funcionales", "Recuperación de lesiones deportivas", "Recuperación de lesiones laborales", "Cuidado y manejo de pacientes con lesiones crónicas"]
      }
    ]
  },
  {
    title: "Nutricionistas",
    members: [
      {
        name: "Susana Ramírez Cano",
        role: "Nutricionista dietista",
        image: "/images/equipo/nutricionista-medellin-01.webp",
        specialties: ["Nutricionista dietista", "Diseño de planes de alimentación personalizados"]
      },
      {
        name: "Sarah Lucía Ortiz Calderón",
        role: "Nutricionista dietista",
        image: "/images/equipo/nutricionista-medellin-02.webp",
        specialties: ["Nutricionista dietista", "Profesional en deporte", "Especialista en gerencia social"]
      }
    ]
  },
  {
    title: "Pausas activas y masoterapeutas",
    members: [
      {
        name: "Freiman Yepes",
        role: "Profesional en Masoterapia",
        image: "/images/equipo/masoterapeuta-medellin-01.webp",
        specialties: ["Masaje relajante", "Masaje terapéutico", "Masaje deportivo", "Masaje de rehabilitación"]
      },
      {
        name: "Alejandro Baena Trujillo",
        role: "Técnico Profesional en Masoterapia",
        image: "/images/equipo/masoterapeuta-medellin-02.webp",
        specialties: ["Masaje relajante", "Masaje terapéutico", "Masaje deportivo", "Masaje de rehabilitación"]
      }
    ]
  },
  {
    title: "Audiovisual",
    members: [
      {
        name: "Andrés Mauricio Gómez Guerrero",
        role: "Líder de Comunicaciones",
        image: "/images/equipo/equipo-audiovisual-medellin-01.webp",
        specialties: ["Fotografía", "Asesor en comunicaciones corporativas"]
      }
    ]
  },
  {
    title: "Directores",
    members: [
      {
        name: "Henry Ortega García",
        role: "Director Comercial y Financiero",
        image: "/images/equipo/director-new-personal-training-medellin-01.webp",
        specialties: []
      },
      {
        name: "Valentina Rincón Garcés",
        role: "Directora Deportiva",
        image: "/images/equipo/director-new-personal-training-medellin-02.webp",
        specialties: []
      },
      {
        name: "Martín J Carmona Moreno",
        role: "Director General",
        image: "/images/equipo/director-new-personal-training-medellin-03.webp",
        specialties: []
      }
    ]
  }
];

/** Total de fichas publicadas (una persona puede tener dos roles). */
export const TEAM_CARD_COUNT = TEAM.reduce((n, s) => n + s.members.length, 0);

/**
 * Personas unicas, fusionando a quienes aparecen en dos secciones.
 * Es lo que alimenta el schema: emitir a la misma persona dos veces como
 * entidades distintas seria describir mal la plantilla.
 */
export const TEAM_UNIQUE = (() => {
  const porNombre = new Map<string, { name: string; roles: string[]; credential?: string; specialties: string[]; image: string }>();
  for (const section of TEAM) {
    for (const m of section.members) {
      const previo = porNombre.get(m.name);
      if (previo) {
        if (!previo.roles.includes(m.role)) previo.roles.push(m.role);
        for (const s of m.specialties) {
          if (!previo.specialties.includes(s)) previo.specialties.push(s);
        }
        if (m.credential && !previo.credential) previo.credential = m.credential;
      } else {
        porNombre.set(m.name, {
          name: m.name,
          roles: [m.role],
          credential: m.credential,
          specialties: [...m.specialties],
          image: m.image,
        });
      }
    }
  }
  return [...porNombre.values()];
})();
