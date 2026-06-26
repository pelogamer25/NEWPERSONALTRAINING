import { LucideIcon } from 'lucide-react';

export interface ServicePricing {
  label: string;
  price: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  slug: string;
  price?: string;
  imageInfo?: string;
  actionText?: string;
  badges?: string[];
  pricingOptions?: ServicePricing[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  readTime: number;
  publishedAt: string;
  image: string;
  author: string;
  authorRole: string;
}