import { db } from '../../modules/firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

export class MyPet {
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
      this.getPets();
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

  private async getPets() {
    try {
      const petCollection = collection(db, 'pats');
      const querySnapshot = await getDocs(petCollection);
      const allPets: any[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();

        allPets.push({
          id: doc.id,
          img: data.img || '',
          imgWebP: data.imgWebP,
          name: data.name || 'No Name',
          shortInfo: data.shortInfo || '',
          view: data.view || '',
          owner: data.owner || false,
        });
      });

      const myPets = allPets.filter((pet) => this.currentUser!.myPet.includes(pet.id));
      this.renderPat(myPets).then(() => {
        this.addEventListener();
      });
    } catch (error) {
      console.error(error);
    }
  }

  private async renderPat(pat: any[]) {
    this.myPetContent.innerHTML = '';

    pat.forEach((item) => {
      if (item.owner) {
        const cardHtml = `
          <a class="list__item pet ${item.id}">
            <div class="pet__info">
              <div class="pet__viev">${item.view}</div>
  
              <div class="pet__img">
                <picture>
                  <source srcset="${item.imgWebP}" type="image/webp" />
                  <img src="${item.img}" alt="cat" />
                </picture>
              </div>
  
              <p class="pet__name">${item.name}</p>
              <p class="pet__short-info">${item.shortInfo}</p>
            </div>
  
            <button class="pet__page btn gradient" data-id="${item.id}">Відмовитись</button>
          </a>
        `;

        this.myPetContent.insertAdjacentHTML('beforeend', cardHtml);
      }
    });
  }

  private async removePet(petId: string) {
    if (!this.currentUser || !this.uid) {
      console.error('User not authenticated or user data not loaded.');
      return;
    }

    try {
      const userRef = doc(db, 'users', this.currentUser.id);
      const updatedMyPet = this.currentUser.myPet.filter((id) => id !== petId);
      await updateDoc(userRef, { myPet: updatedMyPet });

      this.currentUser.myPet = updatedMyPet;

      const petRef = doc(db, 'pats', petId);
      await updateDoc(petRef, { owner: false });

      const petElement = this.myPetContent.querySelector(`.list__item.pet.${petId}`);
      if (petElement) {
        petElement.remove();
      }
    } catch (error) {
      console.error('Error removing pet:', error);
    }
  }

  private addEventListener() {
    const buttons = this.myPetContent.querySelectorAll('.pet__page');
    if (buttons.length === 0) {
      console.error('No buttons found with class .pet__page');
      return;
    }

    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const petId = (event.target as HTMLElement).getAttribute('data-id');

        if (petId) {
          this.removePet(petId);
        }
      });
    });
  }
}
