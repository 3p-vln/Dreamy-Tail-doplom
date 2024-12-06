export class Popup {
  private popUp: HTMLElement;
  private backdrop: HTMLElement;

  constructor(popUpClass: string) {
    this.popUp = document.querySelector(popUpClass) as HTMLElement;
    this.backdrop = document.querySelector('.pop-up__backdrop') as HTMLElement;

    this.init();
  }

  init() {
    this.addEventListeners();
    this.openPopup();
  }

  private addEventListeners(): void {
    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.closePopup());
    }
  }

  public openPopup(): void {
    setTimeout(() => {
      this.popUp.classList.add('active');
    }, 1000);
  }

  public closePopup(): void {
    this.popUp.classList.remove('active');
  }
}
