import classes from './Header.module.scss';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
const Header = () => {
  const { cartDB } = useContext(StoreContext);
  console.log(cartDB);
  return (
    <>
      <div>
        <h1>Header</h1>
      </div>
    </>
  );
};

export default Header;
