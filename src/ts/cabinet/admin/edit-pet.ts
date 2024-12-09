import { db } from '../../modules/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';
import JustValidate from 'just-validate';
import { Popup } from '../../donate/pop-up';

export class EditPet {
  private petId: string;
  private formId: string;
  private validator: ReturnType<typeof JustValidate>;

  constructor(petId: string, formId: string) {
    this.petId = petId;
    this.formId = formId;
    this.validator = new JustValidate(this.formId);

    this.init();
  }

  async init() {
    new Popup('.pop-up-edit-pet');
    await this.loadPetData();
    this.initializeValidation();
  }

  async loadPetData() {
    try {
      const petDoc = await getDoc(doc(db, 'pats', this.petId));
      if (petDoc.exists()) {
        const petData = petDoc.data();

        (document.querySelector('#form-edit-pet #viev') as HTMLInputElement).value = petData.view || '';
        (document.querySelector('#form-edit-pet #name-pet') as HTMLInputElement).value = petData.name || '';
        (document.querySelector('#form-edit-pet #breed') as HTMLInputElement).value = petData.breed || '';
        (document.querySelector('#form-edit-pet #age') as HTMLInputElement).value = petData.age || '';
        (document.querySelector('#form-edit-pet #short-info') as HTMLInputElement).value = petData.shortInfo || '';
        (document.querySelector('#form-edit-pet #full-info') as HTMLInputElement).value = petData.fullInfo || '';
      } else {
        console.error('Pet not found!');
      }
    } catch (error) {
      console.error('Error loading pet data:', error);
    }
  }

  async uploadImage(file: File, path: string): Promise<string> {
    const storage = getStorage();
    const imageRef = ref(storage, path);

    try {
      await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(imageRef);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }

  async updatePetData() {
    const nameInpElem = document.querySelector('#form-edit-pet #name-pet') as HTMLInputElement;
    const breedInpElem = document.querySelector('#form-edit-pet #breed') as HTMLInputElement;
    const ageInpElem = document.querySelector('#form-edit-pet #age') as HTMLInputElement;
    const shortInfoElem = document.querySelector('#form-edit-pet #short-info') as HTMLInputElement;
    const fullInfoElem = document.querySelector('#form-edit-pet #full-info') as HTMLInputElement;
    const viewInpElem = document.querySelector('#form-edit-pet #viev') as HTMLInputElement;

    if (!nameInpElem || !breedInpElem || !ageInpElem || !shortInfoElem || !fullInfoElem || !viewInpElem) {
      console.error('One or more input elements are not found in the DOM');
      return;
    }

    const nameInp = nameInpElem.value;
    const breedInp = breedInpElem.value;
    const ageInp = ageInpElem.value;
    const shortInfoInp = shortInfoElem.value;
    const fullInfoInp = fullInfoElem.value;
    const viewInp = viewInpElem.value;

    try {
      const petRef = doc(db, 'pats', this.petId);

      await updateDoc(petRef, {
        name: nameInp,
        breed: breedInp,
        age: ageInp,
        shortInfo: shortInfoInp,
        fullInfo: fullInfoInp,
        view: viewInp,
      });

      location.reload();
    } catch (error) {
      console.error('Error updating pet data:', error);
    }
  }

  private initializeValidation() {
    this.validator
      .addField('#viev', [
        { rule: 'required', errorMessage: `Введіть вид` },
        { rule: 'minLength', value: 2, errorMessage: `Дані мають містити більше символів` },
      ])
      .addField('#name-pet', [
        { rule: 'required', errorMessage: `Введіть ім'я` },
        { rule: 'minLength', value: 2, errorMessage: `Ім'я має містити більше символів` },
      ])
      .addField('#breed', [
        { rule: 'required', errorMessage: `Введіть породу` },
        { rule: 'minLength', value: 2, errorMessage: `Порода має містити більше символів` },
      ])
      .addField('#age', [
        { rule: 'required', errorMessage: `Вкажіть вік` },
        { rule: 'minLength', value: 5, errorMessage: `Вік має містити більше символів` },
      ])
      .addField('#short-info', [
        { rule: 'required', errorMessage: `Заповніть коротку інформацію.` },
        { rule: 'minLength', value: 10, errorMessage: `Коротка інформація має містити більше символів.` },
      ])
      .addField('#full-info', [
        { rule: 'required', errorMessage: `Заповніть повну інформацію.` },
        { rule: 'minLength', value: 5, errorMessage: `Повна інформація має містити більше символів.` },
      ])
      .onSuccess((event: SubmitEvent) => {
        event.preventDefault();
        this.updatePetData().then(() => {
          setTimeout(() => {
            location.reload();
          }, 2000);
        });
      });
  }
}
