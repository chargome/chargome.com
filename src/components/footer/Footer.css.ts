import styled from 'styled-components';


export const Container = styled('div')`
  background-color: ${({ theme }) => theme.colors.teaGreen};
  display: grid;
  align-items: center;
`;

export const ContactArea = styled('div')`
  margin: auto;
  padding: 10px;
  font-size 10px;
`;
