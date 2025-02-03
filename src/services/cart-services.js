import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../config/config';

export const getCartItems = async () => {
  const cartRef = collection(db, 'eshop-cart');
  const snapshot = await getDocs(cartRef);
  const docArr = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return docArr;
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
