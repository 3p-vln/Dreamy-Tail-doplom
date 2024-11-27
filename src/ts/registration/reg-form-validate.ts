import JustValidate from 'just-validate';
import Inputmask from 'inputmask';
import { AccountManager } from './reg-bd';

export class RegFormValidation {
  private formId: string;
  private validator: ReturnType<typeof JustValidate>;

  constructor(formId: string) {
    this.formId = formId;
    this.validator = new JustValidate(this.formId);

    this.applyMasks();
    this.initializeValidation();
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
          errorMessage: `Ведіть фамілію`,
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: `Фамілія має містити більше символів`,
        },
        {
          rule: 'customRegexp',
          value: /^[А-Яа-яЁёІіЇїЄєҐґA-Za-z]{2,}$/,
          errorMessage: `Фамілія має містити лише літери`,
        },
      ])
      .addField('#email', [
        {
          rule: 'required',
          errorMessage: `Ведіть пошту`,
        },
        {
          rule: 'customRegexp',
          value: /^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
          errorMessage: 'Напишіть правильну пошту',
        },
      ])
      .addField('#tel', [
        {
          rule: 'required',
          errorMessage: `Ведіть номер телефону`,
        },
      ])
      .addField('#password', [
        {
          rule: 'required',
          errorMessage: `Ведіть пароль`,
        },
        {
          rule: 'minLength',
          value: 6,
          errorMessage: `Довжина не менше 6 символів`,
        },
        {
          rule: 'customRegexp',
          value: /[a-z]/,
          errorMessage: `Пароль повинен мати тільки англійські літери`,
        },
        {
          rule: 'customRegexp',
          value: /[A-Z]/,
          errorMessage: `Пароль повинен містити велику літеру`,
        },
        {
          rule: 'customRegexp',
          value: /[0-9]/,
          errorMessage: `Пароль повинен містити цифру`,
        },
      ])
      .onSuccess((event: SubmitEvent) => {
        event.preventDefault();
        const accountManager = new AccountManager('email', 'password', 'name', 'surname', 'tel');
        accountManager.createAccount();
      });
  }
}
