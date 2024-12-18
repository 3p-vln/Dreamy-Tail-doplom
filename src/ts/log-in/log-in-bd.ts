import { db } from '../modules/firebase'; // Adjust the import path as needed
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';

export class AuthHandler {
  private auth = getAuth();
  private emailInput: HTMLInputElement;
  private passwordInput: HTMLInputElement;

  constructor() {
    this.emailInput = document.getElementById('email') as HTMLInputElement;
    this.passwordInput = document.getElementById('password') as HTMLInputElement;

    this.handleLogin();
  }

  private async fetchUsers() {
    const userData = await getDocs(collection(db, 'users'));
    const allUsers: { id: string; uid: string; role: string }[] = [];
    userData.forEach((doc) => {
      allUsers.push({
        id: doc.id,
        uid: doc.data().uid,
        role: doc.data().role,
      });
    });
    return allUsers;
  }

  private async handleLogin() {
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const userUid = userCredential.user.uid;

      const allUsers = await this.fetchUsers();
      const currentUser = allUsers.find((user) => user.uid === userUid);

      if (currentUser) {
        document.cookie = `UID=${userUid}`;
        if (currentUser.role === 'admin') {
          window.location.href = '/Dreamy-Tail-doplom/cabinet-admin.html?tab=%23main-info';
        } else {
          window.location.href = '/Dreamy-Tail-doplom/cabinet-user.html?tab=%23main-info';
        }
      } else {
        alert('Користувач не зареєстрований');
      }
    } catch (error) {
      this.showLoginError();
    }
  }

  private showLoginError() {
    let errorMessage = 'Невірно введені дані';
    alert(errorMessage);
  }
}
