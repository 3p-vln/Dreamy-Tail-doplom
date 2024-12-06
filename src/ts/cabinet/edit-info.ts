import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../modules/firebase';
import JustValidate from 'just-validate';
import Inputmask from 'inputmask';
import { Popup } from '../donate/pop-up';

export class EditInfo {
  private currentUser: { id: string } | undefined;
  uid: string | undefined;
  private formId: string;
  private validator: ReturnType<typeof JustValidate>;
  private btn: HTMLElement;

  constructor(formId: string) {
    this.uid = this.getCookie('UID');
    this.formId = formId;
    this.validator = new JustValidate(this.formId);
    this.btn = document.querySelector('.main-info__edit-info') as HTMLElement;

    this.init();
  }

  init() {
    this.btn.addEventListener('click', () => {
      new Popup();
      this.applyMasks();
      this.initializeValidation();
    });
  }

  private getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift();
    }
    return undefined;
  }

  private async fetchUsers() {
    const userData = await getDocs(collection(db, 'users'));
    const allUsers: { uid: string; id: string }[] = [];
    userData.forEach((doc) => {
      allUsers.push({
        uid: doc.data().uid,
        id: doc.id,
      });
    });

    const findUser = allUsers.find((user) => user.uid === this.uid);
    this.currentUser = findUser;
  }

  async updateData() {
    const nameInpElem = document.querySelector('#name') as HTMLInputElement;
    const surnameInpElem = document.querySelector('#surname') as HTMLInputElement;
    const newPhoneElem = document.querySelector('#tel') as HTMLInputElement;

    if (!nameInpElem || !surnameInpElem || !newPhoneElem) {
      console.error('One or more input elements are not found in the DOM');
      return;
    }

    const nameInp = nameInpElem.value;
    const surnameInp = surnameInpElem.value;
    const newPhone = newPhoneElem.value;

    if (!this.uid) {
      console.error('UID not found');
      return;
    }

    try {
      if (!this.currentUser?.id) {
        console.error('Current user ID is undefined.');
        return;
      }

      const userDocRef = doc(db, 'users', this.currentUser?.id);

      await updateDoc(userDocRef, {
        name: nameInp,
        surname: surnameInp,
        phone: newPhone,
      });
    } catch (error) {
      console.error(error);
    }
  }

  private applyMasks() {
    Inputmask({
      mask: '+99 (999) 999 99 99',
      placeholder: ' ',
    }).mask(document.querySelector('#tel') as HTMLInputElement);
  }

  private initializeValidation() {
    this.validator
      .addField('#name', [
        {
          rule: 'required',
          errorMessage: `Ведіть iм'я`,
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: `Iм'я має містити більше символів`,
        },
        {
          rule: 'customRegexp',
          value: /^[А-Яа-яЁёІіЇїЄєҐґA-Za-z]{2,}$/,
          errorMessage: `Iм'я має містити лише літери`,
        },
      ])
      .addField('#surname', [
        {
          rule: 'required',
          errorMessage: `Ведіть прізвище`,
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: `Прізвище має містити більше символів`,
        },
        {
          rule: 'customRegexp',
          value: /^[А-Яа-яЁёІіЇїЄєҐґA-Za-z]{2,}$/,
          errorMessage: `Прізвище має містити лише літери`,
        },
      ])
      .addField('#tel', [
        {
          rule: 'required',
          errorMessage: `Ведіть номер телефону`,
        },
      ])
      .onSuccess((event: SubmitEvent) => {
        event.preventDefault();
        this.fetchUsers().then(() => {
          this.updateData().then(() => {
            location.reload();
          });
        });
      });
  }
}
