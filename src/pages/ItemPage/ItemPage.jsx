import classes from './ItemPage.module.scss';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContextProvider';
const ItemPage = () => {
  const { storeDB } = useContext(StoreContext);
  const { id } = useParams();
  console.log(storeDB);
  // const item = store.find((value) => {
  //   return id === value.id;
  // });
  // console.log(item);
  return (
    <>
      <h1>{id}</h1>
    </>
  );
};

export default ItemPage;
