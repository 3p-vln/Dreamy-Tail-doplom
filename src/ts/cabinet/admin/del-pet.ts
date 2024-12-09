import { db, storage } from '../../modules/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';

export class DeletePet {
  private petId: string;
  private imgPath: string;
  private imgWebPPath: string;

  constructor(petId: string, imgPath: string, imgWebPPath: string) {
    this.petId = petId;
    this.imgPath = imgPath;
    this.imgWebPPath = imgWebPPath;
    this.deletePetFromDB();
  }

  async deletePetFromDB() {
    try {
      const petRef = doc(db, 'pats', this.petId);
      await deleteDoc(petRef);

      if (this.imgPath) {
        await this.deleteImageFromStorage(this.imgPath);
      }
      if (this.imgWebPPath) {
        await this.deleteImageFromStorage(this.imgWebPPath);
      }

      this.updateUIAfterDelete();
    } catch (error) {
      console.error('Error deleting pet: ', error);
    }
  }

  async deleteImageFromStorage(imagePath: string) {
    try {
      const imageRef = ref(storage, imagePath);

      await deleteObject(imageRef);
    } catch (error) {
      console.error(`Error deleting image ${imagePath}: `, error);
    }
  }

  updateUIAfterDelete() {
    const petElement = document.querySelector(`.pet.${this.petId}`);
    if (petElement) {
      petElement.remove();
    }
  }
}
