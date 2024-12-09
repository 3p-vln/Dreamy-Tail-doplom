import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../modules/firebase';
import { AddNeed } from './add-new-need';

export class NeedsForPet {
  private myPetContent: HTMLElement;

  constructor(cardHolder: string) {
    this.myPetContent = document.querySelector(cardHolder) as HTMLElement;

    this.init();
  }

  init() {
    this.getPetsNeed();
    this.myPetContent.addEventListener('click', this.handleButtonClick.bind(this));
  }

  private async getPetsNeed() {
    try {
      const petCollection = collection(db, 'pats');
      const querySnapshot = await getDocs(petCollection);

      const allPets: { id: string; name: string; needs: any[] }[] = [];

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
          needs,
        });
        this.addNameInForm(allPets[0].name);
      }

      this.renderPatNeed(allPets);
    } catch (error) {
      console.error(error);
    }
  }

  private addNameInForm(name: string) {
    (document.querySelector('.name-needs-pet') as HTMLSpanElement).textContent = name;
  }

  private renderPatNeed(pat: any[]) {
    this.myPetContent.innerHTML = '';

    pat.forEach((item) => {
      const needsListHtml = item.needs
        .map(
          (need: { id: string; item: string; cost: number }) => `<li class="pet-need__list-item">
                                                                    ${need.item}: <span>${need.cost} грн</span> 
                                                                    <button class="pet-need__remove btn gradient" data-need-id="${need.id}" data-pet-id="${item.id}"> Видалити </button>
                                                                </li>`
        )
        .join('');

      const totalCost = item.needs.reduce((sum: number, need: { cost: number }) => sum + need.cost, 0);

      const cardHtml = `
          <div class="pet-need ${item.id}">
            <h3 class="pet-need__name title">${item.name}</h3>
  
            <ul class="pet-need__list">
              ${needsListHtml}
            </ul>
  
            <div class="pet-need__pay">
              <p class="pet-need__summ">Всього: <span>${totalCost} грн</span></p>
              <button class="pet-need__pay-btn btn gradient" data-pet-id="${item.id}">Додати потребу</button>
            </div>
          </div>
        `;

      this.myPetContent.insertAdjacentHTML('beforeend', cardHtml);
    });
  }

  private async removeDelNeeds(petId: string, needId: string) {
    try {
      const needDocRef = doc(db, `pats/${petId}/need/${needId}`);
      await deleteDoc(needDocRef);

      this.getPetsNeed();
    } catch (error) {
      console.error('Error deleting need:', error);
    }
  }

  private handleButtonClick(event: Event) {
    const target = event.target as HTMLElement;

    if (target.classList.contains('pet-need__remove')) {
      const needId = target.dataset.needId;
      const petId = target.dataset.petId;

      if (needId && petId) {
        this.removeDelNeeds(petId, needId).then(() => {
          setTimeout(() => {
            location.reload();
          }, 2000);
        });
      }
    } else if (target.classList.contains('pet-need__pay-btn')) {
      const petId = target.dataset.petId;

      if (petId) {
        // Открываем форму для добавления потребности
        new AddNeed(petId, '#form-new-need');
        // const popup = document.querySelector('.pop-up-new-need') as HTMLElement;
        // if (popup) popup.classList.add('visible'); // Показываем попап
      }
    }
  }
}
