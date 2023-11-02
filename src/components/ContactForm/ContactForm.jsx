import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  LabelInputs,
} from 'components/StyleComponents/StyleFormsComponent.styled';
import { AddContact } from 'components/StyleComponents/StyleButton.styled';

function ContactForm({ onSubmitContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onSubmitContact({ name, number });
    setName('');
    setNumber('');
  };

  const hendleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <LabelInputs>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={hendleChange}
          required
          placeholder="Enter your name"
        />
      </LabelInputs>
      <LabelInputs>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={hendleChange}
          required
          placeholder="Enter your number of telephone"
        />
      </LabelInputs>
      <AddContact type="submit">add contact</AddContact>
    </Form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmitContact: PropTypes.func.isRequired,
};
