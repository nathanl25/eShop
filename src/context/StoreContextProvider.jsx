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
  useEffect(() => {
    const cartUnsub = cartSubscription(setCartDB);
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
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
