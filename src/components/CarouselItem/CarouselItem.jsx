import classes from './CarouselItem.module.scss';

const CarouselItem = ({ variant, children, carouselAction }) => {
  return (
    <>
      {variant == 'left' && (
        <div className={classes.left}>
          <p onClick={carouselAction}>{children}</p>
          <button value={-1} onClick={carouselAction}>
            {'<'}
          </button>
        </div>
      )}
      {variant == 'right' && (
        <div className={classes.right}>
          <p onClick={carouselAction}>{children}</p>
          <button value={1} onClick={carouselAction}>
            {'>'}
          </button>
        </div>
      )}
      {variant == 'center' && (
        <div className={classes.center}>
          <p onClick={carouselAction}>{children}</p>
          <button onClick={carouselAction}>{'X'}</button>
        </div>
      )}
    </>
  );
};

export default CarouselItem;
