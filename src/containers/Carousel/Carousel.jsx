import classes from './Carousel.module.scss';
import { useState } from 'react';
import CarouselItem from '../../components/CarouselItem/CarouselItem';
import { setCarousel } from './carouselLogic';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
import { useQuery } from '../../hooks/useQuery';
import { getFavouriteItems } from '../../services/store-services';
const Carousel = ({ favItems }) => {
  const { storeStatus, storeDB } = useContext(StoreContext);

  const [display, setDisplay] = useState([0, 1, 2]);
  const updateDisplay = (e) => {
    console.log(e);
    const offset = Number(e.target.value);
    const copy = display.map((value) => {
      const newStart = value + offset;
      const length = favItems.length;
      return (newStart + length) % length;
    });
    setDisplay(copy);
  };
  console.log(favItems[display[1]].id);
  return (
    <>
      {storeStatus === 'LOADING' && <h1>Loading...</h1>}
      {storeStatus === 'SUCCESS' && (
        <section className={classes.container}>
          <CarouselItem
            variant={'left'}
            carouselAction={updateDisplay}
            itemFav={favItems[display[0]]}
            // key={favItems[display[0].id]}
            id={favItems[display[0]].id}
          />
          <CarouselItem
            variant={'left'}
            carouselAction={updateDisplay}
            itemFav={favItems[display[1]]}
            // key={favItems[display[0].id]}
            id={favItems[display[1]].id}
          />
          <CarouselItem
            variant={'right'}
            carouselAction={updateDisplay}
            itemFav={favItems[display[2]]}
            // key={favItems[display[0].id]}
            id={favItems[display[2]].id}
          />
        </section>
      )}
    </>
  );
};

export default Carousel;
