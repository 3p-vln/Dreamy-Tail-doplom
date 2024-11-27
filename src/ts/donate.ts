import { Preloader } from './components/preloader';
import { TabValidation } from './donate/pay-validate';
import { Tab } from './donate/tabs';
import { Loader } from './modules/stop-preload';

document.addEventListener('DOMContentLoaded', async () => {
  new Tab('.tabs__nav-btn', '.tabs__item');
  new TabValidation();
  Loader.stop('form__tabs');
});

new Preloader();
