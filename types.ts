import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  price?: string;
  tag?: string;
  image: string;
}

export interface CounselingCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  content: string;
  type: 'Self-Care' | 'Counseling';
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}