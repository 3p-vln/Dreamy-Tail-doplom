import { db } from '../modules/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { AddPetToUser } from './buy-pet';

export class RenderPet {
  private cardHolder: HTMLElement;
  private patsArr: {
    id: string;
    img: string;
    imgWebP: string;
    name: string;
    fullInfo: string;
    view: string;
    breed: string;
    age: string;
  }[];
  private pet: {
    id: string;
    img: string;
    imgWebP: string;
    name: string;
    fullInfo: string;
    view: string;
    breed: string;
    age: string;
  }[];
  private petId: string;

  constructor(cardHolder: string) {
    this.cardHolder = document.querySelector(cardHolder) as HTMLElement;
    this.patsArr = [];
    this.pet = [];
    const urlParams = new URLSearchParams(window.location.search);
    this.petId = urlParams.get('id') || '';

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
          id: doc.id || '',
          img: data.img || '',
          imgWebP: data.imgWebP,
          name: data.name || 'No Name',
          fullInfo: data.fullInfo || '',
          view: data.view || '',
          breed: data.breed || '',
          age: data.age || '',
        });
      });

      const foundPet = this.patsArr.find((item) => item.id === this.petId);
      if (foundPet) {
        this.pet.push(foundPet);
      }

      console.log(this.pet);
      this.renderPat(this.pet);
    } catch (error) {
      console.error(error);
    }
  }

  renderPat(pat: any[]) {
    this.cardHolder.innerHTML = '';

    pat.forEach((item) => {
      const cardHtml = `
            <div class="pet-info__img">
                <picture>
                    <source srcset=${item.imgWebP} type="image/webp" />
                    <img src="${item.img}" alt="pet" />
                </picture>            
            </div>
            <div class="pet-info__info info">
                <h2 class="info__view subtitle">${item.view}</h2>
                <h3 class="info__name title">${item.name}</h3>

                <div class="info__breed-and-age">
                    <p class="info__breed">Порода: <span>${item.breed}</span></p>
                    <p class="info__age">Вік: <span>${item.age}</span></p>
                </div>

                <p class="info__full">${item.fullInfo}</p>

                <button class="info__buy btn gradient">Взяти під опікунство</button>
            </div>
      `;

      this.cardHolder.insertAdjacentHTML('beforeend', cardHtml);
    });

    new AddPetToUser();
  }
}
