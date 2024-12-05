export class BtnCabinet {
  private authBtnClass: string;
  private regBtnClass: string;
  private cabinetBtnClass: string;
  private uid: string | undefined;

  constructor() {
    this.authBtnClass = '.authorization__btn';
    this.regBtnClass = '.registration__btn';
    this.cabinetBtnClass = '.cabinet__btn';
    this.uid = this.getCookie('UID');

    this.init();
  }

  private init() {
    const authBtns = document.querySelectorAll(this.authBtnClass);
    const regBtns = document.querySelectorAll(this.regBtnClass);
    const cabinetBtns = document.querySelectorAll(this.cabinetBtnClass);

    if (this.uid) {
      regBtns.forEach((btn) => btn.setAttribute('style', 'display: none'));
      authBtns.forEach((btn) => btn.setAttribute('style', 'display: none'));
      cabinetBtns.forEach((btn) => btn.setAttribute('style', 'display: flex'));
    } else {
      regBtns.forEach((btn) => btn.setAttribute('style', 'display: flex'));
      authBtns.forEach((btn) => btn.setAttribute('style', 'display: flex'));
      cabinetBtns.forEach((btn) => btn.setAttribute('style', 'display: none'));
    }
  }

  private getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift();
    }
    return undefined;
  }
}
