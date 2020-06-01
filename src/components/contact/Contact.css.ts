import styled from 'styled-components';

export const Container = styled('div')`
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.teaGreen};
`;

export const Greeting = styled('h2')`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ContactButton = styled('a')`
  margin-top: 50px;
  display: grid;
  width: 100px;
  justify-content: center;
  justify-self: center;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.greyLight};
  background-color: ${({ theme }) => theme.colors.tealBlue};
  color: ${({ theme }) => theme.colors.greyLight};
  box-shadow: ${({ theme }) => theme.shadows.strong};
  padding: 10px;
  transition: 700ms;
  &:hover {
    # border: 2px solid ${({ theme }) => theme.colors.greyLight};
    # color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const IconContainer = styled('div')`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;

export const Icon = styled('a')`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  transition: 200ms;
  display: grid;
  justify-self: center;
  &:hover {
    cursor: pointer;
    margin-top: -5px;
    color: ${({ theme }) => theme.colors.tealBlue};
  }
`;
