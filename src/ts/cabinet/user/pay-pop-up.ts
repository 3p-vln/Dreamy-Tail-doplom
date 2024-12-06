import JustValidate from 'just-validate';
import Inputmask from 'inputmask';

export class PayPopup {
  private popUpElement: HTMLElement;
  private backdropElement: HTMLElement;
  private formElement: HTMLFormElement;
  private validator: ReturnType<typeof JustValidate>;
  public onFormSubmitCallback: (() => void) | null = null;

  constructor() {
    this.popUpElement = document.querySelector('.pop-up-pay') as HTMLElement;

    this.backdropElement = document.querySelector('.pop-up__backdrop') as HTMLElement;

    this.formElement = document.querySelector('#form-pay') as HTMLFormElement;
    if (!this.popUpElement) {
      console.error('Pop-up element not found');
      return;
    }
    if (!this.backdropElement) {
      console.error('Backdrop element not found');
      return;
    }
    if (!this.formElement) {
      console.error('Form element not found');
      return;
    }

    this.init();
  }

  private init() {
    this.applyMasks();
    this.initializeValidation();
    this.addEventListeners();
  }

  private applyMasks() {
    Inputmask({
      mask: '9999 9999 9999 9999',
      placeholder: ' ',
    }).mask(this.formElement.querySelector('#card-numb') as HTMLInputElement);

    Inputmask({
      mask: '99/99',
      placeholder: ' ',
    }).mask(this.formElement.querySelector('#date') as HTMLInputElement);

    Inputmask({
      mask: '999',
      placeholder: '',
    }).mask(this.formElement.querySelector('#cvv') as HTMLInputElement);
  }

  private initializeValidation() {
    this.validator = new JustValidate(this.formElement);

    this.validator
      .addField('#card-numb', [
        {
          rule: 'required',
          errorMessage: 'Введіть номер картки',
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
      .onSuccess((event: SubmitEvent) => {
        event.preventDefault();
        this.onFormSubmit();
      });
  }

  private addEventListeners() {
    if (this.backdropElement) {
      this.backdropElement.addEventListener('click', () => this.closePopup());
    }
  }

  public openPopup(): void {
    this.popUpElement.classList.add('active');
  }

  public closePopup(): void {
    this.popUpElement.classList.remove('active');
    this.formElement.reset();
    this.validator.refresh();
  }

  onFormSubmit() {
    if (this.onFormSubmitCallback) {
      this.onFormSubmitCallback();
    }

    this.closePopup();
  }
}
