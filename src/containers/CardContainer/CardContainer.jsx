import classes from './CardContainer.module.scss';
import { Link } from 'react-router';
import { useState } from 'react';
import { increaseCartAmount } from '../../services/transaction-services';
const CardContainer = ({ storeItem }) => {
  let price = storeItem.price.medium;
  price = price.toFixed(2);
  price = '$' + price;
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('PENDING');
  const addToCart = () => {
    setFetchStatus('LOADING');
    try {
      increaseCartAmount(storeItem.id, 'large', 1);
      setFetchStatus('SUCCESS');
    } catch (e) {
      setError(e);
      setFetchStatus('FAILURE');
    }
  };
  return (
    <div className={classes.container}>
      <span className={classes.wrapper}>
        {fetchStatus === 'PENDING' && (
          <button onClick={addToCart}>Add to Cart</button>
        )}
        {fetchStatus === 'LOADING' && <button disabled>Loading...</button>}
        {fetchStatus === 'SUCCESS' && <button disabled>Added to cart!</button>}
        {fetchStatus === 'FAILURE' && (
          <>
            <button disabled>Error</button> <p>{error}</p>
          </>
        )}
        <p>{price}</p>
        <h2>{storeItem.flavour}</h2>
        <Link to={`/items/${storeItem.id}`}>
          <img
            className={classes.picture}
            src={storeItem.url}
            alt={`${storeItem.flavour}_flavour`}
          />
        </Link>
      </span>
    </div>
  );
};

export default CardContainer;
