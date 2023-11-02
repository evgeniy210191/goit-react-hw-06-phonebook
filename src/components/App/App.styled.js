import styled from 'styled-components';
export const Container = styled.div`
  background: ${({ theme }) => theme.colors.bgCommon};
  width: 50%;
  border-radius: 10px;
  margin: auto;
  text-align: center;
  padding: 12px 16px;
  margin-top: 20px;
  h1,
  h2 {
    color: ${({ theme }) => theme.colors.colorTextCommon};
    margin-bottom: 8px;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.8rem;
  }
`;
