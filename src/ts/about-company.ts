import { Preloader } from './components/preloader';
import { Loader } from './modules/stop-preload';

document.addEventListener('DOMContentLoaded', async () => {
  Loader.stop('mission-and-vision__right-img');
  Loader.stop('galery');
});

new Preloader();
