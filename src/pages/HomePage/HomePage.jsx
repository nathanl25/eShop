import classes from './HomePage.module.scss';
import Carousel from '../../containers/Carousel/Carousel';
import { getStoreItems } from '../../services/store-services';
import { getCartItems, getItemByRef } from '../../services/cart-services';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
import { Link } from 'react-router';
const HomePage = () => {
  const { storeDB } = useContext(StoreContext);
  console.log(storeDB);
  const doStuff = () => {};
  return (
    <>
      {storeDB && (
        <>
          <h1>This is the home page</h1>
          <button onClick={doStuff}>Do some stuff</button>
          <Link to={'/items/hojicha'}>Hoi</Link>
          <Carousel />
        </>
      )}
    </>
  );
};

export default HomePage;
