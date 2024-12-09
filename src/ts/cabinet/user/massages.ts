import { db } from '../../modules/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export class MyMassages {
  private myMassagesContent: HTMLElement;
  private uid: string | undefined;

  constructor(cardHolder: string) {
    this.myMassagesContent = document.querySelector(cardHolder) as HTMLElement;
    this.uid = this.getCookie('UID');
    this.init();
  }

  init() {
    this.getMassages().then(() => {});
  }

  private getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift();
    }
    return undefined;
  }

  private async getMassages() {
    try {
      const userCollection = collection(db, 'users');
      const querySnapshot = await getDocs(userCollection);

      const allUsers: { id: string; uid: string; massages: any[] }[] = [];

      for (const doc of querySnapshot.docs) {
        const data = doc.data();

        const massagesCollection = collection(db, `users/${doc.id}/massages`);
        const massagesSnapshot = await getDocs(massagesCollection);

        const massages: any[] = [];
        massagesSnapshot.forEach((massagesDoc) => {
          massages.push({ id: massagesDoc.id, ...massagesDoc.data() });
        });

        allUsers.push({
          id: doc.id,
          uid: data.uid || '',
          massages,
        });
      }

      const findUser = allUsers.find((user) => user.uid === this.uid);
      const userMassages: { id: string; [key: string]: any }[] = [];
      findUser?.massages.forEach((massage) => {
        userMassages.push(massage);
      });

      this.renderMassages(userMassages, findUser?.id);
    } catch (error) {
      console.error(error);
    }
  }

  private async renderMassages(massage: any[], userId: string | undefined) {
    this.myMassagesContent.innerHTML = '';
    massage.forEach((item) => {
      const cardHtml = `
            <div class="massages__one-massage massage ${item.id}">
                <div class="massage__content">
                <h2 class="massage__who-send subtitle">${item.whoSend}</h2>
                <h3 class="massage__topic title">${item.topic}</h3>
                <p class="massage__text text">${item.text}</p>
                </div>
                <button class="massage__remove btn gradient" data-id="${item.id}" data-user-id="${userId}">Видалити</button>
            </div>
          `;
      this.myMassagesContent.insertAdjacentHTML('beforeend', cardHtml);
    });

    this.addDeleteListeners();
  }

  private addDeleteListeners() {
    const deleteButtons = this.myMassagesContent.querySelectorAll('.massage__remove');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const massageId = target.getAttribute('data-id');
        const userId = target.getAttribute('data-user-id');
        if (massageId && userId) {
          this.deleteMassage(userId, massageId); // Передаем и userId, и massageId
        }
      });
    });
  }

  private async deleteMassage(userId: string, massageId: string) {
    try {
      if (!this.uid) {
        console.error('User UID is not defined.');
        return;
      }

      const massageDocRef = doc(db, `users/${userId}/massages/${massageId}`);

      await deleteDoc(massageDocRef);

      const massageElement = this.myMassagesContent.querySelector(`.massage.${massageId}`);
      if (massageElement) {
        massageElement.remove();
      }
    } catch (error) {
      console.error('Error deleting massage:', error);
    }
  }
}
