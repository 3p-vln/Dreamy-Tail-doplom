import { db } from '../modules/firebase';
import { arrayUnion, collection, doc, getDocs, updateDoc } from 'firebase/firestore';

export class AddPetToUser {
  private btn: HTMLElement | null;
  private petId: string;
  private uid: string | undefined;

  constructor() {
    this.btn = document.querySelector('.info__buy');
    const urlParams = new URLSearchParams(window.location.search);
    this.petId = urlParams.get('id') || '';
    this.uid = this.getCookie('UID');

    this.init();
  }

  init() {
    if (this.btn) {
      this.btn.addEventListener('click', () => {
        if (this.uid) {
          this.fetchUsers().then((currentUser) => {
            if (currentUser) {
              this.addPatToUser(this.petId, currentUser.id);
            } else {
              window.location.href = '/Dreamy-Tail-doplom/index.html';
            }
          });
        } else {
          window.location.href = '/Dreamy-Tail-doplom/index.html';
        }
      });
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
    const currentUser = allUsers.find((user) => user.uid === this.uid);

    return currentUser;
  }

  private async addPatToUser(petId: string, userId: string) {
    try {
      const userDocRef = doc(db, 'users', userId);

      await updateDoc(userDocRef, {
        myPet: arrayUnion(petId),
      });

      const petDocRef = doc(db, 'pats', petId);

      await updateDoc(petDocRef, {
        owner: true,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
