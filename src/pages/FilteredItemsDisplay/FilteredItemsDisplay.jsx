import classes from './FilteredItemsDisplay.module.scss';
import { useParams } from 'react-router';

const FilteredItemsDisplay = () => {
  const { category } = useParams();
  return (
    <>
      <h1>{category}</h1>
    </>
  );
};

export default FilteredItemsDisplay;
