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
  runTransaction,
  //   transaction,
} from 'firebase/firestore';
import { db } from '../config/config';

export const removeCartItem = async (cartItem) => {
  const cartRef = doc(db, 'eshop-cart', cartItem.id);
  const storeRef = doc(db, 'ice-cream', cartItem.store_id);
  await runTransaction(db, async (transaction) => {
    const cartDoc = await transaction.get(cartRef);
    if (!cartDoc.exists()) {
      throw new Error(
        'Item does not exist in cart database, could not be deleted'
      );
    }
    const storeDoc = await transaction.get(storeRef);
    if (!storeDoc.exists()) {
      throw new Error(
        'Item does not exist in store database, could not be deleted'
      );
    }
    const variant = cartDoc.data().size;
    const cartAmount = cartDoc.data().quantity;
    const newTotal = storeDoc.data().quantity[variant] + cartAmount;
    transaction.update(storeRef, { [`quantity.${variant}`]: newTotal });
    transaction.delete(cartRef);
  });
};

export const increaseCartAmount = async (storeId, variant, amount) => {
  const storeRef = doc(db, 'ice-cream', storeId);
  const cartRef = doc(db, 'eshop-cart', `${storeId}_${variant}`);
  await runTransaction(db, async (transaction) => {
    const storeDoc = await transaction.get(storeRef);
    const cartDoc = await transaction.get(cartRef);
    let cartAmount = 0;
    if (!storeDoc.exists()) {
      throw new Error(
        'Item does not exist in store database, could not be deleted'
      );
    }
    if (cartDoc.exists()) {
      cartAmount = cartDoc.data().quantity;
    }
    const newStoreAmount = storeDoc.data().quantity[variant] - amount;
    if (newStoreAmount < 0) {
      throw new Error(
        'Cannot add item amount to cart, not enough items in stock'
      );
    }
    transaction.update(storeRef, { [`quantity.${variant}`]: newStoreAmount });
    transaction.set(cartRef, {
      store_id: storeId,
      size: variant,
      quantity: amount + cartAmount,
    });
  });
};

export const decreaseCartAmount = async (cartItem) => {
  const cartRef = doc(db, 'eshop-cart', cartItem.id);
  const storeRef = doc(db, 'ice-cream', cartItem.store_id);
  await runTransaction(db, async (transaction) => {
    const cartDoc = await transaction.get(cartRef);
    if (!cartDoc.exists()) {
      throw new Error(
        'Item does not exist in cart database, could not be deleted'
      );
    }
    const storeDoc = await transaction.get(storeRef);
    if (!storeDoc.exists()) {
      throw new Error(
        'Item does not exist in store database, could not be deleted'
      );
    }
    const newCartAmount = cartDoc.data().quantity - 1;
    const variant = cartDoc.data().size;
    const newTotal = storeDoc.data().quantity[variant] + 1;
    transaction.update(storeRef, { [`quantity.${variant}`]: newTotal });
    if (newCartAmount === 0) {
      transaction.delete(cartRef);
    } else {
      transaction.update(cartRef, { quantity: newCartAmount });
    }
  });
};
