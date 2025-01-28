import classes from './Carousel.module.scss';
import { useState } from 'react';
import CarouselItem from '../../components/CarouselItem/CarouselItem';
import { setCarousel } from './carouselLogic';
const Carousel = ({ items = ['a', 'b', 'c', 'd', 'e'], mainIndex = 1 }) => {
  const [display, setDisplay] = useState([0, 1, 2]);
  const updateDisplay = (e) => {
    console.log(e);
    const offset = Number(e.target.value);
    const copy = display.map((value) => {
      const newStart = value + offset;
      const length = items.length;
      return (newStart + length) % length;
    });
    setDisplay(copy);
  };
  return (
    <>
      <section className={classes.container}>
        {/* <div className={classes.side__wrapper}>
          <button value={-1} onClick={updateDisplay}>
            {items[display[0]]}
          </button>
        </div> */}
        <CarouselItem variant={'left'} carouselAction={updateDisplay}>
          {items[display[0]]}
        </CarouselItem>
        <div className={classes.main__wrapper}>
          <button value={0} onClick={updateDisplay}>
            {items[display[1]]}
          </button>
        </div>
        <CarouselItem variant={'right'} carouselAction={updateDisplay}>
          {items[display[2]]}
        </CarouselItem>
      </section>
    </>
  );
};

export default Carousel;
