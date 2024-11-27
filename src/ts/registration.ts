import { Preloader } from './components/preloader';
import { Loader } from './modules/stop-preload';
import { RegFormValidation } from './registration/reg-form-validate';

document.addEventListener('DOMContentLoaded', async () => {
  new RegFormValidation('#form-reg');
  Loader.stop('reg-form__form');
});

new Preloader();