import classes from './HomePage.module.scss';
import Carousel from '../../containers/Carousel/Carousel';
import { getStoreItems } from '../../services/store-services';
import { getCartItems, getItemByRef } from '../../services/cart-services';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
import { Link } from 'react-router';
const HomePage = () => {
  const { storeDB, storeStatus } = useContext(StoreContext);
  const favItems = storeDB.reduce((acc, curr) => {
    if (curr.favourited) {
      acc.push(curr);
    }
    console.log(curr);
    return acc;
  }, []);
  const doStuff = () => {};
  return (
    <>
      {storeStatus === 'SUCCESS' && (
        <section className={classes.container}>
          <h1>This is the home page</h1>
          <button onClick={doStuff}>Do some stuff</button>
          <Link to={'/items/hojicha'}>Hoi</Link>
          <Carousel favItems={favItems} />
          <h2>Shop Items</h2>
          <div className={classes.category_link__container}>
            <Link to={'/categories/classics'}>Our Classics</Link>
            <Link to={'/categories/deluxe'}>Our Deluxe Range</Link>
            <Link to={'/categories/all'}>All Products</Link>
          </div>
        </section>
      )}
    </>
  );
};

export default HomePage;
