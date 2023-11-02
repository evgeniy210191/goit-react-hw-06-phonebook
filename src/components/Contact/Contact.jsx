import PropTypes from 'prop-types';
import { AddContact } from 'components/StyleComponents/StyleButton.styled';
import { List } from './Contact.styled';

function Contact({ id, name, number, deleteContact }) {
  return (
    <List>
      <p>
        {name}: {number}
      </p>
      <AddContact type="button" onClick={() => deleteContact(id)}>
        delete
      </AddContact>
    </List>
  );
}

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
