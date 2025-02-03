import classes from './Carousel.module.scss';
import CarouselItem from '../../components/CarouselItem/CarouselItem';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
const Carousel = () => {
  const { carousel, carouselStatus, carouselDisplay, setCarouselDisplay } =
    useContext(StoreContext);
  const updateDisplay = (e) => {
    const offset = Number(e.target.value);
    const copy = carouselDisplay.map((value) => {
      const newStart = value + offset;
      const length = carousel.length;
      return (newStart + length) % length;
    });
    setCarouselDisplay(copy);
  };
  return (
    <>
      {carouselStatus === 'LOADING' && <h1>Loading...</h1>}
      {carouselDisplay && carouselStatus === 'SUCCESS' && (
        <section className={classes.container}>
          {carouselDisplay.map((value, index) => {
            if (index === 1) {
              return (
                <CarouselItem
                  variant={'center'}
                  carouselAction={updateDisplay}
                  key={carousel[value].id}
                  id={carousel[value].id}
                  item={carousel[value]}
                />
              );
            }
          })}
        </section>
      )}
    </>
  );
};

export default Carousel;
