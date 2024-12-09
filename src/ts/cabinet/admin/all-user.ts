import { collection, doc, getDocs, deleteDoc, updateDoc } from 'firebase/firestore';
import { getAuth, deleteUser } from 'firebase/auth';
import { db } from '../../modules/firebase';
import { SendMassage } from './send-massage';

export class UserRenderer {
  private container: HTMLElement;

  constructor(containerSelector: string) {
    const container = document.querySelector(containerSelector) as HTMLElement;
    this.container = container;

    this.init();
  }

  init() {
    this.fetchAndRenderUsers();
  }

  public async fetchAndRenderUsers(): Promise<void> {
    try {
      const userData = await this.fetchUsersFromDatabase();
      this.renderUsers(userData);
    } catch (error) {
      console.error('Error fetching or rendering users:', error);
    }
  }

  private async fetchUsersFromDatabase(): Promise<{ uid: string; id: string; name: string; surname: string; phone: string; email: string; role: string }[]> {
    const userData = await getDocs(collection(db, 'users'));
    const allUsers: { uid: string; id: string; name: string; surname: string; phone: string; email: string; role: string }[] = [];
    userData.forEach((doc) => {
      allUsers.push({
        uid: doc.data().uid,
        id: doc.id,
        name: doc.data().name,
        surname: doc.data().surname,
        phone: doc.data().phone,
        email: doc.data().email,
        role: doc.data().role,
      });
    });
    return allUsers;
  }

  private renderUsers(users: { uid: string; id: string; name: string; surname: string; phone: string; email: string; role: string }[]): void {
    this.container.innerHTML = '';
    users.forEach((user) => {
      const userElement = document.createElement('div');
      userElement.className = 'all-users__one-user one-user';

      userElement.innerHTML = `
          <p class="one-user__item uid">UID: <span>${user.uid}</span></p>
          <p class="one-user__item id">ID: <span>${user.id}</span></p>
          <p class="one-user__item user-name">Ім'я: <span>${user.name}</span></p>
          <p class="one-user__item user-surname">Фамілія: <span>${user.surname}</span></p>
          <p class="one-user__item user-email">Пошта: <span>${user.email}</span></p>
          <p class="one-user__item user-phone">Номер телефону: <span>${user.phone}</span></p>
          <p class="one-user__item user-role">Роль: <span>${user.role}</span></p>
          <div class="one-user__item btns">
            <button class="btns__write btn gradient" data-id="${user.id}">Написати повідолення</button>
            <button class="btns__edit-role btn gradient" data-id="${user.id}" data-role="${user.role}">Зміна ролі</button>
            <button class="btns__remove btn gradient" data-id="${user.id}" data-uid="${user.uid}">Видалити</button>
          </div>
        `;

      this.container.appendChild(userElement);
    });

    this.addEventListeners();
  }

  private addEventListeners(): void {
    this.container.addEventListener('click', async (event) => {
      const target = event.target as HTMLElement;

      if (target.classList.contains('btns__edit-role')) {
        const userId = target.dataset.id;
        const currentRole = target.dataset.role;

        if (userId && currentRole) {
          await this.handleRoleChange(userId, currentRole);
        }
      }

      if (target.classList.contains('btns__remove')) {
        const userId = target.dataset.id;
        const userUid = target.dataset.uid;

        if (userId && userUid) {
          const confirmDelete = confirm('Ви впевнені, що хочете видалити цього користувача?');
          if (confirmDelete) {
            await this.handleUserDeletion(userId, userUid);
          }
        }
      }

      if (target.classList.contains('btns__write')) {
        const userId = target.dataset.id;

        if (userId) {
          new SendMassage(userId, '#form-massage');
        }
      }
    });
  }

  private async handleRoleChange(userId: string, currentRole: string): Promise<void> {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';

    try {
      const userDocRef = doc(db, 'users', userId);
      await updateDoc(userDocRef, { role: newRole });

      this.fetchAndRenderUsers();
    } catch (error) {
      alert('Не вдалося змінити роль. Спробуйте знову.');
    }
  }

  private async handleUserDeletion(userId: string, userUid: string): Promise<void> {
    try {
      const userDocRef = doc(db, 'users', userId);
      await deleteDoc(userDocRef);

      const auth = getAuth();
      const userToDelete = auth.currentUser;
      if (userToDelete && userToDelete.uid === userUid) {
        await deleteUser(userToDelete);
      }

      alert('Користувач успішно видалений.');
      this.fetchAndRenderUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Не вдалося видалити користувача. Спробуйте знову.');
    }
  }
}
