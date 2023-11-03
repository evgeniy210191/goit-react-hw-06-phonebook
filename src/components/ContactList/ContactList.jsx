import { Contacts } from './ContactList.styled';
import Contact from 'components/Contact/Contact';
import { deleteontact } from 'redux/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { slectContacts, slectFilter } from 'redux/selectors';

function ContactForm() {
  const contacts = useSelector(slectContacts);
  const filter = useSelector(slectFilter);
  const dispatch = useDispatch();
  const deleteContact = contactsId => {
    return dispatch(deleteontact(contactsId));
  };

  const filterContactsByName = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContactsByName();
  return (
    <Contacts>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </Contacts>
  );
}

export default ContactForm;
