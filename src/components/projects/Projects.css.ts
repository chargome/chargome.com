import styled from 'styled-components';

export const Container = styled('div')`
  padding-top: 100px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ProjectContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80%, 1fr));
  align-items: center;
  justify-items: center;
`;
