import { db } from '../../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { DeletePet } from './del-pet';
import { EditPet } from './edit-pet';

export class AllPet {
  private cardHolder: HTMLElement;
  private patsArr: {
    id: string;
    img: string;
    imgWebP: string;
    name: string;
    shortInfo: string;
    view: string;
    owner: string;
  }[];

  constructor(cardHolder: string) {
    this.cardHolder = document.querySelector(cardHolder) as HTMLElement;
    this.patsArr = [];

    this.init();
  }

  init() {
    this.conectDBPet();
  }

  async conectDBPet() {
    try {
      const petCollection = collection(db, 'pats');
      const querySnapshot = await getDocs(petCollection);

      querySnapshot.forEach((doc) => {
        const data = doc.data();

        this.patsArr.push({
          id: doc.id,
          img: data.img || '',
          imgWebP: data.imgWebP,
          name: data.name || 'No Name',
          shortInfo: data.shortInfo || '',
          view: data.view || '',
          owner: data.owner || '',
        });
      });

      this.renderPat(this.patsArr);
    } catch (error) {
      console.error(error);
    }
  }

  renderPat(pat: any[]) {
    this.cardHolder.innerHTML = '';

    pat.forEach((item) => {
      const cardHtml = `
        <div class="list__item pet ${item.id}">
          <div class="pet__info">
            <div class="pet__viev">${item.view}</div>
  
            <div class="pet__img">
              <picture>
                <source srcset=${item.imgWebP} type="image/webp" />
                <img src="${item.img}" alt="pet image" />
              </picture>
            </div>
  
            <p class="pet__name">${item.name}</p>
            <p class="pet__short-info">${item.shortInfo}</p>
            ${item.owner ? `<p class="pet__owner">Є опікун: ${item.owner} (ID)</p>` : ''}
          </div>
  
          <div class="pet__btns">
            <a href="one-pet.html?id=${item.id}" class="pet__page btn gradient">Переглянути</a>
            <button class="pet__edit btn gradient" data-id="${item.id}">Редагувати</button>
            <button class="pet__del btn gradient" data-id="${item.id}" data-img="${item.img}" data-img-webp="${item.imgWebP}">Видалити</button>
          </div>
        </div>
      `;

      this.cardHolder.insertAdjacentHTML('beforeend', cardHtml);
    });

    this.addDeleteEventListeners();
    this.addEditEventListeners();
  }

  addDeleteEventListeners() {
    const deleteButtons = this.cardHolder.querySelectorAll('.pet__del');

    deleteButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const petId = (e.target as HTMLButtonElement).getAttribute('data-id');
        const petImage = (e.target as HTMLButtonElement).getAttribute('data-img');
        const petImageWebP = (e.target as HTMLButtonElement).getAttribute('data-img-webp');

        if (petId && petImage && petImageWebP) {
          new DeletePet(petId, petImage, petImageWebP);
        }
      });
    });
  }

  addEditEventListeners() {
    const editButtons = this.cardHolder.querySelectorAll('.pet__edit');

    editButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const petId = (e.target as HTMLButtonElement).getAttribute('data-id');

        if (petId) {
          new EditPet(petId, '#form-edit-pet');
        }
      });
    });
  }
}
