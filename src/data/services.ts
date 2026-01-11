import { Service } from '../types';
import {
  Code,
  Smartphone,
  Box,
  BarChart3,
  Zap,
} from 'lucide-react';

export const services: Service[] = [
  {
    name: 'Web Development',
    icon: Code,
    path: '/services#web',
  },
  {
    name: 'Mobile Apps',
    icon: Smartphone,
    path: '/services#mobile',
  },
  {
    name: 'Custom Software',
    icon: Box,
    path: '/services#software',
  },
  {
    name: 'CRM Solutions',
    icon: BarChart3,
    path: '/services#crm',
  },
  {
    name: 'Business Automation',
    icon: Zap,
    path: '/services#automation',
  },
];
