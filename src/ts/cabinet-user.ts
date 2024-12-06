import { EditInfo } from './cabinet/edit-info';
import { MainInfo } from './cabinet/main-info';
import { MyPet } from './cabinet/my-pet';
import { PayForPet } from './cabinet/pay-for-pet';
import { Tab } from './cabinet/tabs';

document.addEventListener('DOMContentLoaded', async () => {
  new Tab('.tabs__nav-btn', '.tabs__item');
  new MainInfo();
  new MyPet('.list');
  new EditInfo('#form-edit');
  new PayForPet('.pay-for-pet__content');
});
