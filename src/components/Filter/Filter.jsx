import { nanoid } from 'nanoid';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { addFilter } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFinding = e => {
    const inputValue = e.target.value;
    const lowerValue = inputValue.toLowerCase();
    dispatch(addFilter(lowerValue));
  };

  const filterInputId = nanoid();
  return (
    <>
      <div className={css.filter}>
        <label htmlFor={filterInputId}>Find contacts by name</label>
        <TextField
          id={filterInputId}
          type="text"
          name="filter"
          value={filter}
          size="small"
          title="Find contact by name"
          onChange={handleFinding}
        />
      </div>
    </>
  );
};

export default Filter;
