import { EditInfo } from './cabinet/edit-info';
import { MainInfo } from './cabinet/main-info';
import { MyPet } from './cabinet/user/my-pet';
import { PayForPet } from './cabinet/user/pay-for-pet';
import { Tab } from './cabinet/tabs';
import { MyMassages } from './cabinet/user/massages';

document.addEventListener('DOMContentLoaded', async () => {
  new Tab('.tabs__nav-btn', '.tabs__item');
  new MainInfo();
  new MyPet('.list');
  new EditInfo('#form-edit');
  new PayForPet('.pay-for-pet__content');
  new MyMassages('.massages');
});
