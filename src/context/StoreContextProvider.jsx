import { createContext } from 'react';
import { storeSubscription } from '../services/store-services';
import { cartSubscription } from '../services/cart-services';
import { useEffect, useState } from 'react';
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartDB, setCartDB] = useState([]);
  const [cartStatus, setCartStatus] = useState('PENDING');
  useEffect(() => {
    const cartUnsub = cartSubscription(setCartDB, setCartStatus);
    return () => cartUnsub();
  }, []);
  const [storeDB, setStoreDB] = useState([]);
  const [storeStatus, setStoreStatus] = useState('PENDING');
  useEffect(() => {
    const storeUnsub = storeSubscription(setStoreDB, setStoreStatus);
    return () => storeUnsub();
  }, []);
  return (
    <StoreContext.Provider
      value={{
        storeDB,
        cartDB,
        cartStatus,
        storeStatus,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
