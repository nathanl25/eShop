import classes from './CartItem.module.scss';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
import { Link } from 'react-router';
const CartItem = ({ cartItem, variant }) => {
  const { storeDB } = useContext(StoreContext);
  const storeItem = storeDB.find((item) => {
    return item.id === cartItem.store_id;
  });
  console.log(storeItem);
  return (
    <>
      <Link to={`/items/${storeItem.id}`}>
        <h1>{cartItem.id}</h1>
      </Link>
      <h1>{cartItem.store_id}</h1>
      <h2>{cartItem.quantity}</h2>
      <h2>{cartItem.size}</h2>
      <h4>{storeItem.description}</h4>
    </>
  );
};

export default CartItem;
