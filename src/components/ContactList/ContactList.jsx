import PropTypes from 'prop-types';
import { Contacts } from './ContactList.styled';
import Contact from 'components/Contact/Contact';

function ContactForm({ contacts, deleteContact }) {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
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

ContactForm.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
