import { Service } from '../types';
import {
  HiCode,
  HiDeviceMobile,
  HiCube,
  HiChartBar,
  HiLightningBolt,
} from 'react-icons/hi';

export const services: Service[] = [
  {
    name: 'Web Development',
    icon: HiCode,
    path: '/services#web',
  },
  {
    name: 'Mobile Apps',
    icon: HiDeviceMobile,
    path: '/services#mobile',
  },
  {
    name: 'Custom Software',
    icon: HiCube,
    path: '/services#software',
  },
  {
    name: 'CRM Solutions',
    icon: HiChartBar,
    path: '/services#crm',
  },
  {
    name: 'Business Automation',
    icon: HiLightningBolt,
    path: '/services#automation',
  },
];
