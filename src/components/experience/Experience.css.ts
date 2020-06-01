import styled from 'styled-components';


export const Container = styled.div`
  min-height: 110vh;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: 100px;
`;

export const Title = styled.div`
  color: white;
`;
