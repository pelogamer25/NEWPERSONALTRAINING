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
    title: "Entrenamiento Personalizado",
    description: "Sesiones mensuales (compra hasta 20 sesiones por mes).",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    slug: "entrenamiento-personalizado",
    price: "$156.128 – $1.122.000",
    imageInfo: "Sesiones mensuales (compra hasta 20 sesiones por mes).",
    actionText: "Seleccionar opciones"
  },
  {
    id: "2",
    title: "Cita y Valoración con Nutricionista",
    description: "Diseño de Plan de Alimentación a Domicilio y Virtual.",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    slug: "nutricionista",
    price: "$170.170 – $255.136",
    badges: ["Nutricionista"],
    actionText: "Seleccionar opciones"
  },
  {
    id: "3",
    title: "Entrenamiento Semi Personalizado",
    description: "Sesiones mensuales (compra hasta 20 sesiones por mes).",
    icon: Users,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    slug: "entrenamiento-semi-personalizado",
    price: "$199.520 – $1.442.400",
    imageInfo: "Sesiones mensuales (compra hasta 20 sesiones por mes).",
    actionText: "Seleccionar opciones"
  },
  {
    id: "4",
    title: "Yoga",
    description: "1 o 2 sesiones semanales para conectar mente y cuerpo.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    slug: "yoga",
    price: "$263.942 – $2.490.432",
    imageInfo: "1 o 2 sesiones semanales.",
    actionText: "Seleccionar opciones"
  },
  {
    id: "5",
    title: "Clase Grupal Entrenamiento Funcional",
    description: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    slug: "clase-grupal-funcional",
    price: "$277.508 – $2.638.944",
    imageInfo: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales.",
    actionText: "Seleccionar opciones"
  },
  {
    id: "6",
    title: "Clase Grupal Rítmica",
    description: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800",
    slug: "clase-grupal-ritmica",
    price: "$293.216 – $2.990.232",
    imageInfo: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales.",
    actionText: "Seleccionar opciones"
  },
  {
    id: "7",
    title: "Pilates",
    description: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    slug: "pilates",
    price: "$293.432 – $3.470.040",
    imageInfo: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales.",
    actionText: "Seleccionar opciones"
  },
  {
    id: "8",
    title: "Plan de Entrenamiento Online Full",
    description: "Diseño de plan online a tu medida.",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=800",
    slug: "entrenamiento-online-full",
    price: "$340.162",
    imageInfo: "Diseño de plan online",
    badges: ["A tu medida", "Sé tu mejor versión"],
    actionText: "Añadir al carrito"
  },
  {
    id: "9",
    title: "Natación Personalizada",
    description: "Entrenamiento personalizado en el agua.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800",
    slug: "natacion-personalizada",
    price: "$360.808 – $2.537.556",
    badges: ["Natación"],
    actionText: "Seleccionar opciones"
  },
  {
    id: "10",
    title: "Boxeo",
    description: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800",
    slug: "boxeo",
    price: "$439.824 – $2.990.232",
    imageInfo: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales.",
    actionText: "Seleccionar opciones"
  },
  {
    id: "11",
    title: "Natación Semi Personalizada",
    description: "Entrenamiento semi personalizado en el agua.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1519315901367-f34f8272b62c?auto=format&fit=crop&q=80&w=800",
    slug: "natacion-semi-personalizada",
    price: "$445.536 – $3.027.360",
    badges: ["Natación"],
    actionText: "Seleccionar opciones"
  },
  {
    id: "12",
    title: "Squash Personalizado",
    description: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=800",
    slug: "squash-personalizado",
    price: "$476.000 – $2.380.000",
    imageInfo: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales.",
    actionText: "Seleccionar opciones"
  },
  {
    id: "13",
    title: "Squash Semi Personalizado",
    description: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales. ¡Entrena con nosotros!",
    icon: Users,
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=800",
    slug: "squash-semi-personalizado",
    price: "$524.076 – $3.144.456",
    imageInfo: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales. ¡Entrena con nosotros!",
    actionText: "Seleccionar opciones"
  },
  {
    id: "14",
    title: "Masaje",
    description: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales. ¡Disfruta con nosotros!",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    slug: "masaje",
    price: "$544.544 – $5.102.244",
    imageInfo: "Opciones de 4, 8, 12, 16, 20 y 24 sesiones mensuales. ¡Disfruta con nosotros!",
    actionText: "Seleccionar opciones"
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