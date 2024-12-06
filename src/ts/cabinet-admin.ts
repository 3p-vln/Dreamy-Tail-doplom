import { MainInfo } from './cabinet/main-info';
import { Tab } from './cabinet/tabs';
import { AllPet } from './cabinet/admin/all-pet';
import { EditInfo } from './cabinet/edit-info';
import { AddNewPet } from './cabinet/admin/add-new-pet';

document.addEventListener('DOMContentLoaded', async () => {
  new Tab('.tabs__nav-btn', '.tabs__item');
  new MainInfo();
  new EditInfo('#form-edit');
  new AllPet('.list');
  // new EditInfo('#form-edit');
  // new PayForPet('.pay-for-pet__content');
  new AddNewPet('#form-new-pet');
});
