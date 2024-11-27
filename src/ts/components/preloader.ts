interface CustomEvent extends Event {
  readonly detail?: { block: string; requiredImagesCount: number };
}

export class Preloader {
  preloaderElement: HTMLElement | null;

  constructor() {
    this.preloaderElement = document.querySelector('.preloader');
    this.initPreloader();
  }

  initPreloader() {
    document.addEventListener('loadingIsFinished', (event: CustomEvent) => {
      if (!this.preloaderElement) return;

      let loadedImages = 0;

      if (event.detail) {
        const blockImages: NodeListOf<HTMLImageElement> = document.querySelectorAll(`.${event.detail.block} img`);

        if (blockImages.length === 0) {
          this.hidePreloader();
          return;
        }

        blockImages.forEach((img: HTMLImageElement) => {
          if (img.complete) {
            loadedImages += 1;
            this.checkAndHidePreloader(event, loadedImages);
          }

          img.onload = () => {
            loadedImages += 1;
            this.checkAndHidePreloader(event, loadedImages);
          };
        });
      }
    });
  }

  checkAndHidePreloader(event: CustomEvent, loadedImages: number) {
    if (event.detail?.requiredImagesCount && loadedImages >= event.detail.requiredImagesCount) {
      this.hidePreloader();
    }
  }

  hidePreloader() {
    if (this.preloaderElement) {
      this.preloaderElement.classList.add('hidden'); // Добавляем класс для скрытия прелоадера
    }
  }
}
