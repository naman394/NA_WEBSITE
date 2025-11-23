import { Sparkles, Rocket, Building2 } from 'lucide-react';
import { Plan } from './types';

export const PRICING_PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Perfect for small businesses',
    price: 99,
    currency: '$',
    frequency: '/month',
    description: 'Get started with essential automation tools and AI agents for your business.',
    buttonText: 'Start Free Trial',
    icon: Sparkles,
    features: [
      { text: 'Basic AI Workflow Automation (1-2 simple tasks)' },
      { text: 'Mini AI Sales Agent (lead discovery + outreach)' },
      { text: 'AI-Assisted Website / Dashboard + Basic Support' },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    subtitle: 'For growing businesses',
    price: 299,
    currency: '$',
    frequency: '/month',
    description: 'Includes everything in Starter PLUS advanced automations and integrations.',
    buttonText: 'Start Free Trial',
    icon: Rocket,
    features: [
      { text: 'Advanced AI Automations (5-7 workflows across platforms)' },
      { text: 'Full Standard AI Sales Agent + CRM Integration' },
      { text: 'Custom AI-Powered Platform + Priority Support' },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'For large organizations',
    price: 999,
    currency: '$',
    frequency: '/month',
    description: 'Includes everything in Starter + Growth PLUS enterprise features and dedicated team.',
    buttonText: 'Contact Sales',
    icon: Building2,
    features: [
      { text: 'Enterprise Multi-Agent System + Custom Model Training' },
      { text: 'Advanced Security + On-Prem/Private Cloud Deployment' },
      { text: 'Dedicated Success Team + Quarterly Innovation Expansion' },
    ],
  },
];

