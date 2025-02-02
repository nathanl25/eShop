import classes from './Carousel.module.scss';
import { useState } from 'react';
import CarouselItem from '../../components/CarouselItem/CarouselItem';
import { setCarousel } from './carouselLogic';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
import { useQuery } from '../../hooks/useQuery';
import { getFavouriteItems } from '../../services/store-services';
const Carousel = ({}) => {
  const {
    storeStatus,
    carousel,
    carouselStatus,
    carouselDisplay,
    setCarouselDisplay,
  } = useContext(StoreContext);
  // const favItems = carouselItems.data;
  const [display, setDisplay] = useState([0, 1, 2]);
  const updateDisplay = (e) => {
    console.log(e);
    const offset = Number(e.target.value);
    const copy = carouselDisplay.map((value) => {
      const newStart = value + offset;
      const length = carousel.length;
      return (newStart + length) % length;
    });
    setCarouselDisplay(copy);
  };
  // console.log(favItems);
  // console.log(favItems[0]);
  // console.log(carouselDisplay);
  // console.log(carouselDisplay[0]);
  // console.log(favItems[carouselDisplay[0]]);
  // console.log(favItems[display[1]].id);
  // console.log(carousel);
  return (
    <>
      {carouselStatus === 'LOADING' && <h1>Loading...</h1>}
      {carouselDisplay && carouselStatus === 'SUCCESS' && (
        <section className={classes.container}>
          {/* <CarouselItem
            variant={'left'}
            carouselAction={updateDisplay}
            itemFav={carousel[carouselDisplay[0]]}
            // key={favItems[display[0].id]}
            id={carousel[carouselDisplay[0]].id}
          />
          <CarouselItem
            variant={'left'}
            carouselAction={updateDisplay}
            itemFav={carousel[carouselDisplay[1]]}
            // key={favItems[display[0].id]}
            id={carousel[carouselDisplay[1]].id}
          />
          <CarouselItem
            variant={'right'}
            carouselAction={updateDisplay}
            itemFav={carousel[carouselDisplay[2]]}
            // key={favItems[display[0].id]}
            id={carousel[carouselDisplay[2]].id}
          /> */}
          {carouselDisplay.map((value) => {
            console.log(value);
            console.log(carousel[0]);
            switch (value) {
              case 0:
                return (
                  <CarouselItem
                    variant={'left'}
                    carouselAction={updateDisplay}
                    // itemFav={curr}
                    key={carousel[value].id}
                    id={carousel[value].id}
                  />
                );
              case 1:
                return (
                  <CarouselItem
                    variant={'center'}
                    carouselAction={updateDisplay}
                    // itemFav={curr}
                    key={carousel[value].id}
                    id={carousel[value].id}
                  />
                );
              case 2:
                return (
                  <CarouselItem
                    variant={'right'}
                    carouselAction={updateDisplay}
                    // itemFav={curr}
                    key={carousel[value].id}
                    id={carousel[value].id}
                  />
                );
              default:
                break;
            }
          })}
          {/* {carousel.reduce((acc, curr, index) => {
            switch (index) {
              case carouselDisplay[0]:
                // console.log(curr);
                // console.log(index);
                // console.log(carouselDisplay[0]);
                acc.push(
                  <CarouselItem
                    variant={'left'}
                    carouselAction={updateDisplay}
                    itemFav={curr}
                    key={carousel[carouselDisplay[0]].id}
                    id={carousel[carouselDisplay[0]].id}
                  />
                );
                break;
              case carouselDisplay[1]:
                acc.push(
                  <CarouselItem
                    variant={'center'}
                    carouselAction={updateDisplay}
                    itemFav={curr}
                    key={carousel[carouselDisplay[1]].id}
                    id={carousel[carouselDisplay[1]].id}
                  />
                );
                break;
              case carouselDisplay[2]:
                acc.push(
                  <CarouselItem
                    variant={'right'}
                    carouselAction={updateDisplay}
                    itemFav={curr}
                    key={carousel[carouselDisplay[2]].id}
                    id={carousel[carouselDisplay[2]].id}
                  />
                );
                break;
              default:
                break;
            }
            // console.log(acc);
            return acc;
          }, [])} */}
        </section>
      )}
    </>
  );
};

export default Carousel;
