import classes from './FilteredItemsDisplay.module.scss';
import { useParams } from 'react-router';
import { filterStoreCategory } from '../../services/store-services';
import { useQuery } from '../../hooks/useQuery';
const FilteredItemsDisplay = () => {
  const { category } = useParams();
  const { data, error, fetch } = useQuery({
    fetchFn: filterStoreCategory,
    args: [category],
  });
  console.log(data);
  console.log(fetch);
  return (
    <>
      <h1>{category}</h1>
      {fetch === 'SUCCESS' && (
        <ol>
          {data.map((value) => (
            <li key={value.id}>{value.flavour}</li>
          ))}
        </ol>
      )}
      {fetch === 'LOADING' && <h4>Loading items...</h4>}
    </>
  );
};

export default FilteredItemsDisplay;
