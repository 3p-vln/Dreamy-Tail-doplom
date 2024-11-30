import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';

export class RenderCards {
  private cardHolder: HTMLElement;
  private patsArr: {
    id: string;
    img: string;
    name: string;
    shortInfo: string;
    view: string;
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
          name: data.name || 'No Name',
          shortInfo: data.shortInfo || '',
          view: data.view || '',
        });
      });

      console.log(this.patsArr);
      this.renderPat(this.patsArr);
    } catch (error) {
      console.error(error);
    }
  }

  renderPat(pat: any[]) {
    this.cardHolder.innerHTML = '';

    pat.forEach((item) => {
      const cardHtml = `
        <a href="" class="list__item pet ${item.id}">
          <div class="pet__info">
            <div class="pet__viev">${item.view}</div>

            <div class="pet__img">
              <img src="${item.img}" alt="cat" />
            </div>

            <p class="pet__name">${item.name}</p>
            <p class="pet__short-info">${item.shortInfo}</p>
          </div>

          <button class="pet__page btn gradient">Переглянути</button>
        </a>
      `;

      this.cardHolder.insertAdjacentHTML('beforeend', cardHtml);
    });
  }
}
