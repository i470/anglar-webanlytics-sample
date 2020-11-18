import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Visitors',
    icon: 'people-outline',
    link: '/pages/visitors',
  },
  {
    title: 'Content',
    icon: 'layout-outline',
    link: '/pages/content',
  },
  {
    title: 'Referres',
    icon: 'repeat-outline',
    link: '/pages/tables/smart-table',
  },
  {
    title: 'Devices',
    icon: 'smartphone-outline',
    link: '/pages/devices',
  },
  {
    title: 'Geo',
    icon: 'map-outline',
    link: '/pages/maps/bubble',
  },
  {
    title: 'Settings',
    icon: 'lock-outline',
    link: '/pages/start',
    
  }
];
