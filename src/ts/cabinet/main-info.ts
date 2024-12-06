import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';

export class MainInfo {
  private mainInfoContent: HTMLElement | null;
  private uid: string | undefined;
  private currentUser: { name: string; surname: string; phone: string; email: string } | undefined;

  constructor() {
    this.mainInfoContent = document.querySelector('.main-info__content');
    this.uid = this.getCookie('UID');

    this.init();
  }

  init() {
    this.fetchUsers().then(() => {
      this.showInfo();
    });
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
    const allUsers: { uid: string; name: string; surname: string; phone: string; email: string }[] = [];
    userData.forEach((doc) => {
      allUsers.push({
        uid: doc.data().uid,
        name: doc.data().name,
        surname: doc.data().surname,
        phone: doc.data().phone,
        email: doc.data().email,
      });
    });

    const findUser = allUsers.find((user) => user.uid === this.uid);
    this.currentUser = findUser;
  }

  private async showInfo() {
    if (this.mainInfoContent) {
      const name = this.mainInfoContent.querySelector('.name__db');
      if (name) {
        name.textContent = this.currentUser?.name ?? '';
      }

      const surname = this.mainInfoContent.querySelector('.surname__db');
      if (surname) {
        surname.textContent = this.currentUser?.surname ?? '';
      }

      const phone = this.mainInfoContent.querySelector('.phone__db');
      if (phone) {
        phone.textContent = this.currentUser?.phone ?? '';
      }

      const email = this.mainInfoContent.querySelector('.email__db');
      if (email) {
        email.textContent = this.currentUser?.email ?? '';
      }
    }
  }
}
