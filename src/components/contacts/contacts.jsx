import React from 'react';
import { List, Listitem, Listbutton } from './contacts.module';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

export const Contacts = () => {
  const contacts = useSelector(getContacts);

  const filters = useSelector(getFilter);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  };
  const VisibleContacts = getVisibleContacts();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <List>
      {VisibleContacts.map(contact => (
        <Listitem key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <Listbutton
              type="button"
              name="delete"
              onClick={() => handleDelete(contact.id)}
            >
              delete
            </Listbutton>
          }
        </Listitem>
      ))}
    </List>
  );
};
