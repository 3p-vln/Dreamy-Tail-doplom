import { LogOut } from './cabinet/log-out';
import { BtnCabinet } from './components/btn-cabinet';
import { BurgerMenu } from './components/burger';

document.addEventListener('DOMContentLoaded', async () => {
  new BurgerMenu();
  new BtnCabinet();
  new LogOut();
});
