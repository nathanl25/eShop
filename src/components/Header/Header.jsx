import classes from './Header.module.scss';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
import { NavLink } from 'react-router';
// import {
//   removeCartItem,
//   increaseCartAmount,
//   decreaseCartAmount,
// } from '../../services/transaction-services';
const Header = () => {
  const linkStyles = ({ isActive }) => {
    return isActive ? `${classes.link} ${classes.link_active}` : classes.link;
  };

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
    <nav>
      <div className={classes.container}>
        <div className={classes.wrapper}> </div>
        {/* <h1>Poopity Scoopity</h1>
         */}
        <div className={classes.wrapper}>
          <NavLink className={classes.link} to="/">
            <h1>Poopity Scoopity</h1>
          </NavLink>
        </div>
        <div className={classes.wrapper}>
          <NavLink className={linkStyles} to="/cart">
            <h1>Cart ({cartDB.length})</h1>
          </NavLink>
        </div>
      </div>
      {/* {cartStatus === 'PENDING' && <h2>Pending</h2>}
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
        )} */}
    </nav>
  );
};

export default Header;
