import React, { useEffect } from 'react';

import { PhoneBook } from './phoneBook/phoneBook';
import { Contacts } from './contacts/contacts';
import { Filter } from './filter/filter';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

export const App = () => {
  // const savedcontacts = JSON.parse(localStorage.getItem('contacts'));

  const contacts = useSelector(getContacts);
  console.log(contacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));

    console.log('contacts', contacts);
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>

      <PhoneBook />

      <h2>Contacts</h2>
      {!!contacts.length ? (
        <Filter />
      ) : (
        <div>Your phonebook is empty. Add first contact!</div>
      )}
      {!!contacts.length && <Contacts />}
    </div>
  );
};
