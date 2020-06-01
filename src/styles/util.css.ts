import styled from 'styled-components';
import {
  TypographyProps,
  typography,
  MarginProps,
  margin,
} from 'styled-system';

type SectionHeadingProps = TypographyProps & MarginProps & { align: string };
export const SectionHeading = styled.div<SectionHeadingProps>`
  ${typography}
  ${margin}
  border-left: ${(props) => (props.align === 'left' ? `2px solid ${props.theme.colors.secondary}` : 'none')};
  border-right: ${(props) => (props.align === 'right' ? `2px solid ${props.theme.colors.secondary}` : 'none')};
  text-align: ${(props) => (props.align === 'left' ? 'left' : 'right')};
  padding-left: 15px;
  padding-right: 15px;
  color: ${({ theme }) => theme.colors.greyLight};
  margin-bottom: 20px;
`;

export const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  list-style: none;
  margin-top: 10px;
  padding-left: 10px;
`;

type TechListItemProps = { primary?: boolean };
export const TechListItem = styled('li')<TechListItemProps>`
  position: relative;
  color: ${({ theme, primary }) => (primary ? theme.colors.primary : theme.colors.secondary)};
  font-size: 14px;
  padding-left: 15px;
  &:before {
    content: '˃';
    position: absolute;
    left: 0;
    color: ${({ theme, primary }) => (primary ? theme.colors.primary : theme.colors.secondary)};
    line-height: 20px;
  }
`;
