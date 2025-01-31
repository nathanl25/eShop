import classes from './Header.module.scss';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
import {
  removeCartItem,
  increaseCartAmount,
  decreaseCartAmount,
} from '../../services/transaction-services';
const Header = () => {
  const { cartDB, cartStatus } = useContext(StoreContext);
  console.log(cartDB);
  console.log(cartStatus);
  const deleteItem = () => {
    console.log('deleting');
    const toDelete = cartDB[0];
    console.log(toDelete);
    removeCartItem(toDelete);
  };
  const addItem = () => {
    console.log('adding test Value');
    increaseCartAmount('matcha', 'small', 1);
  };
  const decItem = () => {
    console.log('decreasing cart Value');
    const toDecrease = cartDB[1];
    decreaseCartAmount(toDecrease);
  };
  return (
    <>
      <div>
        <h1>Header</h1>
        {cartStatus === 'PENDING' && <h2>Pending</h2>}
        {cartStatus === 'LOADING' && <h2>Loading</h2>}
        {cartStatus === 'SUCCESS' && <h2>{cartDB[0].store_id}</h2>}
        {cartStatus === 'SUCCESS' && (
          <button onClick={deleteItem}>Delete item 0</button>
        )}
        {cartStatus === 'SUCCESS' && (
          <button onClick={addItem}>Add item Test</button>
        )}
        {cartStatus === 'SUCCESS' && (
          <button onClick={decItem}>Decrease item Test</button>
        )}
      </div>
    </>
  );
};

export default Header;
