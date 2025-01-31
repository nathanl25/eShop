import { createContext } from 'react';
import { getStoreItems, storeSubscription } from '../services/store-services';
import { getCartItems } from '../services/cart-services';
import { cartSubscription } from '../services/cart-services';
import { useEffect, useState } from 'react';
// import { useQuery } from '../hooks/useQuery';
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  //   const storeDB = useQuery({ fetchFn: getStoreItems });
  //   const cartDB = useQuery({ fetchFn: getCartItems });
  const [cartDB, setCartDB] = useState([]);
  const [cartStatus, setCartStatus] = useState('PENDING');
  useEffect(() => {
    const cartUnsub = cartSubscription(setCartDB, setCartStatus);
    return () => cartUnsub();
  }, []);
  const [storeDB, setStoreDB] = useState([]);
  useEffect(() => {
    const storeUnsub = storeSubscription(setStoreDB);
    return () => storeUnsub();
  }, []);
  return (
    <StoreContext.Provider
      value={{
        storeDB,
        cartDB,
        cartStatus,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
