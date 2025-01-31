import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../config/config';

export const getCartItems = async () => {
  const cartRef = collection(db, 'eshop-cart');
  const snapshot = await getDocs(cartRef);
  const docArr = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //   console.log(docArr);
  return docArr;
};

export const getItemByRef = async (pointer) => {
  const snapshot = await getDoc(pointer);
  if (!snapshot.exists()) {
    throw new Error('Could not find item');
  }
  return { id: snapshot.id, ...snapshot.data() };
};

export const cartSubscription = (setData, setStatus) => {
  setStatus('LOADING');
  const cartRef = collection(db, 'eshop-cart');
  const unsub = onSnapshot(cartRef, (snapshot) => {
    const cartData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setStatus('SUCCESS');
    setData(cartData);
  });
  return unsub;
};
