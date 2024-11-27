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
];

export default pages;
