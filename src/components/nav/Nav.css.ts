import styled from 'styled-components';
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { animated } from 'react-spring';

type IconContainerProps = LayoutProps & { isOpen: boolean };
export const IconContainer = styled.div<IconContainerProps>`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 11;
  font-size: 30px;
  color: ${(props) => (props.isOpen ? props.theme.colors.primary : props.theme.colors.teaGreen)};
  transition: 700ms;
  &:hover {
    cursor: pointer;
  }
  ${layout}
`;

type MenuContainerProps = SpaceProps;
export const MenuContainer = styled(animated.div)<MenuContainerProps>`
  position: fixed;
  top: 0px;
  right: 0px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.greyLight};
  z-index: 10;
  ${space}
`;

type MenuListProps = TypographyProps;
export const MenuList = styled.ul<MenuListProps>`
  list-style-type: none;
  ${typography}
`;

type MenuListItemProps = SpaceProps;
export const MenuListItem = styled(animated.li)<MenuListItemProps>`
  ${space}
`;

export const MenuAnchor = styled.a`
  text-decoration: none;
  padding: 5px;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transition: 700ms;
  color: ${(props) => props.theme.colors.tealBlue};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.tealBlue};
    border-top: 2px solid ${(props) => props.theme.colors.tealBlue};
    border-bottom: 2px solid ${(props) => props.theme.colors.tealBlue};
  }
`;
