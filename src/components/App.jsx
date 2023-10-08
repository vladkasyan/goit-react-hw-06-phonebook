import React from 'react';

import { Body, Placeholder } from './App.module';

import { PhoneBook } from './phoneBook/phoneBook';
import { Contacts } from './contacts/contacts';
import { Filter } from './filter/filter';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

export const App = () => {
  // const savedcontacts = JSON.parse(localStorage.getItem('contacts'));

  const contacts = useSelector(getContacts);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));

  //   console.log('contacts', contacts);
  // }, [contacts]);

  return (
    <Body>
      <PhoneBook />

      {!!contacts.length ? (
        <Filter />
      ) : (
        <Placeholder>Your phonebook is empty. Add first contact!</Placeholder>
      )}
      {!!contacts.length && <Contacts />}
    </Body>
  );
};
