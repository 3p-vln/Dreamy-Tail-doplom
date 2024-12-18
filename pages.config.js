import { resolve } from 'path';

const pages = [
  {
    name: 'index',
    path: resolve(__dirname, 'index.html'),
  },
  {
    name: 'about-company',
    path: resolve(__dirname, 'about-company.html'),
  },
  {
    name: 'contacts',
    path: resolve(__dirname, 'contacts.html'),
  },
  {
    name: 'donate',
    path: resolve(__dirname, 'donate.html'),
  },
  {
    name: 'registration',
    path: resolve(__dirname, 'registration.html'),
  },
  {
    name: 'log-in',
    path: resolve(__dirname, 'log-in.html'),
  },
  {
    name: 'catalog',
    path: resolve(__dirname, 'catalog.html'),
  },
  {
    name: 'one-pet',
    path: resolve(__dirname, 'one-pet.html'),
  },
  {
    name: 'cabinet-user',
    path: resolve(__dirname, 'cabinet-user.html'),
  },
  {
    name: 'cabinet-admin',
    path: resolve(__dirname, 'cabinet-admin.html'),
  },
];

export default pages;
