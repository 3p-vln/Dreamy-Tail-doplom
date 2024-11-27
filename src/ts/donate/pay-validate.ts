import JustValidate from 'just-validate';
import Inputmask from 'inputmask';

class FormValidation {
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
      mask: '9999 9999 9999 9999',
      placeholder: ' ',
    }).mask(document.querySelector('#card-numb') as HTMLInputElement);

    Inputmask({
      mask: '99/99',
      placeholder: ' ',
    }).mask(document.querySelector('#date') as HTMLInputElement);

    Inputmask({
      mask: '999',
      placeholder: '',
    }).mask(document.querySelector('#cvv') as HTMLInputElement);
  }

  private initializeValidation() {
    this.validator
      .addField('#card-numb', [
        {
          rule: 'required',
          errorMessage: 'Ведіть номер картки',
        },
      ])
      .addField('#date', [
        {
          rule: 'required',
          errorMessage: 'Введіть термін дії картки',
        },
      ])
      .addField('#cvv', [
        {
          rule: 'required',
          errorMessage: 'Введіть CVV',
        },
      ])
      .addField('#name', [
        {
          rule: 'required',
          errorMessage: `Введіть ІМ'Я власника`,
        },
        {
          rule: 'customRegexp',
          value: /^[a-zA-Z]+$/,
          errorMessage: `Введіть ІМ'Я літерами`,
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Мінімальна кількість літер 2',
        },
      ])
      .addField('#summ', [
        {
          rule: 'required',
          errorMessage: 'Введіть суму',
        },
        {
          rule: 'number',
          errorMessage: 'Введіть коректне число',
        },
        {
          rule: 'minNumber',
          value: 1,
          errorMessage: 'Сума повинна бути 0',
        },
      ])
      .addField('#checkbox', [
        {
          rule: 'required',
          errorMessage: 'Необхідно погодитись з умовами',
        },
      ])
      .onSuccess((event: SubmitEvent) => {
        event.preventDefault();
        console.log('Форма успешно отправлена!');
      });
  }
}

export class TabValidation {
  constructor() {
    this.init();
  }

  init() {
    const card: NodeListOf<HTMLElement> = document.querySelectorAll('.tabs__nav-btn');

    card.forEach((item) => {
      const tabId = item.getAttribute('data-tab');
      const currentTab = document.querySelector(tabId + ' .form') as HTMLElement;

      if (currentTab.getAttribute('id') == 'form-card') {
        new FormValidation('#form-card');
      } else if (currentTab.getAttribute('id') == 'form-paypal') {
        new FormValidation('#form-paypal');
      }
    });
  }
}
