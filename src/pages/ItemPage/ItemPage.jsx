import classes from './ItemPage.module.scss';
import { useParams } from 'react-router';
// import { useContext } from 'react';
// import { StoreContext } from '../../context/StoreContextProvider';
import { findStoreItem } from '../../services/store-services';
import { useQuery } from '../../hooks/useQuery';
const ItemPage = () => {
  // const { storeDB } = useContext(StoreContext);
  const { id } = useParams();
  const { data, error, fetch } = useQuery({
    fetchFn: findStoreItem,
    args: [id],
  });
  // console.log(storeDB);
  // const item = storeDB.data.find((value) => {
  //   return id === value.id;
  // });
  // console.log(item);
  // if (storeDB!== null)
  console.log(data);
  // console.log(error.message);
  return (
    <>
      <h1>Item</h1>
      {fetch === 'LOADING' && <p>loading...</p>}
      {fetch === 'FAILURE' && <p>{error.message}</p>}
      {fetch === 'SUCCESS' && data.flavour}
    </>
  );
};

export default ItemPage;
