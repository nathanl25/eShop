import classes from './ItemPage.module.scss';
import { useParams } from 'react-router';
const ItemPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>{id}</h1>
    </>
  );
};

export default ItemPage;
