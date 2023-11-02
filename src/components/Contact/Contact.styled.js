import styled from 'styled-components';
export const List = styled.li`
  display: flex;
  align-items: center;
  list-style-type: inherit;
  column-gap: 30px;
  padding: 4px;
  &:before {
    content: '♕';
    margin-right: -20px;
  }
  p {
    margin: 0;
  }
`;
