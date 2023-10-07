import { nanoid } from 'nanoid';

import { getContacts } from '../../redux/selectors';
import { Form, Label, Button, Input, Title } from './phoneBook.module';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
    .required(),
  number: yup
    .string()
    .min(5, 'Too short  phone number')
    .max(10, 'Too long phone number')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number format'
    )
    .required(),
});

export const PhoneBook = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const checkDublicate = name => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} is already in contacts`);

      return;
    }
  };

  const submitForm = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;

    checkDublicate(name.value);

    dispatch(addContact({ name: name.value, number: number.value }));

    toast.success(`${name} has succesfully added to your phonebook`);
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Form onSubmit={submitForm} validationSchema={schema}>
      <Title>Phonebook</Title>
      <Label htmlFor={nameId}>
        Name
        <Input
          type="text"
          name="name"
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
