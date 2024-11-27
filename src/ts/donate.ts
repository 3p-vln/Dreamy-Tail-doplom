import { TabValidation } from './donate/pay-validate';
import { Tab } from './donate/tabs';

document.addEventListener('DOMContentLoaded', async () => {
  new Tab('.tabs__nav-btn', '.tabs__item');
  new TabValidation();
});