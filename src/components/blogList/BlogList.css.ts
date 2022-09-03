import styled from 'styled-components';

export const List = styled('ul')`
  list-style: none;
`;

export const ListItem = styled('li')`
  margin: 0px;
  transition: 300ms;
  background-color: ${(props) => props.theme.colors.secondary};
  &:hover {
    margin-bottom: 10px;
    cursor: pointer;
    margin-left: -10px;
    margin-top: -10px;
  }
`;
