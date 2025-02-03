import classes from './Header.module.scss';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
import { NavLink } from 'react-router';
const Header = () => {
  const linkStyles = ({ isActive }) => {
    return isActive ? `${classes.link} ${classes.link_active}` : classes.link;
  };

  const { cartDB, cartStatus } = useContext(StoreContext);

  return (
    <nav>
      <div className={classes.container}>
        <div className={classes.wrapper}> </div>
        <div className={classes.wrapper}>
          <NavLink className={classes.link} to="/">
            <h1 className={classes.heading}>Poopity Scoopity</h1>
          </NavLink>
        </div>
        <div className={classes.wrapper}>
          <NavLink className={linkStyles} to="/cart">
            <h1 className={classes.cart}>
              Cart ({cartStatus === 'SUCCESS' && cartDB.length})
            </h1>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
