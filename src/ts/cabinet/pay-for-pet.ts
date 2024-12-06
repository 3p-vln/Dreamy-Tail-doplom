import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../modules/firebase';
import { PayPopup } from './pay-pop-up';

export class PayForPet {
  private myPetContent: HTMLElement;
  private uid: string | undefined;
  private currentUser: { myPet: string[]; id: string } | undefined;

  constructor(cardHolder: string) {
    this.myPetContent = document.querySelector(cardHolder) as HTMLElement;
    this.uid = this.getCookie('UID');

    this.init();
  }

  init() {
    this.fetchUsers().then(() => {
      this.getPetsNeed();
      console.log(this.myPetContent);
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
    const allUsers: { uid: string; myPet: string[]; id: string }[] = [];
    userData.forEach((doc) => {
      allUsers.push({
        uid: doc.data().uid,
        myPet: doc.data().myPet,
        id: doc.id,
      });
    });

    const findUser = allUsers.find((user) => user.uid === this.uid);
    this.currentUser = findUser;
  }

  private async getPetsNeed() {
    try {
      const petCollection = collection(db, 'pats');
      const querySnapshot = await getDocs(petCollection);

      const allPets: { id: string; name: string; owner: boolean; needs: any[] }[] = [];

      for (const doc of querySnapshot.docs) {
        const data = doc.data();

        const needCollection = collection(db, `pats/${doc.id}/need`);
        const needsSnapshot = await getDocs(needCollection);

        const needs: any[] = [];
        needsSnapshot.forEach((needDoc) => {
          needs.push({ id: needDoc.id, ...needDoc.data() });
        });

        allPets.push({
          id: doc.id,
          name: data.name || 'No Name',
          owner: data.owner || false,
          needs,
        });
      }

      const myPets = allPets.filter((pet) => this.currentUser!.myPet.includes(pet.id));
      console.log(myPets);
      this.renderPatNeed(myPets);
    } catch (error) {
      console.error(error);
    }
  }

  private renderPatNeed(pat: any[]) {
    console.log('Rendering pets:', pat);
    this.myPetContent.innerHTML = '';

    pat.forEach((item) => {
      if (item.owner === true) {
        console.log('Rendering pet:', item);

        const needsListHtml = item.needs.map((need: { item: string; cost: number }) => `<li class="pet-need__list-item">${need.item}: <span>${need.cost} грн</span></li>`).join('');

        const totalCost = item.needs.reduce((sum: number, need: { cost: number }) => sum + need.cost, 0);

        const cardHtml = `
          <div class="pay-for-pet__one-pet pet-need ${item.id}">
            <h3 class="pet-need__name title">${item.name}</h3>
  
            <ul class="pet-need__list">
              ${needsListHtml}
            </ul>
  
            <div class="pet-need__pay">
              <p class="pet-need__summ">Всього: <span>${totalCost} грн</span></p>
              <button class="pet-need__pay-btn btn gradient" data-pet-id="${item.id}">Сплатити</button>
            </div>
          </div>
        `;

        this.myPetContent.insertAdjacentHTML('beforeend', cardHtml);
      }
    });

    this.addPayButtonListeners();
  }

  private addPayButtonListeners() {
    const payButtons = this.myPetContent.querySelectorAll('.pet-need__pay-btn');
    payButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const petId = (event.target as HTMLButtonElement).dataset.petId;
        this.onPayButtonClick(petId!);
      });
    });
  }

  private onPayButtonClick(petId: string) {
    const payPopup = new PayPopup(); // Создание экземпляра PayPopup
    payPopup.openPopup();

    payPopup.onFormSubmit = async () => {
      await this.removePaidNeeds(petId);
      payPopup.closePopup();
      this.init();
    };
  }

  private async removePaidNeeds(petId: string) {
    const petNeedsCollection = collection(db, `pats/${petId}/need`);
    const needsSnapshot = await getDocs(petNeedsCollection);

    for (const needDoc of needsSnapshot.docs) {
      const needDocRef = doc(db, `pats/${petId}/need/${needDoc.id}`);
      await deleteDoc(needDocRef); // Удаление документа через deleteDoc
    }

    console.log(`Потребности питомца с ID ${petId} удалены`);
  }
}
