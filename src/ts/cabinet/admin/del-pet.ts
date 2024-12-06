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
      // Delete the pet from Firestore
      const petRef = doc(db, 'pats', this.petId);
      await deleteDoc(petRef);

      // Delete both images if they exist in Firebase Storage
      if (this.imgPath) {
        await this.deleteImageFromStorage(this.imgPath);
      }
      if (this.imgWebPPath) {
        await this.deleteImageFromStorage(this.imgWebPPath);
      }

      // Optionally, update the UI after deletion
      this.updateUIAfterDelete();
    } catch (error) {
      console.error('Error deleting pet: ', error);
    }
  }

  async deleteImageFromStorage(imagePath: string) {
    try {
      // Create a reference to the image in Firebase Storage
      const imageRef = ref(storage, imagePath);

      // Delete the image from Firebase Storage
      await deleteObject(imageRef);
      console.log(`Image ${imagePath} deleted successfully from Firebase Storage`);
    } catch (error) {
      console.error(`Error deleting image ${imagePath}: `, error);
    }
  }

  updateUIAfterDelete() {
    // Remove the pet from the DOM by its ID
    const petElement = document.querySelector(`.pet.${this.petId}`);
    if (petElement) {
      petElement.remove();
    }
  }
}
