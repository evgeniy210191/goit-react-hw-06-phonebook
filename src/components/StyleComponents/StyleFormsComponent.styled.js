import styled from 'styled-components';

export const LabelInputs = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  margin-bottom: 12px;
  input {
    border: 1px solid ${({ theme }) => theme.colors.someBorders};
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 0.8rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.colorTextCommon};
    &:focus {
      box-shadow: inset 0 0 10px 0 ${({ theme }) => theme.colors.someBorders};
    }
  }
`;

export const Form = styled.form`
  margin-bottom: 24px;
  font-size: 1.2rem;
`;
