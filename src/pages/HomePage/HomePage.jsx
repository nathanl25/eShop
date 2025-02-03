import classes from './HomePage.module.scss';
import Carousel from '../../containers/Carousel/Carousel';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
import { Link } from 'react-router';
const HomePage = () => {
  const { storeStatus } = useContext(StoreContext);
  return (
    <>
      {storeStatus === 'SUCCESS' && (
        <section className={classes.container}>
          <h1 className={classes.heading}>Artisinal Ice-Cream</h1>
          <p className={classes.subheading}>
            Indulge in our handcrafted flavors, made with the finest
            ingredients.
          </p>
          <p className={classes.altsheading}>FEATURED ITEMS</p>
          <Carousel />
          <p className={classes.altsheading}>Explore Our Range</p>
          <div className={classes.category_link__container}>
            <Link to={'/categories/classics'}>
              <h2 className={`${classes.heading} ${classes.link}`}>
                Our Classics
              </h2>
            </Link>
            <Link to={'/categories/deluxe'}>
              <h2 className={`${classes.heading} ${classes.link}`}>
                Our Deluxe Range
              </h2>
            </Link>
            <Link to={'/categories/all'}>
              <h2 className={`${classes.heading} ${classes.link}`}>
                All Products
              </h2>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default HomePage;
