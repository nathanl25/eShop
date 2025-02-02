import classes from './CartPage.module.scss';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
import CartItem from '../../components/CartItem/CartItem';
const CartPage = () => {
  const { cartDB, cartStatus } = useContext(StoreContext);
  return (
    <>
      {cartStatus === 'LOADING' && <h1>loading...</h1>}
      {cartStatus === 'SUCCESS' &&
        cartDB.map((item) => (
          <CartItem key={item.id} variant={'large'} cartItem={item} />
        ))}
    </>
  );
};

export default CartPage;
