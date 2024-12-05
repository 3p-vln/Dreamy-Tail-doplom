import { Tab } from './cabinet/tabs';

document.addEventListener('DOMContentLoaded', async () => {
  new Tab('.tabs__nav-btn', '.tabs__item');
});
