import styled from 'styled-components';
import { animated } from 'react-spring';
import { TypographyProps, typography } from 'styled-system';

import breakpoint from '../../styles/breakpoints';

export const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 120vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "image image"
    "text text";
  @media ${breakpoint.tablet} {
    min-height: 100vh;
    grid-template-areas:
      "image text"
      "image text";
  }
`;

export const TextContainer = styled(animated.div)`
  display: grid;
  grid-area: text;
  justify-self: center;
  align-self: center;
  color: ${({ theme }) => theme.colors.teaGreen};
  margin-left: 30px;
  margin-right: 30px;
  @media ${breakpoint.tablet} {
    justify-self: left;
    margin-left: 50px;
    margin-right: 50px;
  }
  @media ${breakpoint.desktop} {
    justify-self: left;
    margin-left: 50px;
    margin-right: 150px;
  }
`;

type AboutTextProps = TypographyProps;
export const AboutText = styled.div<AboutTextProps>`
  ${typography}
  color: ${({ theme }) => theme.colors.teaGreen};
`;

export const ImageContainer = styled(animated.div)`
  display: grid;
  grid-area: image;
  justify-self: center;
  align-self: center;
  border-radius: 4px;
  overflow: hidden;
  transition: 1000ms;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  width: 60%;
  filter: grayscale(1);
  @media ${breakpoint.tablet} {
    justify-self: right;
    width: 300px;
    margin-right: 50px;
  };
  @media ${breakpoint.laptop} {
    &:hover {
      filter: grayscale(0);
      box-shadow: ${({ theme }) => theme.shadows.strong};
    };
  };
`;
