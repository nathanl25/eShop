import classes from './CarouselItem.module.scss';
import { Link } from 'react-router';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
const CarouselItem = ({ carouselAction, item }) => {
  const { carouselStatus } = useContext(StoreContext);

  return (
    <>
      {carouselStatus === 'LOADING' && <div className={classes.center}></div>}
      {carouselStatus === 'SUCCESS' && (
        <div className={classes.center}>
          <Link className={classes.img_wrap} to={`/items/${item.id}`}>
            {carouselStatus === 'SUCCESS' && <img src={item.url} alt="" />}
          </Link>
          <button
            className={classes.button_left}
            value={-1}
            onClick={carouselAction}
          >
            {'<'}
          </button>
          <button
            className={classes.button_right}
            value={1}
            onClick={carouselAction}
          >
            {'>'}
          </button>
          <div className={classes.caption}>
            <p>{item.flavour}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselItem;
