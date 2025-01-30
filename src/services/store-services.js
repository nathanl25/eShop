import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../config/config';

export const getStoreItems = async () => {
  const icecreamRef = collection(db, 'ice-cream');
  const snapshot = await getDocs(icecreamRef);
  const docArr = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //   console.log(docArr);
  return docArr;
};

export const storeSubscription = (callback) => {
  const storeRef = collection(db, 'ice-cream');
  const unsub = onSnapshot(storeRef, (snapshot) => {
    const storeData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(storeData);
  });
  return unsub;
};

export const filterStoreCategory = async (category) => {
  const icecreamRef = collection(db, 'ice-cream');
  const q = query(icecreamRef, where('categories', 'array-contains', category));
  console.log(category);
  console.log(q);
  const snapshot = await getDocs(q);
  const docArr = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(docArr);
  return docArr;
};
