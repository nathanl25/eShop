import classes from './FilteredItemsDisplay.module.scss';
import { useParams } from 'react-router';
import {
  filterStoreCategory,
  getStoreItems,
} from '../../services/store-services';
import CardContainer from '../../containers/CardContainer/CardContainer';
import { useQuery } from '../../hooks/useQuery';
const FilteredItemsDisplay = () => {
  const { category } = useParams();
  const { data, error, fetch } = useQuery(
    category === 'all'
      ? {
          fetchFn: getStoreItems,
        }
      : {
          fetchFn: filterStoreCategory,
          args: [category],
        }
  );
  return (
    <section className={classes.wrapper}>
      {category === 'all' && <h1 className={classes.heading}>All products</h1>}
      {category !== 'all' && (
        <h1 className={classes.heading}>Category: {category}</h1>
      )}
      <section className={classes.layout}>
        {fetch === 'SUCCESS' &&
          data.map((item) => <CardContainer key={item.id} storeItem={item} />)}
        {fetch === 'LOADING' && <h4>Loading items...</h4>}
      </section>
    </section>
  );
};

export default FilteredItemsDisplay;
