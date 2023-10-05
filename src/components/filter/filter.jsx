import React from 'react';
import { Label, Input } from './filter.module';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  const filters = useSelector(getFilter);

  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(filters(e.target.value));
  };

  return (
    <div>
      <Label>
        Find contacts by name
        <Input type="text" value={filters} onChange={filterChange} />
      </Label>
    </div>
  );
};
