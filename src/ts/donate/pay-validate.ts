import JustValidate from 'just-validate';
import Inputmask from 'inputmask';
import { Popup } from './pop-up';

class FormValidation {
  private formId: string;
  private validator: ReturnType<typeof JustValidate>;

  constructor(formId: string) {
    this.formId = formId;
    this.validator = new JustValidate(this.formId);

    this.initializeValidation();
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
        new Popup();
        // очислить форму
        (event.target as HTMLFormElement).reset();
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
      this.applyMasks(currentTab);

      if (currentTab.getAttribute('id') == 'form-card') {
        new FormValidation('#form-card');
      } else if (currentTab.getAttribute('id') == 'form-paypal') {
        new FormValidation('#form-paypal');
      }
    });
  }

  private applyMasks(currentTab: HTMLElement) {
    Inputmask({
      mask: '9999 9999 9999 9999',
      placeholder: ' ',
    }).mask(currentTab.querySelector('#card-numb') as HTMLInputElement);

    Inputmask({
      mask: '99/99',
      placeholder: ' ',
    }).mask(currentTab.querySelector('#date') as HTMLInputElement);

    Inputmask({
      mask: '999',
      placeholder: '',
    }).mask(currentTab.querySelector('#cvv') as HTMLInputElement);
  }
}
