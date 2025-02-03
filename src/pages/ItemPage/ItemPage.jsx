import classes from './ItemPage.module.scss';
import { useParams } from 'react-router';
import { useState } from 'react';
import { findStoreItem } from '../../services/store-services';
import { useQuery } from '../../hooks/useQuery';
import { increaseCartAmount } from '../../services/transaction-services';
const ItemPage = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [variant, setVariant] = useState('medium');
  const { data, error, fetch } = useQuery({
    fetchFn: findStoreItem,
    args: [id],
  });

  const [transactionStatus, setTransactionStatus] = useState('IDLE');
  const [errMessage, setErrMessage] = useState(null);
  const addToCart = () => {
    setTransactionStatus('LOADING');
    try {
      increaseCartAmount(id, variant, count);
      setTransactionStatus('SUCCESS');
    } catch (e) {
      setTransactionStatus('FAILURE');
      setErrMessage(e);
    }
  };
  let price;
  if (fetch === 'SUCCESS') {
    price = `$${data.price[variant] * count}.00`;
  }
  let oob = false;
  switch (count) {
    case 1:
      oob = true;
      break;
    default:
      oob = false;
      break;
  }
  let disabledStatus = false;
  switch (transactionStatus) {
    case 'IDLE':
    case 'FAILURE':
    case 'SUCCESS':
      disabledStatus = false;
      break;
    case 'LOADING':
      disabledStatus = true;
      break;
  }
  return (
    <div className={classes.container}>
      {fetch === 'LOADING' && <p>loading...</p>}
      {fetch === 'FAILURE' && <p>{error.message}</p>}
      {fetch === 'SUCCESS' && (
        <section className={classes.wrapper}>
          <div className={classes.half}>
            <img className={classes.picture} src={data.url} alt="" />
          </div>
          <div className={`${classes.half} ${classes.info}`}>
            <h1>{data.flavour}</h1>
            <h2>{price}</h2>
            <p className={classes.description}>{data.description}</p>

            <div className={classes.selector}>
              <label htmlFor="variant">Size</label>
              <select
                defaultValue={'medium'}
                name="variant-selector"
                id="variant"
                onChange={(e) => {
                  setVariant(e.target.value);
                }}
              >
                <option value={'small'}>Small</option>
                <option value={'medium'}>Medium</option>
                <option value={'large'}>Large</option>
              </select>
            </div>

            <div className={classes.counter}>
              <button disabled={oob} onClick={() => setCount(count - 1)}>
                -
              </button>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>

            <button
              className={classes.cart__button}
              disabled={disabledStatus}
              onClick={addToCart}
            >
              Add to Cart
            </button>

            {transactionStatus === 'FAILURE' && (
              <>
                <p>{errMessage.message}</p>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default ItemPage;
