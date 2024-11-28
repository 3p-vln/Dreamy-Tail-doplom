import JustValidate from 'just-validate';
import { AuthHandler } from './log-in-bd';
// import { AccountManager } from './log-in-bd';

export class LogInFormValidation {
  private formId: string;
  private validator: ReturnType<typeof JustValidate>;

  constructor(formId: string) {
    this.formId = formId;
    this.validator = new JustValidate(this.formId);

    this.initializeValidation();
  }

  private initializeValidation() {
    this.validator
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
        new AuthHandler();
      });
  }
}
