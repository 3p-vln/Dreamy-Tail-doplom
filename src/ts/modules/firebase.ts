import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBoxOrbSzHzbULXC1XsOms26ud7xrQZ-hU',
  authDomain: 'dreamy-tail.firebaseapp.com',
  projectId: 'dreamy-tail',
  storageBucket: 'dreamy-tail.firebasestorage.app',
  messagingSenderId: '958903230334',
  appId: '1:958903230334:web:484d61765f20c1fbcbdd2f',
  measurementId: 'G-SVBT9JPP4F',
};

const app = initializeApp(firebaseConfig);
const secondaryApp = initializeApp(firebaseConfig, 'Secondary');
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export default app;
export { auth, db, storage, secondaryApp };
