import { nanoid } from 'nanoid';

import { Form, Label, Button, Input } from './phoneBook.module';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { getContacts } from '../../redux/selectors';

export const PhoneBook = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const checkDublicate = name => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} is already in contacts`);

      return;
    }
  };

  const SubmitForm = values => {
    const { name, number } = values;

    checkDublicate(name);

    dispatch(addContact(name, number));

    toast.success(`${name} has succesfully added to your phonebook`);
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Form onSubmit={SubmitForm}>
      <Label htmlFor={nameId}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // value={name}
          // onChange={ChangeForm}
          required
        />
      </Label>

      <Label htmlFor={numberId}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // value={number}
          // onChange={ChangeForm}
          required
        />
      </Label>

      <Button type="submit">Add contact </Button>
    </Form>
  );
};
