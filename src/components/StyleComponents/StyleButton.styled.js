import styled from 'styled-components';
export const AddContact = styled.button`
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.bgButton};
  cursor: pointer;
  padding: 3px 10px;
  &:active {
    transform: scale(0.9);
    box-shadow: inset 0 0 10px 0 ${({ theme }) => theme.colors.someBorders};
  }
`;
