import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../config/config';

export const getStoreItems = async () => {
  const icecreamRef = collection(db, 'ice-cream');
  const snapshot = await getDocs(icecreamRef);
  const docArr = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(docArr);
  return docArr;
};

export const favouriteSubscription = (callback, setStatus) => {
  setStatus('LOADING');
  const storeRef = collection(db, 'ice-cream');
  const q = query(storeRef, where('favourited', '==', true));
  const unsub = onSnapshot(q, (querySnapshot) => {
    const favourites = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setStatus('SUCCESS');
    callback(favourites);
  });
  return unsub;
};

export const storeSubscription = (callback, setStatus) => {
  setStatus('LOADING');
  const storeRef = collection(db, 'ice-cream');
  const unsub = onSnapshot(storeRef, (snapshot) => {
    const storeData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setStatus('SUCCESS');
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

export const findStoreItem = async (id) => {
  const icecreamRef = collection(db, 'ice-cream');
  const q = query(icecreamRef, where('__name__', '==', id));
  const snapshot = await getDocs(q);
  if (snapshot.empty) {
    throw new Error('No item matches this ID');
  }
  const docArr = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return docArr[0];
};
