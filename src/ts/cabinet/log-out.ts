import { signOut } from 'firebase/auth';
import { auth } from '../modules/firebase';

export class LogOut {
  private logOutBtnClass: string;
  private uid: string | undefined;

  constructor() {
    this.logOutBtnClass = '.log-out__btn';
    this.uid = this.getCookie('UID');

    this.init();
  }

  private init() {
    if (document.querySelector(this.logOutBtnClass)) {
      const logOutBtn = document.querySelector(this.logOutBtnClass);

      if (this.uid) {
        if (logOutBtn) {
          logOutBtn?.addEventListener('click', () => {
            this.logOut();
          });
        }
      }
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

  private deleteCookie(name: string) {
    document.cookie = name + '=; Max-Age=-99999999;';
  }

  private logOut() {
    signOut(auth)
      .then(() => {
        this.deleteCookie('UID');
        window.location.href = '/Dreamy-Tail-doplom/index.html';
      })
      .catch((error) => {
        console.error('Sign Out Error', error);
      });
  }
}
