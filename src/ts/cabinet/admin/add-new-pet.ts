import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../modules/firebase';
import JustValidate from 'just-validate';
import { Popup } from '../../donate/pop-up';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

export class AddNewPet {
  private formId: string;
  private validator: ReturnType<typeof JustValidate>;
  private btn: HTMLElement;

  constructor(formId: string) {
    this.formId = formId;
    this.validator = new JustValidate(this.formId);
    this.btn = document.querySelector('.all-pet__add') as HTMLElement;

    this.init();
  }

  init() {
    this.btn.addEventListener('click', () => {
      new Popup('.pop-up-new-pet');
      this.initializeValidation();
    });
  }

  async uploadImage(file: File, path: string): Promise<string> {
    const storage = getStorage();
    const imageRef = ref(storage, path);

    try {
      await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(imageRef);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image: ', error);
      throw error;
    }
  }

  async updateData() {
    const nameInpElem = document.querySelector('#name-pet') as HTMLInputElement;
    const breedInpElem = document.querySelector('#breed') as HTMLInputElement;
    const ageInpElem = document.querySelector('#age') as HTMLInputElement;
    const shortInfoElem = document.querySelector('#short-info') as HTMLInputElement;
    const fullInfoElem = document.querySelector('#full-info') as HTMLInputElement;
    const viewInpElem = document.querySelector('#viev') as HTMLInputElement;
    const imgJpgElem = document.querySelector('#img-jpg') as HTMLInputElement;
    const imgWebPElem = document.querySelector('#img-webp') as HTMLInputElement;

    if (!nameInpElem || !breedInpElem || !ageInpElem || !shortInfoElem || !fullInfoElem || !viewInpElem || !imgJpgElem || !imgWebPElem) {
      console.error('One or more input elements are not found in the DOM');
      return;
    }

    const nameInp = nameInpElem.value;
    const breedInp = breedInpElem.value;
    const ageInp = ageInpElem.value;
    const shortInfoInp = shortInfoElem.value;
    const fullInfoInp = fullInfoElem.value;
    const viewInp = viewInpElem.value;

    const imgFileJpg = imgJpgElem.files?.[0];
    const imgFileWebP = imgWebPElem.files?.[0];

    if (!imgFileJpg || !imgFileWebP) {
      console.error('Both image files (JPG and WebP) must be selected.');
      return;
    }

    try {
      // Upload the images
      const imgUrlJpg = await this.uploadImage(imgFileJpg, `pats/${Date.now()}.jpg`);
      const imgUrlWebP = await this.uploadImage(imgFileWebP, `pats/${Date.now()}.webp`);

      // Add the pet data to Firestore
      await addDoc(collection(db, 'pats'), {
        name: nameInp,
        breed: breedInp,
        age: ageInp,
        shortInfo: shortInfoInp,
        fullInfo: fullInfoInp,
        img: imgUrlJpg,
        imgWebP: imgUrlWebP,
        view: viewInp,
      });

      console.log('Pet added successfully');
      location.reload(); // Reload the page after successful submission
    } catch (error) {
      console.error('Error adding pet data:', error);
    }
  }

  private initializeValidation() {
    this.validator
      .addField('#viev', [
        {
          rule: 'required',
          errorMessage: `Ведіть дані`,
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: `Дані мають містити більше символів`,
        },
        {
          rule: 'customRegexp',
          value: /^[А-Яа-яЁёІіЇїЄєҐґA-Za-z]{2,}$/,
          errorMessage: `Дані мають містити лише літери`,
        },
      ])
      .addField('#name-pet', [
        {
          rule: 'required',
          errorMessage: `Ведіть ім'я`,
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: `Ім'я має містити більше символів`,
        },
        {
          rule: 'customRegexp',
          value: /^[А-Яа-яЁёІіЇїЄєҐґA-Za-z]{2,}$/,
          errorMessage: `Ім'я має містити лише літери`,
        },
      ])
      .addField('#breed', [
        {
          rule: 'required',
          errorMessage: `Ведіть породу`,
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: `Порода має містити більше символів`,
        },
        {
          rule: 'customRegexp',
          value: /^[a-zа-яёіїє\s]+$/,
          errorMessage: `Порода має містити лише маленькі літери`,
        },
      ])
      .addField('#age', [
        {
          rule: 'required',
          errorMessage: `Вкажіть вік`,
        },
        {
          rule: 'minLength',
          value: 5,
          errorMessage: `Вік має містити більше символів`,
        },
        {
          rule: 'customRegexp',
          value: /^[a-zа-яіїєґ0-9\s]+$/,
          errorMessage: `Вік має містити лише маленькі літери, цифри або пробіли`,
        },
      ])
      .addField('#short-info', [
        {
          rule: 'required',
          errorMessage: `Заповніть коротку інформацію.`,
        },
        {
          rule: 'minLength',
          value: 10,
          errorMessage: `Коротка інформація має містити більше символів.`,
        },
        {
          rule: 'customRegexp',
          value: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ0-9\s,.;?!(){}[\]<>:"'–-]+$/,
          errorMessage: `Коротка інформація має містити лише літери, цифри, пробіли та дозволені знаки припинання.`,
        },
      ])
      .addField('#full-info', [
        {
          rule: 'required',
          errorMessage: `Заповніть повну інформацію.`,
        },
        {
          rule: 'minLength',
          value: 5,
          errorMessage: `Повна інформація має містити більше символів.`,
        },
        {
          rule: 'customRegexp',
          value: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ0-9\s,.;?!(){}[\]<>:"'–-]+$/,
          errorMessage: `Повна інформація має містити лише літери, цифри, пробіли та дозволені знаки припинання.`,
        },
      ])
      .addField('#img-jpg', [
        {
          rule: 'required',
          errorMessage: `Завантажте картинку`,
        },
      ])
      .addField('#img-webp', [
        {
          rule: 'required',
          errorMessage: `Завантажте картинку`,
        },
      ])
      .onSuccess((event: SubmitEvent) => {
        event.preventDefault();
        this.updateData().then(() => {
          setTimeout(() => {
            location.reload();
          }, 20000);
        });
      });
  }
}
