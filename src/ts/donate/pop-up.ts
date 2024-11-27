export class Popup {
  private popUp: HTMLElement;
  private backdrop: HTMLElement;

  constructor() {
    this.popUp = document.querySelector('.pop-up') as HTMLElement;
    this.backdrop = document.querySelector('.pop-up__backdrop') as HTMLElement;

    this.init();
  }

  init() {
    this.addEventListeners();
    this.openPopup();
  }
  // Додаємо події для відкриття та закриття попапа
  private addEventListeners(): void {
    // Закриття попапа при натисканні на фон
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
