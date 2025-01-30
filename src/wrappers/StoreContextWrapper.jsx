import { BrowserRouter, Routes, Route } from 'react-router';
import { useState } from 'react';
import Header from '../components/Header/Header';
import ItemPage from '../pages/ItemPage/ItemPage';
import CartPage from '../pages/CartPage/CartPage';
import { getStoreItems } from '../services/store-services';
import { getCartItems } from '../services/cart-services';
import FilteredItemsDisplay from '../pages/FilteredItemsDisplay/FilteredItemsDisplay';
import HomePage from '../pages/HomePage/HomePage';
import { StoreContext } from '../context/StoreContextProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
export const StoreContextWrapper = () => {
  //   const { setStore, setStoreFetch, setError } = useContext(StoreContext);

  //   useEffect(() => {
  //     setStoreFetch('LOADING');
  //     getStoreItems()
  //       .then((data) => {
  //         setStoreFetch('SUCCESS');
  //         setStore(data);
  //       })
  //       .catch((e) => {
  //         setError(e);
  //         setStoreFetch('FAILURE');
  //       });
  //   }, []);
  //   console.log(storeItems);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/categories/:category"
            element={<FilteredItemsDisplay />}
          />
          <Route path="/items/:id" element={<ItemPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
