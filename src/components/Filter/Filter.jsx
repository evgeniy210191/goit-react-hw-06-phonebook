import {
  Form,
  LabelInputs,
} from 'components/StyleComponents/StyleFormsComponent.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filtered } from 'redux/reducer';
import { slectFilter } from 'redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(slectFilter);
  const hendleChange = event => {
    dispatch(filtered(event.target.value));
  };
  return (
    <Form>
      <LabelInputs>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={hendleChange}
          required
          placeholder="Search"
        />
      </LabelInputs>
    </Form>
  );
}

export default Filter;
