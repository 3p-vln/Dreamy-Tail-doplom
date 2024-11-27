import { BurgerMenu } from './components/burger';
import { Preloader } from './components/preloader';
import { Loader } from './modules/stop-preload';

document.addEventListener('DOMContentLoaded', async () => {
  new BurgerMenu();
  Loader.stop('dreamy-tail-info__right');
  Loader.stop('our-pats__left');
});

new Preloader();
