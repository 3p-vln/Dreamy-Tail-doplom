export class BurgerMenu {
  private headerBurger: HTMLElement | null;
  private headerMenu: HTMLElement | null;
  private burgerBackdrop: HTMLElement | null;
  private buttonAuthorization: HTMLElement | null;

  constructor() {
    this.headerBurger = document.querySelector('.header__burger');
    this.headerMenu = document.querySelector('.header__menu');
    this.burgerBackdrop = document.querySelector('.burger__backdrop');
    this.buttonAuthorization = document.querySelector('.authorization__btn');

    this.init();
  }

  private toggleBurger(): void {
    if (
      this.headerBurger &&
      this.headerMenu &&
      this.burgerBackdrop &&
      this.buttonAuthorization
    ) {
      this.headerBurger.classList.toggle('header__burger_active');
      this.burgerBackdrop.classList.toggle('burger__backdrop_active');
      this.headerMenu.classList.toggle('header__menu_active');
      this.buttonAuthorization.classList.toggle('authorization__btn_active');

      document.body.classList.toggle('scroll-lock');
    }
  }

  private init(): void {
    if (this.headerBurger && this.burgerBackdrop) {
      this.headerBurger.addEventListener('click', () => this.toggleBurger());
      this.burgerBackdrop.addEventListener('click', () => this.toggleBurger());
    }
  }
}
