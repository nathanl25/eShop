import classes from './CartPage.module.scss';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
import CartItem from '../../components/CartItem/CartItem';
const CartPage = () => {
  const { cartDB, cartStatus, storeDB, storeStatus } = useContext(StoreContext);
  let total;
  if (cartStatus === 'SUCCESS' && storeStatus === 'SUCCESS') {
    total = cartDB.reduce((acc, curr) => {
      const variant = curr.size;
      const amount = curr.quantity;
      const itemId = curr.store_id;
      const storeItem = storeDB.find((value) => {
        return value.id === itemId;
      });
      const price = storeItem.price[variant];
      return (acc += price * amount);
    }, 0);
    total = `$${total}.00`;
  }
  return (
    <section className={classes.container}>
      {cartStatus === 'LOADING' && <h1>loading...</h1>}
      {cartStatus === 'SUCCESS' &&
        cartDB.map((item) => (
          <CartItem key={item.id} variant={'large'} cartItem={item} />
        ))}
      <div>
        <h4 className={classes.cart__total}>Total: {total}</h4>
      </div>
    </section>
  );
};

export default CartPage;
