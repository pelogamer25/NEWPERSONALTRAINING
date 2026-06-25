import { 
  Dumbbell, 
  Users, 
  Briefcase, 
  Apple, 
  Monitor, 
  Activity 
} from 'lucide-react';
import { Service, Trainer, Testimonial, NavigationItem } from './types';

export const COMPANY_INFO = {
  name: "New Personal Training",
  phone: "+57 300 597 4290",
  email: "contacto@newpersonaltraining.com",
  address: "Medellín, Antioquia, Colombia",
  social: {
    instagram: "@newpersonaltraining",
    facebook: "/newpersonaltraining"
  }
};

export const NAVIGATION: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Entrenadores", href: "/entrenadores" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Cita, Plan y Valoración con Nutricionista",
    description: "Evaluación completa y plan nutricional. Modalidad: Presencial (Valle de Aburrá).",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    slug: "nutricionista",
    price: "$250.000",
    imageInfo: "Valor Sesión: $250.000 (Sin planes mensuales).",
    badges: ["Nutricionista"],
    actionText: "Agendar Valoración",
    pricingOptions: [
      { label: "Valor Sesión", price: "$250.000" }
    ]
  },
  {
    id: "2",
    title: "Clase Grupal Entrenamiento Funcional",
    description: "Entrenamiento dinámico en grupo. Modalidad: Presencial (Valle de Aburrá).",
    icon: Users,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    slug: "clase-grupal-funcional",
    price: "$95.700 – $1.914.000",
    imageInfo: "Valor Sesión: $95.700 | Planes Mensuales: $382.800 – $1.914.000 (1 a 5 veces/sem).",
    actionText: "Seleccionar opciones",
    pricingOptions: [
      { label: "Valor Sesión", price: "$95.700" },
      { label: "1x semana (4 ses)", price: "$382.800" },
      { label: "2x semana (8 ses)", price: "$765.600" },
      { label: "3x semana (12 ses)", price: "$1.148.400" },
      { label: "4x semana (16 ses)", price: "$1.531.200" },
      { label: "5x semana (20 ses)", price: "$1.914.000" }
    ]
  },
  {
    id: "3",
    title: "Clase Grupal Rítmica",
    description: "Clases grupales llenas de energía y ritmo. Modalidad: Presencial (Valle de Aburrá).",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800",
    slug: "clase-grupal-ritmica",
    price: "$106.300 – $2.126.000",
    imageInfo: "Valor Sesión: $106.300 | Planes Mensuales: $425.200 – $2.126.000 (1 a 5 veces/sem).",
    actionText: "Seleccionar opciones",
    pricingOptions: [
      { label: "Valor Sesión", price: "$106.300" },
      { label: "1x semana (4 ses)", price: "$425.200" },
      { label: "2x semana (8 ses)", price: "$850.400" },
      { label: "3x semana (12 ses)", price: "$1.275.600" },
      { label: "4x semana (16 ses)", price: "$1.700.800" },
      { label: "5x semana (20 ses)", price: "$2.126.000" }
    ]
  },
  {
    id: "4",
    title: "Entrenamiento Personalizado",
    description: "Sesiones 1:1 diseñadas para tus objetivos. Modalidad: Presencial (Valle de Aburrá).",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    slug: "entrenamiento-personalizado",
    price: "$53.800 – $1.076.000",
    imageInfo: "Valor Sesión: $53.800 | Planes Mensuales: $215.200 – $1.076.000 (1 a 5 veces/sem).",
    actionText: "Seleccionar opciones",
    pricingOptions: [
      { label: "Valor Sesión", price: "$53.800" },
      { label: "1x semana (4 ses)", price: "$215.200" },
      { label: "2x semana (8 ses)", price: "$430.400" },
      { label: "3x semana (12 ses)", price: "$645.600" },
      { label: "4x semana (16 ses)", price: "$860.800" },
      { label: "5x semana (20 ses)", price: "$1.076.000" }
    ]
  },
  {
    id: "5",
    title: "Entrenamiento Semipersonalizado",
    description: "Entrena en pareja o grupo pequeño. Modalidad: Presencial (Valle de Aburrá).",
    icon: Users,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    slug: "entrenamiento-semi-personalizado",
    price: "$69.200 – $1.384.000",
    imageInfo: "Valor Sesión: $69.200 | Planes Mensuales: $276.800 – $1.384.000 (1 a 5 veces/sem).",
    actionText: "Seleccionar opciones",
    pricingOptions: [
      { label: "Valor Sesión", price: "$69.200" },
      { label: "1x semana (4 ses)", price: "$276.800" },
      { label: "2x semana (8 ses)", price: "$553.600" },
      { label: "3x semana (12 ses)", price: "$830.400" },
      { label: "4x semana (16 ses)", price: "$1.107.200" },
      { label: "5x semana (20 ses)", price: "$1.384.000" }
    ]
  },
  {
    id: "6",
    title: "Sesión de Entrenamiento de Boxeo",
    description: "Mejora tu resistencia y técnica con boxeo. Modalidad: Presencial (Valle de Aburrá).",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800",
    slug: "boxeo",
    price: "$106.300 – $2.126.000",
    imageInfo: "Valor Sesión: $106.300 | Planes Mensuales: $425.200 – $2.126.000 (1 a 5 veces/sem).",
    actionText: "Seleccionar opciones",
    pricingOptions: [
      { label: "Valor Sesión", price: "$106.300" },
      { label: "1x semana (4 ses)", price: "$425.200" },
      { label: "2x semana (8 ses)", price: "$850.400" },
      { label: "3x semana (12 ses)", price: "$1.275.600" },
      { label: "4x semana (16 ses)", price: "$1.700.800" },
      { label: "5x semana (20 ses)", price: "$2.126.000" }
    ]
  },
  {
    id: "7",
    title: "Sesión de Natación Personalizado",
    description: "Clases de natación 1:1. Modalidad: Presencial (Valle de Aburrá).",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800",
    slug: "natacion-personalizada",
    price: "$87.200 – $1.744.000",
    imageInfo: "Valor Sesión: $87.200 | Planes Mensuales: $348.800 – $1.744.000 (1 a 5 veces/sem).",
    badges: ["Natación"],
    actionText: "Seleccionar opciones",
    pricingOptions: [
      { label: "Valor Sesión", price: "$87.200" },
      { label: "1x semana (4 ses)", price: "$348.800" },
      { label: "2x semana (8 ses)", price: "$697.600" },
      { label: "3x semana (12 ses)", price: "$1.046.400" },
      { label: "4x semana (16 ses)", price: "$1.395.200" },
      { label: "5x semana (20 ses)", price: "$1.744.000" }
    ]
  },
  {
    id: "8",
    title: "Sesión de Natación Semipersonalizado",
    description: "Clases de natación en grupo reducido. Modalidad: Presencial (Valle de Aburrá).",
    icon: Users,
    image: "https://images.unsplash.com/photo-1519315901367-f34f8272b62c?auto=format&fit=crop&q=80&w=800",
    slug: "natacion-semi-personalizada",
    price: "$107.700 – $2.154.000",
    imageInfo: "Valor Sesión: $107.700 | Planes Mensuales: $430.800 – $2.154.000 (1 a 5 veces/sem).",
    badges: ["Natación"],
    actionText: "Seleccionar opciones",
    pricingOptions: [
      { label: "Valor Sesión", price: "$107.700" },
      { label: "1x semana (4 ses)", price: "$430.800" },
      { label: "2x semana (8 ses)", price: "$861.600" },
      { label: "3x semana (12 ses)", price: "$1.292.400" },
      { label: "4x semana (16 ses)", price: "$1.723.200" },
      { label: "5x semana (20 ses)", price: "$2.154.000" }
    ]
  },
  {
    id: "9",
    title: "Sesión de Pilates Mat",
    description: "Fortalece tu centro y mejora tu postura. Modalidad: Presencial (Valle de Aburrá).",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    slug: "pilates",
    price: "$127.600 – $2.552.000",
    imageInfo: "Valor Sesión: $127.600 | Planes Mensuales: $510.400 – $2.552.000 (1 a 5 veces/sem).",
    actionText: "Seleccionar opciones",
    pricingOptions: [
      { label: "Valor Sesión", price: "$127.600" },
      { label: "1x semana (4 ses)", price: "$510.400" },
      { label: "2x semana (8 ses)", price: "$1.020.800" },
      { label: "3x semana (12 ses)", price: "$1.531.200" },
      { label: "4x semana (16 ses)", price: "$2.041.600" },
      { label: "5x semana (20 ses)", price: "$2.552.000" }
    ]
  },
  {
    id: "10",
    title: "Sesión de Squash Personalizado",
    description: "Entrenamiento 1:1 de Squash. Modalidad: Presencial (Valle de Aburrá).",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=800",
    slug: "squash-personalizado",
    price: "$115.000 – $2.300.000",
    imageInfo: "Valor Sesión: $115.000 | Planes Mensuales: $460.000 – $2.300.000 (1 a 5 veces/sem).",
    actionText: "Seleccionar opciones",
    pricingOptions: [
      { label: "Valor Sesión", price: "$115.000" },
      { label: "1x semana (4 ses)", price: "$460.000" },
      { label: "2x semana (8 ses)", price: "$920.000" },
      { label: "3x semana (12 ses)", price: "$1.380.000" },
      { label: "4x semana (16 ses)", price: "$1.840.000" },
      { label: "5x semana (20 ses)", price: "$2.300.000" }
    ]
  },
  {
    id: "11",
    title: "Sesión de Squash Semipersonalizado",
    description: "Entrenamiento de Squash en pareja. Modalidad: Presencial (Valle de Aburrá).",
    icon: Users,
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=800",
    slug: "squash-semi-personalizado",
    price: "$126.700 – $2.534.000",
    imageInfo: "Valor Sesión: $126.700 | Planes Mensuales: $506.800 – $2.534.000 (1 a 5 veces/sem).",
    actionText: "Seleccionar opciones",
    pricingOptions: [
      { label: "Valor Sesión", price: "$126.700" },
      { label: "1x semana (4 ses)", price: "$506.800" },
      { label: "2x semana (8 ses)", price: "$1.013.600" },
      { label: "3x semana (12 ses)", price: "$1.520.400" },
      { label: "4x semana (16 ses)", price: "$2.027.200" },
      { label: "5x semana (20 ses)", price: "$2.534.000" }
    ]
  },
  {
    id: "12",
    title: "Sesión de Yoga",
    description: "Conecta mente y cuerpo con nuestras clases de Yoga. Modalidad: Presencial (Valle de Aburrá).",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    slug: "yoga",
    price: "$91.400 – $1.828.000",
    imageInfo: "Valor Sesión: $91.400 | Planes Mensuales: $365.600 – $1.828.000 (1 a 5 veces/sem).",
    actionText: "Seleccionar opciones",
    pricingOptions: [
      { label: "Valor Sesión", price: "$91.400" },
      { label: "1x semana (4 ses)", price: "$365.600" },
      { label: "2x semana (8 ses)", price: "$731.200" },
      { label: "3x semana (12 ses)", price: "$1.096.800" },
      { label: "4x semana (16 ses)", price: "$1.462.400" },
      { label: "5x semana (20 ses)", price: "$1.828.000" }
    ]
  },
  {
    id: "13",
    title: "Sesión Fisioterapia",
    description: "Recuperación, prevención y rehabilitación física. Modalidad: Presencial (Valle de Aburrá).",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=800",
    slug: "fisioterapia",
    price: "$150.000 – $3.000.000",
    imageInfo: "Valor Sesión: $150.000 | Planes Mensuales: $600.000 – $3.000.000 (1 a 5 veces/sem).",
    actionText: "Seleccionar opciones",
    pricingOptions: [
      { label: "Valor Sesión", price: "$150.000" },
      { label: "1x semana (4 ses)", price: "$600.000" },
      { label: "2x semana (8 ses)", price: "$1.200.000" },
      { label: "3x semana (12 ses)", price: "$1.800.000" },
      { label: "4x semana (16 ses)", price: "$2.400.000" },
      { label: "5x semana (20 ses)", price: "$3.000.000" }
    ]
  },
  {
    id: "14",
    title: "Sesión Masaje",
    description: "Relajación y recuperación muscular. Modalidad: Presencial (Valle de Aburrá).",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    slug: "masaje",
    price: "$150.000 – $3.000.000",
    imageInfo: "Valor Sesión: $150.000 | Planes Mensuales: $600.000 – $3.000.000 (1 a 5 veces/sem).",
    actionText: "Seleccionar opciones",
    pricingOptions: [
      { label: "Valor Sesión", price: "$150.000" },
      { label: "1x semana (4 ses)", price: "$600.000" },
      { label: "2x semana (8 ses)", price: "$1.200.000" },
      { label: "3x semana (12 ses)", price: "$1.800.000" },
      { label: "4x semana (16 ses)", price: "$2.400.000" },
      { label: "5x semana (20 ses)", price: "$3.000.000" }
    ]
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "1",
    name: "Juan Pérez",
    role: "Head Coach",
    specialty: "Hipertrofia y Fuerza",
    experience: "8 años",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600",
    bio: "Especialista en transformación física y rendimiento deportivo de alto nivel. Su enfoque científico garantiza resultados medibles."
  },
  {
    id: "2",
    name: "María López",
    role: "Entrenadora Senior",
    specialty: "Entrenamiento Funcional",
    experience: "6 años",
    image: "https://images.unsplash.com/photo-1611672585731-fa1060a7a3c2?auto=format&fit=crop&q=80&w=600",
    bio: "Apasionada por el movimiento y la salud integral. Certificada en CrossFit y movilidad articular."
  },
  {
    id: "3",
    name: "Carlos Ruiz",
    role: "Coach Nutricional",
    specialty: "Nutrición y Pérdida de Peso",
    experience: "5 años",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600",
    bio: "Combina la ciencia de la nutrición con el entrenamiento práctico para crear hábitos sostenibles."
  },
  {
    id: "4",
    name: "Laura Zapata",
    role: "Instructora de Yoga",
    specialty: "Flexibilidad y Mindfulness",
    experience: "4 años",
    image: "https://images.unsplash.com/photo-1609899536968-0c7d42571ae8?auto=format&fit=crop&q=80&w=600",
    bio: "Ayuda a conectar mente y cuerpo a través de prácticas de respiración y movimiento consciente."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Andrea Torres",
    role: "Abogada",
    content: "Llevo 6 meses entrenando y los resultados son increíbles. La atención personalizada hace toda la diferencia. ¡Totalmente recomendado!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "2",
    name: "Felipe Gómez",
    role: "Emprendedor",
    content: "La flexibilidad de horarios y el profesionalismo del equipo me han permitido mantener mi salud sin descuidar mi empresa.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "3",
    name: "Camila Restrepo",
    role: "Diseñadora",
    content: "Las clases grupales tienen una energía única. He hecho grandes amigos y he mejorado mi resistencia física notablemente.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];
