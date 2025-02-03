// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAk03oPjclWIhJ2Z4jvUroJQq-Y-dbLVfI',
  authDomain: 'firestore-bruges-proj.firebaseapp.com',
  projectId: 'firestore-bruges-proj',
  storageBucket: 'firestore-bruges-proj.firebasestorage.app',
  messagingSenderId: '139023207551',
  appId: '1:139023207551:web:89a7df7447ec1b4b42c34a',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
