
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAA5u242Cju3ezKvWyxMV_jtGx9g6Qa0ck",
  authDomain: "fir-testing-58fbd.firebaseapp.com",
  projectId: "fir-testing-58fbd",
  storageBucket: "fir-testing-58fbd.appspot.com",
  messagingSenderId: "630084409964",
  appId: "1:630084409964:web:c475f85654c5d2da099649",
  measurementId: "G-95H3TK7QY4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
