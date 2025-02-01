import classes from './CarouselItem.module.scss';
import { Link } from 'react-router';
import { NavLink } from 'react-router';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
const CarouselItem = ({ variant, itemFav, carouselAction, id }) => {
  const { storeStatus } = useContext(StoreContext);
  // const id = itemFav.id;
  console.log(id);
  return (
    <>
      {storeStatus === 'SUCCESS' && variant === 'left' && (
        <div className={classes.left}>
          <NavLink to={`/items/${id}`}>
            <p onClick={carouselAction}>{id}</p>
          </NavLink>
          <button value={-1} onClick={carouselAction}>
            {'<'}
          </button>
        </div>
      )}
      {storeStatus === 'SUCCESS' && variant === 'right' && (
        <div className={classes.right}>
          <Link to={`/items/${id}`}>
            <p onClick={carouselAction}>{id}</p>
          </Link>

          <button value={1} onClick={carouselAction}>
            {'>'}
          </button>
        </div>
      )}
      {storeStatus === 'SUCCESS' && variant === 'center' && (
        <div className={classes.center}>
          <Link to={`/items/${id}`}>
            <p onClick={carouselAction}>{id}</p>
          </Link>
          <button onClick={carouselAction}>{'X'}</button>
        </div>
      )}
    </>
  );
};

export default CarouselItem;
