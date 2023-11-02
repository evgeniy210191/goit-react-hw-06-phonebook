import {
  Form,
  LabelInputs,
} from 'components/StyleComponents/StyleFormsComponent.styled';
import PropTypes from 'prop-types';

function Filter({ id, hendleChange, value }) {
  return (
    <Form>
      <LabelInputs>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          id={id}
          onChange={hendleChange}
          required
          placeholder="Search"
        />
      </LabelInputs>
    </Form>
  );
}

export default Filter;

Filter.propTypes = {
  hendleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
