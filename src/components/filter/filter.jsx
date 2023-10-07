import React from 'react';
import { Label, Input } from './filter.module';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

export const Filter = () => {
  const filters = useSelector(getFilter);

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(filters(e.target.value));
  };

  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filters}
          onChange={filterChange}
          disabled={contacts.length === 0}
        />
      </Label>
    </div>
  );
};
