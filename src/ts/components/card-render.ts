import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';

export class RenderCards {
  private cardHolder: HTMLElement;
  private patsArr: {
    id: string;
    img: string;
    imgWebP: string;
    name: string;
    shortInfo: string;
    view: string;
    owner: boolean;
  }[];

  constructor(cardHolder: string) {
    this.cardHolder = document.querySelector(cardHolder) as HTMLElement;
    this.patsArr = [];

    this.init();
  }

  init() {
    this.conectDB();
  }

  async conectDB() {
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
          owner: data.owner || false,
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
      if (item.owner === false) {
        const cardHtml = `
          <a href="one-pet.html?id=${item.id}" class="list__item pet ${item.id}">
            <div class="pet__info">
              <div class="pet__viev">${item.view}</div>

              <div class="pet__img">
                <picture>
                  <source srcset=${item.imgWebP} type="image/webp" />
                  <img src="${item.img}" alt="cat" />
                </picture>
              </div>

              <p class="pet__name">${item.name}</p>
              <p class="pet__short-info">${item.shortInfo}</p>
            </div>

            <button class="pet__page btn gradient">Переглянути</button>
          </a>
        `;

        this.cardHolder.insertAdjacentHTML('beforeend', cardHtml);
      }
    });
  }
}
