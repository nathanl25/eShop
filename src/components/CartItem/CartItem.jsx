import classes from './CartItem.module.scss';
import { useContext } from 'react';
import {
  removeCartItem,
  increaseCartAmount,
  decreaseCartAmount,
} from '../../services/transaction-services';
import { StoreContext } from '../../context/StoreContextProvider';
import { Link } from 'react-router';
import { useState } from 'react';
const CartItem = ({ cartItem }) => {
  const { storeDB } = useContext(StoreContext);
  const storeItem = storeDB.find((item) => {
    return item.id === cartItem.store_id;
  });
  const [transactionStatus, setTransactionStatus] = useState('PENDING');
  const [error, setError] = useState(null);
  const decrementCart = () => {
    setTransactionStatus('LOADING');
    decreaseCartAmount(cartItem)
      .then(() => {
        setTransactionStatus('SUCCESS');
      })
      .catch((e) => {
        setError(e);
        setTransactionStatus('FAILURE');
      });
  };
  const incrementCart = () => {
    setTransactionStatus('LOADING');
    increaseCartAmount(storeItem.id, cartItem.size, 1)
      .then(() => {
        setTransactionStatus('SUCCESS');
      })
      .catch((e) => {
        setError(e);
        setTransactionStatus('FAILURE');
      });
  };
  const removeItem = () => {
    setTransactionStatus('LOADING');
    removeCartItem(cartItem)
      .then(() => {
        setTransactionStatus('SUCCESS');
      })
      .catch((e) => {
        setError(e);
        setTransactionStatus('FAILURE');
      });
  };
  let btnStatusClass;
  let disableButton = false;
  switch (transactionStatus) {
    case 'SUCCESS':
    case 'FAILURE':
    case 'PENDING':
      btnStatusClass = `${classes.adjuster_wrapper}`;
      disableButton = false;
      break;
    case 'LOADING':
      disableButton = true;
      btnStatusClass = `${classes.adjuster_wrapper} ${classes.disabled}`;
      break;
  }
  return (
    <div className={classes.wrapper}>
      <Link to={`/items/${storeItem.id}`}>
        <img className={classes.cart_img} src={storeItem.url} alt="" />
      </Link>
      <Link to={`/items/${storeItem.id}`}>
        <h1>
          {storeItem.flavour} - <span>{cartItem.size}</span>
        </h1>
      </Link>
      <div>
        <div></div>
        <div className={btnStatusClass}>
          <button disabled={disableButton} onClick={decrementCart}>
            -
          </button>
          <h2>{cartItem.quantity}</h2>
          <button disabled={disableButton} onClick={incrementCart}>
            +
          </button>
          <button disabled={disableButton} onClick={removeItem}>
            X
          </button>
        </div>
        <div>{transactionStatus === 'FAILURE' && <p>{error.message}</p>}</div>
      </div>
    </div>
  );
};

export default CartItem;
