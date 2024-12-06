import { collection, getDocs } from 'firebase/firestore';
import { db } from '../modules/firebase';

export class BtnCabinet {
  private authBtnClass: string;
  private regBtnClass: string;
  private cabinetBtnClass: string;
  private logOutBtnClass: string;
  private uid: string | undefined;

  constructor() {
    this.authBtnClass = '.authorization__btn';
    this.regBtnClass = '.registration__btn';
    this.cabinetBtnClass = '.cabinet__btn';
    this.logOutBtnClass = '.log-out__btn';
    this.uid = this.getCookie('UID');

    this.init();
  }

  private init() {
    const authBtns = document.querySelectorAll(this.authBtnClass);
    const regBtns = document.querySelectorAll(this.regBtnClass);
    const cabinetBtns = document.querySelectorAll(this.cabinetBtnClass) as NodeListOf<HTMLAnchorElement>;
    const logOutBtns = document.querySelectorAll(this.logOutBtnClass);

    if (this.uid) {
      regBtns.forEach((btn) => btn.setAttribute('style', 'display: none'));
      authBtns.forEach((btn) => btn.setAttribute('style', 'display: none'));
      cabinetBtns.forEach((btn) => btn.setAttribute('style', 'display: flex'));
      logOutBtns.forEach((btn) => btn.setAttribute('style', 'display: flex'));

      this.linkCabinet(cabinetBtns);
    } else {
      cabinetBtns.forEach((btn) => btn.setAttribute('style', 'display: none'));
      logOutBtns.forEach((btn) => btn.setAttribute('style', 'display: none'));
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

  private async fetchUsers() {
    const userData = await getDocs(collection(db, 'users'));
    const allUsers: { id: string; uid: string; role: string }[] = [];
    userData.forEach((doc) => {
      allUsers.push({
        id: doc.id,
        uid: doc.data().uid,
        role: doc.data().role,
      });
    });
    return allUsers;
  }

  private async linkCabinet(cabinetBtns: NodeListOf<HTMLAnchorElement>) {
    const allUsers = await this.fetchUsers();
    const currentUser = allUsers.find((user) => user.uid === this.uid);

    if (currentUser) {
      cabinetBtns.forEach((cabinet) => {
        if (currentUser.role === 'admin') {
          cabinet.href = '/cabinet-admin.html';
        } else {
          cabinet.href = '/cabinet-user.html';
        }
      });
    }
  }
}
