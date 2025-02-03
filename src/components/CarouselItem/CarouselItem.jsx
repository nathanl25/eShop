import classes from './CarouselItem.module.scss';
import { Link } from 'react-router';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
const CarouselItem = ({ variant, carouselAction, item }) => {
  const { carouselStatus } = useContext(StoreContext);
  let buttonChar;
  let itemStyle;
  let buttonValue;
  switch (variant) {
    case 'left':
      itemStyle = `${classes.left}`;
      buttonChar = '<';
      buttonValue = 1;
      break;
    case 'right':
      itemStyle = `${classes.right}`;
      buttonChar = '>';
      buttonValue = -1;
      break;
    case 'center':
      itemStyle = `${classes.center}`;
      break;
    default:
      break;
  }
  return (
    <>
      {carouselStatus === 'SUCCESS' && (
        <div className={itemStyle}>
          <Link className={classes.img_wrap} to={`/items/${item.id}`}>
            <img src={item.url} alt="" />
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
