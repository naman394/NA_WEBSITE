import { LucideIcon } from 'lucide-react';

export interface Plan {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  currency: string;
  frequency: string;
  description: string;
  buttonText: string;
  icon: LucideIcon;
  features: Array<{ text: string }>;
}

