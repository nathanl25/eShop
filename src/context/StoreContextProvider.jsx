import { createContext } from 'react';
import {
  storeSubscription,
  getFavouriteItems,
  favouriteSubscription,
} from '../services/store-services';
import { cartSubscription } from '../services/cart-services';
import { useEffect, useState } from 'react';
import { useQuery } from '../hooks/useQuery';
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

  const [carouselDisplay, setCarouselDisplay] = useState([0, 1, 2]);
  const [carousel, setCarousel] = useState([]);
  const [carouselStatus, setCarouselStatus] = useState('PENDING');
  useEffect(() => {
    const carouselUnsub = favouriteSubscription(setCarousel, setCarouselStatus);
    return () => carouselUnsub();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        storeDB,
        cartDB,
        cartStatus,
        storeStatus,
        carousel,
        carouselStatus,
        carouselDisplay,
        setCarouselDisplay,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
