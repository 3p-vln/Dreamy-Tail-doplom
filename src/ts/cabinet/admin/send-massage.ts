import { db } from '../../modules/firebase';
import { collection, addDoc } from 'firebase/firestore';
import JustValidate from 'just-validate';
import { Popup } from '../../donate/pop-up';

export class SendMassage {
  private userId: string;
  private formId: string;
  private validator: ReturnType<typeof JustValidate>;

  constructor(userId: string, formId: string) {
    this.userId = userId;
    this.formId = formId;
    this.validator = new JustValidate(this.formId);

    this.init();
  }

  private init() {
    new Popup('.pop-up-massage');
    this.initializeValidation();
  }

  private async updateUserData() {
    const topicInpElem = document.querySelector(`${this.formId} #topic`) as HTMLInputElement;
    const whoSendInpElem = document.querySelector(`${this.formId} #who-send`) as HTMLInputElement;
    const textInpElem = document.querySelector(`${this.formId} #text`) as HTMLInputElement;

    if (!topicInpElem || !whoSendInpElem || !textInpElem) {
      console.error('One or more input elements are not found in the DOM');
      return;
    }

    const topicInp = topicInpElem.value.trim();
    const whoSendInp = whoSendInpElem.value.trim();
    const textInp = textInpElem.value.trim();

    if (!topicInp || !whoSendInp || !textInp) {
      console.error('Invalid input values');
      return;
    }

    try {
      const massagesCollectionRef = collection(db, `users/${this.userId}/massages`);

      await addDoc(massagesCollectionRef, {
        topic: topicInp,
        whoSend: whoSendInp,
        textSend: textInp,
      });

      alert('Повідомлення успішно надіслано');
      location.reload();
    } catch (error) {
      console.error('Error adding new message:', error);
      alert('Не вдалося надіслати повідомлення. Спробуйте знову.');
    }
  }

  private initializeValidation() {
    this.validator
      .addField('#topic', [
        { rule: 'required', errorMessage: 'Тема обов’язкова' },
        { rule: 'minLength', value: 3, errorMessage: 'Тема має містити щонайменше 3 символи' },
      ])
      .addField('#who-send', [
        { rule: 'required', errorMessage: 'Вкажіть відправника' },
        { rule: 'minLength', value: 3, errorMessage: 'Ім’я відправника має містити більше символів' },
      ])
      .addField('#text', [
        { rule: 'required', errorMessage: 'Текст повідомлення обов’язковий' },
        { rule: 'minLength', value: 10, errorMessage: 'Текст повідомлення має містити щонайменше 10 символів' },
      ])
      .onSuccess((event: SubmitEvent) => {
        event.preventDefault();
        this.updateUserData().then(() => {
          setTimeout(() => {
            location.reload();
          }, 2000);
        });
      });
  }
}
