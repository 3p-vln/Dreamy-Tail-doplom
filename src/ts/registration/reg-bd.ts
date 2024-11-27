import { auth, db } from '../modules/firebase'; // Adjust the import path as needed
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

export class AccountManager {
  private emailInputId: string;
  private passwordInputId: string;
  private nameInputId: string;
  private surnameInputId: string;
  private phoneInputId: string;

  constructor(emailInputId: string, passwordInputId: string, nameInputId: string, surnameInputId: string, phoneInputId: string) {
    this.emailInputId = emailInputId;
    this.passwordInputId = passwordInputId;
    this.nameInputId = nameInputId;
    this.surnameInputId = surnameInputId;
    this.phoneInputId = phoneInputId;
  }

  private getElementById(id: string): HTMLInputElement {
    const element = document.getElementById(id) as HTMLInputElement | null;
    if (!element) {
      throw new Error(`Element with id "${id}" not found.`);
    }
    return element;
  }

  //   private getElementsByClass(className: string): NodeListOf<HTMLLabelElement> {
  //     return document.querySelectorAll<HTMLLabelElement>(`.${className}`);
  //   }

  private async saveUserToDatabase(uid: string, name: string, surname: string, phone: string): Promise<void> {
    const userRef = await addDoc(collection(db, 'users'), { uid, name, surname, phone });
    console.log('Document written with ID: ', userRef.id);
    document.cookie = `UID=${uid}`;
  }

  //   private redirectToPage(role: string): void {
  //     if (role === 'customer') {
  //       window.location.href = '/Artist-NFT/client.html';
  //     } else {
  //       window.location.href = '/Artist-NFT/for-owner.html';
  //     }
  //   }

  public async createAccount(): Promise<void> {
    const email = this.getElementById(this.emailInputId).value;
    const password = this.getElementById(this.passwordInputId).value;
    const name = this.getElementById(this.nameInputId).value;
    const surname = this.getElementById(this.surnameInputId).value;
    const phone = this.getElementById(this.phoneInputId).value;

    console.log(email, password, name, surname, phone);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      await this.saveUserToDatabase(uid, name, surname, phone);
      console.log(uid);
      //   this.redirectToPage(role);
    } catch (error) {
      console.error('There was an error:', error);
      this.showLoginError(error);
    }
  }

  private showLoginError(error: unknown): void {
    // Implement a method to display the login error to the user
    console.error('Login error:', error);
  }
}
