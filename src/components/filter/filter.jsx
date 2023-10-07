import React from 'react';
import { Label, Input, Box, Title } from './filter.module';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filtersSlice';

export const Filter = () => {
  const filters = useSelector(getFilter);

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const filterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box>
      <Title>Contacts</Title>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filters}
          onChange={filterChange}
          disabled={contacts.length === 0}
        />
      </Label>
    </Box>
  );
};
