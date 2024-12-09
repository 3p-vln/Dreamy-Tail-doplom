import { db } from '../../modules/firebase';
import { collection, addDoc } from 'firebase/firestore';
import JustValidate from 'just-validate';
import { Popup } from '../../donate/pop-up';

export class AddNeed {
  private petId: string;
  private formId: string;
  private validator: ReturnType<typeof JustValidate>;

  constructor(petId: string, formId: string) {
    this.petId = petId;
    this.formId = formId;
    this.validator = new JustValidate(this.formId);

    this.init();
  }

  private init() {
    new Popup('.pop-up-new-need');
    this.initializeValidation();
  }

  async updatePetData() {
    const itemInpElem = document.querySelector('#form-new-need #item') as HTMLInputElement;
    const costInpElem = document.querySelector('#form-new-need #cost') as HTMLInputElement;

    if (!itemInpElem || !costInpElem) {
      console.error('One or more input elements are not found in the DOM');
      return;
    }

    const itemInp = itemInpElem.value.trim();
    const costInp = Number(costInpElem.value);

    if (!itemInp || isNaN(costInp)) {
      console.error('Invalid input values');
      return;
    }

    try {
      const needCollectionRef = collection(db, `pats/${this.petId}/need`);

      await addDoc(needCollectionRef, {
        item: itemInp,
        cost: costInp,
      });

      location.reload();
    } catch (error) {
      console.error('Error adding new need:', error);
    }
  }

  private async initializeValidation() {
    this.validator
      .addField('#item', [
        { rule: 'required', errorMessage: 'Вкажіть назву потреби' },
        { rule: 'minLength', value: 2, errorMessage: 'Назва має містити більше символів' },
      ])
      .addField('#cost', [
        { rule: 'required', errorMessage: 'Вкажіть вартість потреби' },
        { rule: 'number', errorMessage: 'Вартість має бути числом' },
      ])
      .onSuccess((event: SubmitEvent) => {
        event.preventDefault();
        this.updatePetData();
      });
  }
}
